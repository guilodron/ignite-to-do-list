import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 327,
        height: 54,
        flexDirection: 'row',
        marginTop: -27
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16
    },
    button: {
        width: 54,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E6F9F',
        marginLeft: 4,
        borderRadius: 6
    }
})