import Header from '../components/header';
import Footer from '../components/footer';
import '../logo.png';
import { Link } from 'react-router-dom';

const Page2 = ()=>{
   
    const banner_image = window.sessionStorage.getItem('banner_image')
    const title = window.sessionStorage.getItem('title');
    const paymentState = window.sessionStorage.getItem('payment')===1 ? true:false;
    const messageState = window.sessionStorage.getItem('messageState')
    const q_id = window.sessionStorage.getItem('q_id')
    
    console.log(banner_image, title,'paymentstate', paymentState, )
    return(
        <div className='lg:w-2/3 lg:m-auto py-5 mx-4'>
            <div>
                <img className='h-24 m-auto' src={process.env.PUBLIC_URL+"/logo.png"} alt="" />
            </div>
            <Header image={banner_image}/>
            {/* DESCRIPTION */}
            <div className='bg-gray-100 border shadow-lg rounded-xl my-4 px-4 py-3 text-justify'>
                <p className='text-center text-4xl font-bold'>{title}  <span className='text-red-600'>Nomination form</span></p>
                {messageState? <p className='text-center text-3xl font-normal text-green-600 my-5'> <span className='text-gray-600'>Submitted </span>Successfully</p>
                :
                <div className='text-center py-3'>
                    <p className='text-center text-3xl font-normal text-red-600 my-5'> <span className='text-gray-600'>Try Again !! Something went </span>Wrong</p>
                    <Link to={`${process.env.PUBLIC_URL}/${q_id}`} className='bg-blue-600 py-3 px-4 text-lg text-center text-white rounded-3xl'>Go back</Link>
                </div>
                
                }
                
            </div>
            {/* DESCRIPTION */}

            {/* <Text question={'Phone number'}/>
            <Dropdown question={'Payment method'} answers={['Mobile Money', 'Card']}/>
            <Text question={'Email'}/> */}

            {paymentState&&messageState&&
                <Footer key={'footer'} title={'Make payment'}  back_button='false' page={'Thank you'}></Footer>
                }

            <div className='m-3'>
                <p className="text-base text-center text-gray-500">&copy; Copyrights 2020 <a className='hover:text-red-500' href="https://castvotegh.com/">Castvote</a> All rights reserved.</p>
            </div>
        </div>
    )
}

export default Page2