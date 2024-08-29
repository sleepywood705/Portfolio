import styled from 'styled-components';
import { Window } from './Interface';
import { useState } from 'react';

export function Folder({ style, 창닫기, 
  레퍼런스열기, 
  에이딕트열기, 
  플레이어열기, 
  로테이트열기, 
  그라데이션열기 }) {

  const [state, setState] = useState({
    showDevelopment: true,
    showDocument: false,
    showDesign: false,
  });

  const onClick = (type) => {
    if (type === 'Development') {
      setState({ showDocument: false, showDesign: false, showDevelopment: true });
    } else if (type === 'Document') {
      setState({ showDocument: true, showDesign: false, showDevelopment: false });
    } else if (type === 'Design') {
      setState({ showDocument: false, showDesign: true, showDevelopment: false });
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
          </ul>
        </aside>
        <div>
          {state.showDocument && (
            <Icon onClick={레퍼런스열기}>
              <Upper>
                <Inner>Ref</Inner>
              </Upper>
              <Lower>Reference Site</Lower>
            </Icon>
          )}

          {state.showDesign && (
            <Icon onClick={에이딕트열기}>
              <Upper>
                <Inner>A'ddict</Inner>
              </Upper>
              <Lower>A'ddict</Lower>
            </Icon>
          )}

          {state.showDevelopment && (
            <Icon onClick={로테이트열기}>
              <Upper>
                <Inner>Dev</Inner>
              </Upper>
              <Lower>Mouse Event</Lower>
            </Icon>
          )}

          {state.showDevelopment && (
            <Icon onClick={그라데이션열기}>
              <Upper>
                <Inner>Dev</Inner>
              </Upper>
              <Lower>Gradation</Lower>
            </Icon>
          )}

          {state.showDevelopment && (
            <Icon onClick={플레이어열기}>
              <Upper>
                <Inner>Dev</Inner>
              </Upper>
              <Lower>Play List</Lower>
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

