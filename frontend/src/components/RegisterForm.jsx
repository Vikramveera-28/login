import React, { useState } from 'react'
import { 
    Button,
    Grid,
    Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

const RegisterForm = ({method, registerName, setRegisterName, registerPassword, setRegisterPassword, confirmRegisterPassword, setConfirmRegisterPassword, handleCreateNew}) => {
    const linkRoot = method==="admin"? "/admin/login" : "/";
    const title = method==="admin"?"Admin Register":"Register";
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
                            value={registerName}
                            onChange={(e)=>setRegisterName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            value={registerPassword}
                            onChange={(e)=>setRegisterPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            className="form-control"
                            value={confirmRegisterPassword}
                            onChange={(e)=>setConfirmRegisterPassword(e.target.value)}
                        />
                    </div>
                    <Button
                        variant='contained'
                        color='primary'
                        className='w-100'
                        onClick={handleCreateNew}
                    >
                        Register
                    </Button>
                    <div className="row mt-3">
                        <div className="col-12 text-end">Already have accound? <span className='text-primary'><Link to={linkRoot}>Login</Link></span></div>
                    </div>
                </form>
            </Grid>
        </Grid>
  )
}

export default RegisterForm