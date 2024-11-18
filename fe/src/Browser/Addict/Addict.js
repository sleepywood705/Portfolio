import "./Addict.scss";
import store from '../../store/store';
import { Window } from '../../Interface/Window'
import { AddictHeader } from "./Component/Addict_Header";
import { AddictFooter } from "./Component/Addict_Footer";
import { AddictExplain } from "./Page/Addict_Explain";
import { Provider } from 'react-redux';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";


export function Addict({ 창닫기 }) {
  const navigate = useNavigate();
  const [showExplain, setShowExplain] = useState(true);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      navigate('/Portfolio/addict/');
      setIsInitialRender(false);
    }
  }, [navigate, isInitialRender]);

  function handleExplainClose() {
    setShowExplain(false);
  }

  const handleExplainOpen = () => {
    setShowExplain(true);
  };

  const handleClose = () => {
    navigate('/Portfolio/');
    창닫기();
  };

  return (
    <Provider store={store}>
      <Window id="Addict" tabText="에이딕트 리디자인" 닫기={handleClose}>
        {showExplain && <AddictExplain onClose={handleExplainClose} />}
        <div className="Container">
          <AddictHeader onClick={handleExplainOpen} />
          <AddictFooter />
        </div>
      </Window>
    </Provider>
  );
}
