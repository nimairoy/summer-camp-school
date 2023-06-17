
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_KEY;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const {user} = useAuth();
    console.log(user)
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    const { name, price, seats, image, instructor_name, email, description, enrolled } = data;
                    const newItem = { name, price: parseFloat(price), seats: parseInt(seats), enrolled:parseInt(enrolled), status: 'pending', image, instructor_name, email, description }
                    newItem.image = imgURL
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New item inserted Successfull',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };

    return (
        <div className='w-4/5 pb-24'>
            <h2 className="text-4xl text-center my-8">Add a New Class</h2>
            <div className="bg-gray-100 p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Class Name" className="input rounded-none  w-full" />
                        {errors.name?.type === 'required' && <p className='text-red-400' role="alert">Class name is required</p>}
                    </div>

                    <div className="grid grid-cols-2 mt-6 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Instructor Name</span>
                            </label>
                            <input {...register("instructor_name", { required: true })} readOnly defaultValue={user?.displayName} className='py-3 px-2 w-full max-w-xs' />                           
                        </div>

                        <div className="form-control w-full ">
                            <label className="label ml-5">
                                <span className="label-text font-semibold">Instructor Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} readOnly defaultValue={user?.email} placeholder="Email" className="input ml-auto rounded-none w-full max-w-xs" />                       
                        </div>

                        <div className="form-control w-full ">
                            <label className="label ml-5">
                                <span className="label-text font-semibold">Students</span>
                            </label>
                            <input type="text" {...register("enrolled", { required: true })} placeholder="Students Number" className="input ml-auto rounded-none w-full max-w-xs" />
                            {errors.enrolled?.type === 'required' && <p className='text-red-400' role="alert">Students is required</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label ml-5">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} placeholder="Price" className="input ml-auto rounded-none w-full max-w-xs" />
                            {errors.price?.type === 'required' && <p className='text-red-400' role="alert">Price is required</p>}
                        </div>

                        <div className="form-control w-full ">
                            <label className="label ml-5">
                                <span className="label-text font-semibold">Seats*</span>
                            </label>
                            <input type="text" {...register("seats", { required: true })} placeholder="Seats" className="input ml-auto rounded-none w-full max-w-xs" />
                            {errors.seats?.type === 'required' && <p className='text-red-400' role="alert">Seats is required</p>}
                        </div>
                        
                    </div>

                    <div className="form-control mt-6 w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Detail*</span>
                        </label>
                        <textarea {...register("description", { required: true })} className="textarea w-full rounded-none" rows='5' placeholder="Class Detail"></textarea>
                        {errors.description?.type === 'required' && <p className='text-red-400' role="alert">Class Details is required</p>}
                    </div>
                    <div className="form-control mt-6 w-full ">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                        {errors.image?.type === 'required' && <p className='text-red-400' role="alert">Class Picture is required</p>}
                    </div>
                    <input className='mt-6 btn btn-warning' type="submit" value='Add New Class' />
                </form>
            </div>
        </div>
    );
};

export default AddClass;