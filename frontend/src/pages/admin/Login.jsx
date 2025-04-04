import React from 'react'
import LoginForm from '../../components/LoginForm';

const Login = ({method, loginName, setLoginName, loginPassword, setLoginPassword, handleLogin}) => {
  return (
    <div>
        <LoginForm
            method={method}
            loginName={loginName}
            setLoginName={setLoginName}
            loginPassword={loginPassword}
            setLoginPassword={setLoginPassword}
            handleLogin={handleLogin}
        />
    </div>
  )
}
export default Login;