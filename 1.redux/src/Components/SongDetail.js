import React, {Component} from "react";
import {connect} from 'react-redux'


const SongDetail = ({song}) => {
    if (!song)
        return <div> Select a song </div>;
    return (
        <div>
            <h3 className="ui header huge">
                Details for:
            </h3>
            <p className="ui details">
                Title: {song.title}
            </p>
            <p className="ui details">
                Duration: {song.duration}
            </p>

        </div>
    )
}

const maStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(maStateToProps)(SongDetail)
