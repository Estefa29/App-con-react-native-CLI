import { StyleSheet, Dimensions } from 'react-native';

const ButtonStyles = StyleSheet.create({

    small: {
        width: Dimensions.get("screen").width * 0.5,
        marginTop: 20,
        padding: 17,
        borderRadius: 50,
        alignItems: "center"
    },
    medium: {
        width: Dimensions.get("screen").width * 0.7,
        marginTop: 20,
        padding: 17,
        borderRadius: 50,
        alignItems: "center"
    },
    large: {
        width: Dimensions.get("screen").width * 0.85,
        marginTop: 20,
        padding: 17,
        borderRadius: 50,
        alignItems: "center"
    }
});

export default ButtonStyles;