import React from "react";
import {
  Button,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import image from "../../img/fotp.avif";
import { RegistrationScreen } from "../../Screens/RegistrationScreen/RegistrationScreen";

export const Page1 = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground style={styles.container} source={image}>
          <RegistrationScreen />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "purple",
    paddingTop: 200,
  },
});
