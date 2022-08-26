import { useEffect, useState } from 'react';
import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/AdminNav";
import Table from "../DashboardComponents/Table"; 
import Login from '../Admin/Login';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NomineeTable = ()=>{
    const BASE_URL= 'https://castvotegh.awinteck.com/organiser';
    // const TEST_URL= 'http://localhost:7001/organiser';

    const {id} = useParams();

    const [tableHead, setTableHead] = useState(null)
    const [tableBody, setTableBody] = useState([])

    useEffect(()=>{
        axios.all([
            axios.get(`${BASE_URL}/formnominee/${id}`), 
            axios.get(`${BASE_URL}/question/${id}`)
          ])
          .then(axios.spread((answers, questions) => {
            // output of req.
            let Answers = answers.data.response
            let Questions  = questions.data.response
            
            let QuestionList =  Object.keys(Questions).map((key)=>{
                return Questions[key]
            })

            setTableBody(Answers)
            setTableHead(QuestionList)
            console.log('answers', Answers, 'questions', Questions, QuestionList)
          }));
    },[id])

    
    let admin_id = window.sessionStorage.getItem('admin_id') 
    if(admin_id){
        return <Login/>
    }else{
        return (
            <>
                <div className="relative min-h-screen md:flex">
                    <Nav form={true} />
                    <main className="lg:mx-5 my-5 w-full px-5">
                    {/* <!-- BASIC PROFILE INFO --> */}
                    <p className="text-2xl font-bold text-gray-800">Nominee </p>
                    <div className='overflow-auto relative w-full'>
                        <Table table_name={'Nominee table'} table_label={tableHead}
                        table_data={tableBody} />
                    </div>
                    </main>
            </div>
            <Footer/>
            </>
        )
    }
}

export default NomineeTable;