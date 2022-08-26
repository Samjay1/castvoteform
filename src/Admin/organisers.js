import Footer from '../DashboardComponents/Footer'
import { Link, useNavigate} from "react-router-dom";
import Nav from "../DashboardComponents/AdminNav";
import Login from '../Admin/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Forms = ()=>{
    const navigator = useNavigate();
    const [forms,setForms] = useState([])
    const [nominees,setNominees] = useState([])
    const [message,setMessage] = useState(null);

    const BASE_URL= 'https://castvotegh.awinteck.com/admin';
    // const TEST_URL= 'http://localhost:7001/admin';


    useEffect(()=>{
        axios.get(`${BASE_URL}/charts`)
        .then((response)=>{ 
            setForms(response.data.response.forms)
            setNominees(response.data.response.nominees)

        }).catch((error)=>{
            setForms([])
            setNominees([])
        })
    },[])


    let toggleState = (org_id,status)=>{
        console.log('toggle :>> ',org_id,status);

        axios.post(`${BASE_URL}/toggle_org`, {org_id,status})
        .then((response)=>{
            if(response.data.status){ 
                setMessage('Updated Successfully. NB: DEACTIVATED organisers can\'t be access accounts ') 
                setTimeout(() => {
                    setMessage("")
                    navigator(`${process.env.PUBLIC_URL}/admin/nominees`) 
                }, 2000);
            }
        }).catch((error)=>{
            setMessage('No forms available')
            console.log('error :>> ', error.response.data);
        })
    }

    let list = forms.map((value,index)=>{ 
        return (
            <div key={index} className="space-y-4 py-4 text-gray-200">
            {/* <!-- Enrolled courses card --> */}
            <div className="bg-gray-100 text-gray-900 shadow-xl   text-sm rounded-xl">
            <div className="flex justify-between rounded-t-xl px-4 py-2 bg-gray-800 font-bold text-white transition duration-200">
                   <p className='text-lg mt-1 truncate'>{value.name} (ID: {value.id})</p>
                    <div className='flex space-x-1'>
                        
                        {
                            value.status==='ACTIVE'?
                            <button onClick={()=>{toggleState(value.id,'DEACTIVE')}} className="flex p-1 px-4 hover:bg-blue-900 bg-blue-700 rounded-3xl">
                                Active
                            </button>
                        :
                            <button onClick={()=>{toggleState(value.id,'ACTIVE')}}  className="flex p-1 px-4 hover:bg-red-900 bg-red-700 rounded-3xl">
                                Deactive
                            </button>
                        }
                        
                        <Link className="flex p-1 px-2 hover:text-gray-700" to={`${process.env.PUBLIC_URL}/admin/preview/${value.id}`}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg> 
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="p-4">
                        <p>Nominee Forms</p>
                        <p  className="text-3xl">{value.form_count}/{value.form_limit}</p>
                    </div>
                    <div className="p-4">
                        <p>Total Nominees</p>
                        <p  className="text-3xl">{nominees[index].nominee_count}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    })
   
    let admin_id = window.sessionStorage.getItem('admin_id') 
    if(admin_id){
        return <Login/>
    }else{
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <Nav organisers={true} />
                <main className="lg:mx-5 my-5 w-full px-5">
                {message? <p className='p-3 bg-green-100 text-base'>{message}</p>: null}
                {/* <!-- BASIC PROFILE INFO --> */}
                <p className="text-2xl font-bold text-gray-800">Organisers</p>

                <div className='grid grid-cols-2 gap-6'>
                    {/* <!-- Organisers CARDS --> */}
                 {list}
                    

                   
                </div>
                   
                </main>
           </div>
           <Footer/>
        </>
    )}
}

export default Forms;