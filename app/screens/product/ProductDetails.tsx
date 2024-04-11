import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  Header,
  BottomTab,
  Separator,
  SvgWrapper,
  SnapCarousel,
  TabViewFunction,
} from '../../components';
import Icon from '../../assets/icons/icon';
import {colors, fp, hp, wp} from '../../helpers';

const ProductDetails = () => {
  return (
    <SvgWrapper fade>
      <Header back row />
      <SnapCarousel />
      <View style={styles.contentContainer}>
        {/* Product info section */}
        <View style={styles.productInfoCon}>
          <View style={styles.productInfo}>
            <Text style={[styles.productTitleStyle, styles.lf]}>
              Yellow Chair
            </Text>
            <Text style={[styles.productInfoTxt, styles.mt_2]}>
              Dimensions: H 33xW 18xD 22
            </Text>
            <Text style={styles.productInfoTxt}>Seating Height: 17.9</Text>
            <Text style={styles.productInfoTxt}>
              ( all dimensions in inches )
            </Text>
            <View style={[styles.ratingContainer, styles.mt_2]}>
              <Icon
                size={wp(6)}
                name={'star'}
                type={'MaterialCommunityIcons'}
                color={colors.YELLOW_MANGO}
              />
              <Text style={styles.ratingTxt}> 4.2 | 234 Reviews</Text>
            </View>
          </View>
          <View style={styles.productPrice}>
            <View style={styles.row}>
              <Text style={[styles.productTitleStyle, styles.pt_2]}>$</Text>
              <Text style={[styles.productTitleStyle, styles.lf]}>33</Text>
            </View>
            <Text style={[styles.ratingTxt, styles.mt_2]}>Offer Price</Text>
          </View>
        </View>
        <Separator />
        {/* Nav tab section */}
      </View>
      <BottomTab />
      <TabViewFunction />
    </SvgWrapper>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: wp(4),
  },
  img: {
    width: wp(75),
    height: wp(75),
    marginTop: hp(5),
    alignSelf: 'center',
  },
  productInfoCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productTitleStyle: {
    fontSize: fp(1.7),
    fontWeight: '600',
    color: colors.BLACK,
  },
  lf: {
    fontSize: fp(2.7),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  pt_2: {
    paddingTop: hp(0.5),
  },
  mt_2: {
    marginTop: hp(1.5),
  },
  productPrice: {
    alignItems: 'center',
  },
  ratingTxt: {
    fontSize: fp(1.7),
    fontWeight: '600',
    color: colors.BLACK + '90',
  },
  productInfoTxt: {
    fontSize: fp(1.8),
    color: colors.DARK_GRAY,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
