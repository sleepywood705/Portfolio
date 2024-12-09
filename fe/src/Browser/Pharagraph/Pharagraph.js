import "./Pharagraph.scss";
import { Window } from "../../Interface/Window";
import { PharagraphHeader } from "./Component/Pharagraph_Header";
import { PharagraphHomePage } from "./Page/Pharagraph_Home";
import { PharagraphLoginPage } from "./Page/Pharagraph_Login";
import { PharagraphMyPage } from "./Page/Pharagraph_My";
import { PharagraphPostingPage } from "./Page/Pharagraph_Posting";
import { AuthProvider } from "./ContextApi/AuthContext";
import { useWindowClose } from "../../Hook/Hook";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


export function Pharagraph({ 창닫기 }) {
  const windowClose = useWindowClose(창닫기);  

  return (
    <AuthProvider>
      <Window id="Pharagraph" tabText="Pharagraph" 닫기={windowClose}>
        <div className="Container">
          <PharagraphNav />
          <PharagraphHeader />
          <Routes>
            <Route path="/" element={<PharagraphHomePage />} />
            <Route path="/login" element={<PharagraphLoginPage />} />
            <Route path="/my" element={<PharagraphMyPage />} />
            <Route path="/posting" element={<PharagraphPostingPage />} />
          </Routes>
        </div>
      </Window>
    </AuthProvider>
  );
} 


export function PharagraphNav() {
  return (
    <nav>
      <Link to="/Portfolio/Pharagraph/posting">Write</Link>
      <Link to="/Portfolio/Pharagraph/list">List</Link>
      <Link to="/Portfolio/Pharagraph/community">Community</Link>
    </nav>
  )
}