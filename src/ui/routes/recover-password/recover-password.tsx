import RecoverForm from '../../components/molecules/recover-form/recover-form';
import Layout from '../../layout/layout';
import { ViewModel } from './viewmodel';

export default function RecoverPasswordRoute() {
    const { onSubmit, isSubmitting, icon } = ViewModel();

    return (
        <Layout>
            <RecoverForm
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                iconName={icon}
            />
        </Layout>
    );
}
