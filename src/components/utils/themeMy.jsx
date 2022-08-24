import pathRegular from '../../resources/fonts/Forum-Regular.ttf';
import {createTheme} from "@mui/material/styles";


class Font {
    constructor(fname, fstyle, fweight, furl) {
        this.fname = fname;
        this.fstyle = fstyle;
        this.fweight = fweight;
        this.furl = furl;

        return {
            fontFamily: this.fname,
            fontStyle: this.fstyle,
            fontDisplay: 'swap',
            fontWeight: this.fweight,
            src: `
                local(${this.fname}),
                url(${this.furl}) format('woff2')
            `,
            unicodeRange:
                'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
    }
}

const forumRegular = new Font('Forum', 'normal', 400, pathRegular);


export const themeMy = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#F1DCC9',
        },
        another: {
            main: '#9F4636'
        },
        accept: {
            main: '#56F43C'
        }
    },
    typography: {
        fontFamily: 'Forum',
        fontSize: 16,
        body1: {
            fontWeight: 400
        },
        h1: {
            fontSize: 48,
            color: '#000000'
        },
        h2: {
            fontSize: 32,
            color: '#000000'
        },
        h4: {
            fontSize: 28,
            color: '#000000',
            marginBottom: 8
        },
        h5: {
            fontSize: 24,
            color: '#000000',
            marginBottom: 2
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [forumRegular],
                '&::-webkit-scrollbar': {
                    width: '0.4em'
                },
                '&::-webkit-scrollbar-track': {
                    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0,0,0,.1)',
                    outline: '1px solid slategrey'
                }
            },
        },
    }
});
export default themeMy;