import './App.css';
import Header from './Header';
import Container from './Container';
import Provider from './Provider';

function App() {
  

  return (
    <Provider>
      <main>
        <Header/>
        <Container/>
      </main>
    </Provider>
  );
}

export default App;
