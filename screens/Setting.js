import React, { useState, useEffect, render } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles, textStyles, dark_mode } from '../styles/styles';
import { StatusBar } from 'expo-status-bar';
import FooterTab from '../components/FooterTab';


function Setting() {
    const [darkMode, setDarkMode] = useState(dark_mode.value);
    useEffect(() => {
        // This effect will be called whenever darkMode changes
        dark_mode.value = darkMode;
    }, [darkMode]);

    const toggleSwitch = () => {
        setDarkMode((previousState) => !previousState);
    };

    return (
        <View style={styles.container}>
            <Text style={textStyles.titleText}>Settings</Text>
            <Switch onValueChange={toggleSwitch} value={darkMode} />

            <StatusBar />
            <FooterTab />
        </View>
    );
}

export default Setting;
