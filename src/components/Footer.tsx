import {View, Text, Pressable, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/common.styles';

export const Footer = () => {
  const [focus, setFocus] = useState<boolean>(true);
  const [bookFocus, setBookFocus] = useState<boolean>(true);
  const [value, setValue] = useState<number>(156);
  return (
    <View style={styles.root}>
      <View style={CommonStyles.justifyBetweenRow}>
        <View style={[CommonStyles.row, styles.container]}>
          <Pressable
            onPress={() => {
              setFocus(!focus);
              focus ? setValue(value + 1) : setValue(value - 1);
            }}>
            <SvgImage
              color={focus ? colors.darkBlack : colors.red}
              source={require('../assets/vectors/heart.svg')}
            />
          </Pressable>
          <SvgImage
            color={colors.darkBlack}
            source={require('../assets/vectors/messages.svg')}
          />
          <SvgImage
            color={colors.darkBlack}
            source={require('../assets/vectors/send.svg')}
          />
        </View>
        <Pressable onPress={() => setBookFocus(!bookFocus)}>
          <SvgImage
            color={bookFocus ? colors.darkBlack : colors.red}
            source={require('../assets/vectors/bookmark.svg')}
          />
        </Pressable>
      </View>
      <Text style={styles.text}>{value} Likes</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    marginHorizontal: 10,
  },
  container: {
    gap: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});
