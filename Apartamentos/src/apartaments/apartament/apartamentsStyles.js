import {Dimensions, StyleSheet} from 'react-native';
import apartamentosScreen from './apartamentsScreen.js';

const apartamentosStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    imageContainer:{
        flexDirection: "row",
        height: Dimensions.get('screen').height * 0.3,
        width: Dimensions.get('screen').width * 0.7,
        margin: 10,
    },
    apartamentosInfoContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttoStyle: {
        backgroundColor: "#1c92f3",
        margin: 10,
        padding: 10,
        width: Dimensions.get('screen').width * 0.2,
        alignItems: "center",
        borderRadius: 10
    }
});

export default apartamentosStyles;