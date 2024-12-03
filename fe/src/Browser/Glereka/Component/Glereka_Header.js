import './Glereka_Header.scss'
import { Link } from "react-router-dom";


export function GlerekaHeader() {
  return (
    <header>
      <Link to="/Portfolio/glereka/">Pharagraph</Link>
      <Link to="/Portfolio/glereka/posting">작성</Link>
      <Link to="/Portfolio/glereka/list">리스트</Link>
      <Link to="/Portfolio/glereka/login">로그인</Link>
      <Link to="/Portfolio/glereka/signup">회원가입</Link>
      <Link to="/Portfolio/glereka/my">마이페이지</Link>
      <button>메뉴</button>
    </header>
  );
}
