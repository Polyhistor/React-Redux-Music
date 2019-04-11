import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'wait and bleed', duration: '4:05'},
        { title: 'macarena', duration: '2:30'},
        { title: 'all star', duration: '3:45'},
        { title: 'I want it that way', duration: '5:00'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})