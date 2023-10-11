import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import Top from './Top';

const Join = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(userCredential);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <Wrapper>
      <Top />

      <LoginForm>
        <h2>Join Us!</h2>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
       <Button onClick={() => {
        setRegisterEmail(""); // 이메일 입력 칸 초기화
        setRegisterPassword(""); // 비밀번호 입력 칸 초기화
          register(); // 사용자 생성 함수 호출
          
      }}>Create User</Button>
      </LoginForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;


const LoginForm = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-Top: 200px;
  text-align: center;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Join;
