import React from 'react'
import { connect } from 'react-redux'
import { SelectSong } from '../Actions' 

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>  
                    <div className="right floated content">
                        <button onClick={()=> this.props.selectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">   
                        { song.title}
                    </div>
                </div>
            )
        })
    }

    render () {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    return { songs: state.songs }
}

export default connect(mapStatetoProps, {selectSong: SelectSong})(SongList)