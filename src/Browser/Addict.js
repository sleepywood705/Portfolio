import './Addict.css';
import { Window } from '../Interface/Interface';
import { AddictHomePage } from './Route/Addict_P_Home';
import { AddictAllPage } from './Route/Addict_P_All';
import { AddictNotePage } from './Route/Addict_P_Note';
import { AddictOfflinePage } from './Route/Addict_P_Offline';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export function Addict({ 창닫기 }) {
  const navigate = useNavigate();
  const [whenFirstLoaded, setWhenFirstLoaded] = useState(true);

  useEffect(() => {
    if (whenFirstLoaded) {
      navigate('/Portfolio/addict');
      setWhenFirstLoaded(false);
    }
  }, [navigate, whenFirstLoaded]);

  return (
    <Window id="Addict" tabText="Addict" 닫기={창닫기}>
      <main>
        <header>
          <Link to="/Portfolio/addict">a ddct</Link>
          <nav>
            <Link to="/Portfolio/addict/all">제품 보기</Link>
            <Link to="/Portfolio/addict/all?tab=best">베스트셀러</Link>
            <Link to="/Portfolio/addict/note">조향 노트</Link>
            <Link to="/Portfolio/addict/mall">매장 보기</Link>
          </nav>
          <div>로그인</div>
          <div>회원가입</div>
          <div>장바구니</div>
        </header>
        <Routes>
          <Route path="/Portfolio/addict" element={<AddictHomePage />} />
          <Route path="/Portfolio/addict/all" element={<AddictAllPage />} />
          <Route path="/Portfolio/addict/note" element={<AddictNotePage />} />
          <Route path="/Portfolio/addict/mall" element={<AddictOfflinePage />} />
        </Routes>
        <footer>
          <div>
            <div>
              <h3>COMPANY INFO</h3>
              <p>주식회사 일레븐코퍼레이션 | 백창준</p>
              <p>주소 | 서울특별시 중구 남대문로 78, 5층(명동1가)</p>
              <p>사업자등록번호 | 875-88-00859</p>
              <p>통신판매신고번호 | 2022-서울중고-1672</p>
            </div>
          </div>
          <div>
            <div>
              <h3>CONTACT US</h3>
              <p>마케팅제휴문의</p>
              <p>a-ddict@a-ddic.co.kr</p>
              <p>입점 및 해외 수출 문의</p>
              <p>global@11copr.co.kr</p>
            </div>
          </div>
          <div>
            <div>
              <h3>COSTOMER CENTER</h3>
              <p>1661-8148</p>
              <p>10:00 ~ 17:00</p>
              <p>토, 일욜일 및 공휴일 휴무</p>
            </div>
          </div>
          <div>
            <div>
              <h3>SOCIAL</h3>
              <p>instagram</p>
              <p>kakao</p>
            </div>
          </div>
        </footer>
      </main>
    </Window>
  );
}
