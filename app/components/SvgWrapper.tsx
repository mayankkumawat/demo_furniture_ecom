import React, {ReactNode} from 'react';
import {StatusBar, StyleSheet, View, ViewStyle} from 'react-native';

import {colors, hp} from '../helpers';
import {BackgroundShape} from '../assets/svgs';

interface SvgWrapperProps {
  fade?: boolean;
  children: ReactNode;
  stylesContainer?: ViewStyle;
}

const SvgWrapper: React.FC<SvgWrapperProps> = ({
  stylesContainer,
  children,
  fade,
}) => {
  const height = hp(100) + StatusBar.currentHeight ?? 0;
  return (
    <View style={[styles.container, stylesContainer]}>
      <BackgroundShape fade={fade} />
      <View style={[styles.childContainer, {height}]}>{children}</View>
    </View>
  );
};

export default SvgWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  childContainer: {
    position: 'absolute',
  },
});
