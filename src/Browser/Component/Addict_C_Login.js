import "./Addict_C_Login.css";
import { useState } from "react";

export function AddictLoginDialog({ onLoginSuccess }) {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도:', userID, userPW);
    if (userID === 'user' && userPW === '1') {
      console.log('로그인 성공');
      onLoginSuccess();
      document.getElementById('AddictLoginDialog').close();
    } else {
      console.log('로그인 실패');
      alert('로그인 실패');
    }
  }

  return (
    <dialog id="AddictLoginDialog">
      <form onSubmit={handleSubmit}>
        <h2>로그인</h2>
        <p>초기 아이디는 user, 비밀번호는 1입니다</p>
        <input 
          type="text" 
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          placeholder="아이디"
          required
        />
        <input 
          type="password" 
          value={userPW}
          onChange={(e) => setUserPW(e.target.value)}
          placeholder="비밀번호"
          required
        />
        <button type="submit">로그인</button>
      </form>
    </dialog>
  );
}
