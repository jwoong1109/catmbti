import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';



const Top = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Navbar>
      {isLoggedIn ? (
        <Button onClick={handleLogout}>로그아웃</Button>
      ) : (
        <div>
          <Button style={{ marginRight: '10px' }} onClick={() => navigate("/")}>
            Main
          </Button>
          <Button style={{ marginRight: '10px' }} onClick={() => navigate("/Join")}>
            회원가입
          </Button>
          <Button onClick={() => navigate("/Login")}>로그인</Button>
        </div>
      )}
    </Navbar>
  );
};

export default Top;


// Navbar 스타일 컴포넌트 정의
const Navbar = styled.nav`
  background-color: hsl(0, 100%, 74%); /* 나브바 배경색 */
  padding: 10px 20px; /* 내부 패딩 */
  display: flex;
  justify-content: flex-end; /* 버튼을 오른쪽에 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%;
`;

// Button 스타일 컴포넌트 정의
const Button = styled.button`
  background-color: #E50914; /* 버튼 배경색 */
  color: #fff; /* 버튼 텍스트 색상 */
  border: none; /* 테두리 제거 */
  padding: 10px 20px; /* 버튼 내부 패딩 */
  border-radius: 5px; /* 버튼 둥근 테두리 */
  cursor: pointer; /* 포인터 커서 효과 */
  transition: background-color 0.2s; /* 배경색 전환 효과 */

  /* 버튼 호버 효과 */
  &:hover {
    background-color: #ff0000; /* 호버 시 배경색 변경 */
  }
`;