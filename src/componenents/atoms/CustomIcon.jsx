import { Image } from "expo-image";
import { Flex } from "native-base";

const CustomIcon = ({iconModule, width, height}) => (
    <Flex style={{marginLeft: 5}}>
        <Image style={{ width, height }} source={iconModule} contentFit="contain"
            transition={1000} />
    </Flex>
);

export default CustomIcon;