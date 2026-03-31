import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginRoute from './login/login';
import RegisterRoute from './register/register';
import RecoverPasswordRoute from './recover-password/recover-password';

export default function RoutesManager() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginRoute />} />
                <Route path="/register" element={<RegisterRoute />} />
                <Route
                    path="/password-request"
                    element={<RecoverPasswordRoute />}
                />
            </Routes>
        </BrowserRouter>
    );
}
