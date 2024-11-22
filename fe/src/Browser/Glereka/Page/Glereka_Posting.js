import "./Glereka_Posting.scss";

export function GlerekaPostingPage() {
  return (
    <article id="GlerekaPostingPage">
      <h1 className="title">오늘 어떤 글귀를 발견하셨나요?</h1>
      <form action="/glereka/posting" method="POST">
        <input 
          type="text" 
          name="book" 
          placeholder="책의 제목을 알려주세요." 
        />
        <textarea 
          name="content" 
          placeholder="글귀를 작성해 주세요." 
        />
        <input
          type="text"
          name="page"
          placeholder="글귀는 몇 페이지에 있었나요?"
        />
        <input
          type="text"
          name="music"
          placeholder="책을 읽으며 어떤 음악을 감상하셨나요?"
        />
        <div className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </article>
  );
}
