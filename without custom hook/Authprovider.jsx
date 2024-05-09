import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,  signOut } from "firebase/auth";
import auth from "./Firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext(null)


const Authprovider = ({children}) => {
    
    const [users,setUsers] = useState()
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
         setLoading(true)
         return signOut(auth)
    }

    useEffect(()=>{
          const unSubscrive = onAuthStateChanged(auth,currentUser=>{

            const userEmail = currentUser?.email || users?.email
            const loggedUser = {email : userEmail}
            console.log('observing current user inside useEffect', currentUser);
            setUsers(currentUser)
            setLoading(false)
            if(currentUser){
                
                axios.post('http://localhost:5008/jwt', loggedUser,{withCredentials: true})
                .then(res => console.log(res.data))
            }
            else{
               axios.post('http://localhost:5008/logout',loggedUser,{
                 withCredentials: true
               })
               .then(res=>{
                   console.log(res.data)
               })
            }
          })
          return ()=>{
            unSubscrive()
        }
    },[])
    const authInfo = {users,createUser,loading,signInUser, logout}
    return (
        <AuthContext.Provider value = {authInfo}>
              {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;