import { Image } from "expo-image";
import { Flex, } from "native-base";
import BillsStatus from "../molecules/BillsStatus";
import {height} from "../../constants/nativeSizes";
import { SvgXml } from "react-native-svg";
import { logo } from "../../constants/svgs";


const Header1 = () => (
    <Flex direction='row' justifyContent={"space-between"} alignItems={"center"} marginY={height(0.5)}>
        <Flex alignItems={"center"} justifyContent={"center"} style={{ width: 120, height: 32 }}>
            <SvgXml xml={logo} width={"100%"}  />
        </Flex>
        <BillsStatus />
    </Flex>
);

export default Header1;