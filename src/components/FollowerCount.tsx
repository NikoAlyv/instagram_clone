import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IFollow {
  count: number;
  text: string;
}
export const FollowerCount: React.FC<IFollow> = ({count, text}) => {
  return (
    <View>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
