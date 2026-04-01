import RecoverForm from '../../components/organisms/recover-form/recover-form';
import Layout from '../../layout/layout';
import { ViewModel } from './viewmodel';

export default function RecoverPasswordRoute() {
    const { onSubmit, isSubmitting, icon, cooldown } = ViewModel();

    return (
        <Layout>
            <RecoverForm
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                iconName={icon}
                cooldown={cooldown}
            />
        </Layout>
    );
}
