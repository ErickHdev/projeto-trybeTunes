import { SongType } from '../types';

type MusicCardProps = {
  musica: SongType
};

function MusicCard({ musica }: MusicCardProps) {
  const { previewUrl, trackName } = musica;

  return (
    <div>
      <p>{ trackName }</p>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
      </audio>
    </div>
  );
}

export default MusicCard;
