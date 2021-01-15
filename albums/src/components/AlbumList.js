import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {albums: []};

  componentDidMount() {
    axios
      .get('http://localhost/reactnativeapi/music_albums.json')
      .then((response) => this.setState({albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    return <View>{this.renderAlbums()}</View>;
  }
}

export default AlbumList;
