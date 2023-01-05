
import './App.scss';
import Datafetch from './components/Datafetch/Datafetch';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App() {
  return (
   <div >
    <Navbar/>
    <Profile/>
    <Datafetch/>
   </div>
  );
}

export default App;
