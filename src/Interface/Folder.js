import styled from 'styled-components';
import { Window } from '../Interface/Window'
import { useState } from 'react';


export function Folder({ 
  style, 창닫기, 레퍼런스열기, 
  에이딕트열기, 이핏열기,
  할일앱열기, 게임2048열기,
  플레이리스트열기, 로테이션열기, 
  그라데이션열기, 카운터열기 }) {

  const [state, setState] = useState({
    showDevelopment: true,
    showDocument: false,
    showDesign: false,
    showPractice: false,
  });

  const onClick = (type) => {
    if (type === 'Development') {
      setState({ showDevelopment: true, showDocument: false, showDesign: false,  showPractice: false });
    } else if (type === 'Document') {
      setState({ showDevelopment: false, showDocument: true, showDesign: false,  showPractice: false });
    } else if (type === 'Design') {
      setState({ showDevelopment: false, showDocument: false, showDesign: true,  showPractice: false });
    } else if (type === 'Practice') {
      setState({ showDevelopment: false, showDocument: false, showDesign: false,  showPractice: true });
    }
  };

  return (
    <Window id="Folder" style={style} tabText="Folder" 닫기={창닫기}>
      <main>
        <aside>
          <ul>
            <Favorites onClick={() => onClick('Development')}>📁 Development</Favorites>
            <Favorites onClick={() => onClick('Document')}>📁 Document</Favorites>
            <Favorites onClick={() => onClick('Design')}>📁 Design</Favorites>
            <Favorites onClick={() => onClick('Practice')}>📁 Practice</Favorites>
          </ul>
        </aside>
        <div>
          {state.showDocument && (
            <Icon onClick={레퍼런스열기}>
              <Upper>
                <Inner>Doc</Inner>
              </Upper>
              <Lower>레퍼런스 사이트</Lower>
            </Icon>
          )}

          {state.showDesign && (
            <Icon onClick={에이딕트열기}>
              <Upper>
                <Inner>Design</Inner>
              </Upper>
              <Lower>에이딕트</Lower>
            </Icon>
          )}

          {state.showDevelopment && (
            <Icon onClick={이핏열기}>
              <Upper>
                <Inner>Dev</Inner>
              </Upper>
              <Lower>이핏</Lower>
            </Icon>
          )}

          {state.showDevelopment && (
            <Icon onClick={플레이리스트열기}>
              <Upper>
                <Inner>Dev</Inner>
              </Upper>
              <Lower>플레이 리스트</Lower>
            </Icon>
          )}

          {state.showPractice && (
            <Icon onClick={카운터열기}>
              <Upper>
                <Inner>Pratice</Inner>
              </Upper>
              <Lower>카운터 연습</Lower>
            </Icon>
          )}
        </div>
      </main>
    </Window>
  );
}

/* 스타일 컴포넌트 */
const Favorites = styled.li`
  padding: 10px 20px;
  font-size: 13px;
  border-bottom: 1px solid #f2f2f2;
`
const Icon = styled.button`
  position: relative;
  width: 100px; aspect-ratio: 1;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background-color: rgba(255, 255, 255, 0.09);
  // backdrop-filter: blur(10px);
  display: grid;
  grid-template-rows: 7fr 3fr;
  cursor: pointer;
  
  &:hover {
    border: 1px solid #000;
  }
`;
const Upper = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
`;
const Lower = styled.div`
  padding: 4px;
  font-size: 13px;
  display: grid;
  place-items: center;
`;
const Inner = styled.div`
  position: absolute;
  left: 50%; bottom: 8px;
  transform: translate(-50%);
  width: 46px; aspect-ratio: 1;
  color: #fff;
  font-size: 12px;
  line-height: 10px;
  border-radius: 6px;
  background: ${({ src, size }) => `url(${src}) center/${size} no-repeat`};
  background-color: #000;
  display: grid;
  place-items: center;
`;

