import {Row} from 'components/atoms/row';
import React, { useState } from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import Bold from "components/carts/bold";
import Label from './Label';
import {mvs} from 'assets/metrices';
import { PlusButton } from 'components/atoms/buttons';
import { MinusSign, PlusSign } from 'assets/svgs';

const OrderPreview = ({onclickPlus,onclickMinus,description='',pieces='',price='',count }) => {

  const [counter,setCounter]=useState(0);
  return (
    <Row style={{alignItems: 'center',marginVertical:mvs(10)}}>
      <Row style={{alignItems:'center'}}>
        
          <Image
            style={styles.img}
            source={require('../../assets/images/oilOrder.png')}
          />
        
        <View style={{marginHorizontal:mvs(10)}}>
          <Bold label={description} color='black'/>
          <Label label={pieces} />
          <Label label={'Rs '+price} />
        </View>
      </Row>

      <View>
        <TouchableOpacity onPress={()=>setCounter(counter+1)}>
        <PlusSign/>
        </TouchableOpacity>
        
        <Label label={counter} color='white' style={styles.counter}/>
        <TouchableOpacity onPress={()=>setCounter(counter-1)}>
        <MinusSign/>
        </TouchableOpacity>
        
      </View>
    </Row>
  );
};
export default OrderPreview;

const styles = StyleSheet.create({
  
  img: {
    width: mvs(107),
    height: mvs(107),
  },
  counter:{
    backgroundColor:'#20D994',marginVertical:mvs(16),alignItems:'center',padding:mvs(10)
  }
});
