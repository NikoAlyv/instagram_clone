import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FollowerCount} from 'components/FollowerCount';
import {CommonStyles} from 'theme/common.styles';
import {Button} from 'components/Button';
import {Avatar} from 'components/Avatar';
import {Card} from 'components/Card';
import {colors} from 'theme/colors';
import {screenWidth} from 'theme/const.styles';
import {SvgImage} from 'components/SvgImage';
import {normalize} from 'theme/metrics';

export const ProfileScreen = () => {
  const [image, setImage] = useState<any>('');
  const [error, setError] = useState<any>();
  const render = ({item, index}: {item: any; index: number}) => {
    return (
      <Card
        key={index}
        url={item.image}
        imageStyle={[styles.image, styles.card]}
      />
    );
  };

  const fetchData = async () => {
    try {
      const response: Response = await fetch('https://dummyjson.com/users');
      const result = await response.json();
      setImage(result.users);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ScrollView>
      <View style={[CommonStyles.justifyBetweenRow, styles.profile]}>
        <Avatar text="C.Ronaldo" />
        <FollowerCount text="post" count={90} />
        <FollowerCount text="followers" count={400} />
        <FollowerCount text="following" count={600} />
      </View>
      <View style={[CommonStyles.row]}>
        <Button text="Edit Profile" />
        <Button text="Share Profile" />
        <Button icon={require('../assets/vectors/profile.svg')} />
      </View>
      <View style={[CommonStyles.justifyBetweenRow, styles.icon]}>
        <SvgImage source={require('../assets/vectors/film.svg')} />
        <SvgImage
          color={colors.white}
          source={require('../assets/vectors/reels.svg')}
        />
        <SvgImage source={require('../assets/vectors/profile.svg')} />
      </View>
      <FlatList
        data={image}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={render}
        numColumns={3}
      />
    </ScrollView>
  );
};
const cardWidth = Math.floor((screenWidth - 6) / 3);

const styles = StyleSheet.create({
  profile: {
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: normalize('horizontal', 10),
  },
  image: {
    width: normalize('width', 100),
    height: normalize('height', 100),
    borderColor: colors.white,
    margin: 0,
    marginBottom: 0,
  },
  icon: {
    marginTop: 20,
    paddingHorizontal: normalize('horizontal', 30),
  },
  card: {
    width: normalize('width', cardWidth),
  },
});
