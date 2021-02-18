import React from 'react'
 
const Song = (props) => {
    return (
        <>  
        <div className={props.songParam.playing ? "songPlayingContainer": "songContainer"} >
            <h3>{props.songParam.title}</h3>
            <p>{props.songParam.artist}</p>
        </div>
        </>
    )
}

export default Song
