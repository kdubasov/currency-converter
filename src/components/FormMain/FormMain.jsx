import React, {useEffect, useState} from 'react';
import './FormMain.css';
import {useApi} from "../../hooks/useApi";
import {Button, Form} from "react-bootstrap";
import {GLOBAL_CBRF_URL, GLOBAL_CHEH_URL, GLOBAL_NBU_URL, GLOBAL_TURK_URL} from "../../constants/api";

const FormMain = ({lang}) => {

    //coins data
    const [coins,setCoins] = useState({})
    //errors
    const [errorCoins,setErrorCoins] = useState({})
    //bank for api
    const [bank,setBank] = useState(GLOBAL_CBRF_URL)
    //api info
    const data = useApi(bank)

    //coin i have
    const [coinHaveInp,setCoinHaveInp] = useState('')
    const [coinHave,setCoinHave] = useState('RUB')
    //coin trade
    const [coinTradeInp,setCoinTradeInp] = useState(0)
    const [coinTrade,setCoinTrade] = useState('USD')

    const handleCalculate = () =>{
        const kurs = coins[coinTrade]/coins[coinHave]
        setCoinTradeInp(coinHaveInp*kurs)
    }

    useEffect(() =>{
        const checkApiCoins = () =>{
            if (data.data){
                setCoins(data.data['rates'])
            }else {
                setErrorCoins(data.error)
                alert(errorCoins)
                window.location.reload()
            }
        }
        checkApiCoins()
    },[data,errorCoins])

    // console.log(data)
    // console.log(lang)
    // console.log(coins)

    return (
        <div className={`FormMain`}>

            <form>
                <div className={'inp-container'}>
                    <Form.Label>У меня есть</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Введите сумму"
                        value={coinHaveInp}
                        onChange={event => setCoinHaveInp(event.target.value)}
                    />

                    <Form.Select
                        value={coinHave}
                        onChange={event => setCoinHave(event.target.value)}
                    >
                        {
                            coins?
                            Object.keys(coins).map(elem =>(
                                <option
                                    key={elem}
                                    value={elem}
                                >
                                    {elem}
                                </option>
                            )):''
                        }
                        </Form.Select>
                </div>

                <div className={'inp-container bottom'}>
                    <Form.Label>Могу приобрести</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Введите сумму"
                        value={coinTradeInp}
                        disabled={true}
                    />

                    <Form.Select
                        value={coinTrade}
                        onChange={event => setCoinTrade(event.target.value)}
                    >
                        {
                            coins?
                                Object.keys(coins).map(elem =>(
                                    <option
                                        key={elem}
                                        value={elem}
                                    >
                                        {elem}
                                    </option>
                                )):''
                        }
                    </Form.Select>
                    <Button onClick={handleCalculate} className={`mt-2`}>Посчитать</Button>
                </div>

                <div className="select-bank">
                    <Form.Select value={bank} onChange={event => setBank(event.target.value)}>
                        <option value={GLOBAL_CBRF_URL}>Центральный банк РФ</option>
                        <option value={GLOBAL_NBU_URL}>Национальный банк Украины</option>
                    </Form.Select>
                </div>
            </form>

        </div>
    );
};

export default FormMain;