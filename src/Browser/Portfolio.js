import './Portfolio.css'
import { Window } from '../Interface/Interface';

export function Portfolio({ 창닫기 }) {
  return (
    <Window id="Portfolio" tabText="포트폴리오" 닫기={창닫기}>
      <header>
        <a href="#intro" className="logo"></a>
        <a href="#intro">Home</a>
        <a href="#CV">CV</a>
        <a href="#interview">Interview</a>
        <a href="#stacks">Stacks</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
        <span></span>
      </header>
      <main>
        <article>
          <section className="stacks" id="stacks"></section>
          <section className="intro" id="intro"></section>
          <section className="interview" id="interview"></section>
          <section className="contact" id="contact">
          </section>
        </article>
      </main>
    </Window>
  );
}