import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Authprovider";

const Mybookings = () => {
    const [bookings,setBookings] = useState([])
    const {users} = useContext(AuthContext)
    const url = `http://localhost:5008/item?email=${users?.email}`

    
    useEffect(()=>{
        axios.get(url,{withCredentials: true})
        .then(res=>{
            console.log(res.data);
            setBookings(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[url])
    return (
        <div>
            <p className="text-center text-6xl font-bold mb-5">{bookings.length}</p>
            <h1 className="text-5xl text-center font-bold">Hellow mybookings</h1>
            
        </div>
    );
};

export default Mybookings;