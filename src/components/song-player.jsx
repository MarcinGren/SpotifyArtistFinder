import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class SongPlayer extends Component {
  constructor(props) {
    super(props)

    // this.onSongClick = this.onSongClick.bind(this)
    // console.log(this.props.songsStore.getClickedSong())
    // this.state = {song: this.props.songsStore.getClickedSong()}
    console.log('in song-player constructor')
    this.props.songsStore.getClickedSong()
  }
  
  componentWillReceiveProps() {
    console.log('in song-player componentWillReceiveProps')
    this.props.songsStore.getClickedSong()
    this.refs.player.pause()
    this.refs.player.load()
  }

  render() {
    const { songsStore } = this.props

    return (
      <div className='sp__container'>
      {this.props.songsStore.songToDisplay.name}
        <audio controls='controls' ref='player' className='sp__player'>
          <source src={this.props.songsStore.songToDisplay.previewUrl} type='audio/mpeg' />
        </audio>
      </div>
    )
  }
}

export default SongPlayer