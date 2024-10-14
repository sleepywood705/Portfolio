import "./Mureka_Header.scss"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export function MurekaHeader({ loginState, setLoginState, userName, setUserName }) {
  const [buttonActivated, setButtonActivated] = useState("");
  const location = useLocation();

  const handleClick = (type) => {
    setButtonActivated(type);
  };

  const handleLogout = () => {
    const { Kakao } = window;
    if (Kakao) {
      Kakao.Auth.logout();
    }
    setLoginState(0);
    setUserName("");
    alert("로그아웃 되었습니다.");
  };

  useEffect(() => {
    if (location.pathname === "/Portfolio/mureka/") {
      setButtonActivated("");
    }
  }, [location]);

  return (
    <header id="MurekaHeader">
      <Link 
        to="/Portfolio/mureka/"
        className="btn-home"
      >
        MUREKA
      </Link>
      <button className="nav-personal">
        {userName || ""}
      </button>
      <div className="utility">
        {loginState === 1 ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <>
            <Link 
              to="/Portfolio/mureka/login" 
              className={buttonActivated === "login" ? "active" : ""} 
              onClick={() => handleClick("login")}
            >
              로그인
            </Link>
            <Link 
              to="/Portfolio/mureka/signup" 
              className={buttonActivated === "signup" ? "active" : ""} 
              onClick={() => handleClick("signup")}
            >
              회원가입
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
