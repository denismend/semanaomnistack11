import React from 'react';

import './global.css';

//import Header from './Header';
import Routes from './routes';

// JSX -- Javascript / XML

function App() {
  /*
  let [count, setCounter] = useState(0);
  // Array [valor, funcao de atualização]

  function increment() {
    setCounter(count + 1);
  }
  */

  return (
    //<Header title="Semana OmniStack" />
    /*
    <div>
      <Header>
        Contador: { count }
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
    */
    <Routes />
  );
}

export default App;
