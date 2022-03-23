// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//     const title = 'Hello Worlds';
//
//     const arr = [
//         {name: 'Roma', id:1,},
//         {name: 'Puma', id:2,},
//         {name: 'Jack', id:3,},
//     ];
//
//     const isAuth = false;
//
//   return (
//       <>
//         <div className={'div'}>
//           <h1 className={'container'}>{title}</h1>
//             <h3>Count ({arr.length})</h3>
//             <ul>
//                 {arr.map(user => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//             {isAuth ? <button>Выйти</button> :  <button>Войти</button>}
//         </div>
//       </>
//   );
// }
//
// export default App;

import React from "react";
import Header from "./Components/Header/Header";
import FeedbackItem from "./Components/FeedBackItem/FeedbackItem";

const App = () => {
    return (
        <>
            <Header />
            <FeedbackItem/>
        </>
    )
}

export default App