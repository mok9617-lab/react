import StudentCard from "./StudentCard";
import "./StudentList.css";

const students = [
  { id: 1, name: "김철수", score: 85 },
  { id: 2, name: "이영희", score: 92 },
  { id: 3, name: "박민수", score: 78 },
  { id: 4, name: "정수진", score: 95 },
];

function StudentList() {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          score={student.score}
        />
      ))}
    </div>
  );
}

export default StudentList;
