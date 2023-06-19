import { mvs } from 'config/metrices';
import { View } from 'react-native';
import React from 'react';
import { colors } from 'config/colors';
const Line = ({ marginVertica = 0, width = '100%' }) => {
  return (
    <View
      style={{
        width: width,
        height: mvs(1),
        backgroundColor: colors.grey,
        marginVertical: mvs(marginVertica),
      }}></View>
  );
};
export default Line;
