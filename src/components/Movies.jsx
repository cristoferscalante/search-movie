import '../style/Movies.css';
import { useState } from 'react';
import { ImageModal} from './ImageModal';

function ListOfMovies ({ movies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    return (
      <div>
        <ul className='movies'>
          {movies.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img
                src={movie.image}
                alt={movie.title}
                onClick={() => setSelectedMovie(movie)}
              />
            </li>
          ))}
        </ul>
        {selectedMovie && (
          <ImageModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    );
  }
  
  function NoMoviesResults() {
    return (
      <p className='info'>No se encontraron películas para esta búsqueda</p>
    )
  }
  
  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
  }
  
  