import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


function MovieItem(props) {
    console.log(props);
    return(
        <div>
            <p>Title</p>
            <p>8.0</p>
        </div>
    )
}
function App(){
    return (
    <div>
        <MovieItem title="Title new"/>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();