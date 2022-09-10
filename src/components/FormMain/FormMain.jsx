import React from 'react';
import './FormMain.css';
import {useApi} from "../../hooks/useApi";

const FormMain = () => {

    const data = useApi('')
    console.log(data)

    return (
        <div className={`FormMain`}>

        </div>
    );
};

export default FormMain;