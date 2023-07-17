import { Flex, Text } from "native-base";
import CustomIcon from "../atoms/CustomIcon";
import theme from "../../constants/theme";
const billIcon = require("../../../assets/biil-icon.png");

const BillsStatus = () => (
    <Flex direction='row' >
        <Flex justifyContent={"center"}>
            <Text textAlign={"center"} fontFamily={"Poppins-SemiBold"} color={theme.colors.brand[600]}>00</Text>
        </Flex>
        <CustomIcon iconModule={billIcon} width={27} height={27} />
    </Flex>
);

export default BillsStatus;