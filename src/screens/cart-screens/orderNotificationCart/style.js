import { mvs } from "config/metrices";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    main:{
           flex:1,
    },
    body:{flex:1,
        marginHorizontal:mvs(20), 
    },
    btn:{
        marginBottom:mvs(10)
   }
})
export default styles;