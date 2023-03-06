import React, { useState } from "react";

function MovieRating({ movie, handleRatingChange }) {
  const [rating, setRating] = useState(movie.rating || 0);

  const handleRatingClick = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setRating(newRating);
    handleRatingChange(movie.id, newRating);
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>
        Rating:
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            value={value}
            onClick={handleRatingClick}
            className={rating >= value ? "active" : ""}
          >
            {value}
          </button>
        ))}
      </p>
    </div>
  );
}

export default MovieRating;
