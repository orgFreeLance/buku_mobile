import { Text, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import appStore from "../../../store/app";
import theme from "../../../constants/theme";
import CardRatingProgress from "../card/ratingProgress";
import { useState } from "react";

export default function RatingBookDetails({ navigation }) {
  const { currentBookStat } = appStore();
  const [stars] = useState([{}, {}, {}, {}, {}]);
  return (
    <>
      <View style={{ paddingTop: 0 }}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View
            style={{
              width: "42.5%",
              backgroundColor: "white",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text
              style={{ fontWeight: "900", fontSize: 36, textAlign: "center" }}
            >
              {currentBookStat.all["%"]}
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 5,
                justifyContent: "center",
              }}
            >
              {stars.map((current, index) => {
                const limit = currentBookStat.all["%"];

                console.log(Math.ceil(limit));
                if (Math.ceil(limit) > index + 1)
                  return (
                    <FontAwesome
                      name="star"
                      style={{ marginLeft: 5 }}
                      size={20}
                      color={theme.colors.brand.secondary}
                    />
                  );
                else if (Math.ceil(limit) == index + 1)
                  return (
                    <FontAwesome
                      name="star-half-empty"
                      style={{ marginLeft: 5 }}
                      size={20}
                      color={theme.colors.brand.secondary}
                    />
                  );
                return (
                  <FontAwesome
                    name="star"
                    style={{ marginLeft: 5 }}
                    size={20}
                    color={theme.colors.brand.grayBold}
                  />
                );
              })}
            </View>
            <Text
              style={{ fontWeight: "400", fontSize: 16, textAlign: "center" }}
            >
              {currentBookStat.all["number"]} vote(s)
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignContent: "center",
              paddingLeft: 5,
            }}
          >
            <CardRatingProgress
              pourcentage={currentBookStat["5"]["%"]}
              total={currentBookStat["all"]["number"]}
              number={5}
            />
            <CardRatingProgress
              pourcentage={currentBookStat["4"]["%"]}
              total={currentBookStat["all"]["number"]}
              number={4}
            />
            <CardRatingProgress
              pourcentage={currentBookStat["3"]["%"]}
              total={currentBookStat["all"]["number"]}
              number={3}
            />
            <CardRatingProgress
              pourcentage={currentBookStat["2"]["%"]}
              total={currentBookStat["all"]["number"]}
              number={2}
            />
            <CardRatingProgress
              pourcentage={currentBookStat["1"]["%"]}
              total={currentBookStat["all"]["number"]}
              number={1}
            />
          </View>
        </View>
      </View>
    </>
  );
}
