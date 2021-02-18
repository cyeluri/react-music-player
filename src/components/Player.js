import React, { useState }  from 'react'
import Controls from './Controls'
import Songs from './Songs'
import './player.css'

const Player = () => {

    const mySongs = [
        {
            id: 1,
            title: "Song Title 1",
            artist: "Artist 1",
            playing: true
        },
        {
            id: 2,
            title: "Song Title 2",
            artist: "Artist 2",
            playing: false

        },
        {
            id: 3,
            title: "Song Title 3",
            artist: "Artist 3",
            playing: false

        },
        {
            id: 4,
            title: "Song Title 4",
            artist: "Artist 4",
            playing: false
        }
    ];

    const [songs, setSongs] = useState( mySongs);
    const [currentIndex, setCurrentIndex] = useState(0);
    // events
    const onPlayIndexChange = (playState) => {
        let index = -1;
        if(playState === "PREVIOUS"){
            index = currentIndex < 2 ? songs.length : currentIndex -1;
        }else {
            index = currentIndex >= songs.length ? 1 : currentIndex + 1;
        }
        setCurrentIndex(index);


        setSongs(mySongs.map(
            (song) => {
                song.id === index ? song.playing = true : song.playing = false;
            }
        ));
        setSongs(mySongs);
        console.log("Current Index : "+ currentIndex);    
    }
    return (
        <>
            <Songs songsProp={songs} />
            <Controls currentIndex={currentIndex} onPlayIndexChange={onPlayIndexChange}></Controls>
        </>
    )
}

export default Player
