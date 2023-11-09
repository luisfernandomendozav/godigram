"use client"
import React, { useState } from 'react'
import axios from 'axios'

function LoginForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState('')
    const handleClick = async () => {
        console.log(username, email, password)
        try {
            const res = await axios.post('/api/auth/signup', {username, email, password})
            setUser(res.data.message.username)
            console.log(res)
        } catch (error) {
            setError(error.response.data.message)
            console.log(error)
        }
        
        
    }
    return (
        
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mt-40'>
            {user.length > 0 && 
                <div className="border-b-gray-700 pb-5">
                    <h1 className='block text-lg font-bold mb-2 text-green-700'>{`Welcome ${user}!`}</h1>
                </div>
            }
            <div className="border-b-gray-700 pb-5">
                <h1 className='block text-gray-700 text-lg font-bold mb-2'>Sign Up</h1>
            </div>
            <div className="border-b-gray-700 pb-5">
                <h1 className='block text-lg font-bold mb-2 text-red-700'>{error}</h1>
            </div>
        <form>
            <div className='mb-4'>
                <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2'>
                    Username
                </label>
                <input type='text' id='username' placeholder='Username' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className='mb-6'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                    Email
                </label>
                <input type='text' id='email' placeholder='***************' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className='mb-6'> 
                <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
                    Password
                </label>
                <input type='password' id='password' placeholder='***************' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="flex items-center justify-between">
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Register
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
        </div>
        
        
    )
}

export default LoginForm