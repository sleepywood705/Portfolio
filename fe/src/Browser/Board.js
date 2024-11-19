import './Board.scss'
import { Window } from '../Interface/Window';


export function Board({ 창닫기 }) {
  return (
    <Window id="Board" tabText="게시판 연습" 닫기={창닫기}>
      <div className="Container">

      </div>
    </Window>
  );
};