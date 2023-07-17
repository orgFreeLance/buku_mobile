import { Box } from "native-base";

export const submitForm = (isLogin, setIsloading, logUser, isAuth, toast, phone, password, firstName, lastName, email) => {
    setIsloading(true);
    if (isLogin) {
        logUser(phone, password);
    } else {
        logUser(phone, password, firstName, lastName, email);
    }

    if (isAuth) {
        toast.show({
            render: () => {
                return <Box bg="green.500" px="2" py="1" rounded="sm" mb={5} color={"white"}>
                    Connexion réussie !
                </Box>;
            }
        })
        setIsloading(false);
    } else {
        toast.show({
            render: () => {
                return <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
                    Connexion échouée, veuillez réessayer !
                </Box>;
            }
        })
        setIsloading(false);
    }
}