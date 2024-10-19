import './Folder.scss'
import { Window } from '../Interface/Window'
import { useState } from 'react';


export function Folder({ 
  창닫기, 레퍼런스열기, 
  에이딕트열기, 이핏열기,
  할일앱열기, 게임2048열기,
  뮤레카열기, 로테이션열기, 
  그라데이션열기, 카운터열기 }) {

  const [state, setState] = useState({
    showDevelopment: true,
    showDocument: false,
    // showDesign: false,
    showPractice: false,
  });

  const onClick = (type) => {
    if (type === 'Development') {
      setState({ showDevelopment: true, showDocument: false, showDesign: false,  showPractice: false });
    } else if (type === 'Document') {
      setState({ showDevelopment: false, showDocument: true, showDesign: false,  showPractice: false });
    } 
    // else if (type === 'Design') {
    //   setState({ showDevelopment: false, showDocument: false, showDesign: true,  showPractice: false });
    // } 
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
            {/* <li className="Favorites" onClick={() => onClick('Design')}>📁 Design</li> */}
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

          {state.showDevelopment && (
            <div className="Icon" onClick={뮤레카열기}>
              <div className="Upper">
                <div className="Inner">Dev</div>
              </div>
              <div className="Lower">개발 중</div>
            </div>
          )}

          {/* {state.showDevelopment && (
            <div className="Icon" onClick={이핏열기}>
              <div className="Upper">
                <div className="Inner">Dev</div>
              </div>
              <div className="Lower">이핏</div>
            </div>
          )} */}

          {state.showPractice && (
            <div className="Icon" onClick={할일앱열기}>
              <div className="Upper">
                <div className="Inner">Dev</div>
              </div>
              <div className="Lower">투두리스트</div>
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
            <div className="Icon" onClick={카운터열기}>
              <div className="Upper">
                <div className="Inner">Pratice</div>
              </div>
              <div className="Lower">카운터 연습</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={그라데이션열기}>
              <div className="Upper">
                <div className="Inner">Pratice</div>
              </div>
              <div className="Lower">그래픽 연습</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={로테이션열기}>
              <div className="Upper">
                <div className="Inner">Pratice</div>
              </div>
              <div className="Lower">슬라이더 연습</div>
            </div>
          )}

          {state.showPractice && (
            <div className="Icon" onClick={게임2048열기}>
              <div className="Upper">
                <div className="Inner">Pratice</div>
              </div>
              <div className="Lower">게임2048</div>
            </div>
          )}
        </section>
      </div>
    </Window>
  );
}