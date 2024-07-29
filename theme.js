import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// Supports weights 100-900
import '@fontsource-variable/montserrat';

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode(
        props.theme.semanticTokens.colors["chakra-body-bg"]._light,
        "blackAlpha.900"
      )(props),
    },
  }),
};

const theme = extendTheme({ config, 
  fonts: {
    heading: `'Montserrat Variable', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
 });

export default theme;