import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/Nav";
import Text from '../components/text';
import Upload from '../components/upload';
import Dropdown from '../components/dropdown';
import Radio from '../components/radio';
import React,{Component} from 'react';
import axios  from 'axios';
import { useParams } from 'react-router-dom';
import Login from './Login';


const Forms  = ()=>{
    const {id} = useParams();
    console.log(id)
    return <EditForm form_id={id}/>
}

class  EditForm extends Component{
    constructor(){
        super()
        this.state={
            IMAGE_URL: 'https://castvotegh.awinteck.com',
            BASE_URL: 'https://castvotegh.awinteck.com/organiser',
            TEST_URL: 'http://localhost:7001/organiser',
            message:null,
            response:{},
            title:'',
            description:'',
            bannerImage:null,
            question1:'',question2:'',question3:'',question4:'',question5:'',question6:'',question7:'',question8:'',question9:'',question10:'',question11:'',
            resType1:null,resType2:null,resType3:null,resType4:null,resType5:null,resType6:null,resType7:null,resType8:null,resType9:null,resType10:null,
            checkState1:false,checkState2:false,checkState3:false,checkState4:false,checkState5:false,checkState6:false,checkState7:false,checkState8:false,checkState9:false,checkState10:false,
            resValue1:'',resValue2:'',resValue3:'',resValue4:'',resValue5:'',resValue6:'',resValue7:'',resValue8:'',resValue9:'',
            
            fileUploadState:false,
            uploadMessageState:false,
        }
        this.submitForm = this.submitForm.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.onChangeRes = this.onChangeRes.bind(this)
        this.endmessage = this.endmessage.bind(this)
        this.onUploadChange = this.onUploadChange.bind(this)
        this.imageSubmit = this.imageSubmit.bind(this)
    }

    onUploadChange = (e)=>{
        console.log(e.target.files[0])
        this.setState({
            bannerImage: e.target.files[0]
        })
    }
    imageSubmit = ()=>{
        let formdata = new FormData();
        console.log('upload', this.state.bannerImage,'old_image', this.state.response?.banner_image)
        formdata.append('upload', this.state.bannerImage)
        let q_id = this.state.response?.id
        console.log('q_id :>> ', q_id);
        formdata.append('q_id', q_id)
        formdata.append('old_image', this.state.response?.banner_image)
        axios.post(`${this.state.BASE_URL}/updatebanner`, formdata)
        
        .then((response)=>{
            let message = response.data.message
            this.setState({
                message:message,
                uploadMessageState:`${message}: Refresh to see new banner image`
            })
            this.endmessage()
            console.log('response post:>>', message);
        }).catch((error)=>{
            let message = error.data?.message || 'System error'
            this.setState({
                message:message,
                uploadMessageState:`${message}: Try again`
            })
            this.endmessage()
            console.log('error dff :>> ', message);
        })
    }

    componentDidMount(){
        let getFormData = (form_id)=>{
            axios.get(`${this.state.BASE_URL}/getform/${form_id}`)
            .then((response)=>{
                let data = response.data.response;
                console.log(data)
                this.setState({
                    response:data,
                    title:data.title,description:data.description,
                    question1:data.q1,question2:data.q2,question3:data.q3,question4:data.q4,question5:data.q5,question6:data.q6,question7:data.q7,question8:data.q8,question9:data.q9,question10:data.q10,question11:data.q11,
                    resType1:data.r1,resType2:data.r2,resType3:data.r3,resType4:data.r4,resType5:data.r5,resType6:data.r6,resType7:data.r7,resType8:data.r8,resType9:data.r9,resType10:data.r10,resType11:data.r11,
                    resValue1:data.rv1,resValue2:data.rv2,resValue3:data.rv3,resValue4:data.rv4,resValue5:data.rv5,resValue6:data.rv6,resValue7:data.rv7,resValue8:data.rv8,resValue9:data.rv9,resValue11:data.rv11,
                    fileUploadState:data.q10?true:false,
                }) 
            }).catch((error)=>{
                console.log('error :>> ', error);
            })
        }

        let form_id = this.props.form_id;
        console.log('FORM ID :>> ', form_id);
        getFormData(form_id)

    }

