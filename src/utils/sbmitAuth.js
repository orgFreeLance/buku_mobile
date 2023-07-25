import { Box } from "native-base";
import goTo from "./goTo";

export const submitForm = (
  isLogin,
  setIsloading,
  logUser,
  isAuth,
  toast,
  phone,
  password,
  firstName,
  lastName,
  email,
  confirmedPassword,
  codeExetat,
  navigation
) => {
  setIsloading(true);
  switch (isLogin) {
    case true:
      logUser(phone, password);
      break;

    case false:
      setIsloading(false);
      logUser(phone, password, firstName, lastName, email, confirmedPassword, codeExetat);
      // goTo(navigation, "VerifyCode");
      break;

    default:
      break;
  }

  if (isAuth) {
    toast.show({
      render: () => {
        return (
          <Box bg="green.500" px="2" py="1" rounded="sm" mb={5} color={"white"}>
            Connexion réussie !
          </Box>
        );
      },
    });
    setIsloading(false);
  } else {
    toast.show({
      render: () => {
        return (
          <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
            Connexion échouée, veuillez réessayer !
          </Box>
        );
      },
    });
    setIsloading(false);
  }
};
