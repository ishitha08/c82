import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import {Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config.js';

export default class RecieverDetailsScreen extends Component{
constructor(props){
    super(props);
    this.state={
        userId:firebase.auth().currentUser.email,
        recieverId:this.props.navigation.getParam('details')["user_id"],
        requestId:this.props.navigation.getParam('details')["request_id"],
        bookName:this.props.navigation.getParam('details')["book_name"],
        reason_for_requesting:this.props.navigation.getParam('details')["reason_to_request"],
        recieverName:'',
        recieverContact:'',
        recieverAddress:'',
        recieverRequestDocId:''
    }
}
getRecieverDetails(){
    db.collection('user').where('email_id',this.state.recieverId).get()
    
}
render(){
    return(
        <View>
            <Text>Reciever Details</Text>
        </View>
    )
}
}