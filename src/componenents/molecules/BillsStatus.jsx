import { Flex, Text } from "native-base";
import CustomIcon from "../atoms/CustomIcon";
import theme from "../../constants/theme";
import billingStore from "../../store/billing";
import { SvgXml } from "react-native-svg";
import { bill, billGold } from "../../constants/svgs";

const BillsStatus = () => {
    const pieces = billingStore((state) => state.pieces);
    const piecesNumber = parseInt(pieces, 10)
    return (
        <Flex direction='row' >
            <Flex justifyContent={"center"}>
                <Text textAlign={"center"} fontFamily={"Poppins-SemiBold"} color={theme.colors.brand[600]}>{piecesNumber === 0 ? "00" : piecesNumber}</Text>
            </Flex>
            {
                piecesNumber === 0 ? (<SvgXml xml={bill} />)
                    : (<SvgXml xml={billGold} />)
            }

        </Flex>
    )
}

export default BillsStatus;