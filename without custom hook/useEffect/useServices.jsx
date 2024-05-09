
import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState()
    const url = ""
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        services
        // [a,b,c]
    );
};

export default useServices;