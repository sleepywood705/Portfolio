import "./Glereka.scss";
import { Window } from "../../Interface/Window";
import { GlerekaHeader } from "./Component/Glereka_Header";
import { GlerekaLoginPage } from "./Page/Glereka_Login";
import { GlerekaMyPage } from "./Page/Glereka_My";
import { GlerekaPostingPage } from "./Page/Glereka_Posting";
import { Routes, Route } from "react-router-dom";
import { useWindowClose } from "../../Hook/Hook";


export function Glereka({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);

  return (
    <Window id="Glereka" tabText="게시판 연습" 닫기={windowClose}>
      <div className="Container">
        <GlerekaHeader />
        <Routes>
          <Route path="/login" element={<GlerekaLoginPage />} />
          <Route path="/my" element={<GlerekaMyPage />} />
          <Route path="/posting" element={<GlerekaPostingPage />} />
        </Routes>
      </div>
    </Window>
  );
} 


