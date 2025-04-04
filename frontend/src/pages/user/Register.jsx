import React from 'react'
import RegisterForm from '../../components/RegisterForm'

const Register = ({title, registerName, setRegisterName, registerPassword, setRegisterPassword, confirmRegisterPassword, setConfirmRegisterPassword, handleCreateNew}) => {
  return <RegisterForm
            title="Register"
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