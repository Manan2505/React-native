import React, { useEffect } from 'react'
import { View,Text } from 'react-native'
import Loading from './components/Loading'
import { useState } from 'react';
function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    async function fetchApi(){
      const fetchData=await fetch('https://dummyjson.com/products');
      const data=fetchData.json();
      setProducts(data.products);
    }
    fetchApi();
  },[]);
  return (
      <View style={{
        width:'100%',
        height:'100%'
      }}>
        {products.length===0 ? <Loading/>:<Text>HEllo</Text>}
      </View>
  )
}

export default App
