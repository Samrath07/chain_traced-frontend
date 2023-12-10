import { Button, InputBase } from '@mui/material';
import theme from '../../../AppTheme';
import { styled } from '@mui/system';


export const StyledTextArea = styled(InputBase)`
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    color: ${theme.palette.text.primary};
    background-color: ${theme.palette.background.paper};
    border-radius: 0.5rem;
    font-size: 1.5rem;
    padding: 1rem;
    &:focus {
        outline: none;
    }
`;

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#31304D',
    color: '#fff',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    padding: '0.5rem',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    '&:focus': {
        outline: 'none',
    },
    width: '20vh',
    marginRight: '1rem'
}));

export const StyledDeleteButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF1055',
    color: '#fff',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    padding: '0.5rem',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
    '&:focus': {
        outline: 'none',
    },
    width: '20vh',
    marginRight: '1rem'
}));