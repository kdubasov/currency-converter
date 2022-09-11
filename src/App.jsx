import React, {useState} from 'react';
import FormMain from "./components/FormMain/FormMain";

const App = () => {

    const [lang] = useState(window.navigator.language)

    return (
        <div className={`App`}>
            <FormMain lang={lang} />
        </div>
    );
};

export default App;