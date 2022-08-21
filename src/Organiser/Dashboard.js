import { Link } from "react-router-dom";
import Nav from "../DashboardComponents/Nav";
import Footer from "../DashboardComponents/Footer";
import MyBar from "../DashboardComponents/MyBar";
// import MyPie from "../DashboardComponents/MyPie";
// import Table from "../DashboardComponents/DashTable"; 
import '../logo.png';

// import useFetch from '../Network/UseFetch'
import { useEffect, useState } from "react";


const Dashboard = ()=>{

    const BASE_URL= 'https://castvotegh.awinteck.com/organiser';
    // const TEST_URL= 'http://localhost:7001/organiser';


    const [dashboardData, setDashboardData] = useState(null)
    const [chartData, setChartData] = useState([])

    const org_id = window.sessionStorage.getItem('org_id')
    console.log('org_id :>> ', org_id);
        useEffect(()=>{ 
            fetch(`${BASE_URL}/dashboard/${org_id}`)
            .then((response) => response.json())
            .then((response)=>{
                if(response.status){
                    console.log('response.response :>> ', response.response);
                    setDashboardData(response.response)
                    setChartData(response.response.chart)
                }
            }).catch((error)=>{
                console.log('error :>> ', error);
            })
        },[org_id])

        
        const singleForm = chartData?.map((value,index)=>{
            return (
                <div key={index}>
                    <div className="space-y-4 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-blue-100 text-blue-700 shadow-lg   text-sm rounded-xl">
                            <div className="flex justify-between rounded-t-xl px-4 py-2 bg-blue-600 font-bold text-white transition duration-200">
                               <p className='text-lg mt-1 truncate'>{value.title}</p>
                                <div className='flex space-x-1'>
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/edit/${value.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </Link>
                                    {/* <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </Link> */}
                                    <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/${value.id}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg> 
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4">
                                <p>Total Nominees</p>
                                <p  className="text-3xl">{value.nominees}</p>
                            </div>
                            <div className="rounded-b-xl px-4 py-2 bg-blue-200 text-blue-800 hover:bg-blue-300 transition duration-200">
                                <Link className="flex" to={`${process.env.PUBLIC_URL}/nomineestable/${value.id}`}>See Nominees <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg> 
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })

        return (
           <>
           <div className="relative min-h-screen md:flex">
                <Nav dash={true}/>
                <main className="lg:mx-5 my-5 w-full px-5">
                {/* <!-- BASIC PROFILE INFO --> */}
                <p className="text-2xl font-normal text-gray-500">Welcome back,</p>
                <div className="flex space-x-2">
                    <div>
                        <p className="text-xl font-normal"><Link to={`${process.env.PUBLIC_URL}/`} className="text-gray-800 hover:underline">Castvote Organisers</Link></p>
                    </div>
                </div>

                {/* <!-- DASHBOARD CARDS --> */}
                <div className="grid lg:grid-cols-6 grid-cols-1 gap-4">

                
                    <div className="col-span-2 grid grid-cols-1 gap-3 font-normal  md:grid-cols-1 py-4 text-gray-200">
                        {/* <!-- Enrolled courses card --> */}
                        <div className="bg-purple-100 text-purple-700 shadow-lg   text-sm rounded-xl">
                            <div className="p-4">
                                <p>Nominee Forms</p>
                                <p className="text-3xl">{dashboardData?.form_count}</p>
                            </div>
                            <div className="rounded-b-xl px-4 py-2 bg-purple-500 text-white hover:bg-purple-600 transition duration-200">
                                <Link className="flex" to={`${process.env.PUBLIC_URL}/forms`}>see more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg> 
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Completed course card --> */}
                        
                        <div className="bg-red-100 text-red-700 shadow-lg text-sm rounded-xl">
                            <div className="p-4">
                                <p>Nominees</p>
                                <p  className="text-3xl">{dashboardData?.form_count===0? 0 : dashboardData?.nominee_count}</p>
                            </div>
                            <div className="rounded-b-xl px-4 py-2 mt-5 bg-red-600 text-white hover:bg-red-700 transition duration-200">
                                <Link className="flex" to={`${process.env.PUBLIC_URL}/nominees`}>see more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg> 
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Referrals card --> */}
                        {/* <div className="bg-blue-100 shadow-lg text-blue-700  text-sm rounded-xl">
                            <div className="p-4">
                                <p>Payments</p>
                                <p  className="text-3xl"> N/A</p>
                            </div>
                            <div className="rounded-b-xl px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
                                <Link className="flex" to={`${process.env.PUBLIC_URL}/payments`}>see more <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1 ml-3 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg> 
                                </Link>
                            </div>
                        </div> */}
                    </div>

                    <div className="col-span-4 flex flex-wrap space-y-5 lg:space-y-0 my-5  shadow-lg lg:p-4 p-2 border-2  rounded-xl">
                        <div className="overflow-auto relative -z-10 w-full">
                            {chartData?<MyBar data={chartData} barData={'nominees'} xValue={'title'}/> :  <p className="text-2xl mx-auto text-center">No data available yet</p> }
                        </div>
                        {/* <div className="m-auto overflow-auto -z-10">
                            <MyPie  data={chartData} barData={'nominees'} xValue={'nominees'}/>
                        </div> */}
                    </div>
                </div>
                    <div className="flex justify-between border-b border-blue-600 mt-5">
                        <h1 className="text-2xl my-4 ml-1 font-bold">Nominee Forms</h1>
                        <Link className="text-base py-2 px-3 my-3 bg-blue-600 hover:bg-blue-800 text-white rounded-3xl" to={`${process.env.PUBLIC_URL}/Forms`}>View All</Link>

                    </div>
                   <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                        {singleForm? singleForm?.filter((value,index)=> index<3): <p className="text-xl">No data available yet</p>}
                   </div>
                    {/* <div>
                        <Table table_name={'Recent Forms'} table_label={['id','TItle', 'Nominees']}
                        table_data={chartData} />
                    </div> */}
                </main>
           </div>
           <Footer/>
           </>
        
        )

}

export default Dashboard;