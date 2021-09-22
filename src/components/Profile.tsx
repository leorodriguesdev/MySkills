import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';


export function Profile(){
    return (

    <View style={styles.perfil}>
    <Image
        source={require('../assets/profile.jpeg')}
        style={styles.profile}
    />
    <Text style={styles.about}>Leonardo Rodrigues {'\n'}─────────────{'\n'}Developer

    </Text>

</View>

    )}

const styles = StyleSheet.create({
    perfil: {
        width: '100%',
        height: 120,
        paddingBottom: -1,
        backgroundColor: '#1f1e25',
        borderRadius: 7,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        marginTop: 20
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#a370f7'

    },
    about: {
        marginTop: 7,
        marginRight: 20,
        color: '#fff',
        fontSize: 17,
        marginLeft: 20,
        fontWeight: 'bold'


    }
});