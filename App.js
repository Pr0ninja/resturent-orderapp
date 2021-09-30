import React from 'react'
import { View, Text,Image, ScrollView, FlatList, ImageBackground } from 'react-native'
import { height, width } from './Constant/Dimention';
import { TableData } from './Constant/FakeData';

var value = Math.random()

const App = () => {

  const renderItem = ({ item }) => (
    <View style={{width:width/4-12,height:width/4-12,backgroundColor:item.status==='ready'? 'rgba(105, 221, 255,0.4)':'rgba(216, 225, 255,0.8)',margin:6,alignItems:'center',justifyContent:'center',borderTopRightRadius:20,borderBottomLeftRadius:20}}>
      <Image source={require('./Asset/table.png')} style={{resizeMode:'contain',height:'50%',width:'50%'}} />
       <Text style={{color:'black',fontSize:20}}>Table {item.tableId}</Text>
      <View style={{position:'absolute',top:0,left:0,width:'40%',height:40,backgroundColor:item.status==='ready' ?'green':'red' ,alignItems:'center',justifyContent:'center',borderWidth:7,borderColor:'white'}}>
        <Text style={{color:'white',fontSize:18}}>{item.status==='ready'?'Ready':'Booked'}</Text>
      </View>
    </View>
    );
  console.log(TableData)
  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('./Asset/background.jpg')} style={{width:'100%',resizeMode:'cover',height:height*0.3}} blurRadius={2}>

      </ImageBackground>
      <View style={{backgroundColor:'white'}}>
      <FlatList
          data={TableData}
          renderItem={renderItem}
          keyExtractor={item=>item.tableId}
          numColumns={4}
          
          
        />
      </View>
        
     
    </View>
  )
}

export default App;
