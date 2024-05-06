import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {Icon} from 'react-native-paper';
interface IIcons {
  text?: string;
  style?: StyleProp<ViewStyle>;
  icon: NodeRequire;
  onPress?: () => void;
}
export const ReelsIcons: React.FC<IIcons> = ({text, style, icon, onPress}) => {
  return (
    <View style={styles.root}>
      <Pressable onPress={onPress}>
        <SvgImage color={colors.white} source={icon} />
      </Pressable>
      <Text style={[styles.text, style]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    margin: 5,
    gap: 3,
  },
  text: {
    color: colors.white,
  },
});
