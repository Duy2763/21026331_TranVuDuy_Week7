
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTask } from "../contextAPI/TaskContext";

export default function Screen1() {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const { updateName } = useTask();
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, alignItems: "center", paddingHorizontal: 24, gap: 60}}> 
                <Image
                    source={require('../assets/img/book.jpg')}
                />
                <View style={{alignItems: "center"}}> 
                    <Text style={{color: 'purple', fontSize: 30, fontWeight: 'bold'}}>MANAGER YOUR</Text>
                    <Text style={{color: 'purple', fontSize: 30, fontWeight: 'bold'}}>TASK</Text>
                </View>

                <View style={{flexDirection: "row", borderWidth: 1, padding: 14, width: '100%', gap: 5, borderRadius: 16}}>
                    <Image
                        source={require('../assets/img/Vector.png')}
                    />
                    <TextInput
                        style={{fontSize: 16}}
                        placeholder="Enter your name"
                        onChangeText={(text) => setName(text)}
                    />
                </View>

                <TouchableOpacity 
                    style={{backgroundColor: 'lightblue', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10}}
                    onPress={() => {
                        navigation.navigate('Screen2') 
                        updateName(name)
                    }}
                >
                    <Text style={{color: 'white', fontSize: 20}}>GET STARTED</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
        

    )

}