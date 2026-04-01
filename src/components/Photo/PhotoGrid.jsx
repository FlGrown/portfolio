import './Photo.css';

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