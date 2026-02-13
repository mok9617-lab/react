function StudentCard({ name, score }) {
  return (
    <div className="student-card">
      <p>이름 : {name}</p>
      <p>
        점수 : {score}
        {score >= 90 && <span className="badge"> 🏆 우수</span>}
      </p>
    </div>
  );
}

export default StudentCard;
