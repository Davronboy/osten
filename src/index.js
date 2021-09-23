import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-sm-10 col-md-8 col-lg-6 py-5">
//             <Todo tasks={tasks} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App;


















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
