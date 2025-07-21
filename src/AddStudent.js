import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
    const [newStudent, setNewStudent] = useState({ name: '', class: '', gpa: 0 });
    const navigate = useNavigate();

    function handleChange(e) {
        setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
    }

    function handleSubmit() {
        axios.post("http://localhost:9999/students", newStudent).then(() => {
            alert("Thêm học sinh thành công!");
            navigate("/students");
        });
    }

    return (
        <div>
            <h2>Thêm học sinh mới</h2>
            <input type="text" name="name" placeholder="Tên" value={newStudent.name} onChange={handleChange} /><br/>
            <input type="text" name="class" placeholder="Lớp" value={newStudent.class} onChange={handleChange} /><br/>
            <input type="number" name="gpa" placeholder="GPA" value={newStudent.gpa} onChange={handleChange} /><br/>
            <button onClick={handleSubmit}>Lưu</button>
        </div>
    );
}
