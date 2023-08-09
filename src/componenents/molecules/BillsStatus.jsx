import { Flex, Text } from "native-base";
import CustomIcon from "../atoms/CustomIcon";
import theme from "../../constants/theme";
import billingStore from "../../store/billing";
const billIcon = require("../../../assets/biil-icon.png");
const billIconGold = require("../../../assets/piece-gold.png");

const BillsStatus = () => {
    const pieces = billingStore((state) => state.pieces);
    const piecesNumber = parseInt(pieces, 10)
    return (
        <Flex direction='row' >
            <Flex justifyContent={"center"}>
                <Text textAlign={"center"} fontFamily={"Poppins-SemiBold"} color={theme.colors.brand[600]}>{piecesNumber === 0 ? "00" : piecesNumber}</Text>
            </Flex>
            {
                piecesNumber === 0 ? (<CustomIcon iconModule={billIcon} width={27} height={27} />)
                    : (<CustomIcon iconModule={billIconGold} width={27} height={27} />)
            }

        </Flex>
    )
}

export default BillsStatus;