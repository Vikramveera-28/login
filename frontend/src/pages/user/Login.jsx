import React from 'react'
import LoginForm from '../../components/LoginForm';

const Login = ({title, loginName, setLoginName, loginPassword, setLoginPassword, handleLogin}) => {
  return (
    <div>
        <LoginForm
            title={title}
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