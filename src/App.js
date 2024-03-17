import logo from './logo.svg';
import './App.css';
import About from './componants/about/About';
import Contact from './componants/contact/Contact';
import Port from './componants/port/Port';
import Navbar from './componants/navbar/Navbar';
import Footer from './componants/footer/Footer';
import MasterLayout from './componants/masterlayout/MasterLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


let router=createBrowserRouter([
  {path:'',element:<MasterLayout/>,children:[
    {path:'',element:<About/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'port',element:<Port/>},

  ]}
])
function App() {
  return (
   <>
  <RouterProvider router={router}/>
   </>
  );
}

export default App;
