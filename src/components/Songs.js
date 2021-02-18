import React from 'react'
import Song from './Song'

const Songs = (props) => {
    return (
        <div className='songsContainer'>
            {
                props.songsProp.map( 
                    (songParam) =>(
                    <Song key={songParam.id} songParam={songParam}></Song>
                ))
            }
        </div>
    )
}

export default Songs
