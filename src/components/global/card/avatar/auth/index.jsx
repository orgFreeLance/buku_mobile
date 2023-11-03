import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable } from "react-native";
import theme from "../../../../../constants/theme";
import userStore from "../../../../../store/user";

export default function CardAvatarAuth() {
  const { picture, userChange } = userStore()
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0]
      userChange({ picture: uri })
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
        {selectedImage ? (
          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                zIndex: 50,
                bottom: 8,
                right: 8,
                padding: 3,
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.brand.secondary,
                borderRadius: 5,
              }}
            >
              <FontAwesome name="edit" size={14} color="white" />
            </View>
            <ImageViewer selectedImage={selectedImage} />
          </View>
        ) : (
          <View style={{ position: "relative" }}>
            <View
              style={{
                position: "absolute",
                zIndex: 50,
                bottom: 10,
                right: 10,
                padding: 4,
                alignContent: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.brand.secondary,
                borderRadius: 5,
              }}
            >
              <FontAwesome name="edit" size={16} color="white" />
            </View>
            <ImageViewer selectedImage={{ uri: picture }} />
          </View>
        )}
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
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: theme.colors.brand.secondary,
        borderWidth: 2,
      }}
    />
  );
}
