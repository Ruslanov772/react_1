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

import React, {useState} from "react";
import Header from "./components/Header/Header";
import FeedbackData from "./data/Feedback";
import FeedBackList from "./components/FeedBackList/FeedBackList";
import FeedBackStat from "./components/FeedBackStat/FeedBackStat";
import FeedBackForm from "./FeedBackForm/FeedBackForm";

const App = () => {
    const [feedBack, setFeetBack] = useState(FeedbackData);
    const deletedFeedBack = (id) => {
        if (window.confirm('Are you sure want to delete ?'))
        setFeetBack(feedBack.filter(el => el.id !== id))
    }
    return (
        <>
            <Header />
            <div className="container">
                <FeedBackForm />
                <FeedBackStat feedBack={feedBack} />
                <FeedBackList feedBack={feedBack} handleDelete = {deletedFeedBack} />
            </div>
        </>
    )
}

export default App