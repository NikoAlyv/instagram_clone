import React from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/common.styles';
import {normalize} from 'theme/metrics';

type NavbarActions = 'icon' | 'icon-text' | 'text' | 'button' | 'none';
type NavbarSide =
  | NodeRequire
  | {
      icon: NodeRequire;
      text: string;
      width?: number;
      height?: number;
      color?: string;
    }
  | string
  | React.ReactNode
  | undefined;

interface INavBar {
  textStyle?: StyleProp<ViewStyle>;
  type: 'large' | 'standard';
  title?: string;
  left?: NavbarSide;
  right1?: NavbarSide;
  right2?: NavbarSide;
  leftActionType?: NavbarActions;
  rightActionType: NavbarActions;
}

export const Navbar: React.FC<INavBar> = ({
  type = 'standard',
  leftActionType,
  rightActionType,
  left,
  textStyle,
  right1,
  right2,
  title,
}) => {
  if (type === 'large') {
    return null;
  }

  const renderActions = (actionType?: NavbarActions, side?: any) => {
    switch (actionType) {
      case 'text':
        return <Text>{side}</Text>;

      case 'icon-text':
        return (
          <View style={CommonStyles.row}>
            <Text style={textStyle}>{side.text}</Text>
            <SvgImage color={colors.darkBlack} source={side.icon} />
          </View>
        );

      case 'icon':
        return <SvgImage color={colors.darkBlack} source={side} />;

      case 'button':
        return <Text>Button</Text>;

      default:
        return null;
    }
  };

  return (
    <View style={styles.root}>
      <View style={CommonStyles.row}>
        {title ? <Text style={[styles.title, textStyle]}>{title}</Text> : null}
        {left ? (
          <Pressable style={[styles.action, !leftActionType && styles.hide]}>
            {renderActions(leftActionType, left)}
          </Pressable>
        ) : null}
      </View>
      <View style={[CommonStyles.row, styles.left]}>
        <Pressable style={[styles.action, !rightActionType && styles.hide]}>
          {renderActions(rightActionType, right1)}
        </Pressable>
        <Pressable style={[styles.action, !rightActionType && styles.hide]}>
          {renderActions(rightActionType, right2)}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...CommonStyles.justifyBetweenRow,
    marginHorizontal: 10,
  },
  action: {
    width: normalize('vertical', 25),
  },
  title: {
    fontSize: 25,
    color: colors.darkBlack,
  },
  hide: {
    opacity: 0,
  },
  left: {
    gap: 20,
  },
});
