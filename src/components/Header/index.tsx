import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const Header = () => {

    return (
        <View style={styles.container}>
            <Image 
                width={110.34}
                height={32}
                source={require('../../../assets/Logo.png')} />
        </View>
    )
}