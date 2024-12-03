import "./Glereka_My.scss";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export function GlerekaMyPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/glereka/user', { withCredentials: true })
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('사용자 정보를 가져오는 데 실패했습니다.');
        navigate('/Portfolio/glereka');
      });
  }, []);

  return (
    <div id="GlerekaMyPage">
      <h1>마이 페이지</h1>
      {username ? (
        <p>안녕하세요, {username}님!</p>
      ) : (
        <p>로그인이 필요합니다.</p>
      )}
    </div>
  );
}
