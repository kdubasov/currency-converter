import React from 'react';
import FormMain from "./components/FormMain/FormMain";
import {useLocation} from "./hooks/useLocation";

const App = () => {

    console.log(useLocation().data)

    return (
        <div className={`App`}>
            <h1>Главная страница</h1>
            <FormMain />
        </div>
    );
};

export default App;