import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.tinyLogo}
        source={required("./FINAL-GAT-LOGO-DARK-1.webp")}
      />
      
    </View>
  );
};

export default DisplayAnImage;