import React, { useState } from 'react'
import './login.css'
import { FaLock, FaUserAlt, FaUserCircle } from 'react-icons/fa'
import { useAdminContext } from '@/context/AdminContext'

const Login = () => {
    const { login, wrong } = useAdminContext()

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleClick = () => {
        setIsChecked(!isChecked)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        login(user, password, isChecked)
    }

    return (
        <div className="login-page" onSubmit={onSubmit}>
            <div className='login-box'>
                <div className="form-box2">
                    <div className="header-form2">
                        <h4 className="text-primary text-center" style={{fontSize: '110px'}}>
                            <FaUserCircle />
                        </h4>
                        <div className="image"></div>
                    </div>

                    <div className="body-form">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FaUserAlt />
                                    </span>
                                </div>

                                <input type="text" onChange={ (e) => setUser(e.target.value) } className="form-control" placeholder="Username" />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FaLock />
                                    </span>
                                </div>
                                <input type="password" onChange={ (e) => setPassword(e.target.value) } className="form-control" placeholder="Password" />
                            </div>
                            
                            {
                                wrong && 
                                <p className='text-danger'>Wrong Credentials!</p>
                            }
                            
                            <div className="message">
                                <div>
                                    <input type="checkbox" checked={isChecked} onChange={handleClick} /> Remember ME
                                </div>
                                <div>
                                    <a className='text-white' href="/">Forgot your password</a>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login