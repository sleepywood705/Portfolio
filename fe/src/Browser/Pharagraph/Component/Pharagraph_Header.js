import './Pharagraph_Header.scss'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from '../ContextApi/AuthContext';

export function PharagraphHeader() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch('http://localhost:8080/Pharagraph/check-auth', {
        credentials: 'include'
      });
      setIsLoggedIn(response.ok);
    } catch (error) {
      console.error('회원 정보 없음: ', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/Pharagraph/logout', {
        method: 'POST',
        credentials: 'include'
      });
      if (response.ok) {
        setIsLoggedIn(false);
        alert('로그아웃되었습니다.');
      }
    } catch (error) {
      console.error('로그아웃 실패:', error);
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
      <Link to="/Portfolio/Pharagraph/my">마이페이지</Link>
      <button>메뉴</button>
    </header>
  );
}
