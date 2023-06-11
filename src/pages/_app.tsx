import { AppProps } from "next/app";
import ThemeProvider from "@/components/theme/theme-provider";

const App = ({Component, pageProps}: AppProps) => {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App;