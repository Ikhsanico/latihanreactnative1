import React, { Component } from 'react'
import {Text, View, StatusBar, Image, TouchableOpacity, Switch, TextInput, ScrollView, StyleSheet, Button, FlatList, Alert, ToastAndroid, BackHandler, PermissionsAndroid, ActivityIndicator, Dimensions, Linking, RefreshControl, ImageBackground } from "react-native"

const width = Dimensions.get('screen').width
const height  = Dimensions.get('screen').height

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      header: 'Bismillah',
      value: true,
      username : '',
      refresh: false,
      data : [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7],
      dataPembayaran : [
          {
            namaBarang : 'Spicy Medium',
            harga : 10000

          },
          {
            namaBarang : 'BtsXMeal',
            harga : 15000

          },
          {
            namaBarang : 'ChickenNugget',
            harga : 20000

          },
           {
            namaBarang : 'Pizza',
            harga : 12500

          },
          {
            namaBarang : 'Frappucino',
            harga : 25000

          },

      ]
     };
  }


  backAction = () => {
      Alert.alert('perhatian', 'apakah anda ingin menutup aplikasi', [
      {
        text:'tidak',
        onPress: () => null,
        style:'tidak'

      },
      {
        text:'ya',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  }
  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction,
    );
  }
  componentWillUnmount() {
    this.BackHandler.remove();
  }

  requestCameraPermission = async () => {
    try{
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, 
        {
          title: 'Ijinkan akses',
          message: 'Ijinkan Aplikasi untuk mengakses Kamera',
          buttonNeutral: 'Nanti',
          butonNegative: 'Tidak',
          buttonPositive: 'OK',
        }
      )
      if(granted === PermissionsAndroid.RESULTS.GRANTED )
      {
        console.log('permission diberikan')
      }
      else{
        console.log('permssion tidak diberikan!')
      }
    }
    catch(err){
      console.log(err)
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='#6a1b9a'></StatusBar>
        <View  style={styles.header}>

          <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 25}}>{this.state.header}</Text>

        </View>

        <ActivityIndicator size ='small' color="#212121"  />
        <ActivityIndicator animating={false}size ='large' color="#FF2E2E"  />
        {/* <TouchableOpacity 
          style={styles.imageContainer}
          onPress={() => Linking.openURL('https://www.google.com')
          }>
             
        
          <Image 
            source={{uri : 'https://pbs.twimg.com/media/EzV84JMVUAQvO43.jpg'}}
            style={styles.image}
            resizeMode='cover'
            >
          
          </Image>  

        </TouchableOpacity> */}

        <TouchableOpacity 
          style={{flex : 1, }}
          onPress={() => console.log('image background pressed')
          }>
            <ImageBackground 
            source={{uri : 'https://pbs.twimg.com/media/EzV84JMVUAQvO43.jpg'}}
            style={{flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center'}}>

              <Text style={{color: '#FFFFFF'}}>Hello World</Text>

            </ImageBackground>

          </TouchableOpacity>
       

        <FlatList 
          style={{flex : 1}}
          data={this.state.dataPembayaran}
          refreshControl={
            <RefreshControl 
            refreshing={this.state.refresh}
            onRefresh={()=> 
            {
              console.log('refreshing'); 
              this,setState({refresh: false})
            }}

            />

          }
          renderItem={({item,index}) => (
          <TouchableOpacity style={
          styles.flatlistItem} onPress={() => ToastAndroid.show(item.namaBarang + ' di klik ', ToastAndroid.LONG)}>
              <Text style={{color:'#FFFF', fontSize: 20}}>
              {item.namaBarang}
              </Text>
              <Text style={{color :'#FFFF'}}>{item.harga}</Text>
            </TouchableOpacity>
            )}
            keyExtractor={(item) => item.namaBarang}
        /> 
        
        
          
          {/* <View 
            style={styles.switch}>

            <Switch 
               value ={this.state.value} 
                onValueChange = {() => this.setState({value : !this.state.value})}/>


          </View>
          <View style={{marginHorizontal : 20}}>

        <Button title="Press Me" color="crimson" onPress={() => console.log ('button')}/>

          </View>
        <TextInput 
          value={this.state.username} 
          style={styles.TextInput}
          onChangeText={(value) => this.setState({username : value}) }
          

        /> 
        <TouchableOpacity style={styles.button}>
           
            <Text style={{color:'#FFFFFF', fontWeight: 'bold'}}>HALO MANG!</Text>
           
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
           
            <Text style={{color:'#FFFFFF', fontWeight: 'bold'}}>HALO MANG!</Text>
           
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
           
            <Text style={{color:'#FFFFFF', fontWeight: 'bold'}}>HALO MANG!</Text>
           
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>

            <Text style={{color:'#FFFFFF', fontWeight: 'bold'}}>HALO MANG!</Text>
           
        </TouchableOpacity>
           */}

        
        </View>);
  }
}

const styles = StyleSheet.create ({
  button: {
            backgroundColor: '#212121',
            paddingVertical: 20, 
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 30,
            elevation: 3,

          },
  TextInput: {
            borderWidth: 1,
            borderColor: '#FFFF',
            marginHorizontal: 20, 
            paddingHorizontal: 10,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: '#7b1fa2',
            color: '#FFFF'


  },
  switch : {
            justifyContent : 'center', 
            alignItems : 'center', 
            marginTop : 20 

  },
  image : {
        width: width, 
        height: height/5

  },
  imageContainer : {
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: 20 
  },
  header : {
            backgroundColor: '#7b1fa2', 
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,


  },
  container : {
        flex: 1
  },
  flatlistItem : {
          marginBottom : 10, 
          marginTop : 20,
          marginHorizontal : 20,
          borderRadius : 5,
          paddingVertical : 10,
          paddingHorizontal : 20,
          backgroundColor : '#7b1fa2',
  },
           
})
export default App;