import './Desktop.css';
import '../Browser/Browser.css';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Portfolio } from '../Browser/Portfolio';
import { Contact } from '../Browser/Contact';
import { Addict } from '../Browser/Addict/Addict';
import { PlayList } from '../Browser/PlayList/PlayList';
import { Ifit } from '../Browser/Ifit';
import { Counter } from '../Browser/Counter';
import { TodoList } from '../Browser/TodoList';
import { Game2048 } from '../Browser/Game2048';
import { Rotation } from '../Browser/Rotation';
import { Gradation } from '../Browser/Gradation';
import { Reference } from '../Browser/Reference';
import { useState } from 'react';


/* 바탕화면 */
export function Desktop() {
  const [state, setState] = useState({
    showFolder: false,
    showPortfolio: false,
    showContact: false,
    showAddict: false,
    showArtiBook: true,
    showIfit: false,
    showTodolist: false,
    showGame2048: false,
    showCounter: false,
    showRotation: false,
    showGradation: false,
    showReference: false,
  });

  const toggleState = (key, value = !state[key]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div id="Desktop">

      <Iconset
        포트폴리오열기={() => toggleState('showPortfolio', true)}
        폴더열기={() => toggleState('showFolder', true)}
        컨택트열기={() => toggleState('showContact', true)}>
      </Iconset>

      {state.showFolder && (
        <Folder
          창닫기={() => toggleState('showFolder', false)}
          에이딕트열기={() => toggleState('showAddict', true)}
          플레이리스트열기={() => toggleState('showArtiBook', true)}
          할일앱열기={() => toggleState('showTodolist', true)}
          게임2048열기={() => toggleState('showGame2048', true)}
          로테이션열기={() => toggleState('showRotation', true)}
          그라데이션열기={() => toggleState('showGradation', true)}
          레퍼런스열기={() => toggleState('showReference', true)}
          카운터열기={() => toggleState('showCounter', true)}
        />
      )}

      {state.showPortfolio && (
        <Portfolio 창닫기={() => toggleState('showPortfolio', false)} />
      )}

      {state.showContact && (
        <Contact 창닫기={() => toggleState('showContact', false)} />
      )}

      {state.showAddict && (
        <Addict 창닫기={() => toggleState('showAddict', false)} />
      )}

      {state.showIfit && (
        <Ifit 창닫기={() => toggleState('showIfit', false)} />
      )}

      {state.showTodolist && (
        <TodoList 창닫기={() => toggleState('showTodolist', false)} />
      )}

      {state.showGame2048 && (
        <Game2048 창닫기={() => toggleState('showGame2048', false)} />
      )}

      {state.showArtiBook && (
        <PlayList 창닫기={() => toggleState('showArtiBook', false)} />
      )}

      {state.showRotation && (
        <Rotation 창닫기={() => toggleState('showRotation', false)} />
      )}

      {state.showGradation && (
        <Gradation 창닫기={() => toggleState('showGradation', false)} />
      )}

      {state.showReference && (
        <Reference 창닫기={() => toggleState('showReference', false)} />
      )}

      {state.showCounter && (
        <Counter 창닫기={() => toggleState('showCounter', false)} />
      )}

    </div>
  );
}