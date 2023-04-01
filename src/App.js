import { useState, useEffect } from "react";
import Movie from "./components/Movie";

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     setToDo("");
//     setToDos((currentArray) => [toDo, ...currentArray]);
//   };
//   return (
//     <div>
//       <h1>My To Dos {toDos.length}</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         />
//         <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState(0);
//   const [money, setMoney] = useState(0);

//   const onChange = (event) => setMoney(event.target.value);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <>
//           <div>
//             <h2>Coins Converter</h2>
//             <label htmlFor="money">MONEY: </label>
//             <input
//               id="money"
//               onChange={onChange}
//               value={money}
//               type="number"
//               placeholder="DOLLAR($)"
//             />
//           </div>

//           <select>
//             {coins.map((coin) => (
//               <option key={coin.id}>
//                 {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD :{" "}
//                 {money / coin.quotes.USD.price} {coin.symbol}
//               </option>
//             ))}
//           </select>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// //USD -> BTC로 전환
// //input 태그를 만들어서 내 보유 금액(ex. 20달러)을 가지고 있다고 적을 수 있게 하고
// //const [money, setMoney] = useState(0);
// //input 태그
// //버튼을 눌러 제출하고 해당 단위 변환
// //소수점 둘째자리까지 A.toFixed(2);
// // 그 돈을 얼만큼의 BTC, ETH, DOGE 등으로 줄 수 있는지 알려줌

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
