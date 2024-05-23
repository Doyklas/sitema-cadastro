import React, { useState } from 'react';
import { Link } from 'react-router-dom/dist';
import axios from 'axios'
 
function Register() {

    const [values, setValues] =useState({
        name: '',
        email: '',
        password: '',
    })
    const handleSubmit = (event) => {
        event.preventDafault();
        axios.post('http://localhost:8081/register', values)
        .then(res => console.log(res))
        .then(err => console.log(err))


    }
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100' >
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name='name' className='form-control rounded-0' 
                        onChange={e => setValues({...values, name: e.target.value})}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="text" placeholder='Enter Email' name='email' className='form-control rounded-0' 
                        onChange={e => setValues({...values, email: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0'
                        onChange={e => setValues({...values, password: e.target.value})}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>You agree to our terms and policies</p>
                
                    <div>
                        <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Register;