import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Header/Navigation/Navigation';
import Contact from './components/pages/Contact/Contact';
import EmailSend from './components/pages/EmailSend/EmailSend';
import Home from './components/pages/Home/Home';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import ProjectDetails from './components/pages/Projects/ProjectDetails';
import Projects from './components/pages/Projects/Projects';
import Resume from './components/pages/Resume/Resume';

function App() {

  return (
    <div className="App">
      <Navigation/>

     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={''}/>
       <Route path='/project' element={<Projects/>}/>
       <Route path='/resume' element={<Resume/>}/>
       <Route path='/contact' element={<Contact/>}/>

       <Route path='/email-send' element={<EmailSend/>}/>
      <Route path='project/:id' element={<ProjectDetails/>}/>

      <Route path='*' element={<NotFoundPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
