import { Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Search from './componentes/Search';
import Album from './componentes/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/Search" element={ <Search /> } />
      <Route path="/Album/:id" element={ <Album /> } />
    </Routes>
  );
}

export default App;
