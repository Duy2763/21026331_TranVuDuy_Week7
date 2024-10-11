
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTask } from "../contextAPI/TaskContext";

export default function Screen3() {
    const navigation = useNavigation();
    const route = useRoute();
    const [search, setSearch] = useState('');
    const [job, setJob] = useState('');

    const {name, tasks, addTask, editTask} = useTask();
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center', gap: 60, paddingHorizontal: 24}}> 
                <View style={{flexDirection: 'row', gap: 5, alignSelf: "flex-end", }}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../assets/img/avatar.jpg')}
                    />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hi {name}</Text>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Have agrate day a head</Text>
                    </View>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 38}}>ADD YOUR JOB</Text>
                <View style={{flexDirection: "row", borderWidth: 1, padding: 14, width: '100%', gap: 5, borderRadius: 4}}>
                    <Image
                        source={require('../assets/img/search.png')}
                    />
                    <TextInput
                        style={{fontSize: 16}}
                        placeholder="Input put your job"
                        onChangeText={(text) => setJob(text)}
                    />
                </View>
                <TouchableOpacity 
                    style={{backgroundColor: 'lightblue', paddingVertical: 10, paddingHorizontal: 60, borderRadius: 10}}
                    onPress={() => {
                        if (route.params.key === null) {
                            addTask({
                                key: tasks.length + 1,
                                content: job,
                            })
                        } else {
                            editTask(route.params.key, job)
                        }
                        navigation.navigate('Screen2')
                    }}
                >
                    <Text style={{color: 'white', fontSize: 20}}>Finish</Text>
                </TouchableOpacity>
                <Image
                    source={require('../assets/img/book.jpg')}
                />
            </View>

        </SafeAreaView>
        

    )

}