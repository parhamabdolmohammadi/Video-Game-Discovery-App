import React from "react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error; //so react router catches it and shows the error page

  console.log(data);

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
