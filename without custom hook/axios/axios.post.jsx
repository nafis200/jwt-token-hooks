// import { useContext } from "react";
// import { AuthContext } from "./components/Authprovider";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import useAuth from "./components/useAuth";
import useAxiosSecure from "./components/useAxiosSecure";



const Login = () => {
    // const {signInUser} = useContext(AuthContext)
    const {signInUser} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const axiosSecure = useAxiosSecure()
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        signInUser(email,password)
        .then(result=>{
           const loggedUser = result.user;
           console.log(loggedUser)
           const user = {email}
        //   -------- 1st step --------------
          //  axios.post('http://localhost:5008/jwt',user,{withCredentials:true})
        
        //   -------- 2nd step --------------
          axiosSecure.post('/jwt',user)

        //   ------- then is same both step ---------
           .then(res =>{
              console.log(res.data,"withcredential axiospost");
              console.log(res.data.success);
              if(res.data.success){
                
                   navigate(location?.state ? location?.state : '/')
              }
           })
          //  navigate(location?.state ? location?.state : '/')
        })
        //  ---------- signInUser -------------
        .catch(error=>{
           console.log(error.message)
        })
        
    }
    return (
        
    );
};

export default Login;