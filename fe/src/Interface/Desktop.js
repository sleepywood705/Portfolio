import './Desktop.css';
import './Browser.css';
import { Iconset } from './Iconset';
import { Folder } from './Folder';
import { Stack } from '../Browser/Stack/Stack';
import { Contact } from '../Browser/Contact';
import { Addict } from '../Browser/Addict/Addict';
import { Reference } from '../Browser/Reference';
import { Community } from '../Browser/Community';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";


/* 바탕화면 */
export function Desktop() {
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

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div id="Desktop">
      <Iconset
        포트폴리오열기={() => toggleState('showPortfolio', true)}
        폴더열기={() => toggleState('showFolder', true)}
        스택열기={() => handleNavigate('/Portfolio/stack/')}
        컨택트열기={() => toggleState('showContact', true)}
      />

      <Routes>
        <Route path="/Portfolio/stack/*" element={
          <Stack 창닫기={() => handleNavigate('/Portfolio/')} />} />
        <Route path="/Portfolio/reference/*" element={
          <Reference 창닫기={() => handleNavigate('/Portfolio/')} />} />
        <Route path="/Portfolio/addict/*" element={
          <Addict 창닫기={() => handleNavigate('/Portfolio/')} />} />
        <Route path="/Portfolio/community/*" element={
          <Community 창닫기={() => handleNavigate('/Portfolio/')} />} />
      </Routes>

      {state.showFolder && (
        <Folder
          창닫기={() => toggleState('showFolder', false)}
          에이딕트열기={() => handleNavigate('/Portfolio/addict/')}
          레퍼런스열기={() => handleNavigate('/Portfolio/reference/')}
          게시판열기={() => handleNavigate('/Portfolio/community/')}
        />
      )}

      {state.showContact && (
        <Contact 창닫기={() => toggleState('showContact', false)} />
      )}
    </div>
  );
}