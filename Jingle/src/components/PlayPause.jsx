import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <>
      {isPlaying && activeSong?.title === song.title ? (
        <FaPauseCircle
          onClick={handlePauseClick}
          className="text-4xl text-gray-300 cursor-pointer"
        />
      ) : (
        <FaPlayCircle
          onClick={handlePlayClick}
          className="text-4xl text-gray-300 cursor-pointer"
        />
      )}
    </>
  );
};

export default PlayPause;
