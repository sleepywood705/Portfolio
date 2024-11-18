import './Desktop.css';
import './Browser.css';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Stack } from '../Browser/Stack/Stack';
import { Contact } from '../Browser/Contact';
import { Addict } from '../Browser/Addict/Addict';
import { AddictHomePage } from "../Browser/Addict/Page/Addict_Home";
import { AddictAllPage } from "../Browser/Addict/Page/Addict_All";
import { AddictNotePage } from "../Browser/Addict/Page/Addict_Note";
import { AddictOfflinePage } from "../Browser/Addict/Page/Addict_Offline";
import { Reference } from '../Browser/Reference';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


/* 바탕화면 */
export function Desktop() {
  const [state, setState] = useState({
    showFolder: false,
    showStack: false,
    showContact: false,
    showAddict: false,
    showReference: false,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/Portfolio/addict')) {
      setState(prev => ({ ...prev, showAddict: true }));
    }
  }, [location]);

  const toggleState = (key, value = !state[key]) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div id="Desktop">

      <Routes>
        <Route path="/Portfolio/addict/" element={<AddictHomePage />} />
        <Route path="/Portfolio/addict/all" element={<AddictAllPage />} />
        <Route path="/Portfolio/addict/note" element={<AddictNotePage />} />
        <Route path="/Portfolio/addict/mall" element={<AddictOfflinePage />}/>
      </Routes>

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
      
    </div>
  );
}
