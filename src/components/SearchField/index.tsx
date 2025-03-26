import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";

export const SearchField = ({handleAddTask}: {handleAddTask: (text:string) => void}) => {
    
    const [userInput, setUserInput] = useState('');
    const handleUserAdd = () => {
        handleAddTask(userInput)
        setUserInput('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
                onChangeText={setUserInput}
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={'#808080'}
                value={userInput}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={handleUserAdd}
            >
                <Ionicons name="add-circle-outline" size={24} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
    );
}