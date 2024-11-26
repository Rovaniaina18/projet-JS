// import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import {FaUser, FaLock} from 'react-icons/fa';
import validation from './LoginValidation'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
    const [values, setValues] =useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors ] = useState({})
    const handleImput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/user', values)
            .then(res => {
                console.log(res);
                if (res.data === "success") {
                    navigate('/Dasbord');
                }else{
                    alert("Non renconue le base");
                }
            })
            .catch(err => console.log(err));
        }
    }
    return (
        <div className="tous">
            <div className="wrappperee">
                <form action="" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input--box">
                        <input type="email" placeholder='Entrer email...' name='email' required='required'
                        onChange={handleImput}
                        />
                        <FaUser className='iconee'/>
                    </div>
                    <div className="input--box">
                        <input type="password" placeholder='Entrer code...' name='password' required='required' 
                        onChange={handleImput}
                        />
                        <FaLock className='iconee'/>
                    </div>
                    <div className="remember--forgot">
                        {/* <label><input type="checkbox"/>Remember me</label> */}
                        {/* <Link to="">Forgot password</Link> */}
                    </div>
                    <button type='submit'>Login</button>
                    <div className="register-link">
                        {/* <p>Don't an account? <a href="">Register</a> </p> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login