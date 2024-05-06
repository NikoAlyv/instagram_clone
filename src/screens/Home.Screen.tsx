import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from 'components/Card';
import {normalize} from 'theme/metrics';

export const HomeScreen = () => {
  const [value, setValue] = useState<any>();
  const [error, setError] = useState<any>(null);

  const horizontalCards = ({item, index}: {item: any; index: number}) => {
    return (
      <Card
        key={index}
        style={styles.card}
        imageStyle={[styles.profile]}
        title={item.artist.name}
        url={item.artist.picture_big}
      />
    );
  };

  const verticalCards = ({item, index}: {item: any; index: number}) => {
    return (
      <View>
        <Card
          key={index}
          imageStyle={[styles.verticalImage]}
          title={item.title}
          url={item.artist.picture_medium}
          storyUrl={item.album.cover_big}
          style={styles.verticalContainer}
        />
      </View>
    );
  };

  const fetchData = async () => {
    try {
      const response: Response = await fetch(
        'https://api.deezer.com/radio/37151/tracks',
      );
      const result = await response.json();
      setValue(result.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={value}
        renderItem={horizontalCards}
      />

      <FlatList
        data={value}
        showsVerticalScrollIndicator={false}
        renderItem={verticalCards}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {gap: 20},
  profile: {
    width: normalize('width', 100),
    height: normalize('height', 100),
    borderRadius: 100,
  },
  verticalImage: {
    width: normalize('width', 50),
    height: normalize('height', 50),
    borderRadius: 25,
    marginBottom: 5,
  },
  verticalContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    marginBottom: 50,
  },
});
