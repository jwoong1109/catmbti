import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; // useState import 추가
import '../css/Top.css';


const Top = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // isLoggedIn 상태 추가
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        // 로그아웃 처리를 수행하는 코드 (예: Firebase의 signOut 함수 호출)
        // 이 예제에서는 Firebase를 사용하고 있으므로 Firebase의 signOut 함수를 호출한다고 가정합니다.
        // 실제로 사용하는 인증 서비스에 따라 로그아웃 코드가 다를 수 있습니다.
  
        // 여기서 사용자 로그아웃 후의 작업을 수행할 수 있습니다.
        // setIsLoggedIn를 사용하여 로그아웃 상태로 변경
        setIsLoggedIn(false);
  
        // 로그아웃 후 "/" 경로로 이동
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleLogoClick = () => {
      // Logo를 클릭하면 "/" 경로로 이동
      navigate("/");
    };
  
    return (
      <nav className="navbar" style={{ width: '100%' }}>
        
        {isLoggedIn ? (
          <button className="button" onClick={handleLogout}>로그아웃</button>
        ) : (
          <div>
            <button className="button" style={{ marginRight: '10px' }} onClick={() => navigate("/")}>Main</button>
            <button className="button" style={{ marginRight: '10px' }} onClick={() => navigate("/Join")}>회원가입</button>
            <button className="button" onClick={() => navigate("/Login")}>로그인</button>
          </div>
        )}
      </nav>
    );
  };
  
  export default Top;
  