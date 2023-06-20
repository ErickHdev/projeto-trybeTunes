import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

function Login() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const isDisabled = name.length < 3;

  const HandleSubmit = async () => {
    setLoading(true);
    await createUser({ name });
    navigate('/search');
  };

  const submit = () => HandleSubmit();

  return (
    <div>
      {loading ? (<Loading />) : (
        <>
          <input
            type="text"
            data-testid="login-name-input"
            placeholder="Insira seu nome de usuario"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
          <button
            type="submit"
            disabled={ isDisabled }
            data-testid="login-submit-button"
            onClick={ submit }
          >
            Entrar
          </button>
        </>
      )}
    </div>
  );
}
export default Login;
