import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { View } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable } from "react-native";
import theme from "../../../../../constants/theme";
import userStore from "../../../../../store/user";
import { setToBase64 } from "../../../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CardAvatarSettings() {
  const { picture, userChange } = userStore()
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      base64: true
    });

    if (!result.canceled) {
      const asset = result.assets[0]
      const { base64 } = asset
      const uri = setToBase64(base64)
      userChange({ picture: uri })
      setSelectedImage({ uri });
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {(
        <View style={{ position: "relative" }}>
          <ImageViewer selectedImage={{ uri: picture }} />
        </View>
      )}
    </View>
  );
}

function ImageViewer({ selectedImage }) {
  return (
    <Image
      source={selectedImage}
      size={100}
      style={{
        width: 90,
        height: 90,
        borderRadius: 100,
        borderColor: theme.colors.brand.secondary,
        borderWidth: 2,
      }}
    />
  );
}
