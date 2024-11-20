import "./Community.scss";
import { Window } from "../../Interface/Window";
import { CommunityHeader } from "./Component/Community_Header";
import { CommunityBoardPage } from "./Page/Community_Board";
import { Routes, Route, useNavigate } from "react-router-dom";


export function Community({ 창닫기 }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/Portfolio/");
    창닫기();
  };

  return (
    <Window id="Community" tabText="게시판 연습" 닫기={handleClose}>
      <div className="Container">
        <CommunityHeader />
        <Routes>
          <Route path="/board" element={<CommunityBoardPage />} />
        </Routes>
      </div>
    </Window>
  );
} 


