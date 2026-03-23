import '../../styles/index.css';
import Layout from '../../layout/layout';

import { ViewModel } from './viewmodel';
import LoginForm from '../../components/molecules/login-form/login-form';
export default function LoginRoute() {
    const { onSubmit, onClickPassword, showPassword, icon } =
        ViewModel();

    return (
        <Layout>
            <LoginForm
                onClickPassword={onClickPassword}
                onSubmit={onSubmit}
                showPassword={showPassword}
                iconName={icon}
            />
        </Layout>
    );
}
