import './Desktop.css';
import './Browser.css';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Stack } from '../Browser/Stack/Stack';
import { Contact } from '../Browser/Contact';
import { Addict } from '../Browser/Addict/Addict';
import { Reference } from '../Browser/Reference';
<<<<<<< HEAD
import { Glereka } from '../Browser/Glereka/Glereka';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
=======
import { Pharagraph } from '../Browser/Pharagraph/Pharagraph';
import { useStateChange, useHeadTo } from '../Hook/Hook';
>>>>>>> b870790e953376d7f80c0b92c2590ff338a715cd
import { Routes, Route } from "react-router-dom";


/* 바탕화면 */
export function Desktop() {
<<<<<<< HEAD
  const navigate = useNavigate();
  const [state, setState] = useState({
    showFolder: false,
    showContact: false,
  });

  const toggleState = (key, value = !state[key]) => {
    setState(prev => ({
      ...prev,
      [key]: value,
    }));
  };
=======
  const headTo = useHeadTo();
  const folder = useStateChange(false);
  const contact = useStateChange(false);
>>>>>>> b870790e953376d7f80c0b92c2590ff338a715cd

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div id="Desktop">
      <Iconset
<<<<<<< HEAD
        포트폴리오열기={() => toggleState('showPortfolio', true)}
        폴더열기={() => toggleState('showFolder', true)}
        스택열기={() => handleNavigate('/Portfolio/stack/')}
        컨택트열기={() => toggleState('showContact', true)}
      />

      <Routes>
        <Route path="/Portfolio/stack/*" element={<Stack 창닫기={() => handleNavigate('/Portfolio/')} />} />
        <Route path="/Portfolio/reference/*" element={<Reference 창닫기={() => handleNavigate('/Portfolio/')} />} />
        <Route path="/Portfolio/addict/*" element={<Addict 창닫기={() => handleNavigate('/Portfolio/')} />} />
        <Route path="/Portfolio/glereka/*" element={<Glereka 창닫기={() => handleNavigate('/Portfolio/')} />} />
      </Routes>
=======
        포트폴리오열기={() => {/* ... */}}
        폴더열기={folder.OPEN}
        컨택트열기={contact.OPEN}
        스택열기={() => headTo('/Portfolio/stack/')}
      />
>>>>>>> b870790e953376d7f80c0b92c2590ff338a715cd

      <Routes>
        <Route path="/Portfolio/stack/*" element={<Stack 창닫기={() => headTo('/Portfolio/')} />} />
        <Route path="/Portfolio/reference/*" element={<Reference 창닫기={() => headTo('/Portfolio/')} />} />
        <Route path="/Portfolio/addict/*" element={<Addict 창닫기={() => headTo('/Portfolio/')} />} />
        <Route path="/Portfolio/Pharagraph/*" element={<Pharagraph 창닫기={() => headTo('/Portfolio/')} />} />
      </Routes>

      {folder.state && (
        <Folder
<<<<<<< HEAD
          창닫기={() => toggleState('showFolder', false)}
          에이딕트열기={() => handleNavigate('/Portfolio/addict/')}
          레퍼런스열기={() => handleNavigate('/Portfolio/reference/')}
          글레카열기={() => handleNavigate('/Portfolio/glereka/')}
        />
      )}

      {state.showContact && (
        <Contact 창닫기={() => toggleState('showContact', false)} />
=======
          창닫기={folder.CLOSE}
          에이딕트열기={() => headTo('/Portfolio/addict/')}
          레퍼런스열기={() => headTo('/Portfolio/reference/')}
          글레카열기={() => headTo('/Portfolio/Pharagraph/')}
        />
      )}

      {contact.state && (
        <Contact 창닫기={contact.CLOSE} />
>>>>>>> b870790e953376d7f80c0b92c2590ff338a715cd
      )}
    </div>
  );
}