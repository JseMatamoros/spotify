import React from "react";
// import { v4 as uuidv4 } from "uuid";

export const SpotifyPlayer = ({ song, setFavorite }) => {
  const { id, url, favorite } = song;

  const urlSong = "https://open.spotify.com/embed/album/" + url;

  const handleFavorite = () => {
    setFavorite(id);
  };

  return (
    <div className="d-flex my-5" width="1000px">
      <iframe
        src={urlSong}
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="Título del álbum"
      ></iframe>
      <button onClick={handleFavorite} className="btn">
        <i className={`bi ${favorite ? "bi-star-fill" : "bi-star"}`}></i>
      </button>
    </div>
  );
};
