
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useTask } from "../contextAPI/TaskContext";

export default function Screen2() {
    const navigation = useNavigation();
    const route = useRoute();
    // const [tasks, setTasks] = useState([
    //     {key: '1', content: 'To check email'},
    //     {key: '2', content: 'UI task web page'},
    //     {key: '3', content: 'Learn javascript basic'},
    //     {key: '4', content: 'Learn HTML advance'},
    //     {key: '5', content: 'Medical App UI'},
    //     {key: '6', content: 'Learn Java'},
    // ])
    const {name, tasks, addTask, editTask} = useTask();
    // useEffect(() => {
    //     if (route.params?.newJob) {
    //         const task = {
    //             key: String(tasks.length + 1),
    //             content: route.params.newJob
    //         }
            
    //         setTasks([
    //             ...tasks, task
    //         ])
    //     }
    // }, [route.params?.newJob])

    const [search, setSearch] = useState('');
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, gap: 30, paddingHorizontal: 16}}> 
                <View style={{flexDirection: 'row', gap: 5, alignSelf: "flex-end"}}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../assets/img/avatar.jpg')}
                    />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Hi {name}</Text>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray'}}>Have agrate day a head</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", borderWidth: 1, padding: 14, width: '100%', gap: 5, borderRadius: 4}}>
                    <Image
                        source={require('../assets/img/search.png')}
                    />
                    <TextInput
                        style={{fontSize: 16}}
                        placeholder="Search"
                        onChangeText={(text) => setSearch(text)}
                    />
                </View>
                <View style={{flex: 1, gap: 10}}>
                    <FlatList
                        data={search === '' ? tasks : tasks.filter(task => task.content.toLowerCase().includes(search.trim().toLowerCase()))}
                        keyExtractor={(task) => task.key}
                        renderItem={({item}) => 
                            (
                                <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', padding: 12, backgroundColor: 'lightgray', borderRadius: '50%', marginBottom: 10}}>
                                    <View style={{flexDirection: "row", alignItems: 'center', gap: 16}}>
                                        <Image
                                            style={{width: 30, height: 30}}
                                            source={require('../assets/img/avatar.jpg')}
                                        />
                                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.content}</Text>
                                    </View>
                                    
                                    <TouchableOpacity 
                                        onPress={() => {
                                            navigation.navigate('Screen3', {key: item.key})
                                        }}
                                    >
                                        <Image
                                            style={{width: 30, height: 30}}
                                            source={require('../assets/img/avatar.jpg')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    />

                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={{backgroundColor: 'lightblue',  borderRadius: '50%', width: 80, height: 80, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => navigation.navigate('Screen3')}
                    >
                        <Text style={{color: 'white', fontSize: 50}}>+</Text>

                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
        

    )

}