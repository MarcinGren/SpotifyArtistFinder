import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

// move to be rendered from aritst-list-item and dont use store but maybe pass part of state as props
@inject('artistsStore', 'artistInfoStore')
@observer
class ArtistInfo extends Component {
  render() {
    const { artistInfoStore } = this.props

    return (
      <div className="field-name-container">
        <span className="field-name">Info</span>
        <div className="ai__artists-grid">
          <div className="ai__name">
            <span>{artistInfoStore.artistInfo.name}</span>
          </div>
          <div className="ai__popularity">
            <span>Popularity: </span>
            <span>{artistInfoStore.artistInfo.popularity}</span>
          </div>
          <div className="ai__followers">
            <span>Followers: </span>
            <span>{artistInfoStore.artistInfo.followers}</span>
          </div>
          <div className="ai__genres">
            {artistInfoStore.artistInfo.genres.map(genre => (
              <div key={genre} className="ai__genre">
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistInfo
