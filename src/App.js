import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Page1 from './Forms/Page1'
import Page2 from './Forms/Page2'

import Login from './Organiser/Login';
import Register from './Organiser/Register';
import ResetPassword from './Organiser/ResetPassword';
import ForgotPassword from './Organiser/ForgotPassword';
import Dashboard from './Organiser/Dashboard';
import Forms from './Organiser/Forms';
import AddForm from './Organiser/AddForm';
import Nominee from './Organiser/Nominee';
import NomineeTable from './Organiser/NomineeTable';
import Payments from './Organiser/Payments';
import Edit from './Organiser/Edit';

import ALogin from './Admin/Login';
import ARegister from './Admin/Register';
import AResetPassword from './Admin/ResetPassword';
import AForgotPassword from './Admin/ForgotPassword';
import ADashboard from './Admin/Dashboard';
import AForms from './Admin/Forms';
import AAddForm from './Admin/AddForm';
import ANominee from './Admin/Nominee';
import APayments from './Admin/Payments';
import AEdit from './Admin/Edit';
import Organiser from './Admin/organisers';

function App() {
  return (
    <Router basename={'/'}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/:id`} element={<Page1/>}/> 
        <Route path={`${process.env.PUBLIC_URL}/next`} element={<Page2/>}/>
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login/>}/>
        <Route path={`${process.env.PUBLIC_URL}/register`} element={<Register/>}/>
        <Route path={`${process.env.PUBLIC_URL}/resetpassword`} element={<ResetPassword/>}/>
        <Route path={`${process.env.PUBLIC_URL}/forgotpassword`} element={<ForgotPassword/>}/>
        <Route path={`${process.env.PUBLIC_URL}/dashboard`} element={<Dashboard/>}/>
        <Route path={`${process.env.PUBLIC_URL}/Forms`} element={<Forms/>}/>
        <Route path={`${process.env.PUBLIC_URL}/add`} element={<AddForm/>}/>
        <Route path={`${process.env.PUBLIC_URL}/nominees`} element={<Nominee/>}/>
        <Route path={`${process.env.PUBLIC_URL}/nomineestable/:id`} element={<NomineeTable/>}/>
        <Route path={`${process.env.PUBLIC_URL}/payments`} element={<Payments/>}/>
        <Route path={`${process.env.PUBLIC_URL}/edit/:id`} element={<Edit/>}/>
        {/* <Route path={`${process.env.PUBLIC_URL}/settings`} element={<Settings/>}/> */}


        <Route path={`${process.env.PUBLIC_URL}/admin/login`} element={<ALogin/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/register`} element={<ARegister/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/resetpassword`} element={<AResetPassword/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/forgotpassword`} element={<AForgotPassword/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} element={<ADashboard/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/Forms`} element={<AForms/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/add`} element={<AAddForm/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/nominees`} element={<ANominee/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/payments`} element={<APayments/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/edit`} element={<AEdit/>}/>
        <Route path={`${process.env.PUBLIC_URL}/admin/organisers`} element={<Organiser/>}/>
      </Routes>
    </Router>
  );
}

export default App;
 

