import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import CustomMap from 'components/atoms/custom-map';
import {Marker} from 'react-native-maps';
import GoogleSearchBar from 'components/atoms/google-auto-place';
import {CrossButton} from 'assets/icons';
import {goBack} from 'navigation/navigation-ref';
import ConformLocationBottomSheet from 'components/molecules/modals/location-conform-bottomsheet';

const LocationSetup = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const refRBSheet = React.useRef();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/* <GoogleSearchBar /> */}
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}
          style={styles.backButton}>
          <CrossButton />
        </TouchableOpacity>
        <CustomMap>
          <Marker
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title="Marker Title"
            description="Marker Description"
          />
        </CustomMap>
        <ConformLocationBottomSheet refRBSheet={refRBSheet} />
      </View>
    </View>
  );
};
export default LocationSetup;
