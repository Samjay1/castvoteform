import Footer from '../DashboardComponents/Footer'
import { Link } from "react-router-dom";
import Nav from "../DashboardComponents/AdminNav";

const Forms = ()=>{
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <Nav form={true} />
                <main className="lg:mx-5 my-5 w-full px-5">
                {/* <!-- BASIC PROFILE INFO --> */}
                <p className="text-2xl font-bold text-gray-800">Nominee Forms</p>
                

                {/* <!-- Nominee CARDS --> */}
                    <div className="space-y-4 lg:w-1/2 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-blue-100 text-blue-700 shadow-lg   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-blue-500 font-bold text-white transition duration-200">
                               <p className='text-lg mt-1'>Nominee Form 1</p>
                                <div className='flex space-x-1'>
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/edit`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4">
                                <p>Total Nominees</p>
                                <p  className="text-3xl">5</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Nominee CARDS --> */}
                    <div className="space-y-4 lg:w-1/2 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-blue-100 text-blue-700 shadow-lg   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-blue-500 font-bold text-white hover:bg-purple-600 transition duration-200">
                               <p className='text-lg mt-1'>Nominee Form 2</p>
                               <div className='flex space-x-1'>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4">
                                <p>Total Nominees</p>
                                <p  className="text-3xl">50</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Nominee CARDS --> */}
                    <div className="space-y-4 lg:w-1/2 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-blue-100 text-blue-700 shadow-lg   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-blue-500 font-bold text-white hover:bg-purple-600 transition duration-200">
                               <p className='text-lg mt-1'>Nominee Form 3</p>
                               <div className='flex space-x-1'>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4">
                                <p>Total Nominees</p>
                                <p  className="text-3xl">13</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Nominee CARDS --> */}
                    <div className="space-y-4 lg:w-1/2 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-blue-100 text-blue-700 shadow-lg   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-blue-500 font-bold text-white hover:bg-purple-600 transition duration-200">
                               <p className='text-lg mt-1'>Nominee Form 4</p>
                               <div className='flex space-x-1'>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </Link>
                                    <Link className="flex p-1 px-2 " to={`${process.env.PUBLIC_URL}/`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4">
                                <p>Total Nominees</p>
                                <p  className="text-3xl">43</p>
                            </div>
                        </div>
                    </div>
                    

                   
                </main>
           </div>
           <Footer/>
        </>
    )
}

export default Forms;