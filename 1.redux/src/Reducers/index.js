import {combineReducers} from 'redux'

//Redux reducer
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:05'},
        {title: 'All Star', duration: '3:05'},
        {title: 'I Want It', duration: '1:10'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED')
        return action.payload
    return selectedSong
}


export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})
