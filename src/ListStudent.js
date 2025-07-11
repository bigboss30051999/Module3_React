import {useState} from "react";
export default function ListStudent() {
    let [students, setStudents] = useState([
        {class: "12A2",name: "Huỳnh Vĩnh Xuyên", age: 18, score: 9},
        {class: "12A2",name: "Phạm Quang Vinh", age: 18, score: 10},
        {class: "12A2",name: "Lê Thị Kỳ Duyên", age: 18, score: 8},
        {class: "12A2",name: "Lê Dạ Trúc Phương", age: 18, score: 9.5},
        {class: "11A2",name: "Nguyễn Văn An", age: 17, score: 5},
        {class: "11A2",name: "Phạm Minh Chi", age: 17, score: 7.5},
        {class: "11A2",name: "Phạm Minh Triết", age: 17, score: 5.5},
        {class: "10D2",name: "Trương Trung Hào", age: 16, score: 6.5},
        {class: "10D2",name: "Lê Nguyễn Thành Danh", age: 16, score: 8.5},
    ]);
    let [nameSt, setNameSt] = useState('');
    let [classSt, setClassSt] = useState('');
    let [ageSt, setAgeSt] = useState(0);
    let [score, setScore] = useState(0);

    function addList() {
        setStudents([...students, {classSt,nameSt, ageSt, score}]);
        setNameSt('');
        setAgeSt(0)
        setClassSt('')
        setScore(0)
    }

    return (
        <>
            {students.map((student)=>(
                <h3>
                    Lớp:{student.class},{student.name},Tuổi:{student.age},Điểm:{student.score}
                </h3>
            ))}
            <input type="text" value={classSt} onChange={e => setClassSt(e.target.value)}/>
            <input type="text" value={nameSt} onChange={e => setNameSt(e.target.value)}/>
            <input type="text" value={ageSt} onChange={e => setAgeSt(+e.target.value)}/>
            <input type="text" value={score} onChange={e => setScore(+e.target.value)}/>
            <button onClick={addList}>Thêm Học Sinh</button>
        </>
    )
}


