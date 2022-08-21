import Footer from '../DashboardComponents/Footer'
import Nav from "../DashboardComponents/AdminNav";
import Text from '../components/text';
import Upload from '../components/upload';
import Dropdown from '../components/dropdown';

const Forms = ()=>{
    return (
        <>
            <div className="relative min-h-screen md:flex">
                <Nav addform={true} />
                <main className="lg:mx-5 my-5 w-full px-5">
                {/* <!-- BASIC PROFILE INFO --> */}
                <p className="text-2xl font-bold text-gray-800">Add Nominee Form</p>

                <div className='my-4'>
                    <Upload question={'Upload Form Banner Image (Must be landscape 214x45)'}/>
                </div>
                
                <div className='grid lg:grid-cols-2 gap-2 border p-5 rounded-xl'>
                    {/*     QUESTION FORMAT */}
                    <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 1</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>
                    {/*     QUESTION FORMAT */}
                    <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 2</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>

                    {/*     QUESTION FORMAT */}
                    <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 3</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>

                    {/*     QUESTION FORMAT */}
                    <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 4</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>
                    
                      {/*     QUESTION FORMAT */}
                      <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 5</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>
                    

                      {/*     QUESTION FORMAT */}
                      <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 6</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>
                    

                      {/*     QUESTION FORMAT */}
                      <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 7</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>

                    {/*     QUESTION FORMAT */}
                    <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 8</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>


                    {/*     QUESTION FORMAT */}
                    <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 9</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>
                    
                    {/*     QUESTION FORMAT */}
                    <div className='bg-blue-50 p-5 rounded-xl'>
                        <div className='flex justify-between font-bold'>
                            <p className='text-xl'>Question 10</p>
                            <div className='space-x-1'>
                                <label>Add</label> <input type="CHECKBOX"/>
                            </div>
                        </div>
                        <Text question={'Enter the question'}/>
                        <Dropdown question={'Select Response type'} answers={['TEXT', 'TEXTAREA','NUMBER', 'RADIO', 'DROPDOWN', 'CHECKBOX','File Upload','Date']}/>
                    </div>
                </div>
                
                <div className='text-center my-4'>
                    <button className='bg-blue-700 text-white rounded px-4 py-1 font-bold m-auto'>Create Form</button>
                </div>
                

                </main>
           </div>
           <Footer/>
        </>
    )
}

export default Forms;