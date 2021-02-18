import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlayCircle, faPauseCircle, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

const Controls = (props) => {
    const [playPauseIcon, setPlayPauseIcon] = useState(faPlayCircle);
    const [controls, setControls] = useState({
        playPause : "Play",
        previous: "Previous",
        forward: "Forward"
    });

    const [currentIndex, setCurrentIndex] = useState(props.currentIndex);
    
    const startPause = () => {
        console.log("start/pause")
        let playPauseLabel = controls.playPause === "Play" ? "Pause" : "Play";
        setPlayPauseIcon(controls.playPause === "Play" ? faPauseCircle : faPlayCircle)
        setControls({
            playPause : playPauseLabel,
            previous: "Previous",
            forward: "Forward"
        });
    }

    const previousSong = () => {
        console.log("previous")
        props.onPlayIndexChange("PREVIOUS");
    }

    const nextSong = () => {
        console.log("next")
        props.onPlayIndexChange("NEXT");
    }
    return (
        <div>
            
            <button className = "btn" onClick={() => startPause()} ><FontAwesomeIcon size="lg" icon={playPauseIcon} />{controls.playPause}</button>
            <button className = "btn" onClick={() => previousSong()}><FontAwesomeIcon size="lg" icon={faBackward} /> -- {controls.previous}</button>
            <button className = "btn" onClick={() => nextSong()}><FontAwesomeIcon size="lg" icon={faForward} /> -- {controls.forward}</button>
        </div>
    )
}

export default Controls
