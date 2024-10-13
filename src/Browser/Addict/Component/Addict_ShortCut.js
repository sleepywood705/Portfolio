import'./Addict_ShortCut.css'
import { Link } from 'react-router-dom';


export function AddictShortCut() {
  return (
    <section id="AddictShortCut">
      <Link to="/Portfolio/addict/all?tab=liquid"></Link>
      <Link to="/Portfolio/addict/all?tab=solid"></Link>
    </section>
  );
}