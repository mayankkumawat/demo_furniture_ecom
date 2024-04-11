import React, {useRef, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {colors, hp, wp} from '../helpers';
import {chairImg} from '../assets/images';

const SnapCarousel = ({}) => {
  const [activeSlide, setActiveSlide] = useState(null);
  const carouselRef = useRef(null);

  const _renderItem = ({index}) => {
    return (
      <View key={`_renderItem${index}`} style={styles.slide}>
        <Image source={chairImg} style={styles.img} resizeMode={'contain'} />
      </View>
    );
  };

  return (
    <>
      <Carousel
        loop
        autoplay
        enableSnap
        data={[1, 2, 3]}
        ref={carouselRef}
        itemWidth={wp(100)}
        sliderWidth={wp(100)}
        enableMomentum={false}
        renderItem={_renderItem}
        onSnapToItem={setActiveSlide}
        lockScrollWhileSnapping={true}
        containerCustomStyle={styles.containerStyle}
      />
      <Pagination
        dotsLength={3}
        activeDotIndex={activeSlide}
        containerStyle={styles.pageCon}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </>
  );
};

export default SnapCarousel;

const styles = StyleSheet.create({
  slide: {
    width: wp(100),
  },
  img: {
    width: wp(75),
    height: wp(75),
    marginTop: hp(5),
    alignSelf: 'center',
  },
  containerStyle: {
    height: hp(18),
  },
  pageCon: {
    width: wp(20),
    height: hp(2),
    paddingVertical: 0,
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: wp(-2),
    backgroundColor: colors.YELLOW_MANGO,
  },
  inactiveDot: {
    backgroundColor: colors.DARK_GRAY,
  },
});
