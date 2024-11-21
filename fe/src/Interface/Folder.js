import './Folder.scss'
import { Window } from '../Interface/Window'
import { useState } from 'react';


export function Folder({ 
  창닫기, 
  레퍼런스열기, 
  에이딕트열기, 
  글레카열기 }) {

  const [state, setState] = useState({
    showDevelopment: true,
    showDocument: false,
    showPractice: false,
  });

  const onClick = (type) => {
    if (type === 'Development') {
      setState({ showDevelopment: true, showDocument: false, showDesign: false,  showPractice: false });
    } else if (type === 'Document') {
      setState({ showDevelopment: false, showDocument: true, showDesign: false,  showPractice: false });
    } 
    else if (type === 'Practice') {
      setState({ showDevelopment: false, showDocument: false, showDesign: false,  showPractice: true });
    }
  };

  return (
    <Window id="Folder" tabText="Folder" 닫기={창닫기}>
      <div className="Container">
        <aside>
          <ul>
            <li className="Favorites" onClick={() => onClick('Development')}>📁 Development</li>
            <li className="Favorites" onClick={() => onClick('Document')}>📁 Document</li>
            <li className="Favorites" onClick={() => onClick('Practice')}>📁 Practice</li>
          </ul>
        </aside>
        <section>
          {state.showDevelopment && (
            <div className="Icon" onClick={에이딕트열기}>
              <div className="Upper">
                <div className="Inner">Dev</div>
              </div>
              <div className="Lower">에이딕트</div>
            </div>
          )}

          {state.showDocument && (
            <div className="Icon" onClick={레퍼런스열기}>
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">레퍼런스 사이트</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={글레카열기}>
              <div className="Upper">
                <div className="Inner">Doc</div>
              </div>
              <div className="Lower">글레카</div>
            </div>
          )}

        </section>
      </div>
    </Window>
  );
}