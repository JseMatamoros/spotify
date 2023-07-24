import React, { useState } from "react";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { v4 as uuidv4 } from 'uuid';


export const MyPlaylist = () => {
    const [playlist, setPlaylist] = useState([
        { id: "1", url: "33qkK1brpt6t8unIpeM2Oy", favorite: true },
        { id: "2", url: "0H6TddUF2M63ZSHGvhk5yy", favorite: true },
        { id: "3", url: "3fn4HfVz5dhmE0PG24rh6h", favorite: true },
        { id: "4", url: "0DQyTVcDhK9wm0f6RaErWO", favorite: true }
    ]);

    const urlRef = React.useRef();
    const favoriteRef = React.useRef();

    const addSong = () => {
        const url = urlRef.current.value;
        const favorite = favoriteRef.current.checked;

        if (url.trim() === "") {
            console.log("Campos vacíos");
            return;
        }

        const newSong = {
            id: uuidv4(),
            url: url,
            favorite: favorite
        };

        setPlaylist((prevPlaylist) => [...prevPlaylist, newSong]);
        urlRef.current.value = "";
        favoriteRef.current.checked = false;
    };

    const removeSong = () => {
        setPlaylist((prevPlaylist) =>
            prevPlaylist.filter((song) => song.favorite)
        );
    };

    const setFavorite = (id) => {
        setPlaylist((prevPlaylist) =>
            prevPlaylist.map((song) =>
                song.id === id ? { ...song, favorite: !song.favorite } : song
            )
        );
    };

    return (
        <div className="container">
            <h1 className="title text-center mt-5">My favorite songs</h1>
            <div className="d-flex align-items-center">
                <input
                    ref={urlRef}
                    type="text"
                    className="form-control"
                    placeholder="Ingrese el código del álbum aquí..."
                />
                <div className="form-check ms-2">
                    <input ref={favoriteRef} className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Favorite</label>
                </div>
                <button onClick={addSong} className="btn btn-success ms-2">
                    <i className="bi bi-plus-circle-fill"></i>
                </button>
                <button onClick={removeSong} className="btn btn-danger ms-2">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
            <div>
                {playlist.map((song) => (
                    <SpotifyPlayer song={song} key={song.id} setFavorite={setFavorite} />
                ))}
            </div>
        </div>
    );
};
