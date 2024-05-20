import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RoutesForWebApp } from './routing/RoutesForWebApp';

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesForWebApp />
      </BrowserRouter>
    </>
  );
}

export default App;
