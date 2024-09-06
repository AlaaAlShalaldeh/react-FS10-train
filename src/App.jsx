import About from "./About";
import Navbar from "./Navbar";
import Products from "./Products";
import Getproduct from "./Getproduct";


export default function App(){
  return(

    <>
      <Navbar/>
      <Getproduct/>
     <Products title="iphone" description="this is product 1 " price="100"/>
   
    </>
  )
}