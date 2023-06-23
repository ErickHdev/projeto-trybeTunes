import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SongType } from '../types';
import Loading from './Loading';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

function Album() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [artista, setArtista] = useState('');
  const [album, setAlbum] = useState('');
  const [musicas, setMusicas] = useState<SongType[]>([]);

  useEffect(() => {
    const funcaoMusicas = async () => {
      if (id) {
        setLoading(true);
        const [infos, ...listaMusicas] = await getMusics(id);
        setArtista(infos.artistName);
        setAlbum(infos.collectionName);
        setMusicas(listaMusicas);
        setLoading(false);
      }
    };
    funcaoMusicas();
  }, [id]);

  return (
    <div>
      {loading ? (<Loading />) : (
        <div>
          <h2 data-testid="artist-name">{artista}</h2>
          <h3 data-testid="album-name">{album}</h3>
          {musicas.map((musica) => (
            <MusicCard
              key={ musica.trackId }
              musica={ musica }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Album;
