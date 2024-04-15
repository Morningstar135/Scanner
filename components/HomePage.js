import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.heading}>AuthenticityScan</Text>
      <Text style={styles.paragraph}>I am Delighted to introduce yyou to our cutting edge solution for verifying the authenticity of products quickly and confidentialy.With my app you can now ensure that every product you purchase is Genuine</Text>
      <Button
        title='Go to Scanner'
        onPress={()=>navigation.navigate('Scanner')}
       />
      </View>
      
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black background with 70% opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // White background with 70% opacity
    borderRadius: 10,
    maxWidth: '80%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    justifyContent: 'center',
    alignSelf:'center' // Heading color
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff', // Paragraph color
  },})