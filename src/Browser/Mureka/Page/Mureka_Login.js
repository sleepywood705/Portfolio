import "../../../scss/Mureka_Login.scss"
import { useNavigate } from "react-router-dom";


export function MurekaLoginPage({ setLoginState, setUserName }) {
  const navigate = useNavigate();
  
  const handleKakaoLogin = () => {
    const { Kakao } = window;

    if (!Kakao) {
      console.error("Kakao 객체가 정의되지 않았습니다.");
      return;
    }

    // Kakao.init을 한 번만 실행하도록 수정
    if (!Kakao.isInitialized()) {
      Kakao.init("9cca418c0a457acdcd4b0b01acfb7c77");
    }

    Kakao.Auth.login({
      success: function(authObj) {
        alert("카카오톡 간편 로그인에 성공했습니다.");
        Kakao.API.request({
          url: "/v2/user/me",
          success: function(res) {
            setLoginState(1);
            setUserName(res.kakao_account.profile.nickname);

            navigate("/Portfolio/mureka");

            // 로그인 상태를 로컬 스토리지에 저장
            localStorage.setItem("loginState", 1);
            localStorage.setItem("userName", res.kakao_account.profile.nickname);
          },
          fail: function(err) {
            alert("사용자 정보를 가져오는 데 실패했습니다.");
          },
        });
      },
      fail: function(err) {
        alert("카카오톡 간편 로그인에 실패했습니다.");
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="MurekaLoginPage">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <label htmlFor="remember">
          <input type="checkbox" id="remember" />
          로그인 상태 유지
        </label>
        <input type="submit" value="로그인" />
      </form>
      <div>
        <button className="easy-login kakao" onClick={handleKakaoLogin}>카카오톡 계정으로 로그인</button>
        <button className="easy-login google">구글 계정으로 로그인</button>
      </div>
    </section>
  );
}
