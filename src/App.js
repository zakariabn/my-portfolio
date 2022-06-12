import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Header/Navigation/Navigation';
import EmailSend from './components/pages/EmailSend/EmailSend';
import Home from './components/pages/Home/Home';
import ProjectDetails from './components/pages/Projects/ProjectDetails';

function App() {

  return (
    <div className="App">
      <Navigation/>

     <Routes>
       <Route path='/' element={<Home/>}/>
      <Route path='project/:id' element={<ProjectDetails/>}/>

       <Route path='/email-send' element={<EmailSend/>}/>
     </Routes>
    </div>
  );
}

export default App;
