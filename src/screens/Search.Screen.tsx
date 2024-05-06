import {View, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from '../components/Card';
import {screenWidth} from 'theme/const.styles';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';

export const SearchScreen = () => {
  const [image, setImage] = useState<any>([]);
  const [error, setError] = useState<any>();

  const render = ({item, index}: {item: any; index: number}) => {
    return (
      <Card
        key={index}
        url={item.artist.picture_medium}
        imageStyle={[styles.image, {width: cardWidth}]}
      />
    );
  };

  const fetchData = async () => {
    try {
      const response: Response = await fetch(
        'https://api.deezer.com/radio/37151/tracks',
      );
      const result = await response.json();
      setImage(result.data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={image}
        showsVerticalScrollIndicator={false}
        renderItem={render}
        numColumns={3}
      />
    </View>
  );
};

const cardWidth = Math.floor((screenWidth - 6) / 3);
const styles = StyleSheet.create({
  image: {
    width: normalize('width', 100),
    height: normalize('height', 100),
    borderColor: colors.white,
    margin: 0,
    marginBottom: 0,
  },
});
