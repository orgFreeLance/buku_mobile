import { Camera, CameraType } from "expo-camera";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Flex, Progress } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import CTAButton from "../componenents/atoms/CTAButtons";
import theme from "../constants/theme";

const ResusltConfig = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [record, setRecord] = useState(null);
  const [counter, setCounter] = useState(0);
  const [progression, setProgression] = useState(0);

  const takeVideo = async () => {
    if (Camera) {
      const data = await Camera.recordAsync()
      setRecord(data.uri);
    }
  }

  const stopVideo = async () => {
    Camera.stopRecording();
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }


  useEffect(() => {

    if (counter <= 30 && record) {
      const interval = setInterval(() => {
        setCounter(counter + 1);
        setProgression(parseInt((counter + 1) / 30, 10)* 100)
            {console.log({progression, counter})}
          }, 1000);

      return () => clearInterval(interval);
    }
  }, [record, counter]);

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
              <View style={{ alignItems: "flex-end", paddingHorizontal: 10, paddingVertical: 10 }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={toggleCameraType}>
                  <MaterialIcons name="flip-camera-android" size={24} color="#fff" />
                </TouchableOpacity>
              </View>



            </View>
          </Camera>
          <View style={{ marginBottom: -10, zIndex: 999 }}>
            {
              
              record && <Progress value={45} />
            }
            <Progress value={progression} rounded="0" colorScheme={"lime"} />
            <CTAButton noTopRadius={true} isLoading={false} onPress={() => { console.log('pressing...') }} text={"Vérifier"} />
          </View>
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
    borderRadius: 50,
    zIndex: 999
  }, overflow: 'hidden',
  buttonContainer: {
    flex: 1,
    justifyContent: "space-between"
  }
});
