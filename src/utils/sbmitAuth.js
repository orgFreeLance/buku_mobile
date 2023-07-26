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
      logUser(
        phone,
        password,
        firstName,
        lastName,
        email,
        confirmedPassword,
        codeExetat
      );
      // goTo(navigation, "VerifyCode");
      break;

    default:
      break;
  }

  setIsloading(false);
};
