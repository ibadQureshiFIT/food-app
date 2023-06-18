import React from 'react';
import FastImage from 'react-native-fast-image';

import { mvs, width } from 'config/metrices';
import { StyleSheet, Image, View } from 'react-native';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import { colors } from 'config/colors';
import Light from 'typography/light-text';
import { t } from 'i18next';
import { Row } from 'components/atoms/row';
import { eye, home, profile_pic } from 'assets/images';

const DrawerHomeCard = ({ icon1, icon2, label1, label2, br = 0, containerStyle }) => {
  return (
    <>
      <Row style={[styles.homeContainer, style, {
        borderRadius: mvs(br),

      }]}>
        <Row>
          {icon1 && <Image source={icon1} style={styles.img} />}
          <Bold label={label1} fontSize={mvs(15)} />
        </Row>
        {<Row style={{ marginRight: mvs(22) }}>
          {label2 &&
            <>
              {icon2 && <Image source={icon2} style={styles.img} />}
              <Bold label={label2} fontSize={mvs(15)} />
            </>}
        </Row>}
      </Row>
    </>
  );
};

export default DrawerHomeCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: mvs(30),
  },
  profileContainer: {
    paddingHorizontal: mvs(30),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: { height: mvs(15), width: mvs(20), marginRight: mvs(16) },
  homeContainer: {
    backgroundColor: colors.white,
    height: mvs(48),
    width: width - 100,
    marginHorizontal: mvs(17),
    paddingHorizontal: mvs(17.5),
    alignItems: 'center',
    ...colors.shadow,

  }
});
