import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    /* fornece o contexto pro react router dom funcionar corretamente */
    <BrowserRouter> 
      <AppRoutes />
    </BrowserRouter>
  );
}