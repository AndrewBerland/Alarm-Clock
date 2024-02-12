import { StyleSheet, Dimensions } from 'react-native';

let dark_mode = { value: true };
export { dark_mode };

const generateStyles = () => {
    const light_styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,
            // alignItems: 'center',
            // justifyContent: 'center',
            paddingBottom: 500,
            marginTop: 20,
        },
        button: {
            backgroundColor: 'lightgreen',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginBottom: 50,
        },
        box: {
            width: 300,
            height: 100,
            backgroundColor: 'white',
            padding: 30,
            margin: 10,
            borderRadius: 700,
            borderWidth: 2,
            borderColor: 'green',
            alignItems: 'center',
        },
        alarmTimeBox: {
            // width: 300,
            // height: 100,
            backgroundColor: 'white',
            padding: 10,
            // margin: 10,
            borderRadius: 700,
            borderWidth: 2,
            borderColor: 'green',
            alignItems: 'center',
        },
        time: {
            // padding: 80,
            fontWeight: 'bold',
            fontSize: 30,
            color: 'green',
        },
        tab: {
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            paddingBottom: 40,
        },
        page: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
    });

    const dark_styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            padding: 20,
            // alignItems: 'center',
            // justifyContent: 'center',
            paddingBottom: 500,
            marginTop: 20,
        },
        button: {
            backgroundColor: 'red',
            paddingVertical: 15,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginBottom: 50,
        },
        box: {
            width: 300,
            height: 100,
            backgroundColor: 'black',
            padding: 30,
            margin: 10,
            borderRadius: 700,
            borderWidth: 2,
            borderColor: 'red',
            alignItems: 'center',
        },
        alarmTimeBox: {
            // width: 300,
            // height: 100,
            backgroundColor: 'black',
            padding: 10,
            // margin: 10,
            borderRadius: 700,
            borderWidth: 2,
            borderColor: 'red',
            alignItems: 'center',
        },
        time: {
            // padding: 80,
            fontWeight: 'bold',
            fontSize: 30,
            color: 'red',
        },
        tab: {
            backgroundColor: 'gray',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            paddingBottom: 40,
        },
        page: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
    });

    return dark_mode.value ? dark_styles : light_styles;
}
export const styles = generateStyles();

const generateTextStyles = () => {
    const light_textStyles = StyleSheet.create({
        baseText: {
            fontFamily: 'Cochin',
        },
        titleText: {
            fontSize: 50,
            fontWeight: 'bold',
        },
        buttonText: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
        },
        timeText: {
            alignSelf: 'flex-start',
            fontSize: 30,
            fontWeight: 'bold',
        },
    });

    const dark_textStyles = StyleSheet.create({
        baseText: {
            color: "white",
            fontFamily: 'Cochin',
        },
        titleText: {
            color: "white",
            fontSize: 50,
            fontWeight: 'bold',
        },
        buttonText: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
        },
        timeText: {
            color: "white",
            alignSelf: 'flex-start',
            fontSize: 30,
            fontWeight: 'bold',
        },

    });
    return dark_mode.value ? dark_textStyles : light_textStyles;
}
export const textStyles = generateTextStyles();

