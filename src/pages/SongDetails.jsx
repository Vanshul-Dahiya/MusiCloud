import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const SongDetails = () => {
  //   const l = "en-US";
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ id: songid });
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ id: songid });

  // const handlePauseClick = () => {
  //   dispatch(playPause(false));
  // };
  // const handlePlayClick = (song, i) => {
  //   dispatch(setActiveSong({ song, data, i }));
  //   dispatch(playPause(true));
  // };

  if (isFetchingSongDetails || isFetchingRelatedSongs) {
    return <Loader tittle="Searching song details..." />;
  }
  if (error) return <Error />;
  return (
    <div className="flex flex-col ">
      <DetailsHeader artistId="" songData={songData} />
      {/* <div className="mb-10">
        <h2 className="font-bold text-white text-3xl">Lyrics :</h2>
        <div className="mt-5">
          {songData?.data[0]?.attributes?.albumName ? (
            <p>Write something</p>
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry , no lyrics found!
            </p>
          )}
        </div>
      </div> */}
      {/* <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}
    </div>
  );
};

export default SongDetails;
