import './Interface.css';
import styled from 'styled-components';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Portfolio } from '../Browser/Portfolio';
import { Contact } from '../Browser/Contact';
import { Reference } from '../Browser/Reference';
import { Addict } from '../Browser/Addict';
import { Ifit } from '../Browser/Ifit';
import { TodoList } from '../Browser/TodoList';
import { Game2048 } from '../Browser/Game2048'; 
import { PlayList } from '../Browser/PlayList';
import { Rotation } from '../Browser/Rotation';
import { Gradation } from '../Browser/Gradation';
import { useState, useEffect, useRef } from 'react';


/* 바탕화면 */
export function Desktop() {
  const [state, setState] = useState({
    showFolder: false,
    showPortfolio: false,
    showContact: false,
    showReference: false,
    showAddict: true,
    showIfit: false,
    showTodolist: false,
    showGame2048: false,
    showPlayList: false,
    showRotation: false,
    showGradation: false,
  });

  const toggleState = (key, value = !state[key]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const folderRef = useRef(null);
  const portfolioRef = useRef(null);
  const referenceRef = useRef(null);
  const addictRef = useRef(null);
  const todolistRef = useRef(null);
  const game2048Ref = useRef(null);

  const showUpWindow = (ref, condition) => {
    if (ref.current) {
      ref.current.style.transform = condition ? 'scale(1)' : 'scale(0)';
      if (condition) {
        ref.current.style.width = '100vw';
        ref.current.style.height = '100%';
      }
    }
  };

  const showUpWindow2 = (ref, condition) => {
    if (ref.current) {
      ref.current.style.transform = condition ? 'translateX(0) scale(1)' : 'translateX(-100%) scale(0)';
      if (condition) {
        ref.current.style.width = '480px';
        ref.current.style.height = '100%';
        ref.current.style.right = '0'; // right 속성을 직접 설정
        ref.current.style.position = 'absolute'; // 요소의 위치를 고정하기 위해 position 설정
      }
    }
  };

  useEffect(() => {
    if (folderRef.current) {
      folderRef.current.style.transform = state.showFolder ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)';
    }
  }, [state.showFolder]);

  useEffect(() => {
    showUpWindow(portfolioRef, state.showPortfolio);
    showUpWindow(referenceRef, state.showReference);
    showUpWindow(addictRef, state.showAddict);
  }, 
  [
    state.showPortfolio, 
    state.showReference, 
    state.showAddict, 
  ]);

  useEffect(() => {
    showUpWindow2(todolistRef, state.showTodolist);
    showUpWindow2(game2048Ref, state.showGame2048);
  }, 
  [
    state.showTodolist,
    state.showGame2048,
  ]);

  return (
    <div id="Desktop">

      <Iconset
        포트폴리오열기={() => toggleState('showPortfolio', true)}
        폴더열기={() => toggleState('showFolder', true)}
        컨택트열기={() => toggleState('showContact', true)}>
      </Iconset>

      <div ref={folderRef}
        style={{
          position: 'absolute',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%) scale(0)',
        }}
      >
        <Folder
          창닫기={() => toggleState('showFolder', false)}
          레퍼런스열기={() => toggleState('showReference', true)}
          에이딕트열기={() => toggleState('showAddict', true)}
          할일앱열기={() => toggleState('showTodolist', true)}
          게임2048열기={() => toggleState('showGame2048', true)}
          플레이리스트열기={() => toggleState('showPlayList', true)}
          로테이션열기={() => toggleState('showRotation', true)}
          그라데이션열기={() => toggleState('showGradation', true)}
        />
      </div>

      <div ref={portfolioRef}
        style={{
          transform: 'scale(0)'
        }}
      >
        {state.showPortfolio && (
          <Portfolio 창닫기={() => toggleState('showPortfolio', false)} />
        )}
      </div>

      {state.showContact && (
        <Contact 창닫기={() => toggleState('showContact', false)} />
      )}

      <div ref={addictRef}
        style={{
          transform: 'scale(0)'
        }}
      >
        {state.showAddict && (
          <Addict 창닫기={() => toggleState('showAddict', false)} />
        )}
      </div>

      {state.showIfit && (
        <Ifit 창닫기={() => toggleState('showIfit', false)} />
      )}

      <div ref={todolistRef}>
        {state.showTodolist && (
          <TodoList 창닫기={() => toggleState('showTodolist', false)} />
        )}
      </div>

      <div ref={game2048Ref}>
        {state.showGame2048 && (
          <Game2048 창닫기={() => toggleState('showGame2048', false)} />
        )}
      </div>

      {state.showPlayList && (
        <PlayList 창닫기={() => toggleState('showPlayList', false)} />
      )}

      {state.showRotation && (
        <Rotation 창닫기={() => toggleState('showRotation', false)} />
      )}

      {state.showGradation && (
        <Gradation 창닫기={() => toggleState('showGradation', false)} />
      )}

      <div ref={referenceRef}
        style={{
          transform: 'scale(0)'
        }}
      >
        {state.showReference && (
          <Reference 창닫기={() => toggleState('showReference', false)} />
        )}
      </div>

    </div>
  );
}




