import { useState } from "react";

function Input() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 이메일 정규표현식 검증
    setEmailValid(emailRegex.test(e.target.value));
  };

  return (
    <div>
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="이메일을 입력하세요"
        />
      </div>
      {!emailValid && email && <div>올바른 이메일 형식이 아닙니다.</div>}

      {/* 초기화 */}
      <button onClick={() => setEmail("")}>초기화</button>

      {/* 입력값 출력 */}
      <div>{email}</div>

      {/* 글자 수 출력 */}
      <p>글자 수: {email.length}</p>
    </div>
  );
}

export default Input;
