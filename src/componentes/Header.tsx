import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

function Header() {
  const [name, setName] = useState('');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const funcaoLogin = async () => {
      setloading(true);
      const response = await getUser();
      setName(response.name);
      setloading(false);
    };
    funcaoLogin();
  }, []);

  return (
    <header data-testid="header-component">
      {loading ? (<Loading />) : (
        <>
          <NavLink to="/search" data-testid="link-to-search"> Pesquisar </NavLink>
          <NavLink to="/favorites" data-testid="link-to-favorites"> Favoritos </NavLink>
          <NavLink to="/profile" data-testid="link-to-profile"> Perfil </NavLink>
          <p data-testid="header-user-name">
            { name }
          </p>
        </>
      )}
    </header>
  );
}

export default Header;
