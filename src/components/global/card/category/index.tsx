import { View, Text } from "native-base";
import theme from "../../../../constants/theme";

export default function CardAuthCategory({ content, index, onPress, select = false }) {
    const onClick = () => {
        onPress(index);
        console.log("press");
    };
    if (select)
        return (
            <>
                <View
                    style={{
                        width: "48%",
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: "500",
                        fontSize: 18,
                        backgroundColor: theme.colors.brand.secondary,
                        borderRadius: 20,
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                        marginBottom: 10,
                    }}
                >
                    <Text
                        onPress={onClick}
                        style={{
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        {content}
                    </Text>
                </View>
            </>
        );
    return (
        <>
            <View
                style={{
                    width: "48%",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: 18,
                    backgroundColor: "white",
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 13,
                    marginBottom: 10,
                    borderColor: theme.colors.brand.secondary,
                    borderWidth: 1,
                }}
            >
                <Text
                    onPress={onClick}
                    style={{
                        textAlign: "center",
                        color: theme.colors.brand.secondary,
                    }}
                >
                    {content}
                </Text>
            </View>
        </>
    );
}
