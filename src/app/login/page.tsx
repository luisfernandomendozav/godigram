"use client"
import Form from '../../components/Form'
import {useState} from 'react'
import AppContext from '@/components/AppContext'

function LoginPage() {
  const [name, setName] = useState('Default')
  return (
    <div className=''>
      <AppContext.Provider value={{name, setName}}>
        <Form />
      </AppContext.Provider>
    </div>
  )
}

export default LoginPage