import { car, country_flag, flag, globe, hands, home, location, open_mail, question_mark } from 'assets/images';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import { Row } from 'components/atoms/row';
import DrawerHomeCard from 'components/molecules/drawr-home-card';
import { colors } from 'config/colors';
import { mvs, width } from 'config/metrices';
import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import Bold from 'typography/bold-text';

const CustomDrawerContent = (props) => {
  return (
    <View
      style={styles.drawerContainer}>
      <View style={styles.header}>

      </View>
      <DrawerHomeCard icon1={home} label1={'Home'} br={8} />
      <View style={styles.needHelpContainer}>
        <DrawerHomeCard icon1={question_mark} label1={'Need help?'} />
        <DrawerHomeCard icon1={'Help center'} label1={'Help center'} />
        <DrawerHomeCard icon1={'Help center'} label1={'Terms and conditions'} />
        <DrawerHomeCard icon1={'Help center'} label1={'Privacy policy'} />
      </View>
      <DrawerHomeCard icon1={location} label1={'Country'} icon2={flag} label2={'Germany'} />
      <DrawerHomeCard icon1={globe} label1={'Language'} label2={'English'} />
      <Bold label={'Join our business'} color={colors.primary} style={styles.joinTxt} />
      <DrawerHomeCard icon1={car} label1={'Become a Rider'} />
      <DrawerHomeCard icon1={hands} label1={'Become a partner'} />
      <DrawerHomeCard icon1={open_mail} label1={'Become a Courrier'} />

    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  needHelpContainer: {
    backgroundColor: colors.white,
    width: width - 100,
    marginHorizontal: mvs(17),
    borderRadius: mvs(8),
    // paddingHorizontal: mvs(17.5),
    marginVertical: mvs(14),
    alignItems: 'center',
    ...colors.shadow,

  },
  joinTxt: { paddingHorizontal: mvs(23), marginTop: mvs(34), marginBottom: mvs(7) },
  header: { height: mvs(120), width: width - 60, backgroundColor: colors.green, marginBottom: mvs(48.5), }
});
