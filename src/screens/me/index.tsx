import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SplashIcon} from 'assets/icons';
import {eye, profile_pic, splash_bg} from 'assets/images';
import React from 'react';
import {ImageBackground, Image, View} from 'react-native';
import i18n from 'translation';
import {STORAGEKEYS} from '../../config/constants';
import {
  setLanguage,
  setLocation,
  setUserInfo,
} from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import {UTILS} from 'utils';
import {useAppDispatch} from 'hooks/use-store';
import styles from './styles';
import Medium from 'typography/medium-text';
import Bold from 'typography/bold-text';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Me = (props: props) => {
  const {navigation} = props;
  return (
    <View style={{...styles.container}}>
      <Row
        style={{
          paddingTop: mvs(90),
          paddingHorizontal: mvs(30),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Row>
          <Image
            source={profile_pic}
            style={{height: mvs(61), width: mvs(61)}}
          />
          <Bold label={`John doe`} />
        </Row>
        <Image source={eye} style={{height: mvs(20), width: mvs(29)}} />
      </Row>
    </View>
  );
};
export default Me;
