import AppHeader from '../appHeader/AppHeader';
import AppFilter from '../appFilter/AppFilter';
import AppTickets from '../appTickets/AppTickets';

function App() {
  return (
    <div className="App">
      <div className="avia">
        <div className="container">
          <AppHeader/>
          <main className="avia__main">
            <AppFilter/>
            <AppTickets/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
