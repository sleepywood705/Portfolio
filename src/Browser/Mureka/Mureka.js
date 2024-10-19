import "./Mureka.scss";
import { Window } from "../../Interface/Window"
import { MurekaAside } from "./Component/Mureka_Aside";
import { MurekaHeader } from "./Component/Mureka_Header";
import { MurekaHomePage } from "./Page/Mureka_Home";
import { MurekaLoginPage } from "./Page/Mureka_Login";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

export function Mureka({ 창닫기 }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [loginState, setLoginState] = useState(0);
  const [userName, setUserName] = useState("");
  const [showAside, setShowAside] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const authProps = { 
    loginState, 
    setLoginState, 
    userName, 
    setUserName, 
    setShowAside,
  };

  useEffect(() => {
    if (isInitialRender) {
      navigate('/Portfolio/mureka/');
      setIsInitialRender(false);
    }
  }, [navigate, isInitialRender]);

  // 새로고침 시에도 로그인 유지
  useEffect(() => {
    const storedLoginState = localStorage.getItem("loginState");
    const storedUserName = localStorage.getItem("userName");

    if (storedLoginState) {
      setLoginState(Number(storedLoginState));
      setUserName(storedUserName);
    }
  }, []);

  return (
    <Window id="Mureka" tabText="Mureka" 닫기={창닫기}>
      <div className="Container">
        <main>
          <MurekaHeader {...authProps} />
          <Routes>
            <Route 
              path="/Portfolio/mureka/" 
              element={<MurekaHomePage className={showAside ? "applyPadding" : ""} />} />
            <Route 
              path="/Portfolio/mureka/login" 
              element={<MurekaLoginPage {...authProps} />} />
          </Routes>
        </main>
        <div className={showAside ? "showAside" : ""}>
          {showAside && <MurekaAside />}
        </div>
      </div>
    </Window>
  );
}
