import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfo from './artist-info'
import ArtistAlbums from './artist-albums'
import RelatedArtists from './related-artists'

@observer class ArtistInfoContainer extends Component {

  componentDidUpdate() {
    document.getElementsByClassName('ai__container')[0].scrollIntoView({
      alignToTop: true,
      behavior: 'smooth',
      block: 'start'
    })
    console.log('scroll')
  }

  render() {
    const { artistInfoStore, artistsStore, songsStore } = this.props

    return (
      <div className='aic__container'>
        <div className='ai__container'>
          {artistInfoStore.displayInfo ? (
            <ArtistInfo
              artistsStore={artistsStore}
              artistInfoStore={artistInfoStore}
            />
          ) : null}
          {artistInfoStore.artistsAlbums.length > 0 ? (
            <ArtistAlbums
              artistInfoStore={artistInfoStore}
              songsStore={songsStore}
            />
          ) : null}
        </div>
        {artistInfoStore.relatedArtists.length > 0 ? (
          <RelatedArtists
            artistInfoStore={artistInfoStore}
          />
        ) : null}
      </div>
    )
  }
  }

export default ArtistInfoContainer
