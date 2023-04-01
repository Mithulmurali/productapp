import logo from './logo.svg';
import './App.css';
import Navgbar from './component/Navbar';
import Add from './component/Add';
import View from './component/View';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   
       <div className="App">
     <Navgbar/>
     <Routes>
      <Route path='/'element={<View/>}/>
      <Route path='/add'
      element={<Add
      data={{id:'',name:'',grade:''}}
      method="post"/>}/>
     </Routes>
   
    </div>
  );
}

export default App;
