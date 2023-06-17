import { colors } from 'config/colors';
import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const CustomDrawerContent = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.red,
      }}>
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
});
