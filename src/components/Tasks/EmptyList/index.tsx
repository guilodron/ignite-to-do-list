import { Text, View } from "react-native"
import Foundation from '@expo/vector-icons/Foundation';
import { styles } from "./styles";

export const EmptyList = () => {
    return (
        <View style={styles.container}>
            <Foundation name="clipboard-notes" size={56} color="#808080" />
            <Text style={styles.mainText}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}