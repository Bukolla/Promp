import { RouterProvider } from "react-router-dom";
import { Mainroute } from "./router/Mainroute";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";


const App = () => {
  return (
    <div>
      < RouterProvider router={Mainroute} />
      {/* <Signup/> */}
    </div>
  )
}

export default App
