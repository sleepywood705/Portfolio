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
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
import { Routes, Route, useNavigate } from "react-router-dom";


export function Addict({ 창닫기 }) {
  const navigate = useNavigate();
  const [showExplain, setShowExplain] = useState(true);
<<<<<<< HEAD
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      navigate('/Portfolio/addict/');
      setIsInitialRender(false);
    }
  }, [navigate, isInitialRender]);

=======
  
  const handleClose = () => {
    navigate('/Portfolio/');
    창닫기();
  };
  
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
  function handleExplainClose() {
    setShowExplain(false);
  }

  const handleExplainOpen = () => {
    setShowExplain(true);
  };

  return (
    <Provider store={store}>
<<<<<<< HEAD
      <Window id="Addict" tabText="에이딕트 리디자인" 닫기={창닫기}>
=======
      <Window id="Addict" tabText="에이딕트 리디자인" 닫기={handleClose}>
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
        {showExplain && <AddictExplain onClose={handleExplainClose} />}
        <div className="Container">
          <AddictHeader onClick={handleExplainOpen} />
          <Routes>
<<<<<<< HEAD
            <Route path="/Portfolio/addict/" element={<AddictHomePage />} />
            <Route path="/Portfolio/addict/all" element={<AddictAllPage />} />
            <Route path="/Portfolio/addict/note" element={<AddictNotePage />} />
            <Route path="/Portfolio/addict/mall" element={<AddictOfflinePage />}
            />
=======
            <Route path="/" element={<AddictHomePage />} />
            <Route path="/all" element={<AddictAllPage />} />
            <Route path="/note" element={<AddictNotePage />} />
            <Route path="/mall" element={<AddictOfflinePage />} />
>>>>>>> be3593ad60895c5ca8d94bd1134d674442c4386e
          </Routes>
          <AddictFooter />
        </div>
      </Window>
    </Provider>
  );
}
