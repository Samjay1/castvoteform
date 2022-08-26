import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/AdminNav";
import Table from "../DashboardComponents/Table"; 
import Login from '../Admin/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Nominee = ()=>{
    const BASE_URL = 'https://castvotegh.awinteck.com/admin';
    // const TEST_URL = 'http://localhost:7001/admin';
    const [form,setForm] = useState(null);
    const [nominee,setNominee] = useState(null);
    // const [totals,setTotals] = useState(null);

    useEffect(()=>{
        axios.all([
            axios.get(`${BASE_URL}/charts`),
            axios.get(`${BASE_URL}/totals`),
        ]).then(axios.spread((Data,totalData)=>{
            let data = Data.data.response
            // let totaldata  = totalData.data.response 
            // setTotals(totaldata)
            setForm(data.forms)
            setNominee(data.nominees)
        }))
    },[])

    
    
    const label = ['Org.Name','Email','Used', 'Form limit','Total Nominees','Status','Date']
     
    let admin_id = window.sessionStorage.getItem('admin_id') 
    if(admin_id){
        return <Login/>
    }else{
        return (
            <>
                <div className="relative min-h-screen md:flex">
                    <Nav nominee={true} />
                    <main className="lg:mx-5 my-5 w-full px-5">
                    {/* <!-- BASIC PROFILE INFO --> */}
                    <p className="text-2xl font-bold text-gray-800">Organiser Accounts </p>
                    <div>
                        <Table table_name={'Organisers table'} table_label={label}
                        table_data={form?.map((value,index)=>{
                            return ({
                                name:value.name,
                                email:value.email,
                                used:value.form_count,
                                limit:value.form_limit,
                                nominee:nominee[index].nominee_count,
                                status:value.status,
                                date:value.date,
                                preview: value.id
                            })
                        })} date={false}  preview={true}  download={false} />
                    </div>
                    </main>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Nominee;