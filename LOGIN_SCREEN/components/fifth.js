import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 223,
    height: 64,
    flex: "none",
    order: 0,
    flexGrow: 0,
  },
  register: {
    width: 283,
    height: 'auto',
    marginTop: 60,
    marginLeft: 46,
    fontSize: 16,
    lineHeight: 25,
  },
  regview: {
    fontSize: 16,
  },
  txt: {
    height: 'auto',
    marginTop: 20,
    marginLeft: 46,
    fontSize: 16,
    lineHeight: 23,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 23,
  },
  button1: {
    backgroundColor: 'white',
    color: 'darkblue',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    borderColor: 'darkblue',
    height: 42,
    flex: 1,
     borderWidth: 2,
    marginHorizontal: 8,
  },
   button2: {
    backgroundColor: 'darkblue',
    color: 'white',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 5,
    borderColor: 'darkblue',
    height: 42,
    flex: 1,
    marginHorizontal:3,
  },
  buttonText1: {
    color: 'darkblue',
    fontSize: 16,
    textAlign: 'center',
    marginTop:10
  },
  buttonText2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
     marginTop:10
  },
  
  Need: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    marginTop: 248,
  },
  supportText: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

const FIRSTImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://i0.wp.com/gigandtake.com/wp-content/uploads/2022/12/FINAL-GAT-LOGO-DARK-1.png?fit=5000%2C1429&ssl=1',
        }}
      />
      <PhoneNumberInput />
    </View>
  );
};

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text) => {
    // Remove any non-digit characters from the input
    const formattedNumber = text.replace(/[^0-9]/g, '');
    setPhoneNumber(formattedNumber);
  };

  const handleNextButton = () => {
    // Handle the logic for the Next button here
    console.log('Next button clicked');
  };

  const handleSupportTextPress = () => {
    const supportURL = ''; // Replace with your contact web page URL
    Linking.openURL(supportURL);
  };

  return (
    <View style={styles.regview}>
      <Text style={styles.register}>
        Your mobile number +91 9821793832 is not registered with us!
      </Text>
      <Text style={styles.txt}>
        We have currently enrolled limited people. If you are interested in getting flexible factory jobs, please register your interest and we will get back to you
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleNextButton}>
          <Text style={styles.buttonText1}>Return To Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleNextButton}>
          <Text style={styles.buttonText2}>Register Now</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.Need}>Need help?</Text>
      <Text style={styles.supportText} onPress={handleSupportTextPress}>
        Contact for support
      </Text>
    </View>
  );
};

export default FIRSTImage;
