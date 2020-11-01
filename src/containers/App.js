import React from 'react';
// import logo from '../assets/logo-e-nundation_transparent.png';
import './App.css';
import {Recipe} from "../components/Recipe"
import {bagels} from "../components/livreRecette"

export const App = () => {
  console.log(bagels)
  return (
    <div className={"grid"}>
      <Recipe recipe={bagels}/>
      <div>Menu</div>
      {/*<Recipe/>*/}
      {/*<div>Menu</div>*/}
      {/*<Recipe/>*/}
      {/*<div>Menu</div>*/}
    </div>

  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React!!!
//           yeye
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
