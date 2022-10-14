import {Text, View, FlatList, TouchableOpacity} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemProgress from "../ItemProgress";
import StylesProgress from "./style";
import FormProgress from "../FormProgress";



const Progress = () => {


    
    const style = StylesProgress

    const progreso = [
        {
            fecha: "10 octubre",
            img: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt467660ac92ac1069/5de0b9c7c138707d3b501cc9/Blog-Fettwech-900x730-Progress.jpg?width=1232&auto=webp&format=progressive&quality=76",
            descripcion:"esta es la descripcion",
            id:"001"
        },
        {
            fecha: "20 octubre",
            img: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt6e242cc3466bd556/5de0b9c828027202b6a5ce0c/Blog-Fettwech-900x730-Gym.jpg?width=1232&auto=webp&format=progressive&quality=76",
            descripcion: "Lorem ipsum dolor sit amet. Vestibulum diam metus, pulvinar ac  eu, consequat at sem. Aenean est ",
            id:"002"
        },
        {
            fecha: "10 octubre",
            img: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt467660ac92ac1069/5de0b9c7c138707d3b501cc9/Blog-Fettwech-900x730-Progress.jpg?width=1232&auto=webp&format=progressive&quality=76",
            descripcion:"esta es la descripcion",
            id:"003"
        },
        {
            fecha: "20 octubre",
            img: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt6e242cc3466bd556/5de0b9c828027202b6a5ce0c/Blog-Fettwech-900x730-Gym.jpg?width=1232&auto=webp&format=progressive&quality=76",
            descripcion: "Lorem ipsum dolor. Vestibulum diam metus, pulvinar ac ultricies eu, consequat at sem",
            id:"004"
        },{
            fecha: "10 octubre",
            img: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt467660ac92ac1069/5de0b9c7c138707d3b501cc9/Blog-Fettwech-900x730-Progress.jpg?width=1232&auto=webp&format=progressive&quality=76",
            descripcion:"esta es la descripcion",
            id:"005"
        },
        {
            fecha: "20 octubre",
            img: "https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt6e242cc3466bd556/5de0b9c828027202b6a5ce0c/Blog-Fettwech-900x730-Gym.jpg?width=1232&auto=webp&format=progressive&quality=76",
            descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, consequat at sem",
            id:"006"
        }
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const [progressForm, setProgressForm] = useState(false)

    function handleForm(){
        setModalVisible(!modalVisible)
    }



    return(
        <>
            <SafeAreaView style={style.container}>

                <FlatList 
                    data = { progreso }
                    keyExtractor = {(item) => item.id}
                    renderItem = {({item, index}) => <ItemProgress item={item} index={index}/>}
                    ItemSeparatorComponent = {() => <View style={{marginBottom:10}} />}
                    ListHeaderComponent = {() => <Text style={style.title} >My Progress</Text>}
                />

                <TouchableOpacity 
                    style={style.buttonPosition}
                    onPress={() => {setModalVisible(!modalVisible)}}>
                    <View style={style.button}>
                        <Text style={style.buttonText}>+</Text>
                    </View>
                </TouchableOpacity>
                { modalVisible ? <FormProgress  visible={modalVisible} onAction={handleForm} state={progressForm} setState={setProgressForm}/> : null}
            </SafeAreaView>
        </>
    )
}

export default Progress