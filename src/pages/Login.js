import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Top from './Top'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 로그인
      await signInWithEmailAndPassword(auth, email, password);
      console.log("로그인 성공");
      navigate("/"); // 로그인 성공 후에 "/" 경로로 이동
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <Top/>

      <LoginForm>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </LoginForm>
    </Wrapper>
  );
};

// 스타일과 export 설정은 이전 코드와 동일
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
  margin-Top: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
export default Login;
