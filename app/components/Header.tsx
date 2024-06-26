import {
  View,
  Alert,
  ViewStyle,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from '../assets/icons/icon';
import {colors, hp, wp} from '../helpers';

interface HeaderProps {
  row?: boolean;
  back?: boolean;
  styleHeader?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({styleHeader, back, row}) => {
  const {goBack} = useNavigation();
  const statusBarHeight = StatusBar.currentHeight ?? 0;
  const handleLeftIcon = () =>
    back ? goBack() : Alert.alert('Drawer', 'Drawer is under construction');
  const handleRightIcon = () =>
    Alert.alert('Rating', 'Rating functionality is under construction');
  return (
    <View style={[styles.container, styleHeader, {marginTop: statusBarHeight}]}>
      <TouchableOpacity
        style={styles.iconContainer}
        activeOpacity={0.6}
        onPress={handleLeftIcon}>
        <Icon
          size={wp(6)}
          name={back ? 'arrow-left' : 'menu'}
          color={back ? colors.BLACK : colors.WHITE}
          type={'MaterialCommunityIcons'}
        />
      </TouchableOpacity>
      {row && (
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.6}
          onPress={handleRightIcon}>
          <Icon
            size={wp(6)}
            name={'star'}
            type={'MaterialCommunityIcons'}
            color={colors.YELLOW_MANGO}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    backgroundColor: colors.TRANSPARENT,
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: wp(7),
    width: wp(7),
  },
});
