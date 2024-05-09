
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/Authprovider";
import Bookingtable from "./Bookingtable";
import axios from "axios";
import useAxios from "./useAxios";
axiosSecure.delete(`/bookings/${id}`)
.then(res=> {
    const data = res.data 
    const remaining = bookings.filter(booking=> booking._id !== id)
     setBookings(remaining)

})