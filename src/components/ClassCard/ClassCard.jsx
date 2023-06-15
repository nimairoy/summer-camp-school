
const ClassCard = ({ clss }) => {
    const { image, name, enrolled, price, seats, description, instructor_name, _id } = clss;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center">
                <div className="flex justify-between w-full items-center mb-4"><h2 className="card-title">{name}</h2> <span>Students: {enrolled}</span></div>
                <p>{description}</p>
                <p className="flex justify-between w-full text-xl"><span> <strong>Instructor:</strong> {instructor_name}</span> <span>${price}</span></p>                
                <div className="card-actions mt-4">
                    <button className="btn btn-primary">view details</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;