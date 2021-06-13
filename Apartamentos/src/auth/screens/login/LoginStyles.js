import { StyleSheet, Dimensions } from 'react-native';

const LoginStyles = StyleSheet.create({

    container: {
        flex: 1,
    },
    logoContainer: {
        backgroundColor: 'orange',
        height: Dimensions.get("screen").height * 0.4,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 420,
        height: 320
    },
    title: {
        position: "absolute",
        right: 30,
        bottom: 50,
        fontSize: 22,
        color: "#e8fcf3"
    },
    inputDataContainer: {
        height: Dimensions.get("screen").height * 0.60,
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 30
    },
    inputData: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    textButton: {
        color: "#e8fcf3",
        fontWeight: '400'
    },
    buttonGradient:{
        flex: 1
    },
    ButtonRegister:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center' 
},

});

export default LoginStyles;