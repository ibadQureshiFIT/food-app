import React from "react";
import {View,Text,TouchableOpacity,ScrollView} from 'react-native';
import styles from "./style";
import Header1x2x from "components/atoms/headers/header-1x-2x";
import Header from "components/carts/header";
import Label from "components/carts/Label";
import { Row } from "components/atoms/row";
import OrderPreview from "components/carts/orderPreview";
import Bold from "components/carts/bold"; 
import { ForwardSign, Line,Location } from "assets/svgs";
import { mvs } from "config/metrices";
import PrimaryButton from "../../../components/carts/button";
import DrawHorizentalLine from "components/carts/drawHorizentalLine";
 
 
 
const CartPreview=({navigation})=>{
    return(
   
        <ScrollView style={styles.main}> 
           <Header bgColor="#F9F9F9" leftIcon="BackArrow"  />
           <View style={styles.body}>
           <Bold label="Order Preview" size={20} color="#20D994" />
           <OrderPreview description="Olive Oil-Fried Egg" pieces="3 pcs" price="300" />
            <OrderPreview description="Olive Oil-Fried Egg" pieces="3 pcs" price="300"/>
            <OrderPreview description="Olive Oil-Fried Egg" pieces="3 pcs" price="300" />
          <DrawHorizentalLine />
          <Row>
            <Label label="Shipping fee"/>
            <Label label="Rs 0"/>
            </Row>

            <Row style={{marginVertical:mvs(10)}}>
            <Bold label="Total Payment" color={'black'}/>
            <Bold label="Rs 900" color={'black'}/>
            
            </Row>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('CartProceed')}>
             
                <Location/>
                <Label label="Please add your shipping address" color="white"/>
                <ForwardSign/>
             
            </TouchableOpacity>
        </View>
        </ScrollView>

    )
}
export default CartPreview;