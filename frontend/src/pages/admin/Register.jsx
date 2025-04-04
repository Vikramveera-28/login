import React from 'react'
import RegisterForm from '../../components/RegisterForm'

const Register = ({method, registerName, setRegisterName, registerPassword, setRegisterPassword, confirmRegisterPassword, setConfirmRegisterPassword, handleCreateNew}) => {
  return <RegisterForm
            method={method}
            registerName={registerName}
            setRegisterName={setRegisterName}
            registerPassword={registerPassword}
            setRegisterPassword={setRegisterPassword}
            confirmRegisterPassword={confirmRegisterPassword}
            setConfirmRegisterPassword={setConfirmRegisterPassword}
            handleCreateNew={handleCreateNew}
        />
}

export default Register