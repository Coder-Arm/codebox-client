import {Routes,Route} from 'react-router-dom'
import HomePage from './Page/HomePage';
import EditorPage from './Page/EditorPage';
import SignupPage from './Page/SignupPage';
import LoginPage from './Page/LoginPage';
import DashboardPage from './Page/DashboardPage';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/dashboard/editor' element={<EditorPage/>}/>
        </Routes>
        <Toaster  toastOptions={{
            duration:2000,
            style: {
              background: 'black',
              color: 'white',
            },
          }}/>
    </>
  );
}

export default App;
