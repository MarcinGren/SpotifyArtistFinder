import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfoContainer from './artist-info-container'

export default @observer class ArtistsContainer extends Component {

  render() {
    const { artistInfoStore } = this.props

    return (
      <div className="results">
        <ArtistsList
          artistsStore={this.props.artistsStore}
          artistInfoStore={this.props.artistInfoStore}
        />
        {artistInfoStore.displayInfo ? (
          <ArtistInfoContainer
            artistsStore={this.props.artistsStore}
            artistInfoStore={this.props.artistInfoStore}
          />
        ) : null}
      </div>
    )
  }
}
