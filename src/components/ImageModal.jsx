import '../style/ImageModal.css'

export function ImageModal({ movie, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
        <img src={movie.image} alt="movie poster" />
      </div>
    </div>
  );
}