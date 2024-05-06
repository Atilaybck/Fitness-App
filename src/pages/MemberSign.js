import React, { useState } from "react";
import { SafeAreaView, Alert } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button/Button";

function MemberSign({ navigation }) {

    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userHometown, setUserHometown] = useState('');

    function handleSubmit() {
        if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
            Alert.alert("Atibaba Fitness Salonu", "Bilgiler Boş Bırakılamaz")
        } else {
            const user = {
                userName,
                userSurname,
                userAge,
                userMail,
                userHometown,
            };
            navigation.navigate("MemberResultScreen", { user });
        }
    }

    return (
        <SafeAreaView style={{ marginTop: 40 }}>
            <Input
                label="Üye Adı"
                placeholder="Üyenin ismini giriniz:"
                onChangeText={setUserName}
            />
            <Input
                label="Üye Soyadı"
                placeholder="Üyenin soyismini giriniz:"
                onChangeText={setUserSurname}
            />
            <Input
                label="Üye Yaşı"
                placeholder="Üyenin yaşını giriniz:"
                onChangeText={setUserAge}
            />
            <Input
                label="Üye E-posta"
                placeholder="Üyenin e-posta adresini giriniz:"
                onChangeText={setUserMail}
            />
            <Input
                label="Üye Memleketi"
                placeholder="Üyenin memleketini giriniz:"
                onChangeText={setUserHometown}
            />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    );
};

export default MemberSign;
