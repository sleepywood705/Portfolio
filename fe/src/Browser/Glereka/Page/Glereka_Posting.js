import "./Glereka_Posting.scss";
import { useState } from 'react';


export function GlerekaPostingPage() {
  const [formData, setFormData] = useState({ book: "", content: "", page: "", music: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/glereka/posting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('게시글이 성공적으로 작성되었습니다.');
        setFormData({ book: "", content: "", page: "", music: "" });
      }
    } catch (error) {
      console.error('Error:', error);
      alert('게시글 작성에 실패했습니다.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="GlerekaPostingPage">
      <h1 className="title">오늘 어떤 글귀를 발견하셨나요?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="book"
          placeholder="책의 제목을 알려주세요."
          value={formData.book}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="글귀를 작성해 주세요."
          value={formData.content}
          onChange={handleChange}
        />
        <input
          type="text"
          name="page"
          placeholder="글귀는 몇 페이지에 있었나요?"
          value={formData.page}
          onChange={handleChange}
        />
        <input
          type="text"
          name="music"
          placeholder="책을 읽으며 어떤 음악을 감상하셨나요?"
          value={formData.music}
          onChange={handleChange}
        />
        <div className="wrap_button">
          <button type="reset">취소</button>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
