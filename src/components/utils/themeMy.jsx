

// Здесь импортируем шрифты
import pathRegular from '../../resources/fonts/Forum-Regular.ttf';
import {createTheme} from "@mui/material/styles";

// С помощью класса мы будем создавать объекты.(чтобы под каждый шрифт не писать объект вручную, может быть есть какой то способ получше, но я новичок в js)
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
};

const forumRegular = new Font('Forum', 'normal', 400, pathRegular);


// export const themeMy = createTheme({
//     palette: {
//         primary: {
//             main: '#000000',
//             another: '#9F4636',
//         },
//         secondary: {
//             main: '#F1DCC9',
//         },
//
//     typography: {
//         fontFamily: 'Forum',
//         fontSize: 24,
//         body1: {
//             fontWeight: 400
//         },
//         h1: {
//             fontSize: 32,
//             fontWeight: 700,
//             color: '#444'
//         }
//     },
// // Если используется СssBaseline то для него нужно изменить шрифт глобально, если не используем то код ниже не пишем
//     overrides: {
//         MuiCssBaseline: {
//             '@global': {
//                 '@font-face': [forumRegular],
//             },
//         },
//     }
// }});
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
        }},
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
// Если используется СssBaseline то для него нужно изменить шрифт глобально, если не используем то код ниже не пишем
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [forumRegular],
            },
        },
    }
});
export default themeMy;