    onChangeValue =(e)=>{
        console.log('Question',e.target.name,e.target.value)
         
        switch(e.target.name){
            case 'q1':
                this.setState({
                    question1: e.target.value
                })
                break;
            case 'q2':
                this.setState({
                    question2: e.target.value
                })
                break;
            case 'q3':
                this.setState({
                    question3: e.target.value
                })
                break;
            case 'q4':
                this.setState({
                    question4: e.target.value
                })
                break;
            case 'q5':
                this.setState({
                    question5: e.target.value
                })
                break;
            case 'q6':
                this.setState({
                    question6: e.target.value
                })
                break;
            case 'q7':
                this.setState({
                    question7: e.target.value
                })
                break;
            case 'q8':
                this.setState({
                    question8: e.target.value
                })
                break;
            case 'q9':
                this.setState({
                    question9: e.target.value
                })
                break;
            case 'q10':
                this.setState({
                    question10: e.target.value,
                    fileUploadState: e.target.value==='YES'? true:false
                })
                break;
            case 'q11':
                this.setState({
                    question11: e.target.value
                })
                break;
            default:
                break;
    }
    }

    onChangeRes =(e)=>{
        console.log('respTYpe:',e.target.name,e.target.value)
        
        switch(e.target.name){
            case 'resp1':
                this.setState({
                    resType1: e.target.value
                })
                break;
            case 'resp2':
                this.setState({
                    resType2: e.target.value
                })
                break;
            case 'resp3':
                this.setState({
                    resType3: e.target.value
                })
                break;
            case 'resp4':
                this.setState({
                    resType4: e.target.value
                })
                break;
            case 'resp5':
                this.setState({
                    resType5: e.target.value
                })
                break;
            case 'resp6':
                this.setState({
                    resType6: e.target.value
                })
                break;
            case 'resp7':
                this.setState({
                    resType7: e.target.value
                })
                break;
            case 'resp8':
                this.setState({
                    resType8: e.target.value
                })
                break;
            case 'resp9':
                this.setState({
                    resType9: e.target.value
                })
                break;
            case 'resp11':
                this.setState({
                    resType11: e.target.value
                })
                break;
            default:
                break;
    }
    }

    submitForm = ()=>{
        // TODO: submit data to api
        if(this.state.title?.length===0 || this.state.question1?.length===0){
            this.setState({
                message:'Please fill Title and Question(ATLEAST ONE) before submitting...'
            })
            this.endmessage();

            return;
        }

        let body ={
            form_id: this.props.form_id,
            title:this.state.title,
            description:this.state.description,
            q1:this.state.question1,
            q2:this.state.question2,
            q3:this.state.question3,
            q4:this.state.question4,
            q5:this.state.question5,
            q6:this.state.question6,
            q7:this.state.question7,
            q8:this.state.question8,
            q9:this.state.question9,
            q10:this.state.question10==="YES"? 'Upload Picture': '',
            q11:this.state.question11,
            r1:this.state.resType1,
            r2:this.state.resType2,
            r3:this.state.resType3,
            r4:this.state.resType4,
            r5:this.state.resType5,
            r6:this.state.resType6,
            r7:this.state.resType7,
            r8:this.state.resType8,
            r9:this.state.resType9,
            r10:'File Upload', //has defualt value in DB already-- can be ignored
            r11:this.state.resType11,

            rv1:this.state.resValue1,
            rv2:this.state.resValue2,
            rv3:this.state.resValue3,
            rv4:this.state.resValue4,
            rv5:this.state.resValue5,
            rv6:this.state.resValue6,
            rv7:this.state.resValue7,
            rv8:this.state.resValue8,
            rv9:this.state.resValue9,
        }
        console.log('Update response:>> ', body);
        let org_id = window.sessionStorage.getItem('org_id');
        console.log('Org id addup',org_id, this.props.form_id)

        
        axios.post(`${this.state.BASE_URL}/updateform`, body)
        
        .then((response)=>{
            let message = response.data.message
            this.setState({
                message:message
            })
            this.endmessage()
            console.log('response post:>>', message);
        }).catch((error)=>{
            let message = error.data.message
            this.setState({
                message:message
            })
            this.endmessage()
            console.log('error :>> ', message);
        })
    }

