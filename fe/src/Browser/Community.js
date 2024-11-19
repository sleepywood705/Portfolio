import "./Community.scss";
import { Window } from "../Interface/Window";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Community({ 창닫기 }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/Portfolio/");
    창닫기();
  };

  return (
    <Window id="Community" tabText="게시판 연습" 닫기={handleClose}>
      <div className="Container">
        <CommunityHeader />
        <Routes>
          <Route path="/" element={<div>메인 페이지</div>} />
          <Route path="/list" element={<CommunityListPage />} />
          <Route path="/write" element={<CommunityWritePage />} />
          <Route path="/edit" element={<div>글 편집 페이지</div>} />
        </Routes>
      </div>
    </Window>
  );
}

export function CommunityWritePage() {
  return (
    <section id="CommunityWritePage">
      <form>
        <input />
        <input />
        <button type="submit">전송</button>
      </form>
    </section>
  )
}


export function CommunityListPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/Portfolio/community/list")
      .then((response) => setList(response.data))
      .catch((error) => console.error("Error:", error));
  }, []); 
  
  return (
    <section id="CommunityListPage">
      {list && list.map((item, index) => (
        <Card 
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
    </section>
  )
}

export function Card({ title, content }) {
  return (
    <div className="Card">
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
}

export function CommunityHeader() {
  return (
    <header>
      <Link to="">로고</Link>
      <Link to="list">글목록</Link>
      <Link to="write">글작성</Link>
      <Link to="edit">글편집</Link>
    </header>
  );
}
