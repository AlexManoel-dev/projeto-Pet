import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import styles from './styles'

export default function(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#0098ED" barStyle="light-content" translucent='false'/>
            <Text style={styles.txt}>Home</Text>
        </SafeAreaView>
    )
}