    endmessage = () => {
        setTimeout(() => {
            console.log('timeout called')
            this.setState({
                message:null
            })
        }, 3000);
    }
    
    
    render(){
        // console.log(`${this.state.IMAGE_URL}/${this.state.response?.banner_image}`)
        let org_id = window.sessionStorage.getItem('org_id')
        console.log('resValue', this.state.resValue1)
        if(!org_id){
            return <Login/>
        }else{
            return(
            <>
                <div className="relative min-h-screen md:flex">
                    <Nav addform={true} />
                    <main className="lg:mx-5 my-5 w-full px-5">
                    {this.state.message?
                    <div className='bg-green-50 p-4 my-3  font-bold  text-xl border shadow-lg rounded-xl'>{this.state.message}</div>:
                    null}
                        
                        {/* <!-- BASIC PROFILE INFO --> */}
                        <p className="text-2xl font-bold text-gray-800">Update: {this.state.title}</p>
                        <div className='my-4'>
                        
                            <div className="border my-5 space-y-2 lg:w-1/2 p-5 shadow-xl rounded-xl">
                                <p className='pl-2 text-2xl'>Form Title</p>
                                <label>
                                    <input name={'title'} onChange={(e)=>{this.setState({title:e.target.value})}} value={this.state.title} type="text" className=" border-b focus:outline-none w-full focus:border-black text-input rounded-0 pb-2 px-2 hover:bg-red-50"  placeholder="Enter the Title"/>
                                </label>
                            </div>

                            <div className="border my-5 space-y-2  p-5 shadow-xl rounded-xl">
                                <p className='pl-2 text-2xl'>Form Description </p>
                                <label>
                                    <textarea name={'description'} value={this.state.description}  onChange={(e)=>{this.setState({description:e.target.value})}} className="border-b border-r  focus:outline-none w-full focus:border-black text-input rounded-b py-2 px-2 hover:bg-red-50"  placeholder="Type your response">
                                    
                                    </textarea>
                                </label>
                            </div>
                        </div>
                        
                        <div className='grid lg:grid-cols-2 gap-2 border p-5 rounded-xl'>
                            <div className='col-span-2 py-4'>
                                {/*     QUESTION FORMAT */}
                                <img className="h-80 w-full object-cover rounded-xl  shadow-lg" src={this.state.response?.banner_image? `${this.state.IMAGE_URL}/${this.state.response?.banner_image}` :"https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg"} alt="" />
                                <div className='my-4'>
                                    <Upload question={'Change Banner Image (Must be landscape 214x45)'} onValueChange={this.onUploadChange}/>
                                    {this.state.uploadMessageState&& <p className='bg-green-500 p-2 text-base rounded-lg my-2'>{this.state.uploadMessageState}</p>}
                                    <button onClick={this.imageSubmit} className='px-3 py-2 hover:bg-gray-500 my-4 bg-gray-700  rounded-2xl text-white'>Update Image</button>
                                </div>
                            </div>
                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'> Nominee profile image</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.fileUploadState} readOnly/>
                                    </div>
                                </div>
                                <Radio question={`Do you want to accept Nominee profile image : ${this.state.fileUploadState?'YES':'NO'}`} questionName={'q10'} answers={['YES', 'NO']} onValueChange={this.onChangeValue}/>
                            </div>
                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                            <div className='flex justify-between font-bold'>
                                <p className='text-xl'>Question 1</p>
                                <div className='space-x-1'>
                                    <label>Add</label> <input type="checkbox" checked={this.state.question1?true:false} readOnly/>
                                </div>
                            </div>
                                <Text question={'Enter the question'} questionName={'q1'} OnChangeValue={this.onChangeValue} myValue={this.state.question1}/>
                                <Dropdown question={`Select Response type: ${this.state.resType1?this.state.resType1:''}`} questionName={'resp1'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType1==='DROPDOWN' || this.state.resType1==='RADIO' || this.state.resType1==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue1:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue1}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}

                            </div>
                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 2</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question2?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q2'} OnChangeValue={this.onChangeValue} myValue={this.state.question2}/>
                                <Dropdown question={`Select Response type: ${this.state.resType2?this.state.resType2:'' }`} questionName={'resp2'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType2==='DROPDOWN' || this.state.resType2==='RADIO' || this.state.resType2==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue2:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue2}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}

                            </div>

                            {/*     QUESTION FORMAT */}
                        <div className=' col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 3</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question3?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q3'} OnChangeValue={this.onChangeValue} myValue={this.state.question3}/>
                                <Dropdown question={`Select Response type: ${this.state.resType3?this.state.resType3:'' }`} questionName={'resp3'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType3==='DROPDOWN' || this.state.resType3==='RADIO' || this.state.resType3==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue3:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue3}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}
                        
                        </div>

                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 4</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question4?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q4'} OnChangeValue={this.onChangeValue} myValue={this.state.question4}/>
                                <Dropdown question={`Select Response type: ${this.state.resType4?this.state.resType4:'' }`} questionName={'resp4'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType4==='DROPDOWN' || this.state.resType4==='RADIO' || this.state.resType4==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue4:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue4}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}
                        
                        </div>

                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 5</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question5?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q5'} OnChangeValue={this.onChangeValue} myValue={this.state.question5}/>
                                <Dropdown question={`Select Response type: ${this.state.resType5?this.state.resType5:'' }`} questionName={'resp5'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType5==='DROPDOWN' || this.state.resType5==='RADIO' || this.state.resType5==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue5:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue5}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}

                            </div>

                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 6</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question6?true:false}readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q6'} OnChangeValue={this.onChangeValue} myValue={this.state.question6}/>
                                <Dropdown question={`Select Response type: ${this.state.resType6?this.state.resType6:'' }`} questionName={'resp6'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType6==='DROPDOWN' || this.state.resType6==='RADIO' || this.state.resType6==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue6:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue6}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}
                            
                            </div>

                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 7</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question7?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q7'} OnChangeValue={this.onChangeValue} myValue={this.state.question7}/>
                                <Dropdown question={`Select Response type: ${this.state.resType7?this.state.resType7:'' }`} questionName={'resp7'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType7==='DROPDOWN' || this.state.resType7==='RADIO' || this.state.resType7==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue7:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue7}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}

                        </div>

                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 8</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question8?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q8'} OnChangeValue={this.onChangeValue} myValue={this.state.question8}/>
                                <Dropdown question={`Select Response type: ${this.state.resType8?this.state.resType8:'' }`} questionName={'resp8'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType8==='DROPDOWN' || this.state.resType8==='RADIO' || this.state.resType7==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue7:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue8}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}
                        
                        </div>

                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 9</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question9?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q9'} OnChangeValue={this.onChangeValue} myValue={this.state.question9}/>
                                <Dropdown question={`Select Response type: ${this.state.resType9?this.state.resType9:'' }`} questionName={'resp9'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {this.state.resType9==='DROPDOWN' || this.state.resType9==='RADIO' || this.state.resType9==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue9:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other ' value={this.state.resValue9}></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null}
                        
                        </div>

                            {/*     QUESTION FORMAT */}
                            <div className='col-span-2 lg:col-span-1 bg-blue-50 p-5 rounded-xl'>
                                <div className='flex justify-between font-bold'>
                                    <p className='text-xl'>Question 11</p>
                                    <div className='space-x-1'>
                                        <label>Add</label> <input type="checkbox" checked={this.state.question11?true:false} readOnly/>
                                    </div>
                                </div>
                                <Text question={'Enter the question'} questionName={'q11'} OnChangeValue={this.onChangeValue} myValue={this.state.question11}/>
                                <Dropdown question={`Select Response type: ${this.state.resType11?this.state.resType11:'' }`} questionName={'resp11'} onValueChange={this.onChangeRes} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','Date']} />
                                {/* for getting extra response values for checkbox, radio and dropdown res types */}
                                {/* {this.state.resType1==='DROPDOWN' || this.state.resType1==='RADIO' || this.state.resType1==='CHECKBOX'? 
                                <div>
                                    <textarea onChange={(e)=>{this.setState({resValue1:e.target.value})}} className='w-full rounded-xl py-6 px-5 mt-2 bg-white space-y-3 shadow-lg' placeholder='eg. Male=Female=other '></textarea>
                                    <p className='text-red-500 ml-1'>NB: Seperate your expected response with = </p>
                                </div>: null} */}
                        
                        </div>
                        </div>
                        {this.state.message?
                    <div className='bg-green-50 p-4 my-4 font-bold text-xl border shadow-lg rounded-xl'>{this.state.message}</div>:
                    null}
                        <div className='text-center my-4'>
                            <button onClick={this.submitForm} className='bg-blue-700 text-white rounded px-4 py-1 font-bold m-auto'>Update Form</button>
                        </div>
                    </main>
            </div>
            <Footer/>
            </>
            );
       }
    }
}

export default Forms;