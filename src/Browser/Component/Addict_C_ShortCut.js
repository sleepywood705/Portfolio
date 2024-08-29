import'./Addict_C_ShortCut.css'
import { Link } from 'react-router-dom';


export function AddictShortCut() {
  return (
    <section id="AddictShortCut">
      <Link to="/all?tab=liquid"></Link>
      <Link to="/all?tab=solid"></Link>
    </section>
  );
}