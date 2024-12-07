import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css'
import AnimeSearch from './pages/Discover';
import ManageUsers from './pages/ManageUsers';
import News from './pages/News';
import ProfilePage from './pages/Profile';
import UserDashboard from './pages/UserDashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  

  return (
    
    <BrowserRouter> 
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/userDashboard" element={<UserDashboard/>}/>
        <Route path="/adminDashboard" element={<ProtectedRoute adminOnly><AdminDashboard/></ProtectedRoute>}/>
        <Route path="/profilepage" element={<ProfilePage/>}/>
        <Route path="/users" element={<ManageUsers/>}/>
        <Route path="/discover" element={<AnimeSearch/>}/>
        <Route path="/news" element={<News/>}/>

      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App