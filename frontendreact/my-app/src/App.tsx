import './App.css';
import './pages/customer/Customer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Customer from './pages/customer/Customer';
import Home from './layout/home/Home';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
  { 
   path: '/',
   element: <RootLayout></RootLayout>, children:[
      { path: '/', element:<Home/>},
      { path: '/customer', element: <Customer/>}
  ]}
])

function App() {
  return (<RouterProvider router={router}/>);
}

export default App;
