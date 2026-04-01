import './Photo.css';

export function ProfilePhoto({ src, alt = 'Jorge Piquer' }) {
  return (
    <div className="profile-photo-wrap">
      <img src={src} alt={alt} className="profile-photo" />
    </div>
  );
}

export const PhotoGrid = ({ photos = [] }) => {
  return (
    <div className="photo-grid">
      {photos.map((photo, i) => (
        <div key={i} className="grid-cell">
          <div className="grid-photo-wrap">
            <img
              src={photo.src}
              alt={photo.alt || `Photo ${i + 1}`}
              className="grid-photo"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
