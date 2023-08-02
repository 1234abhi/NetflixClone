import Image from "next/image";
import { Movie } from "../typings";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  // When using firebase
  // movie: Movie | DocumentData
  movie: Movie;
  onClick?: () => void;
}

function Thumbnail({ movie, onClick }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  //   console.log(showModal);
  //   console.log(currentMovie);
  //   console.log(movie);

  const handleThumbnailClick = () => {
    setCurrentMovie(movie);
    setShowModal(true);
  };

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={onClick || handleThumbnailClick}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt=""
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white py-1 px-2">
        <h4 className="text-sm md:text-base">{movie.title || movie.name}</h4>
      </div>
    </div>
  );
}

export default Thumbnail;
