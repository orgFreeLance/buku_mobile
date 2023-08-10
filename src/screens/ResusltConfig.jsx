import { Camera, CameraType, VideoQuality } from "expo-camera";
import { Video, ResizeMode } from 'expo-av';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Box, Flex, Progress, useToast } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import Header1 from "../componenents/organisms/Header1";
import { height, width } from "../constants/nativeSizes";
import CTAButton from "../componenents/atoms/CTAButtons";
import billingStore from "../store/billing";
import { shallow } from "zustand/shallow";

const ResusltConfig = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [videoPermission, requestVideoPermission] = Camera.useMicrophonePermissions();
  const [record, setRecord] = useState(null);
  const [recording, setRecording] = useState(false);
  const [counter, setCounter] = useState(0);
  const [progression, setProgression] = useState(0);
  const cameraRef = useRef();
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [removePieces, pieces] = billingStore((state) => [state.removePieces, state.pieces], shallow);
  const toast = useToast();

  const takeVideo = async () => {
    if (pieces === 0) {
      toast.show({
        duration: 10000, 
        render: () => {
          return <Box bg="red.300" px="2" py="2" rounded="sm" mb={5}>
            Désolé ! Vous n'avez pas assez des pièces, veuillez récharger
          </Box>;
        },
        
      })

      navigation.navigate("UserConfigs")
    }
    else {
      await requestVideoPermission()
      setRecording(true)
      if (Camera) {
        const data = await cameraRef.current.recordAsync(
          {
            quality: VideoQuality["1080p"],
            mute: false,

          }
        ).catch((reason) => console.log({ reason }))

        removePieces();
        setRecord(data.uri);
      }
    }
  }

  const stopVideo = async () => {
    cameraRef.current.stopRecording();
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const handleVideoPlayer = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
  }

  useEffect(() => {


    if (counter <= 15 && recording) {
      const interval = setInterval(() => {
        const newCounter = counter + 1
        const newProgression = parseInt((newCounter / 15) * 100, 10)
        setCounter(counter + 1);
        setProgression(newProgression)
        if (counter === 15) {
          stopVideo()
          setRecording(false)
        }
      }, 1000);

      return () => clearInterval(interval);
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


          {
            !record ? (<Camera style={styles.camera} ref={cameraRef} type={type}>
              <View style={styles.buttonContainer}>
                <View style={{ alignItems: "flex-end", paddingHorizontal: 10, paddingVertical: 10 }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={toggleCameraType}>
                    <MaterialIcons name="flip-camera-android" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>


              </View>
            </Camera>) : (<Video
              ref={video}
              style={styles.camera}
              source={{
                uri: record,
              }}
              resizeMode={ResizeMode.COVER}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />)
          }




          <View style={{ marginBottom: -10, zIndex: 999 }}>
            {

              recording && <Progress value={progression} rounded="0" colorScheme={"lime"} />
            }

            <CTAButton noTopRadius={true} isLoading={recording} onPress={() => !record ? takeVideo() : handleVideoPlayer()} text={!record ? "Vérifier" : status.isPlaying ? 'Pause' : 'Play'} />
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
    zIndex: 999
  }, overflow: 'hidden',
  buttonContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  video: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLefttRadius: 20,
    zIndex: 999
  },
});
