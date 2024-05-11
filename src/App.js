import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from './context/context'
import { useEffect,useState } from "react";
import axios from 'axios'
import './App.css'




function App() {
  const router = createBrowserRouter(ROUTES)
  const [data,setData]= useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError] = useState ("")
  useEffect(()=>{
    axios.get("http://localhost:3000/mehsul").then(res=>{
      console.log(res.data)
      setLoading(false)
      setData([...res.data])

    }).catch(error=>{
      setError(error)
      setLoading(false)
    })
  },[])
  const contextData ={
    data,setData,loading,setLoading,error,setError
    
  }

  return(
 
   <MainContext.Provider value={contextData}>
      <RouterProvider router={router}/>
   </MainContext.Provider>)
}
export default App;