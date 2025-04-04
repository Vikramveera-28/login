import React from 'react'
import { 
    Button,
    Grid,
    Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

const LoginForm = ({method, loginName, setLoginName, loginPassword, setLoginPassword, handleLogin}) => {
    const linkRoot = method==="admin"?"/admin/register":"/register";
    const title = method==="admin"?"Admin Login":"Login";
  return (
    <Grid container spacing={2}>
        <Grid size={{xs:12, md:6}} offset={{md:3}} className="border rounded-3 shadow-lg mt-5 pt-3">
            <Typography variant='h4' component="h4" color='primary' align='center' className='fw-bold'>{title}</Typography>
            <form action="" className='p-4' onSubmit={(e)=>e.preventDefault()} method='post'>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        className="form-control"
                        value={loginName}
                        onChange={(e)=>setLoginName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={loginPassword}
                        onChange={(e)=>setLoginPassword(e.target.value)}
                    />
                </div>
                <Button
                    variant='contained'
                    color='primary'
                    className='w-100'
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <div className="row mt-3">
                    <div className="col-12 col-md-5">Forget Password?</div>
                    <div className="col-12 col-md-7 text-end">New User? <span className='text-primary'><Link to={linkRoot} className='text-decoration-none'>Create Account</Link></span></div>
                </div>
            </form>
        </Grid>
    </Grid>
  )
}

export default LoginForm