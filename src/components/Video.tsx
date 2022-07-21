import { useContext } from "react";
import { Player } from 'video-react';
import { Context } from "../context/Context";
import "video-react/dist/video-react.css";

export default function Video() {
    const { State } = useContext(Context)
    const { videoUrl } = State;

    return (
        <div style={{ width: '450px' }}>
            <Player autoPlay muted src={videoUrl} />
        </div>
    )
}
