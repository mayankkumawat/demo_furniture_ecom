import {
  Text,
  View,
  Image,
  Alert,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from '../../assets/icons/icon';
import {colors} from '../../helpers/colors';
import {chairImg} from '../../assets/images';
import {PRODUCT_CATEGORIES, screens} from '../../constants';
import {fp, hp, wp} from '../../helpers/responsiveDimension';
import {BottomTab, Header, Separator, SvgWrapper} from '../../components';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [text, setText] = useState<string>('');
  const navigation = useNavigation();

  const handleProductClick = () => navigation.navigate(screens.PRODUCT_DETAILS);

  const product_categories = PRODUCT_CATEGORIES.map(({id, title, icon}) => (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.productCat}
      onPress={handleProductClick}
      key={`product_categories${id}`}>
      <Icon
        name={icon}
        size={wp(10)}
        color={colors.YELLOW_MANGO}
        type={'MaterialCommunityIcons'}
      />
      <Text style={styles.catStyle}>{title}</Text>
    </TouchableOpacity>
  ));

  const deal_products = PRODUCT_CATEGORIES.map(({id, title, price}) => (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.dealsItem}
      onPress={handleProductClick}
      key={`product_categories${id}`}>
      <Image source={chairImg} style={styles.img} resizeMode={'contain'} />
      <Text style={styles.productTitleStyle}>{title}</Text>
      <View style={styles.row}>
        <Text style={[styles.productTitleStyle, styles.pt_2]}>$</Text>
        <Text style={[styles.productTitleStyle, styles.lf]}>{price}</Text>
      </View>
      <Text style={[styles.catStyle, styles.bl]}>Ends in 02:10:00</Text>
    </TouchableOpacity>
  ));

  const handleSeeAll = () =>
    Alert.alert('See list', 'list is in under construction');

  return (
    <SvgWrapper>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          <Text style={styles.titleBold}>Furniture</Text> that fits your{' '}
          <Text style={styles.titleBold}>style</Text>
        </Text>
        {/* Search bar */}
        <View style={styles.inputCon}>
          <Icon
            size={wp(6)}
            name={'search'}
            type={'Ionicons'}
            color={colors.BLUE_FB}
          />
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholder={'Search Furniture'}
          />
        </View>
        {/* Shop for section */}
        <View style={styles.shopForSection}>
          <View style={styles.shopForHeader}>
            <Text style={styles.title2}>Shop for</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={handleSeeAll}>
              <Text style={styles.titleBtn}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.shopForItem}>{product_categories}</View>
        </View>
        <Separator />
        {/* Today's deals section */}
        <View>
          <View style={styles.shopForHeader}>
            <Text style={styles.title2}>Today's deals</Text>
            <TouchableOpacity activeOpacity={0.6} onPress={handleSeeAll}>
              <Text style={styles.titleBtn}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dealProductScroll}>
            {deal_products}
          </ScrollView>
        </View>
      </View>
      <BottomTab />
    </SvgWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: fp(5),
    color: colors.WHITE,
  },
  titleBold: {
    fontWeight: 'bold',
  },
  inputCon: {
    width: wp(90),
    height: hp(7),
    elevation: 4,
    marginTop: hp(9),
    paddingLeft: wp(4),
    borderRadius: wp(3),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
  },
  input: {
    width: wp(80),
    height: hp(7),
    fontSize: fp(2),
    marginLeft: wp(2),
    color: colors.BLUE_FB,
    borderTopRightRadius: wp(3),
    borderBottomRightRadius: wp(3),
  },
  title2: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: fp(2),
  },
  shopForSection: {
    marginTop: hp(4),
  },
  shopForHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleBtn: {
    fontSize: fp(1.7),
    fontWeight: 'bold',
    color: colors.BLUE_FB,
  },
  productCat: {
    width: wp(20),
    height: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopForItem: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  catStyle: {
    marginTop: hp(1.5),
    fontSize: fp(1.7),
    fontWeight: '600',
    color: colors.DARK_GRAY,
  },
  dealsItem: {
    width: wp(70),
    height: wp(40),
    padding: wp(5),
    marginRight: wp(2.5),
    elevation: 6,
    borderRadius: wp(3),
    backgroundColor: colors.WHITE,
  },
  dealProductScroll: {
    height: hp(25),
    paddingLeft: wp(2),
    alignItems: 'center',
  },
  img: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: wp(40),
    height: wp(30),
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
  bl: {
    position: 'absolute',
    bottom: wp(5),
    left: wp(5),
  },
});
