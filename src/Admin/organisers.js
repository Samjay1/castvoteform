import Footer from '../DashboardComponents/Footer'
import { Link } from "react-router-dom";
import Nav from "../DashboardComponents/AdminNav";

const Forms = ()=>{
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <Nav organisers={true} />
                <main className="lg:mx-5 my-5 w-full px-5">
                {/* <!-- BASIC PROFILE INFO --> */}
                <p className="text-2xl font-bold text-gray-800">Organisers</p>

                <div className='grid grid-cols-2 gap-6'>
                    {/* <!-- Organisers CARDS --> */}
                    <div className="space-y-4 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-gray-100 text-gray-900 shadow-xl   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-gray-800 font-bold text-white transition duration-200">
                               <p className='text-lg mt-1'>Organiser 1</p>
                                <div className='flex space-x-1'>
                                    <Link className="flex p-1 px-4 hover:bg-blue-900 bg-blue-700 rounded-3xl" to={`${process.env.PUBLIC_URL}/admin/dashboard`}>
                                        Active
                                    </Link>
                                    <Link className="flex p-1 px-2 hover:text-blue-700" to={`${process.env.PUBLIC_URL}/admin/Forms`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className="p-4">
                                    <p>Nominee Forms</p>
                                    <p  className="text-3xl">5</p>
                                </div>
                                <div className="p-4">
                                    <p>Total Nominees</p>
                                    <p  className="text-3xl">125</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-gray-100 text-gray-900 shadow-xl   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-gray-800 font-bold text-white transition duration-200">
                               <p className='text-lg mt-1'>Organiser 2</p>
                                <div className='flex space-x-1'>
                                    
                                    <Link className="flex p-1 px-4 hover:bg-blue-900 bg-blue-700 rounded-3xl" to={`${process.env.PUBLIC_URL}/edit`}>
                                        Active
                                    </Link>
                                    
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className="p-4">
                                    <p>Nominee Forms</p>
                                    <p  className="text-3xl">5</p>
                                </div>
                                <div className="p-4">
                                    <p>Total Nominees</p>
                                    <p  className="text-3xl">125</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-gray-100 text-gray-900 shadow-xl   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-gray-800 font-bold text-white transition duration-200">
                               <p className='text-lg mt-1'>Organiser 3</p>
                                <div className='flex space-x-1'>
                                    
                                    <Link className="flex p-1 px-4 hover:bg-red-900 bg-red-700 rounded-3xl" to={`${process.env.PUBLIC_URL}/edit`}>
                                        Deactive
                                    </Link>
                                    
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className="p-4">
                                    <p>Nominee Forms</p>
                                    <p  className="text-3xl">5</p>
                                </div>
                                <div className="p-4">
                                    <p>Total Nominees</p>
                                    <p  className="text-3xl">125</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-gray-100 text-gray-900 shadow-xl   text-sm rounded-xl">
                        <div className="flex justify-between rounded-t-xl px-4 py-2 bg-gray-800 font-bold text-white transition duration-200">
                               <p className='text-lg mt-1'>Organiser 4</p>
                                <div className='flex space-x-1'>
                                    
                                    <Link className="flex p-1 px-4 hover:bg-red-900 bg-red-700 rounded-3xl" to={`${process.env.PUBLIC_URL}/edit`}>
                                        Deactive
                                    </Link>
                                    
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className="p-4">
                                    <p>Nominee Forms</p>
                                    <p  className="text-3xl">5</p>
                                </div>
                                <div className="p-4">
                                    <p>Total Nominees</p>
                                    <p  className="text-3xl">125</p>
                                </div>
                            </div>
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