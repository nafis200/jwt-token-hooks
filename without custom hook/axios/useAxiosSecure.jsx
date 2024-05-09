
import axios from "axios"

const axiosSecure = axios.create({
     baseURL: 'http://localhost:5008',
     withCredentials: true
})


const useAxiosSecure = () => {
    return (
         axiosSecure
    );
};

export default useAxiosSecure;


// it you get any response like 401 403 then you use interceptors if 200 then call use else error and logout it



// import axios from "axios"
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router";

// const axiosSecure = axios.create({
//      baseURL: 'http://localhost:5008',
//      withCredentials: true
// })


// const useAxiosSecure = () => {
//     const {logout} = useAuth()
//     const navigate = useNavigate()

//     useEffect( () =>{
 
        
//         axiosSecure.interceptors.response.use(res=> {
               // console.log(res.data)
//             return res
//         },

//         error =>{
//              console.log(error.response,'error response')
//              if(error.response.status === 401 || error.response.status === 403){
//                 console.log('logout the user')
//                 logout()
//                 .then(()=>{
//                      navigate('/login')
//                 })
//                 .catch(error => {
//                     console.log(error)
//                 })
//              }
//         }
    
//        )

//     },[])

//     return (
//          axiosSecure
//     );
// };

// export default useAxiosSecure;