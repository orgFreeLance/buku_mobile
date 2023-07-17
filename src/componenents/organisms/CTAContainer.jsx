import { Flex } from "native-base";
import { height, width } from "../../constants/nativeSizes";
import CTAButton from "../atoms/CTAButtons";

const CTAContainer = ({onPress, text }) => (<Flex height={height(2.5)} backgroundColor={"white"} justifyContent={"center"} paddingX={width(5)} >
    <CTAButton onPress={onPress} text={text} />
</Flex>);
export default CTAContainer;