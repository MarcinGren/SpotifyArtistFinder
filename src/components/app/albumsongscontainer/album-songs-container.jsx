import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import AlbumSongList from './albumsonglist/album-song-list'
import SongPlayer from './songplayer/song-player'
import SongInfo from './songinfo/song-info'

@inject('songsStore')
@observer class AlbumSongsContainer extends Component {
  constructor(props) {
    super(props)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside() {
    const { songsStore } = this.props

    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      songsStore.clickedAlbum = ''
      songsStore.albumTracks = []
      songsStore.clickedSong = ''
      songsStore.songToDisplay = {}
      console.log('clicked outside')
    }
  }

  render() {
    const { songsStore } = this.props
    
    return (
      <div ref={this.setWrapperRef} className='asc__container'>
        <AlbumSongList />
        {songsStore.clickedSong ? [
          <SongInfo
            key={0}
          />,
          <SongPlayer
            key={1}
          />
        ] : null}
      </div>
    )
  }
}

export default AlbumSongsContainer