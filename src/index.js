import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
// import App from './App';
// import Employee from './Employees'

// import {Router,Route,Link,browserHistory} from 'react-router'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <Router history={browserHistory}>
//         <Route path="/" component={App} />
//         <Route path="/employee" component={Employee} />
//     </Router>,document.getElementById('root')
// );

ReactDOM.render(<Main />, document.getElementById('root'));
// ReactDOM.render(<Employee />, document.getElementById('next'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();