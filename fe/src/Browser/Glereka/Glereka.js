import "./Glereka.scss";
import { Window } from "../../Interface/Window";
import { GlerekaHeader } from "./Component/Glereka_Header";
import { GlerekaWritePage } from "./Page/Glereka_Wrtie";
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
          <Route path="/write" element={<GlerekaWritePage />} />
        </Routes>
      </div>
    </Window>
  );
} 


