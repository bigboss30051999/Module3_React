import {useState} from "react";
export default function ListStudent() {
    let [students, setStudents] = useState([
        {classSt: "12A2",name: "Huỳnh Vĩnh Xuyên", age: 18, score: 9},
        {classSt: "12A2",name: "Phạm Quang Vinh", age: 18, score: 10},
        {classSt: "12A2",name: "Lê Thị Kỳ Duyên", age: 18, score: 8},
        {classSt: "12A2",name: "Lê Dạ Trúc Phương", age: 18, score: 9.5},
        {classSt: "11A2",name: "Nguyễn Văn An", age: 17, score: 5},
        {classSt: "11A2",name: "Phạm Minh Chi", age: 17, score: 7.5},
        {classSt: "11A2",name: "Phạm Minh Triết", age: 17, score: 5.5},
        {classSt: "10D2",name: "Trương Trung Hào", age: 16, score: 6.5},
        {classSt: "10D2",name: "Lê Nguyễn Thành Danh", age: 16, score: 8.5},
    ]);
    let [name, setName] = useState('');
    let [classSt, setClassSt] = useState('');
    let [age, setAge] = useState(0);
    let [score, setScore] = useState(0);

    function addList() {
        setStudents([...students, {classSt,name,age,score}]);
        setName('');
        setAge(0)
        setClassSt('')
        setScore(0)
    }

    return (
        <>
            {students.map((student)=>(
                <h3>
                    Lớp:{student.classSt},{student.name},Tuổi:{student.age},Điểm:{student.score}
                </h3>
            ))}
            <input type="text" value={classSt} onChange={e => setClassSt(e.target.value)}/>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" value={age} onChange={e => setAge(+e.target.value)}/>
            <input type="text" value={score} onChange={e => setScore(+e.target.value)}/>
            <button onClick={addList}>Thêm Học Sinh</button>
        </>
    )
}


