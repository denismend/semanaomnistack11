import React from 'react';

import './global.css';

//import Header from './Header';
import Logon from './pages/Logon';

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
    <Logon />
  );
}

export default App;
