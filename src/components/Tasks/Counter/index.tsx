import { Text, View } from "react-native"
import { styles } from "./styles"

interface CounterInterface {
    color: string;
    number: number;
    text: string
}

export const Counter = ({color, number, text}: CounterInterface) => {
    return (
        <View style={styles().container}>
            <Text style={styles({color}).text}>{text}</Text>
            <Text style={styles().number}>{number}</Text>
        </View>
    )
}