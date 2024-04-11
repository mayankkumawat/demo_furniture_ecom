import React, {ReactNode} from 'react';
import {ScrollView, StatusBar, StyleSheet, View, ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {colors, hp} from '../helpers';
import {BackgroundShape} from '../assets/svgs';
import {keyboardProps} from '../constants/keyboardProps';

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
    <ScrollView
      contentContainerStyle={[styles.container, stylesContainer]}
      nestedScrollEnabled>
      <KeyboardAwareScrollView {...keyboardProps}>
        <BackgroundShape fade={fade} />
        <View style={[styles.childContainer, {height}]}>{children}</View>
      </KeyboardAwareScrollView>
    </ScrollView>
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
