import { StyleSheet } from "react-native";

export const styles = (props?: any) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: props?.color || 'white',
        marginRight: 8,
        fontSize: 14
    },
    number: {
        color: '#D9D9D9',
        backgroundColor: '#333333',
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999,
        fontWeight: 'bold',
        fontSize: 12
    }
})