import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors, hp} from '../helpers';

interface SeparatorProps {}

const Separator: React.FC<SeparatorProps> = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    width: 'auto',
    height: hp(0.1),
    marginVertical: hp(3.5),
    backgroundColor: `${colors.DARK_GRAY}30`,
  },
});