/* 윈도우창, 타이틀바, 컨테이너 */
export function Window({ 닫기, tabText, children, ...props }) {
  return (
    <div className="Window" {...props}>
      <div id="Titlebar">
        <Restore />
        <Minimize />
        <Close onClick={닫기} />
        <div id="Tab">
          {tabText}
          <button onClick={닫기}></button>
        </div>
      </div>
      <div id="Searchbar">
        <Left />
        <Right />
        <div></div>
      </div>
      {children}
    </div>
  );
}
/* 스타일 컴포넌트 */
const Restore = styled.button`
  height: 100%; aspect-ratio: 1.2 / 1;
  display: grid;
  place-items: center;
  background: url(${process.env.PUBLIC_URL}/img/icon/restore.png) center/34% no-repeat;

  &:hover {
    background-color: #ccc;
  }
`
const Minimize = styled.button`
  height: 100%; aspect-ratio: 1.2 / 1;
  display: grid;
  place-items: center;
  background: url(${process.env.PUBLIC_URL}/img/icon/minimize.png) center/34% no-repeat;

  &:hover {
    background: url(${process.env.PUBLIC_URL}/img/icon/maximize.png) center/34% no-repeat;
    background-color: #ccc;
  }
`
const Close = styled.button`
  height: 100%; aspect-ratio: 1.2 / 1;
  display: grid;
  place-items: center;
  background: url(${process.env.PUBLIC_URL}/img/icon/close_blk.png) center/34% no-repeat;

  &:hover {
    background: url(${process.env.PUBLIC_URL}/img/icon/close.png) center/34% no-repeat;
    background-color: #F05A5A;
  }
`
const Left = styled.button`
  background: url(${process.env.PUBLIC_URL}/img/icon/chevron_l_blk_b.png) center/40% no-repeat;
`
const Right = styled.button`
  background: url(${process.env.PUBLIC_URL}/img/icon/chevron_r_blk_b.png) center/40% no-repeat;
`
/* 작업표시줄 */
export function Taskbar() {
  return (
    <div id="Taskbar">
      <StartButton>
        <div style={{ backgroundColor: "#BB2525" }}></div>
        <div style={{ backgroundColor: "#186F65" }}></div>
        <div style={{ backgroundColor: "#387ADF" }}></div>
        <div style={{ backgroundColor: "#F4CE14" }}></div>
      </StartButton>
      <TimeContainer>
        <Time />
        <Yeartoday />
      </TimeContainer>
    </div>
  );
}
function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setCurrentTime(new Date());
  }

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedTime = `${ampm} ${formattedHours}:${minutes < 10 ? "0" : ""
    }${minutes}`;

  return <div>{formattedTime}</div>;
}
function Yeartoday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return <div>{formattedDate}</div>;
}
/* 스타일 컴포넌트 */
const StartButton = styled.button`
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  padding: 6px;
  height: calc(100% - 8px); aspect-ratio: 1;
  // border: 1px solid #000;
  border-radius: 4px;
  gap: 2px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  cursor: pointer;

  & > div {
    width: 100%; aspect-ratio: 1;
  }

  &:hover {
    background-color: #fff;
  }
`
const TimeContainer = styled.div`
  margin-left: auto;
  padding: 0 10px;
  width: fit-content; height: 100%;
  font-size: 13px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`