import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text } from "native-base";
import { Image, Pressable } from "react-native";
import avatar from "../../../../../../assets/avatar.jpeg";
import theme from "../../../../../constants/theme";

export default function CardAvatarAuth() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0]);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <Pressable onPress={pickImageAsync}>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {!selectedImage && <ImageViewer selectedImage={avatar} />}
        {selectedImage && <ImageViewer selectedImage={selectedImage} />}
      </View>
    </Pressable>
  );
}

function ImageViewer({ selectedImage }) {
  return (
    <Image
      source={selectedImage}
      size={100}
      style={{
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: theme.colors.brand.secondary,
        borderWidth: 2,
      }}
    />
  );
}
