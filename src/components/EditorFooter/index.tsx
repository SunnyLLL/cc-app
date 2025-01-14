import { Box, Flex, IconButton, FormControl, Switch, FormLabel } from "@chakra-ui/react";
import { HiOutlineZoomOut, HiOutlineZoomIn } from "react-icons/hi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { switchRuler } from "@/store/reducer/rulerControlSlice";

const EditorFooter = () => {
  const [ruler, setRuler] = useState("RULER ON");
  const dispatch = useDispatch();
  const handleRulerState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRuler(e.target.checked ? "RULER ON" : "RULER OFF");
    dispatch(switchRuler(e.target.checked));
  };

  return (
    <Flex
      position="fixed"
      bottom="0"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      w="calc(100vw - 98px)"
      bg="white"
      boxShadow="dark-lg"
      lineHeight="34px"
      left="98px"
      zIndex={1500}
    >
      <Box>
        <IconButton
          aria-label="Revert edit"
          icon={<HiOutlineZoomOut />}
          variant="witheBackgroundIconBtn"
          color="brand.primary"
          data-testid="zoom-out-btn"
        />
        <IconButton
          aria-label="Forward edit"
          icon={<HiOutlineZoomIn />}
          variant="witheBackgroundIconBtn"
          color="brand.primary"
          data-testid="zoom-in-btn"
        />
      </Box>
      <Flex alignItems="center" justifyContent="flex-end" marginRight="1">
        <FormControl display="flex" alignItems="center" justifyContent="flex-end" w="150px">
          <FormLabel
            htmlFor="ruler-switch-btn"
            mb="0"
            color="brand.primary"
            data-testid="ruler-label"
            width={{ base: "60px", lg: "70px" }}
            height="40px"
            fontSize={{ base: "xs", lg: "sm" }}
            paddingTop="3px"
            fontWeight="500"
          >
            {ruler}
          </FormLabel>
          <Switch
            id="ruler-switch-btn"
            colorScheme="footerSwitch"
            size="lg"
            sx={{
              "span.chakra-switch__track": {
                width: "40px",
                height: "18px",
              },
              "span .chakra-switch__thumb": {
                bgColor: "background.tertiary",
                width: "18px",
                height: "18px",
              },
              "span.chakra-switch__track[data-focus]": {
                boxShadow: "none",
              },
            }}
            defaultChecked
            data-testid="switch-btn"
            onChange={handleRulerState}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default EditorFooter;
