import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const aId = songData?.data[0].relationships.artists.data[0]?.id;

  console.log(aId, songData);
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        {/* <img
          src={
            aId
              ? songData?.data[0].attributes?.artwork?.url
              : songData?.data[0].attributes?.artwork?.url
          }
          alt="art"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black "
        /> */}

        <div className="ml-5 ">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {`Song :  ${songData?.data[0]?.attributes?.name}`}
          </p>
          <Link to={`/artists/${aId}`}>
            <p className="font-bold sm:text-2xl text-xl text-white mt-2">
              {`Artist :  ${songData?.data[0]?.attributes?.artistName}`}
            </p>
          </Link>
          <p className="text-base text-gray-400 mt-2">
            {`Album : ${songData?.data[0].attributes.albumName}`}
          </p>
          <p className="text-base text-gray-400 mt-2">
            {`Genre : ${songData?.data[0].attributes?.genreNames[0]}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
