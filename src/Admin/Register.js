import { Link } from "react-router-dom"
import TextInput from "../DashboardComponents/TextInput"

const Register = ()=>{
    return(
        <>
            <div className="border border-red-100 my-6 py-4 lg:w-1/4 mx-auto w-11/12 text-gray-700 shadow-lg rounded-3xl">
                <div>
                    <img className='h-16 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
                </div>
                <p className="text-3xl font-bold text-center ">Sign <span className='text-red-600'>Up</span></p>
                <p className="text-xl underline font-bold text-center ">Admin</p>
                <p className='text-center mx-2'>Already have an account? <Link className='text-red-600 hover:underline'  to={`${process.env.PUBLIC_URL}/admin/login`}>Sign In</Link></p>

                <div className='px-4 my-4 space-y-3'>
                    <TextInput title={'Email'} label={'Enter email address'} inputname={'email'} inputtype={'email'}/>

                    <TextInput title={'Password'} label={'Enter password'} inputname={'password'} inputtype={'password'}/>

                    <TextInput title={'Confirm Password'} label={'Enter password'} inputname={'cpassword'} inputtype={'password'}/>
                    

                    <div className='text-center'>
                        <button className='bg-gray-700 text-white rounded px-4 py-1 font-bold m-auto'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register