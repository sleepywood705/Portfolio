import './Contact.css'
import { Window } from '../Interface/Interface';


export function Contact({ 창닫기 }) {
  return (
    <Window id="Contact" tabText="Contact" 닫기={창닫기}>
      <section>
        <div className="left"></div>
        <div className="right"></div>
      </section>
    </Window>
  );
}