import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from '../components/Card';
import {Navbar} from 'components/Navbar';
import {SvgImage} from 'components/SvgImage';
import {colors} from 'theme/colors';
import {ReelsIcons} from 'components/ReelsIcons';
import {CommonStyles} from 'theme/common.styles';
import {normalize} from 'theme/metrics';

export const ReelScreen = () => {
  const [reels, setReels] = useState<any>('');
  const [error, setError] = useState<any>();

  const fetchData = async () => {
    try {
      const response: Response = await fetch(
        'https://api.deezer.com/radio/37151/tracks',
      );
      const result = await response.json();
      setReels(result.data);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      {reels && (
        <ImageBackground
          source={{uri: reels[0].artist.picture_big}}
          style={styles.backImage}>
          <Navbar
            rightActionType="icon"
            right2={require('../assets/vectors/photo.svg')}
            type="standard"
            title="Reels"
            textStyle={styles.text}
            leftActionType="icon-text"
          />
          <View style={styles.container}>
            <View style={styles.story}>
              <Image
                style={styles.image}
                source={{uri: reels[0].album.cover_medium}}
              />
              <Text numberOfLines={2} style={styles.head}>
                {reels[0].album.title}
              </Text>
            </View>
            <View>
              <ReelsIcons
                text={'324K'}
                icon={require('../assets/vectors/heart.svg')}
              />
              <ReelsIcons
                text={'1.905'}
                icon={require('../assets/vectors/messages.svg')}
              />
              <ReelsIcons
                text={'34.8K'}
                icon={require('../assets/vectors/send.svg')}
              />
              <ReelsIcons
                icon={require('../assets/vectors/dot-vertical.svg')}
              />
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  backImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    ...CommonStyles.flexRow,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  image: {
    width: normalize('width', 50),
    height: normalize('height', 50),
    borderRadius: 30,
  },
  story: {
    ...CommonStyles.alignCenterRow,
    gap: 5,
    marginBottom: 30,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    width: normalize('width', 200),
  },
  head: {
    color: colors.white,
  },
});
