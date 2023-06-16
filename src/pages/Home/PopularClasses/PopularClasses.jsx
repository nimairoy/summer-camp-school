import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard/ClassCard";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    classes.sort((a, b)=> b.enrolled - a.enrolled);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])
    return (
        <div className="py-12">
            <h2 className="text-4xl text-center mt-5 mb-5">Popular Classes</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    classes.slice(0, 6).map(clss => <ClassCard key={clss._id} clss={clss}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;