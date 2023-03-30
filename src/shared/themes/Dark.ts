import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
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
            default: '#202124',
            paper: '#303134',
        }
    }
});