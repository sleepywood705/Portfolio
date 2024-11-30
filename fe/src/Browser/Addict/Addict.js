import "./Addict.scss";
import store from '../../store/store';
import { Window } from '../../Interface/Window'
import { AddictHeader } from "./Component/Addict_Header";
import { AddictFooter } from "./Component/Addict_Footer";
import { AddictHomePage } from "./Page/Addict_Home";
import { AddictExplain } from "./Page/Addict_Explain";
import { AddictAllPage } from "./Page/Addict_All";
import { AddictNotePage } from "./Page/Addict_Note";
import { AddictOfflinePage } from "./Page/Addict_Offline";
import { Provider } from 'react-redux';
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


export function Addict({ 창닫기 }) {
  const navigate = useNavigate();
  const [showExplain, setShowExplain] = useState(true);
  
  const handleClose = () => {
    navigate('/Portfolio/');
    창닫기();
  };
  
  function handleExplainClose() {
    setShowExplain(false);
  }

  const handleExplainOpen = () => {
    setShowExplain(true);
  };

  return (
    <Provider store={store}>
      <Window id="Addict" tabText="에이딕트 리디자인" 닫기={handleClose}>
        {showExplain && <AddictExplain onClose={handleExplainClose} />}
        <div className="Container">
          <AddictHeader onClick={handleExplainOpen} />
          <Routes>
            <Route path="/" element={<AddictHomePage />} />
            <Route path="/all" element={<AddictAllPage />} />
            <Route path="/note" element={<AddictNotePage />} />
            <Route path="/mall" element={<AddictOfflinePage />} />
          </Routes>
          <AddictFooter />
        </div>
      </Window>
    </Provider>
  );
}
