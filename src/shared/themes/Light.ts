import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#FFB708',
            dark: '#FB8500',
            light: '#FFE45D',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#219EBC',
            dark: '#023047',
            light: '#8ECAE6',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f7f6f3',
            paper: '#ffffff',
        }
    }
});