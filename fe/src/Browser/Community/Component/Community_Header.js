import './Community_Header.scss'
import { Link } from "react-router-dom";


export function CommunityHeader() {
  return (
    <header>
      <Link to="/Portfolio/community/">로고</Link>
      <Link to="/Portfolio/community/board">게시판</Link>
      <Link to="/Portfolio/community/login">로그인</Link>
      <Link to="/Portfolio/community/signup">회원가입</Link>
      <Link to="/Portfolio/community/profile">프로필</Link>
      <button>메뉴</button>
    </header>
  );
}
