import { Movie } from "@/typings";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Thumbnail from "./Thumbnail";

interface Props {
  movies: Movie[];
}

const Filter = ({ movies }: Props) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Function to handle click on Thumbnail and update the selectedMovie and showModal states
  const handleThumbnailClick = (movie: Movie) => {
    //console.log("Thumbnail Clicked");
    setSelectedMovie(movie);
    setShowModal(true);
  };

  //   console.log(selectedMovie);
  //   console.log(showModal);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {movies?.map((movie) => (
          <Thumbnail
            key={movie.id}
            movie={movie}
            onClick={() => handleThumbnailClick(movie)} // Pass the onClick prop
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
