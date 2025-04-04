import React, { Suspense, useState } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom'
import useFetch from "./hooks/useFetch"
import api from './api/ApiUrl';
import Loading from "./components/Loading";
const LazyLogin = React.lazy(()=> import("./pages/user/Login"))
const LazyHome = React.lazy(()=> import("./pages/user/Home"))
const LazyRegister = React.lazy(()=> import("./pages/user/Register"))
const LazyAdminLogin = React.lazy(()=> import("./pages/admin/Login"))
const LazyAdminRegister = React.lazy(()=> import("./pages/admin/Register"))
const LazyAdminHome = React.lazy(()=> import("./pages/admin/Home"))

function App() {
  const [user, setUser, userError, userIsLoading] = useFetch('api/user/')
  const [admin, setAdmin, adminError, adminIsLoading] = useFetch('api/admin/')
  const [LoggedAdmin, setLoggedAdmin, LoggedAdminError, LoggedAdminIsLoading] = useFetch('api/loggedAdmin/')
  const [loginName, setLoginName] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [registerName, setRegisterName] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("")

  const [adminLoginName, setAdminLoginName] = useState("")
  const [adminLoginPassword, setAdminLoginPassword] = useState("")
  const [adminRegisterName, setAdminRegisterName] = useState("")
  const [adminRegisterPassword, setAdminRegisterPassword] = useState("")
  const [adminConfirmRegisterPassword, setAdminConfirmRegisterPassword] = useState("")
  const navigate = useNavigate()

  const handleAdminLogin = async() => {
    const Admin = admin.find(admin=>admin.userName===adminLoginName)
    if (Admin && Admin.password===adminLoginPassword) {
      alert("Successfully Login")
      navigate("/admin")
      setAdminLoginName("")
      setAdminLoginPassword("")
    } else {
      alert("INVALID CREDENTIALS")
      setAdminLoginName("")
      setAdminLoginPassword("")
    }
  }

  const handleCreateNewAdmin = async() => {
    try {
      const Id = admin.length ? admin[admin.length - 1].id + 1 : 1;
      const newObj = {id:Id, userName:adminRegisterName, password:adminRegisterPassword}
      const response = await api.post('/api/admin/', newObj)
      setAdmin(response.data)
      setAdminRegisterName('')
      setAdminRegisterPassword('')
      setAdminConfirmRegisterPassword('')
    } catch (err) {
      console.log(err.message);
      setAdminRegisterName('')
      setAdminRegisterPassword('')
      setAdminConfirmRegisterPassword('')
    }
  }

  const handleUserLogin = async() => {
    const User = user.find(user=>user.userName===loginName)
    if (User && User.password === loginPassword) {
      alert("Login Success")
      navigate("/home")
      setLoginName("")
      setLoginPassword("")
    } else {
      alert("INVALID CREDENTIALS")
      setLoginName("")
      setLoginPassword("")
    }
  }
  const handleCreateNewUser = async() => {
    if (registerPassword===confirmRegisterPassword) {
      try {
        const Id = user.length ? user[user.length-1].id+1 : 1;
        const newObj = {id:Id, userName:registerName, password:registerPassword}
        const response = await api.post('api/user/', newObj)
        setUser(response.data)
        alert("Successfully Create")
        setRegisterName("")
        setRegisterPassword("")
        setConfirmRegisterPassword("")
      } catch (err) {
        console.log(err.message);
        setRegisterName("")
        setRegisterPassword("")
        setConfirmRegisterPassword("")
      }
    } else {
      alert("Passwords are mismatch")
    }
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="" element={
            <LazyLogin
              method="user"
              loginName={loginName}
              setLoginName={setLoginName}
              loginPassword={loginPassword}
              setLoginPassword={setLoginPassword}
              handleLogin={handleUserLogin}/>
          }/>
          <Route path="register" element={
            <LazyRegister
              method="user"
              registerName={registerName}
              setRegisterName={setRegisterName}
              registerPassword={registerPassword}
              setRegisterPassword={setRegisterPassword}
              confirmRegisterPassword={confirmRegisterPassword}
              setConfirmRegisterPassword={setConfirmRegisterPassword}
              handleCreateNew={handleCreateNewUser}
              />}
          />
          <Route path="home" element={<LazyHome />}/>
          <Route path="admin/">
            <Route index element={<LazyAdminHome />}/>
            <Route path="login" element={
              <LazyAdminLogin
                method="admin"
                loginName={adminLoginName}
                setLoginName={setAdminLoginName}
                loginPassword={adminLoginPassword}
                setLoginPassword={setAdminLoginPassword}
                handleLogin={handleAdminLogin}
              />}
            />
            <Route path="register" element={
              <LazyAdminRegister
                method="admin"
                registerName={adminRegisterName}
                setRegisterName={setAdminRegisterName}
                registerPassword={adminRegisterPassword}
                setRegisterPassword={setAdminRegisterPassword}
                confirmRegisterPassword={adminConfirmRegisterPassword}
                setConfirmRegisterPassword={setAdminConfirmRegisterPassword}
                handleCreateNew={handleCreateNewAdmin}
              />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
