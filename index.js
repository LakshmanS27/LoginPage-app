import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from '../../components/Buttons';
import InputText from  '../../components/InputText';
import CustomText from  '../../components/CustomText';

export default function Loginpage() {
  return (
    <View>
        <CustomText title="Welcome to Android"/>
        <InputText placeholder='Enter your name'/>
        <InputText placeholder='Enter your password'visibility={true}/>
        <Buttons title='Login'/>
        <Buttons title='Register'/>
    </View>
  );
}

