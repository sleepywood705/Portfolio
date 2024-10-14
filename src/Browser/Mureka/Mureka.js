import "./Mureka.scss";
import { Window } from "../../Interface/Window"
import { MurekaAside } from "./Component/Mureka_Aside";
import { MurekaHeader } from "./Component/Mureka_Header";
import { MurekaLoginPage } from "./Page/Mureka_Login";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";


export function Mureka({ 창닫기 }) {

  const [loginState, setLoginState] = useState(0);
  const [userName, setUserName] = useState("");
  
  const authProps = { loginState, setLoginState, userName, setUserName };

  return (
    <Window id="Mureka" tabText="Mureka" 닫기={창닫기}>
      <div className="Container">
        <MurekaAside />
        <main>
          <MurekaHeader {...authProps} />
          <Routes>
            <Route path="/Portfolio/mureka/" element={<MurekaHomePage />} />
            <Route path="/Portfolio/mureka/login" element={<MurekaLoginPage {...authProps} />} />
          </Routes>
        </main>
      </div>
    </Window>
  );
}



export function MurekaHomePage() {
  return (
    <section id="MurekaHomePage">
      <MurekaRecommand />
    </section>
  )
}

export function MurekaRecommand() {
  return (
    <section id="MurekaRecommand">
      <h2>주인장 추천 아티스트</h2>
      <div></div>
    </section>
  )
}