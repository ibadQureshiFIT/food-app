import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Medium from 'typography/medium-text';

const HomeCard = ({item, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Medium label={'Hey'} style={styles.title} />
    </TouchableOpacity>
  );
};
export default React.memo(HomeCard);
const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(4),
    justifyContent: 'center',
    marginVertical: mvs(5),
    alignItems: 'center',
    // width: mvs(350),
    height: mvs(300),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: mvs(10),
  },

  title: {justifyContent: 'center', textAlign: 'center'},
});
