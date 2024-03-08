import { createStore, createApi } from "effector";
import { useUnit } from "effector-react";



import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const $count = createStore(0);

const { increment, decrement } = createApi($count, {
  increment: (state) => state + 1,
  decrement: (state) => state - 1,
});


function App() {
  const count = useUnit($count);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      <div className="card">
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => decrement()}>decrement</button>
       
        <p>
        count is {count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
