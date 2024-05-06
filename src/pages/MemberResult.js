import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function MemberResult({route}){

    const {user} = route.params;

    return(
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>Üye adı: {user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-posta Adresi: {user.userMail}</Text>
            <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
        </SafeAreaView>
    );
};

const styles= StyleSheet.create({
    label:{
        fontWeight:"bold",
        fontSize:30,
        margin:5,
    },
    message:{
        fontWeight:"bold",
        fontSize:50,
        textAlign:"center",
        marginTop:30,
    }
})

export default MemberResult;