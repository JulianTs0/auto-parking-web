import { ViewModel } from './viewmodel';
import Layout from '../../layout/layout';
import RegisterForm from '../../components/molecules/register-form/register-form';

export default function RegisterRoute() {
    const {
        onSubmit,
        isSubmitting,
        showPassword,
        onClickPassword,
        icon,
    } = ViewModel();

    return (
        <Layout>
            <RegisterForm
                iconName={icon}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                showPassword={showPassword}
                onClickPassword={onClickPassword}
            />
        </Layout>
    );
}
