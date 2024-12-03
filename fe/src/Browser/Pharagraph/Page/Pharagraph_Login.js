import "./Pharagraph_Login.scss";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../ContextApi/AuthContext';

export function PharagraphLoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/Pharagraph/login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('로그인에 성공했습니다.');
        setIsLoggedIn(true);
        navigate('/Portfolio/Pharagraph', { replace: true });
      } else {
        const errorData = await response.text();
        alert(errorData || '로그인에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('서버 연결에 실패했습니다.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="PharagraphLoginPage">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="username"
          placeholder="아이디"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input 
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
