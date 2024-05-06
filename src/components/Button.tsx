import {Text, Pressable, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';

interface IButton {
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: NodeRequire;
}
export const Button: React.FC<IButton> = ({text, onPress, style, icon}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      {text ? (
        <Text style={styles.text}>{text}</Text>
      ) : (
        <SvgImage style={styles.icon} source={icon} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
  },
  text: {
    marginVertical: 5,
    marginHorizontal: 48,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  icon: {
    margin: 5,
  },
});
