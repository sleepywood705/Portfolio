import './Desktop.css';
import './Browser.css';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Stack } from '../Browser/Stack/Stack';
import { Contact } from '../Browser/Contact';
import { Addict } from '../Browser/Addict/Addict';
import { Reference } from '../Browser/Reference';
import { Board } from '../Browser/Board';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


/* 바탕화면 */
export function Desktop() {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    showFolder: false,
    showStack: false,
    showContact: false,
    showAddict: false,
    showReference: false,
    showBoard: false,
  });

  useEffect(() => {
    setState(prev => ({
      ...prev,
      showAddict: location.pathname.includes('/Portfolio/addict'),
      showMureka: location.pathname.includes('/Portfolio/mureka'),
    }));
  }, [location]);

  const toggleState = (key, value = !state[key]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    
    if (key === 'showAddict' && value) {navigate('/Portfolio/addict/');}
  };

  return (
    <div id="Desktop">

      <Iconset
        포트폴리오열기={() => toggleState('showPortfolio', true)}
        폴더열기={() => toggleState('showFolder', true)}
        스택열기={() => toggleState('showStack', true)}
        컨택트열기={() => toggleState('showContact', true)}>
      </Iconset>

      {state.showFolder && (
        <Folder
          창닫기={() => toggleState('showFolder', false)}
          에이딕트열기={() => toggleState('showAddict', true)}
          레퍼런스열기={() => toggleState('showReference', true)}
          게시판열기={() => toggleState('showBoard', true)}
        />
      )}

      {state.showStack && (
        <Stack 창닫기={() => toggleState('showStack', false)} />
      )}

      {state.showContact && (
        <Contact 창닫기={() => toggleState('showContact', false)} />
      )}

      {state.showAddict && (
        <Addict 창닫기={() => toggleState('showAddict', false)} />
      )}

      {state.showReference && (
        <Reference 창닫기={() => toggleState('showReference', false)} />
      )}

      {state.showBoard && (
        <Board 창닫기={() => toggleState('showBoard', false)} />
      )}
      
    </div>
  );
}