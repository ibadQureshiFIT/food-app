import React, { useState } from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from "./style";
import Header from "components/carts/header";
import { OrderStatusPic, StarEmpty, StarFill } from "assets/svgs";
import OrderTrack from "components/carts/orderTrack";
import DrawVerticalLine from "components/carts/drawVerticalLine";
import PrimaryButton from "components/carts/button";
import { mvs } from "config/metrices";
import Bold from "components/carts/bold";
import Label from "components/carts/Label";
import { Row } from "components/atoms/row";
import PrimaryTextInput from "components/carts/PrimaryTextInput";
import { multiply } from "react-native-reanimated";
import { ScrollView } from "react-native";
import TextArea from "components/carts/textArea";
import { Touchable } from "react-native";
import StarRating from "components/carts/starRating";
 

const OrderStatus=({navigation})=>{
    const [rankingCount,setRankingCount]=useState(0);

    const handleCount=(newRating)=>{

       setRankingCount(newRating)
       
    }
    return(
        <View style={styles.main}>
              <Header bgColor="#20D994" leftIcon="ArrowWhite" midLabel="Order Status" txtColor='white' midSecond="Invoice: 54321"
              onclickLeftIcon={()=>navigation.navigate('OrderNotificationCart')}/>
              <ScrollView style={styles.body}>
                <View style={{alignItems:'center'}}>
               <OrderStatusPic  />
               <Bold label={'Order received'} color={'black'} size={21}/>
               <Label label="Order # 54228382" size={10} color="gray"/>
               </View>
               <View style={styles.starsBox}>
                <Label label="Tell us your feedback" size={10} color="gray" />
                <Label label="Tell us how you feel about the restaurant’s food and service." size={14} style={{marginTop:mvs(10)}}/>

                <StarRating initialRating={rankingCount} onRatingChange={handleCount}/>
               
               </View>
             <View style={styles.lowerBox}>
               <Bold label="Write a review" color={"black"}/>
               <TextArea style={styles.txtArea} />
               </View>
              </ScrollView>
              <PrimaryButton label="Track your order" color={'white'} height={mvs(60)} style={styles.btn}  />

   
        </View>
    )
};
export default OrderStatus;




