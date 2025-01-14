const buttonStyles = {
  variants: {
    navbarIconBtn: {
      bg: "transparent",
      color: "white",
      fontSize: "xl",
      _hover: { bg: "brand.primaryLight" },
      size: "sm",
    },
    shareBtn: {
      bg: "brand.secondary",
      color: "white",
      size: "lg",
      fontSize: "lg",
      fontWeights: "bold",
      lineHeights: "22",
      borderRadius: "6px",
      _hover: { bg: "brand.secondary", opacity: "0.60" },
      _active: { bg: "brand.secondary", opacity: "0.60" },
    },
    failedBtn: {
      bg: "red.500",
      color: "white",
      size: "lg",
      fontSize: "lg",
      fontWeights: "bold",
      lineHeights: "22",
      _hover: { bg: "red.500", opacity: "0.60" },
      _active: { bg: "red.500", opacity: "0.60" },
    },
    witheBackgroundIconBtn: {
      bg: "transparent",
      color: "white",
      fontSize: "xl",
      _hover: { bg: "fontcolor.quaternary", opacity: "0.60" },
      size: "sm",
    },
    loginBtn: {
      bg: "white",
      border: "1px",
      borderColor: "brand.secondary",
      color: "fontcolor.secondary",
      size: "lg",
      fontSize: "16px",
      fontWeights: "bold",
      lineHeights: "40",
      _hover: { bg: "button.hover" },
      _active: { bg: "button.active" },
    },
  },
};

export default buttonStyles;
