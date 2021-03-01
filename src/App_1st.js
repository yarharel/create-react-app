import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function P() {
    let הילה = <>hello</>;
    return <p1 color="pink">הילה</p1>
}

function App() {

    const [val, setVal] = useState(true);
    return (
        <div>

            {val ? <P/> : null}
            <br/>
            <button onClick={() => setVal(!val)}>הראל</button>
        </div>
    );
}

export default App;
