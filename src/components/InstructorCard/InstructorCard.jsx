
const InstructorCard = ({instructor}) => {
    const {image, students, name,role, classes_number} = instructor;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{role}</p>
                <p className="flex justify-between w-full text-xl"><span>Classes: {classes_number}</span> <span>Students: {students}</span></p>
                <div className="card-actions mt-4">
                    <button className="btn btn-primary">See all</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;