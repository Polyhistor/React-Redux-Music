// Action Creator
export const SelectSong = (song) => {
    return (
        {
            type: 'SONG_SELECTED',
            payload : song 
        }
    )
}