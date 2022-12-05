import './App.css';
import React from 'react';


import PostsList from './componenets/PostsList';

import Update from './Update'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import PostForm from './componenets/PostForm';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      

        <Route path="/" element={<PostForm></PostForm>}>
        
            

        </Route>

        <Route path="/list" element={<PostsList />}>
            
        </Route>


        <Route path='/update' element={<Update/>}>

        </Route>
      </Routes>

      
      
      
    </ div>
    </Router>
    
   
    
  );
}

export default App;
