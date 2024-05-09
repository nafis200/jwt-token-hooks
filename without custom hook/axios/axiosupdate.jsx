import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import Bookingtable from "./Bookingtable";
import axios from "axios";
import useAxios from "./useAxios";

const handleConfirm = id =>{
    //  fetch(`http://localhost:5007/bookings/${id}`,{
    //     method: 'PATCH',
    //     headers:{
    //         'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify({status: 'confirm'})         })
    //  .then(res => res.json())
    //  .then(data => {
    //      console.log(data)
    //      const remaining = bookings.filter(booking => booking._id !== id)

    //      const updated = bookings.find(booking => booking._id === id)
    //      updated.status = 'confirm'
    //      const newBookings = [updated,...remaining]
    //      setBookings(newBookings)
    //  })
    axiosSecure.patch(`/bookings/${id}`,{
         status: 'confirm'
    })
    .then(res=>{
       const data = res.data
             const remaining = bookings.filter(booking => booking._id !== id)

         const updated = bookings.find(booking => booking._id === id)
         updated.status = 'confirm'
         const newBookings = [updated,...remaining]
         setBookings(newBookings)
    })
}
