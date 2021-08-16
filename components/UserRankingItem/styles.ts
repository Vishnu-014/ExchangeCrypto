import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: 50,
        marginVertical: 10,
    },
    image: {
        height: 50,
        width: 50, 
        margin: 10,  
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    symbol: {
        color: '#6b6b6b',
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
    },
    place: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 20,
    }
});

export default styles;