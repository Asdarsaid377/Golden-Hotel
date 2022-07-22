import { Switch, Route } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import TablesUser from 'pages/Tables';
import TableTamu from "pages/TableTamu"
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import TableKamar from 'pages/Kamar';
import FormUser from 'components/Form/FormUser';
import NotFound404 from 'pages/NotFound404';

import 'assets/styles/tailwind.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/tables" component={TablesUser} />
                    <Route exact path="/tablestamu" component={TableTamu} />
                    <Route exact path="/tableskamar" component={TableKamar} />
                    <Route exact path="/formuser" component={FormUser} />
                    <Route exact path="*" component={NotFound404} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
