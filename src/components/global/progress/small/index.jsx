import { View } from "native-base";
import { useState } from "react";
import theme from "../../../../constants/theme";

export default function ProgressSmall({ current = 0 }) {
  const [choices] = useState([{}, {}, {}, {}, {}]);
  return (
    <>
      <View
        style={{
          paddingVertical: 0,
          paddingBottom: 30,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {choices.map((item, index) => {
          if (index == current)
            return (
              <View
                key={index}
                style={{
                  width: 30,
                  height: 5,
                  borderRadius: 10,
                  marginRight: 5,
                  backgroundColor: theme.colors.brand.secondary,
                }}
              ></View>
            );
          return (
            <View
              key={index}
              style={{
                width: 5,
                height: 5,
                borderRadius: 10,
                marginRight: 5,
                opacity: 0.4,
                backgroundColor: "grey",
              }}
            ></View>
          );
        })}
      </View>
    </>
  );
}
