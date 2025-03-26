import { StyleSheet } from "react-native";

export const styles = (props?: any) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        // flex: 1,;
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginBottom: 8
    },
    text: {
        flex: 1,
        marginHorizontal: 8,
        color: '#F2F2F2',
        fontSize: 14,
        textDecorationLine: props?.active ? 'line-through' : 'none'
    }
})