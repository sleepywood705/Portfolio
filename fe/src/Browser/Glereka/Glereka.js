import "./Glereka.scss";
import { Window } from "../../Interface/Window";
import { GlerekaHeader } from "./Component/Glereka_Header";
import { GlerekaPostingPage } from "./Page/Glereka_Posting";
import { Routes, Route, useNavigate } from "react-router-dom";


export function Glereka({ 창닫기 }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/Portfolio/");
    창닫기();
  };

  return (
    <Window id="Glereka" tabText="게시판 연습" 닫기={handleClose}>
      <div className="Container">
        <GlerekaHeader />
        <Routes>
          <Route path="/write" element={<GlerekaPostingPage />} />
        </Routes>
      </div>
    </Window>
  );
} 


