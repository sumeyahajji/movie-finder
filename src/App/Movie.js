import React from "react";

function Movie({ movie, onDeleteMovie }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/movies/${movie.id}`, {
      method: "DELETE",
    })
      .then(() => {
        console.log(movie);
        onDeleteMovie(movie.id);
      })
      .catch(console.error);
  }

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default Movie;
