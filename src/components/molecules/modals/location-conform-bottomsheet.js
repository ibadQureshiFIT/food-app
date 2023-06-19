import {EditorIcon, Union} from 'assets/icons';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from 'react-native-raw-bottom-sheet';
import Regular from 'typography/regular-text';
import Medium from 'typography/medium-text';
import {PrimaryButton} from 'components/atoms/buttons';
import {navigate} from 'navigation/navigation-ref';

const ConformLocationBottomSheet = ({refRBSheet, onPress}) => {
  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={mvs(350)}
        openDuration={450}
        customStyles={{
          container: {
            height: mvs(230),
            borderTopLeftRadius: mvs(10),
            borderTopRightRadius: mvs(10),
            paddingHorizontal: mvs(20),
            backgroundColor: colors.secondary,
          },
        }}>
        <View>
          <Row>
            <Row style={{justifyContent: 'flex-start'}}>
              <Union />
              <Regular
                fontSize={mvs(18)}
                style={{marginLeft: mvs(20)}}
                label={'Homewoods'}
              />
            </Row>
            <EditorIcon />
          </Row>
          <Row style={styles.addNewAddressContainer}>
            <Row>
              <AntDesign name="plus" size={20} color={colors.green} />
              <Medium style={{marginLeft: mvs(20)}} label={'Add new address'} />
            </Row>
            <AntDesign name="plus" size={20} color={colors.black} />
          </Row>
          <PrimaryButton
            containerStyle={{marginTop: mvs(25)}}
            title={'Conform Location'}
            onPress={() => navigate('Drawer')}
          />
        </View>
      </RBSheet>
    </>
  );
};

export default ConformLocationBottomSheet;

const styles = StyleSheet.create({
  addNewAddressContainer: {
    borderTopWidth: 1,
    borderColor: colors.placeholder,
    // padding: mvs(5),
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 1,
    marginTop: mvs(10),
  },
});
