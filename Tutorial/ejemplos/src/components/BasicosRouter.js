import {
  BrowserRouter as Router,
  HashRouter,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./menuConceptos";
import PrivateRoute from "./PrivateRoute";
// Primer caso que coincida en el switch, lo va a cargar TENER CUIDADO CON ESO
// De lo contrario podemos agregarle exact, ahi la ruta debe ser igual para cargar el componente
// Problema de jerarquias con * en caso de no encontrar una ruta
const BasicosRouter = () => {
  return (
    <div>
      <h2>Hash Router</h2>

      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacte</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/acerca" component={Acerca} />
        </Switch>
      </HashRouter>

      <hr></hr>

      <h2>Conceptos Basicos</h2>
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route exact path="/productos" component={Productos} />
          {/* Cuando usamos sublinks no puede ir exact */}
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <Route path="/contact">
            <Redirect to="/contacto" />
          </Route>

          <Route path="/about">
            <Redirect to="/acerca" />
          </Route>

          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

// const BasicosRouter = () => {
//   return (
//     <div>
//       <h2>Conceptos Basicos</h2>
//       <Router>
//         <Switch>
//           <Route exact path="/">
//             <h3>Home</h3>
//             <p>Bienvenidos a las rutas en REACT</p>
//           </Route>
//           <Route exact path="/acerca">
//             <Acerca />
//           </Route>
//           {/* <Route exact path="/contacto" component={Contacto} /> */}
//           {/* <Route exact path="/contacto" children={<Contacto />} /> */}
//         </Switch>
//       </Router>
//     </div>
//   );
// };

export default BasicosRouter;
