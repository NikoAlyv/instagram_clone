import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SvgImage} from './SvgImage';
import {CommonStyles} from 'theme/common.styles';
interface IAvatar {
  text: string;
  url?: string;
}
export const Avatar: React.FC<IAvatar> = ({text, url}) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg',
        }}
      />
      <SvgImage
        style={styles.icon}
        source={require('../assets/vectors/circle.svg')}
      />
      <Text style={CommonStyles.alginSelfCenter}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    marginTop: 65,
    marginLeft: 65,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
});
