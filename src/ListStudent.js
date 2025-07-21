import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ListStudent() {
    const [students, setStudents] = useState([]);
    const [classes, setClasses] = useState([]);
    const [classSelected, setClassSelected] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        loadStudents();
    }, []);

    function loadStudents() {
        axios.get("http://localhost:9999/students").then(response => {
            const list = response.data;
            const listClass = [...new Set(list.map(s => s.class))];
            setClasses(listClass);
            setStudents(list);
        });
    }

    function filterStudent() {
        if (classSelected === null) return students;
        return students.filter(student => student.class === classSelected);
    }

    function deleteStudent(id) {
        if (window.confirm("Bạn có chắc muốn xoá học sinh này không?")) {
            axios.delete("http://localhost:9999/students/" + id).then(() => {
                loadStudents();
            });
        }
    }

    return (
        <div className="container-student" style={{ padding: 20 }}>
            <h1>Danh sách học sinh</h1>

            <button onClick={() => navigate("/add-student")}>Tạo mới</button>

            <div style={{ marginTop: 10 }}>
                {classes.map(cls => (
                    <button key={cls} onClick={() => setClassSelected(cls)} style={{ margin: 5 }}>
                        {cls}
                    </button>
                ))}
                <button onClick={() => setClassSelected(null)} style={{ margin: 5 }}>
                    Tất cả
                </button>
            </div>

            <ul style={{ marginTop: 20 }}>
                {filterStudent().map(student => (
                    <li key={student.id}>
                        {student.name} - {student.class} - GPA: {student.gpa}
                        <button
                            onClick={() => deleteStudent(student.id)}
                        >Xoá</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}