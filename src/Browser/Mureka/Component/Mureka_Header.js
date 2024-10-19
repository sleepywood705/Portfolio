import "./Mureka_Header.scss"
import { MurekaSearch } from "./Mureka_Search";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


export function MurekaHeader({ loginState, setLoginState, userName, setUserName, setShowAside }) {
  const [buttonActivated, setButtonActivated] = useState("");
  const location = useLocation();

  const handleClick = (type) => {
    setButtonActivated(type);
  };

  const handleLogout = () => {
    const { Kakao } = window;
    if (Kakao) {
      if (Kakao.Auth) {
        Kakao.Auth.logout();
      } else {
        console.error("Kakao.Auth가 정의되지 않았습니다.");
      }
    } else {
      console.error("Kakao 객체가 정의되지 않았습니다.");
    }
    setLoginState(0);
    setUserName("");

    // 로컬 스토리지 초기화
    localStorage.removeItem("loginState");
    localStorage.removeItem("userName");

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
      <Link className="myPage" onClick={() => setShowAside(true)}>
        {userName || ""}
      </Link>
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
      <MurekaSearch />
    </header>
  );
}
