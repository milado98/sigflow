import { useRef, useState, useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineKey } from 'react-icons/hi';
import Logo from '../assets/images/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import SignInOptions from '../components/SignInOptions';

const SignIn = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://sig-staging-api-a4c37da3d933.herokuapp.com/auth/login', {
                email: user,
                password: pwd,
            });
            setErrMsg('');
            navigate('/dashboard');
        } catch (error) {
            if (error.response) {
                setErrMsg(error.response.data.message)
            } else {
                setErrMsg('Network error. Please try again.')
            }
        }
    }

  return (
    <section className='md:w-11/12 mx-auto'>
        <img src={Logo} alt="logo" className='my-8 p-3 md:p-0' />
        <section className='border-2 rounded-lg border-solid w-11/12 md:w-[420px] mx-auto my-auto min-h-[430px] p-2 md:p-7'>
            <h1 className='text-[24px] font-medium text-center'>Welcome Back!</h1>
            <p className='text-sm text-[#828282] text-center'>Sign in to access your account</p>
            <p ref={errRef} aria-live='assertive' className='text-sm font-semibold py-2 px-2 text-[#d53232] rounded-lg'>{errMsg}</p>
            <form className='mt-4' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label><br />
                <input 
                    type="email"
                    id='email'
                    ref={userRef}
                    className='w-full p-1 rounded my-2 border-2'
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                /><br />
                <label htmlFor="password">Password</label><br />
                <input 
                    type="password"
                    id='password'
                    className='w-full p-1 rounded mt-2 border-2'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <p className='text-[#32D583] cursor-pointer'>forgot password?</p>
                <button className='text-white bg-[#32D583] w-full py-1 rounded mt-10 h-[40px]' type='submit'>Sign In</button>
                <p className='text-center text-[#828282] mt-4'>OR</p>
                <div className='flex flex-wrap justify-center gap-[4px] mx-auto my-5 w-11/12'>
                    <SignInOptions text='GitHub' image={<BsGithub size='28px'/>}/>
                    <SignInOptions text='Google' image={<FcGoogle size='28px'/>}/>
                    <SignInOptions text='SSO' image={<HiOutlineKey size='28px' color='#32D583'/>}/>
                </div>
            </form>
        </section>
        <p className='text-center mt-1'>Don’t have an account? <span className='cursor-pointer text-[#32D583]'>Sign Up</span></p>
    </section>
  )
}

export default SignIn