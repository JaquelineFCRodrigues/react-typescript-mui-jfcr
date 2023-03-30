import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

// Configuração do React Router Dom
export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/pagina-inicial" element= {<Button>Teste</Button>} />
            <Route path="*" element= {<Navigate to="/pagina-inicial" />} /> 
        </Routes>
    );
}

// linha 8: Caso não haja uma não válida na URl o Navigate redireciona para pagina inicial;