import {
  Image,
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from 'theme/const.styles';
import {Footer} from './Footer';
import {colors} from 'theme/colors';

export interface ICard {
  url: string;
  storyUrl?: string;
  title?: string;
  horizontal?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const Card: React.FC<ICard> = ({
  url,
  storyUrl,
  horizontal,
  onPress,
  imageStyle,
  style,
  title,
}) => {
  const [inActive, setInActive] = useState<boolean>(false);
  return (
    <View>
      <Pressable onPress={() => setInActive(true)}>
        <View style={[styles.main, horizontal && styles.horizontal, style]}>
          <Image
            source={{
              uri: url,
            }}
            style={[
              styles.image,
              styles.storyImage,
              imageStyle,
              inActive && styles.active,
            ]}
          />

          {title ? (
            <Text numberOfLines={2} style={styles.title}>
              {title}
            </Text>
          ) : null}
        </View>
      </Pressable>
      {storyUrl ? (
        <View style={styles.footer}>
          <Image style={styles.story} source={{uri: storyUrl}} />
          <Footer />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {marginBottom: 80},
  main: {
    alignItems: 'center',
    gap: 2,
  },
  horizontal: {
    flexDirection: 'row',
    gap: 15,
  },
  storyImage: {
    margin: 10,
    borderWidth: 5,
    borderColor: colors.blue,
  },
  active: {
    borderColor: colors.lightGray,
  },

  image: {
    borderRadius: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  largeTitle: {
    fontSize: 16,
  },
  story: {
    width: windowWidth,
    height: windowHeight / 2,
    marginBottom: 10,
  },
});
