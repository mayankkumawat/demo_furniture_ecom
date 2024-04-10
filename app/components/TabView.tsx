import React from 'react';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {colors, hp} from '../helpers';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const ComingSoon = () => (
  <View style={styles.dummyText}>
    <Text>Coming Soon</Text>
  </View>
);

const FAQs = () => <ComingSoon />;
const Care = () => <ComingSoon />;
const Specifications = () => <ComingSoon />;

const renderLabel = ({focused, route}) => {
  const focusedStyle = {
    color: focused ? colors.BLUE_FB : colors.DARK_GRAY,
    fontWeight: focused ? '400' : 'bold',
  };
  return <Text style={focusedStyle}>{route.title}</Text>;
};

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      style={styles.tabBar}
      renderLabel={renderLabel}
      indicatorStyle={styles.indicatorStyle}
    />
  );
};

const renderScene = SceneMap({
  Specifications,
  FAQs,
  Care,
});

export default function TabViewFunction() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Specifications', title: 'Specifications'},
    {key: 'FAQs', title: 'FAQs'},
    {key: 'Care', title: 'Care'},
  ]);

  return (
    <TabView
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      initialLayout={{width: layout.width}}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    elevation: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: colors.WHITE,
    borderColor: colors.DARK_GRAY + '10',
  },
  indicatorStyle: {
    backgroundColor: colors.BLUE_FB,
  },
  dummyText: {
    height: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
