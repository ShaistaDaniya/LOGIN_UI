import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 80,
  },
});

const FIRSTImage = () => {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.logo}
        source={require("./FINAL-GAT-LOGO-DARK-1.webp")}
      />
      
    </View>
  );
};

export default FIRSTImage;