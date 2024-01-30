import { StyleSheet } from "react-native";
import LayoutSettings from "../../layouts/organisms/LayoutSettings";
import ProfileAccount from "../../components/global/profileAccount";
import CardLogout from "../../components/global/card/logout";
import CardDetailsApp from "../../components/global/card/detailsApp";
import CardPassword from "../../components/global/card/password";
import CardDelete from "../../components/global/card/delete";

const Account = ({ navigation }) => {
  return (
    <LayoutSettings
      title={"Paramètres"}
      navigation={navigation}
      userExist={true}
      progress={100}
      accountScreen={false}
    >
      <ProfileAccount />
      <CardDetailsApp />
      <CardPassword />
      <CardDelete />
      <CardLogout navigation={navigation} />
    </LayoutSettings>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContents: {},
});
