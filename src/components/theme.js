import { unstable_createMuiStrictModeTheme as createTheme } from "@material-ui/core";

const theme = createTheme({
    palette: {
        primary: {
            main: '#303f9f'
        },
        text: {
            primary: '#142b50'
        }
    },
    typography: {
        fontFamily: 'Open Sans',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightBold: 600
    }
})

export default theme;