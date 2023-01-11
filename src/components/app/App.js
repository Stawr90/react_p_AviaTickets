import {useState} from 'react';

import AppHeader from '../appHeader/AppHeader';
import AppFilter from '../appFilter/AppFilter';
import AppTickets from '../appTickets/AppTickets';

function App() {
  const [stopsNum, setStopsNum] = useState();
  const [check, setCheck] = useState(true);

  const currentStops = (num) => {
    setCheck(!check);
    setStopsNum(num);
  }

  return (
    <div className="App">
      <div className="avia">
        <div className="container">
          <AppHeader/>
          <main className="avia__main">
            <AppFilter currentStops={currentStops}/>
            <AppTickets 
              stopsNum={stopsNum}
              check={check}/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
