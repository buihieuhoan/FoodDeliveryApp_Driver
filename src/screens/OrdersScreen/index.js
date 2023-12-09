import { useRef } from "react";
import { View, Text,FlatList } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import orders from '../../../assets/data/orders.json'
import OrderItem from "../../components/OrderItem";

const OrdersScreen = () => {
    const bottomSheetRef = useRef(null)

    return (
        <GestureHandlerRootView style={{backgroundColor:'lightblue', flex:1}} >
            <BottomSheet ref={bottomSheetRef} index={1} snapPoints={["12%","95%"]}>
                <View style={{ alignItems:'center', marginBottom:30}} >
                    <Text 
                        style={{
                            fontSize:20, 
                            fontWeight:'600', 
                            letterSpacing:0.5, 
                            paddingBottom:5
                        }} 
                    > 
                    You're Online 
                    </Text>
                    <Text style={{letterSpacing:0.5, color:'grey'}} > Available Order: {orders.length} </Text>
                </View>
                <FlatList 
                    data={orders}
                    renderItem={({item}) => <OrderItem order={item} />}
                />
            </BottomSheet>
        </GestureHandlerRootView>
    )
}

export default OrdersScreen