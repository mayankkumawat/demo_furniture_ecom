import React from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';

import Icon from '../assets/icons/icon';
import {colors, hp, wp} from '../helpers';
import {BAR_ITEM} from '../constants/dummy';

const BottomTab = () => {
  const bottomBar = BAR_ITEM.map(({id, title}) => {
    const _handleClick = () => () =>
      Alert.alert(title, `${title} screen is coming soon.`);
    return (
      <TouchableOpacity
        key={`BAR_ITEM${id}`}
        activeOpacity={0.6}
        style={styles.btn}
        onPress={_handleClick(title)}>
        <Icon
          size={wp(8)}
          name={title}
          color={colors.DARK_GRAY}
          type={'MaterialCommunityIcons'}
        />
      </TouchableOpacity>
    );
  });
  return <View style={styles.container}>{bottomBar}</View>;
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    elevation: 8,
    height: hp(8),
    width: wp(100),
    zIndex: 1000,
    borderTopWidth: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.WHITE,
    borderColor: colors.DARK_GRAY + '10',
  },
  btn: {
    height: hp(8),
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
