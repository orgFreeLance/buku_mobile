import { Image } from "expo-image"
import { Flex, } from "native-base"
import BillsStatus from "../molecules/BillsStatus"

const logo = require("../../../assets/Logo.png");

const Header1 = () => (
    <Flex direction='row' justifyContent={"space-between"} alignItems={"center"}>
        <Flex alignItems={"center"} justifyContent={"center"} style={{ width: 120, height: 32 }}>
            <Image style={{ width: "100%", height: 32 }} source={logo} contentFit="contain"
                transition={1000} />
        </Flex>
        <BillsStatus />
    </Flex>
);

export default Header1;