import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button/Button";

function MemberSign(){
    return(
        <SafeAreaView style={{marginTop:40}}>
            <Input label="Üye Adı" placeholder="Üyenin ismini giriniz:" />
            <Input label="Üye Soyadı" placeholder="Üyenin soyismini giriniz:" />
            <Input label="Üye Yaşı" placeholder="Üyenin yaşını giriniz:" />
            <Input label="Üye E-posta" placeholder="Üyenin e-posta adresini giriniz:" />
            <Input label="Üye Memleketi" placeholder="Üyenin memleketini giriniz:" />
            <Button text="Kaydı Tamamla" onPress={null} /> 

        </SafeAreaView>
    );
};

export default MemberSign;