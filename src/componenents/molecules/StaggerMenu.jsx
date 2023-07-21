import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import {
  Box,
  useDisclose,
  Stagger,
  HStack,
  IconButton,
  Icon,
} from "native-base";
import React from "react";
import { height } from "../../constants/nativeSizes";

const StaggerMenu = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Box
      marginTop={-height(1.5)}
      marginRight={2}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}>
      <Box marginTop={-height(1.5)} marginRight={2}>
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}>
          <IconButton
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
            icon={
              <Icon
                as={AntDesign}
                size="6"
                name="user"
                _dark={{
                  color: "warmGray.50",
                }}
                color="warmGray.50"
              />
            }
          />
          <IconButton
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
            icon={
              <Icon
                as={MaterialIcons}
                _dark={{
                  color: "warmGray.50",
                }}
                size="6"
                name="settings"
                color="warmGray.50"
              />
            }
          />
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name={isOpen ? "close" : "menu"}
              color="warmGray.50"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
    </Box>
  );
};

export default StaggerMenu;
