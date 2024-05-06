import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import {SvgImage} from './SvgImage';
import {screenWidth} from 'theme/const.styles';
import {CommonStyles} from 'theme/common.styles';

interface IInput {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  placeholderTextColor?: string;
  onBlur?: () => void;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const Input: React.FC<IInput> = ({
  setValue,
  value,
  placeholder,
  placeholderTextColor = colors.white,
  icon,
  style,
  onBlur,
  inputStyle,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onInputFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const onInputBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  return (
    <View style={CommonStyles.row}>
      {isFocused ? (
        <SvgImage
          style={styles.svgIcon}
          source={require('../assets/vectors/right.svg')}
        />
      ) : null}
      <View style={[styles.root, isFocused && styles.focused, style]}>
        {icon ? icon : null}
        <TextInput
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChangeText={setValue}
          value={value}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...CommonStyles.alignCenterRow,
    gap: 20,
    paddingHorizontal: 22,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    maxHeight: 50,
  },
  input: {
    height: '100%',
    color: colors.white,
    fontSize: 14,
    width: screenWidth,
  },
  focused: {
    marginLeft: 20,
  },
  svgIcon: {
    alignSelf: 'center',
    marginLeft: 10,
  },
});
