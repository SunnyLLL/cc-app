import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";

interface Props {
  key: string;
  title: string;
  icon: React.ReactNode;
  onHandleIconClick: () => void;
  iconClickTitle: string;
}

const EditorSideBarItem = (props: Props) => {
  const bg =
    props.iconClickTitle === props.title ? "background.secondaryLight" : "background.secondary";
  const color =
    props.iconClickTitle === props.title || props.iconClickTitle === ""
      ? "fontcolor.primary"
      : "fontcolor.quaternary";
  return (
    <Box
      as="button"
      role="group"
      w="full"
      h="160px"
      p="30px 7px"
      bg={bg}
      onClick={props.onHandleIconClick}
    >
      <Flex flexDirection="column" align="center" justify="flex-start">
        <Icon w="24px" h="24px" _groupHover={{ color: "fontcolor.primary" }} color={color}>
          {props.icon}
        </Icon>
        <Text
          m={2}
          as="span"
          color={color}
          fontSize="md"
          fontWeight="bold"
          lineHeight="19px"
          _groupHover={{ color: "fontcolor.primary" }}
        >
          {props.title}
        </Text>
      </Flex>
    </Box>
  );
};

export default EditorSideBarItem;
