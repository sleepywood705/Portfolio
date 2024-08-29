import './Addict_P_Home.css'
import { AddictSlider } from '../Component/Addict_C_Slider';
import { AddictShortCut } from '../Component/Addict_C_ShortCut';
import { AddictBestProduct } from '../Component/Addict_C_AllProduct';


export function AddictHomePage() {
  return (
    <div id="AddictHomePage">
      <AddictSlider />
      <h2>BEST</h2>
      <div className="wrap">
        <AddictBestProduct />
      </div>
      <AddictShortCut />
      <div>
        <p>카카오톡에서도 에이딕트를 만나 보실 수 있습니다.</p>
        <img src="/img/browser/Addict/kakao.jpg" alt="img" />
        <a href="https://gift.kakao.com/search/result?query=%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8&searchType=typing_keyword">SHOP</a>
      </div>
    </div>
  );
}