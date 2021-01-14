import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {albums: []};

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({albums: response.data}));
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <AlbumDetail>AlbumList!!</AlbumDetail>
      </View>
    );
  }
}

export default AlbumList;
