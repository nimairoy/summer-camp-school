import { useEffect, useState } from "react";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);
    instructors.sort((a, b)=> b.students - a.students);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data));
    }, [])
    return (
        <div className="py-12">
            <h2 className="text-4xl text-center mt-5 mb-5">Popular Instructors</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    instructors.slice(0, 6).map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;