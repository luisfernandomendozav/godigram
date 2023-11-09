import React, { useContext } from 'react'
import AppContext from './AppContext'

function Form() {
    const { name, setName } = useContext(AppContext)
    const handleClick = () => {
        setName('New Name')
    }
    return (
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mt-40'>
            <div className='mb-4'>
                <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2'>
                    {name}
                </label>
                <input type='text' id='username' placeholder='Username' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <div className='mb-6'>
                <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
                    Password
                </label>
                <input type='text' id='password' placeholder='***************' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
            </div>
            <div className="flex items-center justify-between">
                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    )
}

export default Form