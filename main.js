import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { BreakingBadApp } from './src/breakingbad/breakingbad-app';
import { UsersApp } from './src/users/users-app';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hola Vite!</h1>
    <div id="card">
      
    </div>
    
  </div>
`;

// const title = document.getElementById("app-title");
const element = document.getElementById("card");
UsersApp(element)
// BreakingBadApp(title, element);


