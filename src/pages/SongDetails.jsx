import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  //   const l = "en-US";
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ id: songid });
  console.log(songData);
  return (
    <div className="flex flex-col ">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
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
      </div>
    </div>
  );
};

export default SongDetails;
