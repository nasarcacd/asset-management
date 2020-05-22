import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#277db7';
const orange = '#FFBA60';

export default createMuiTheme({
    palette: {
        primary: {
            main: `${blue}`
        },
        secondary: {
            main: `${orange}`
        },
    },
    typography: {
        fontFamily: [
            'Open Sans Condensed', 
            'sans-serif'
        ],
        fontSize: 16,
    }
});