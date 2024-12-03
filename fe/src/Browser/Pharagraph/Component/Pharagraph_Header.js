import './Pharagraph_Header.scss'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from '../ContextApi/AuthContext';
import axios from 'axios';

export function PharagraphHeader() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/Pharagraph/verify',
        { withCredentials: true }
      );
      setIsLoggedIn(true);
    } catch (error) {
      console.error('회원 정보 없음: ', error);
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/Pharagraph/logout',
        {},  // POST 요청이지만 데이터는 없음
        { withCredentials: true }
      );
      setIsLoggedIn(false);
    } catch (error) {
      console.error('로그아웃 실패:', error);
      if (error.response) {
        alert(error.response.data || '로그아웃에 실패했습니다.');
      } else {
        alert('서버 연결에 실패했습니다.');
      }
    }
  };

  return (
    <header>
      <Link to="/Portfolio/Pharagraph/">Pharagraph</Link>
      <Link to="/Portfolio/Pharagraph/posting">작성</Link>
      <Link to="/Portfolio/Pharagraph/list">리스트</Link>
      {!isLoggedIn && <Link to="/Portfolio/Pharagraph/login">로그인</Link>}
      {isLoggedIn && <button onClick={handleLogout}>로그아웃</button>}
      {!isLoggedIn && <Link to="/Portfolio/Pharagraph/signup">회원가입</Link>}
      {isLoggedIn && <Link to="/Portfolio/Pharagraph/my">마이페이지</Link>}
      <button>메뉴</button>
    </header>
  );
}
