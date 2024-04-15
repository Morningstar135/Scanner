import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

const API_KEY = 'FDC422BB5B735326E3EFE338E8A78DD2'; // Replace with your API key

const ScanAndResultComponent = ({ navigation }) => {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const  [details,setDetails] =useState([])
  const getProductDetails =async()=>{
      const apiKey = 'vyuiiff3rzduuly54cpgjiyis95gqc'; 
        try {
          const response = await fetch(`https://api.barcodelookup.com/v2/products?barcode=${scannedData}&key=${apiKey}`);
        const data = response.json()
        modifiedData=Object.entries(data)
        console.log(data)
        setDetails(modifiedData)
        } catch (error) {
          console.log(error)
        }
        
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    setDetails([['Product','Shirt'],['Brand','Peter England'],['Price','2000'],['Manufacture Date','feb 2024']])
    //getProductDetails()
    Alert.alert('Scan Complete','Scan Completed Succesfully')

  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Product Barcode</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? ()=>console.log('nothing happened') : handleBarCodeScanned}
        style={styles.scanner}
      />
    <View style={{margin:30}}> 
    {scanned && (
        <Button
          title="Tap to Scan Again"
          onPress={() => setScanned(false)}
        />
      )}
    </View>
      
      <View style={styles.details}>
      {scannedData && details.map((item)=>(
        <Text>
          {item[0]}:{item[1]}
        </Text>
      ))}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scanner: {
    height:300 ,
    width:300
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ScanAndResultComponent;
