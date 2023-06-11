import { MantineProvider } from "@mantine/core"
import CustomFont from "./custom-font";
import theme from "./theme";

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={theme}
        >
            <CustomFont />
            {children}
        </MantineProvider>
    )
}

export default ThemeProvider;