import React from 'react';
import {View, Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image} = album;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={styles.imageStyle} source={{uri: thumbnail_image}} />
        </View>
        <View>
          <Text style={styles.textStyleAlbum}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  imageStyle: {
    width: 50,
    height: 50,
  },
  textStyleAlbum: {
    fontSize: 20,
  },
};

export default AlbumDetail;
