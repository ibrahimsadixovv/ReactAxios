import { createBrowserRouter, Router } from "react-router-dom";
import App from "../App";
import ProductPage from "../ProductPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },

  {
    path: "/product/:id",
    element: <ProductPage/>,
    
  },

  
  
  
]);
export default router
