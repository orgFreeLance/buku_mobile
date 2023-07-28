import { Camera, CameraType } from "expo-camera";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box, Flex } from "native-base";
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";

const ResusltConfig = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [record, setRecord] = useState(null);
  
  const takeVideo = async () => {
    if(camera){
        const data = await Camera.recordAsync()
        setRecord(data.uri);
        console.log(data.uri);
    }
  }

  const stopVideo = async () => {
    camera.stopRecording();
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Box
        style={{
          paddingHorizontal: width(5),
        }}>
        <Header1 />
      </Box>
      <View
        style={{
          flex: 1,
          paddingHorizontal: width(5),
          borderTopRightRadius: 9,
          borderTopLefttRadius: 9,
          marginTop: height(4),
          marginBottom: height(4),
          //   height: height(20),
          width: width(100),
        }}>
        <View style={{
          flex: 1,
          borderTopRightRadius: 9,
          borderTopLefttRadius: 9,
          borderRadius: 50
        }}>
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}>
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={takeVideo}>
                <Text style={styles.text}>Take Vidéo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={stopVideo}>
                <Text style={styles.text}>Arrêter la Vidéo</Text>
              </TouchableOpacity>

            </View>
          </Camera>
        </View>
      </View>
    </View>
  );
};

export default ResusltConfig;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLefttRadius: 20,
    borderRadius: 50
}, overflow: 'hidden',
});
