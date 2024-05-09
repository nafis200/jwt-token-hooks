

axiosSecure.delete(`/bookings/${id}`)
.then(res=> {
    const data = res.data 
    const remaining = bookings.filter(booking=> booking._id !== id)
     setBookings(remaining)

})