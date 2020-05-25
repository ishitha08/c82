import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {TextComponent} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class SettingScreen extends Component{
    constuctor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            emailId:'',
            Address:'',
            contact:'',
            docId:'',
        }
    }
    getUserDetails(){
        var user = firebase.auth().currentUser;
        var email = user.email
        db.collection('users').where('email_Id','==',email).get().then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data();
                this.setState({
                emailId:data.email_id,
                firstName:data.first_name,
                lastName:data.last_name,
                Address:data.address,
                contact:data.contact,
                docId:doc.id
                })
            })
         })
    }
    render(){
        return(
            <View style = {styles.container}>
               <MyHeader title = "settings" navigation = {this.props.navigation}/>
               <View style = {styles.formContainer}>
                   <TextInput style = {styles.formTextInput}
                   placeholder = {"first name"}
                   maxLength = {8}
                   onChangeText = {(text)=>{
                       this.setState({
                           firstName:text
                       })
                   }}
                   value = {this.state.firstName}
                   ></TextInput>
                   <TextInput style = {styles.formTextInput}
                   placeholder = {"last name"}
                   maxLength = {8}
                   onChangeText = {(text)=>{
                       this.setState({
                           lastName:text
                       })
                   }}
                   value = {this.state.lastName}
                   ></TextInput>
                   <TextInput style = {styles.formTextInput}
                   placeholder = {"contact"}
                   maxLength = {10}
                   keyboardType = {'numeric'}
                   onChangeText = {(text)=>{
                       this.setState({
                           contact:text
                       })
                   }}
                   value = {this.state.contact}
                   ></TextInput>
                   <TextInput style = {styles.formTextInput}
                   placeholder = {"Address"}
                   multiline = {true}
                   onChangeText = {(text)=>{
                       this.setState({
                           Address:text
                       })
                   }}
                   value = {this.state.Address}
                   ></TextInput>
                   <TouchableOpacity style = {styles.button} onPress = {()=>{
                       this.updateUserDetails()
                   }}>
                       <Text style = {styles.buttonText}>Save</Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}