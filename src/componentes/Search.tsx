import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import { AlbumType } from '../types';
import Loading from './Loading';

function Search() {
  const [artistName, setArtistName] = useState('');
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState<AlbumType[]>([]);
  const [resultadoBusca, setResultadoBusca] = useState('');

  const isDisabled = artistName.length < 2;

  const HandleSubmit = async () => {
    setLoading(true);
    setArtistName('');
    const response = await searchAlbumsAPI(artistName);
    setAlbuns(response);
    setResultadoBusca(`Resultado de álbuns de: ${artistName}`);
    setLoading(false);
  };

  const submit = () => HandleSubmit();
  return (
    <div>
      {loading ? (<Loading />) : (
        <>
          <input
            type="text"
            data-testid="search-artist-input"
            value={ artistName }
            onChange={ (e) => setArtistName(e.target.value) }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ isDisabled }
            onClick={ submit }
          >
            Pesquisar
          </button>
          {albuns.length > 0 ? (
            <div>
              <h2>
                { resultadoBusca }
              </h2>
              <ul>
                {albuns.map((album) => (
                  <li key={ album.collectionId }>
                    <Link
                      to={ `/album/${album.collectionId}` }
                      data-testid={ `link-to-album-${album.collectionId}` }
                    >
                      { album.collectionName }
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <h2>Nenhum álbum foi encontrado</h2>
          )}
        </>
      )}
    </div>
  );
}
export default Search;
