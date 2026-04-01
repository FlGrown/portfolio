import './Photo.css';

export function Photo({ src, alt = 'Jorge Piquer' }) {
  return (
    <div className="profile-photo-wrap">
      <img src={src} alt={alt} className="profile-photo" />
    </div>
  );
}
