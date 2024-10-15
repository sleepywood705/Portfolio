import './Portfolio.css'
import { Window } from '../Interface/Window';
import { MurekaRecommand } from './Mureka/Component/Mureka_Recommand';


export function Portfolio({ 창닫기 }) {
  return (
    <Window id="Portfolio" tabText="Portfolio" 닫기={창닫기}>
      <div className="Container">
        
      </div>
    </Window>
  );
}