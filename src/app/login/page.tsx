"use client"
import LoginForm from '../../components/LoginForm'

function LoginPage() {
  const [name, setName] = useState('Default')
  return (
    <div className=''>
        <LoginForm />
    </div>
  )
}

export default LoginPage