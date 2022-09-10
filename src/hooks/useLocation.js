import {useEffect, useState} from "react";

export const useLocation = () =>{
    const [location,setLocation] = useState({})
    const [error,setError] = useState('')

    useEffect(() =>{
        navigator.geolocation.watchPosition(position => {
            if (location){
                setLocation(position)
            }else {
                setError("Ошибка получения местоположения.")
            }
        });
    },[])

    return {data:location,error:error}
}