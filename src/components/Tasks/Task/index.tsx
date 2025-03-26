import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface TaskInteface {
    active: Boolean;
    text: string;
    onCheck: () => void;
    onDelete: () => void
}

export const Task = ({active, text,onCheck,onDelete}: TaskInteface) => {
    return (
        <View style={styles().container}>
            <TouchableOpacity
                onPress={onCheck}
            >
                {
                    active ? 
                    <FontAwesome name="check-circle" size={24} color="#5E60CE" /> :
                    <FontAwesome name="circle-o" size={24} color="#4EA8DE" /> 
                }
            </TouchableOpacity>
            <Text style={styles({active}).text}>{text}</Text>
            <TouchableOpacity
                onPress={onDelete}
            >
                <FontAwesome name="trash-o" size={21} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}