import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop:90,
    width: 223,
    height: 64,
  },
  register: {
    width: 227,
    height: 28,
    marginTop: 0,
    marginLeft: 6,
    fontSize: 16,
    lineHeight: 28
  },
  regview: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    fontSize: 16,
  
    
  },
  num: {
    height: 56,
    borderColor: 'darkBlue',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    width: 322
  },
  button: {
    marginTop: 23,
    backgroundColor: 'darkblue',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 150,
    borderRadius: 5,
    height: 42,
    margin: 16
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  text: {
    padding: 12,
    fontSize: 16,
    lineHeight: 19.92,
  },
  Need: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    marginTop: 200,
  },
  supportText: {
    padding: 10,
    fontSize: 16,
    lineHeight: 19.92,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    position: 'absolute',
    right: 10,
    top: '28%',
    transform: [{ translateY: -12 }],
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
  const [checked, setChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleCheckBoxToggle = () => {
    setChecked(!checked);

    if (checked) {
      setPhoneNumber('');
    }
  };

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
      <Text style={styles.register}>Your Registered Phone Number:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={styles.num}
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            center
            iconType='material'
            checkedIcon='clear'
            uncheckedIcon='clear'
            checkedColor='darkblue'
            checked={checked}
            onPress={handleCheckBoxToggle}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNextButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        By proceeding, you consent to get SMS messages including by automated means, from Gig and Take and its affiliates to the phone number provided
      </Text>


      <Text style={styles.Need}>
        Need help ?
      </Text>
      <Text style={styles.supportText} onPress={handleSupportTextPress}>
        Contact for support
      </Text>
    </View>

  );
};

export default FIRSTImage;
