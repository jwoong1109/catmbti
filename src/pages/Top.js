import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Top = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // 다크 모드 상태 추가
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 처리 로직을 구현
    // 성공적으로 로그인하면 setIsLoggedIn(true)를 호출
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직을 구현
    // 성공적으로 로그아웃하면 setIsLoggedIn(false)를 호출
    setIsLoggedIn(false);
  };

  const toggleDarkMode = () => {
    // 다크 모드 상태를 토글
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      // 다크 모드 활성화
      document.body.style.backgroundColor = '#000'; // 배경색을 어두운 색으로 변경
      document.body.style.color = '#fff'; // 글자색을 밝은 색으로 변경
    } else {
      // 라이트 모드 활성화
      document.body.style.backgroundColor = '#fff'; // 배경색을 밝은 색으로 변경
      document.body.style.color = '#000'; // 글자색을 어두운 색으로 변경
    }
  };
  return (
    <Navbar>
      <DarkModeButton style={{ marginRight: '10px' }} onClick={toggleDarkMode}>
        {isDarkMode ? '라이트 모드' : '다크 모드'}
      </DarkModeButton>
        <div>
          <Button style={{ marginRight: '10px' }} onClick={() => navigate('/')}>
            Main
          </Button>
          <Button style={{ marginRight: '10px' }} onClick={() => navigate('/Join')}>
            회원가입
          </Button>
          <Button style={{ marginRight: '10px' }} onClick={() => navigate('/Login')}>
            로그인
          </Button>
        </div>
    </Navbar>
  );
};

export default Top;

// 나머지 스타일과 컴포넌트는 이전 코드와 동일하게 유지됩니다.

const Navbar = styled.nav`
  background-color: hsl(0, 100%, 74%);
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  background-color: #E50914;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff0000;
  }
`;

const DarkModeButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #000;
  }
`;
