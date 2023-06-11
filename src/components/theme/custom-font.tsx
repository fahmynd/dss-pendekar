import { Global } from "@mantine/core";

const CustomFont = () => {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Nunito Sans',
                        src: `url('https://fonts.gstatic.com/s/nunitosans/v11/pe0qMImSLYBIv1o4X1M8ccewI9tScg.woff2') format("woff2")`,
                    },
                },
            ]}
        />
    )
}

export default CustomFont;