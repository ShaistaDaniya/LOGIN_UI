import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const PasscodeScreen = () => {
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const passcodeInputs = useRef([]);

  const handlePasscodeChange = (index, value) => {
    const updatedPasscode = [...passcode];
    updatedPasscode[index] = value;
    setPasscode(updatedPasscode);

    if (value && index < passcodeInputs.current.length - 1) {
      passcodeInputs.current[index + 1].focus();
    }
  };

  const handleVerifyPasscode = () => {
    // Replace this with your own passcode verification logic
    const correctPasscode = '1234';
    if (passcode.join('') === correctPasscode) {
      Alert.alert('Success', 'Passcode verified!');
    } else {
      Alert.alert('Error', 'Passcode verification failed!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.passcodeContainer}>
        {passcode.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (passcodeInputs.current[index] = ref)}
            secureTextEntry
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handlePasscodeChange(index, text)}
            style={[
              styles.passcodeBox,
              index > 0 && { marginLeft: 10 },
              digit && styles.filledPasscodeBox,
            ]}
          />
        ))}
      </View>
      <Button title="Verify Passcode" onPress={handleVerifyPasscode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  passcodeBox: {
    flex: 0,
    height: 60,
    width: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 0,
  },
  filledPasscodeBox: {
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default PasscodeScreen;
