import { Flex } from "native-base";
import { height, width } from "../../constants/nativeSizes";
import CTAButton from "../atoms/CTAButtons";
import { TouchableHighlight } from "react-native";

const CTAContainer = ({ onPress, text, isLoading }) => (
  <Flex
    height={height(2.5)}
    backgroundColor={"white"}
    justifyContent={"center"}
    paddingX={width(5)}>
    <CTAButton isLoading={isLoading} onPress={onPress} text={text} />
  </Flex>
);
export default CTAContainer;
