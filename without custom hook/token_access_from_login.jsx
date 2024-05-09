import { useContext } from "react";
import { AuthContext } from "./components/Authprovider";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";



const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        signInUser(email,password)
        .then(result=>{
           const loggedUser = result.user;
           console.log(loggedUser)
           const user = {email}

           axios.post('http://localhost:5008/jwt',user,{withCredentials:true})

           .then(res =>{
              console.log(res.data,"withcredential");
              console.log(res.data.success);
              if(res.data.success){
                
                   navigate(location?.state ? location?.state : '/')
              }
           })

          //  navigate(location?.state ? location?.state : '/')
        })
        .catch(error=>{
           console.log(error.message)
        })
        
    }
    return (
        <div>
            <p className="text-center text-5xl">I am Login</p>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-12 w-1/2">
     <img src="https://i.ibb.co/T2cpBd5/888.jpg" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          className="input input-bordered"
          name = "email"
          required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"
          name ="password"
          required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;