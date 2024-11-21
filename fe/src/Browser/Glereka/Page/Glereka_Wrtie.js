import "./Glereka_Write.scss";
import { useRef, useEffect } from 'react';

export function GlerekaWritePage() {
  return (
    <article id="GlerekaWritePage">
      <h1 className="title">오늘 어떤 글귀를 발견하셨나요?</h1>
      <form>
        <input type="text" placeholder="책의 제목을 알려주세요"/>
        <input type="text" placeholder="작가의 이름을 알려주세요"/>
        <textarea placeholder="어떤 글귀였나요"/>
        <input type="text" placeholder="글귀는 몇 페이지에 있었나요"/>
        <input type="text" placeholder="책을 읽으며 어떤 음악을 감상하셨나요"/>
        <div className="wrap_button">
          <button type="reset">취소</button>
          <button type="sumbit">작성하기</button>
        </div>
      </form>
    </article>
  );
}


export function ModalBookSearch() {
  return (
    <dialog>
      
    </dialog>
  )
}