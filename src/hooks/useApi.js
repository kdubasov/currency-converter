import {useLayoutEffect, useState} from "react";
import axios from "axios";

export const useApi = (url) =>{
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    const defaultURL = url;

    useLayoutEffect(() =>{
        axios.get(defaultURL).then(res => {
            setData(res.data)
        }).catch(error =>{
            setError(error.message)
        })
    },[defaultURL])

    return {data:data,error:error}
}