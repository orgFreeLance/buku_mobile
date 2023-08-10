import { Camera, CameraType, VideoQuality } from "expo-camera";
import { Video, ResizeMode } from 'expo-av';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Progress } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import CTAButton from "../componenents/atoms/CTAButtons";

const ResusltConfig = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [videoPermission, requestVideoPermission] = Camera.useMicrophonePermissions();
  const [record, setRecord] = useState(null);
  const [recording, setRecording] = useState(false);
  const [counter, setCounter] = useState(0);
  const [progression, setProgression] = useState(0);
  const cameraRef = useRef();

  const takeVideo = async () => {
    await requestVideoPermission()
    setRecording(true)
    if (Camera) {
      const data = await cameraRef.current.recordAsync(
        {
          quality: VideoQuality["720p"],
          mute: false,

        }
      ).catch((reason) => console.log({ reason }))

      setRecord(data.uri);
    }
  }

  const stopVideo = async () => {
    Camera.prototype.stopRecording();
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }


  useEffect(() => {
    if (counter <= 20 && recording) {
      const interval = setInterval(() => {
        const newCounter = counter + 1
        const newProgression = parseInt((newCounter / 20) * 100, 10)
        setCounter(counter + 1);
        setProgression(newProgression)
      }, 1000);

      return () => clearInterval(interval);
    }

    if (counter === 20) {
      stopVideo()
      setRecording(false)
    }
  }, [recording, counter]);

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
          <Camera style={styles.camera} ref={cameraRef} type={type}>
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

              recording && <Progress value={progression} rounded="0" colorScheme={"lime"} />
            }
            
            <CTAButton noTopRadius={true} isLoading={progression >= 1 && progression < 100 ? true : false} onPress={() => takeVideo()} text={progression >= 1 && progression < 100 ? "Enregistrement" : "Vérifier"} />
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
