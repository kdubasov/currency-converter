import {useLayoutEffect, useState} from "react";
import axios from "axios";
import {GLOBAL_DEF_URL} from "../constants/api";

export const useApi = (url) =>{
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    const defaultURL = GLOBAL_DEF_URL + url;

    useLayoutEffect(() =>{
        axios.get(defaultURL).then(res => {
            setData(res.data)
        }).catch(error =>{
            setError(error.message)
        })
    },[defaultURL])

    return {data:data,error:error}
}