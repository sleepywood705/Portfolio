import "./Glereka_Posting.scss";
import { useState, useEffect } from 'react';
import axios from 'axios';

export function GlerekaPostingPage() {
  const [showBookModal, setShowBookModal] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowBookModal(false);
        setShowMusicModal(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <article id="GlerekaPostingPage">
      <h1 className="title">오늘 어떤 글귀를 발견하셨나요?</h1>
      {showBookModal && <ModalSearchBook onClose={() => setShowBookModal(false)} />}
      {showMusicModal && <ModalSearchMusic onClose={() => setShowMusicModal(false)} />}
      <form>
        <input
          type="text"
          name="bookTitle"
          placeholder="책의 제목을 알려주세요."
          onClick={() => setShowBookModal(true)}
        />
        <textarea name="content" placeholder="글귀를 작성해 주세요." />
        <input
          type="text"
          name="page"
          placeholder="글귀는 몇 페이지에 있었나요?"
        />
        <input
          type="text"
          name="music"
          placeholder="책을 읽으며 어떤 음악을 감상하셨나요?"
          onClick={() => setShowMusicModal(true)}
        />
        <div className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </article>
  );
}

export function ModalSearchBook({ onClose }) {
  return (
    <div id="ModalSearchBook">
      <button onClick={onClose}></button>
      <form>
        <select>
          <option>책제목</option>
          <option>작가명</option>
        </select>
        <input type="text" placeholder="책 제목이나 작가명을 입력해 주세요."/>
        <button type="submit">검색</button>
      </form>
      <ul className="result">
        <li></li>
      </ul>
    </div>
  );
}

export function ModalSearchMusic({ onClose }) {
  return (
    <div id="ModalSearchMusic">
      <button onClick={onClose}></button>
      <form>
        <select>
          <option>곡명</option>
          <option>가수명</option>
        </select>
        <input type="text" placeholder="곡명이나 가수명을 입력해 주세요."/>
        <button type="submit">검색</button>
      </form>
      <ul className="result">
        <li></li>
      </ul>
    </div>
  );
}