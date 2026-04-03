import '../../styles/index.css';
import Layout from '../../layout/layout';

import { ViewModel } from './viewmodel';
import UpgradeOwnerForm from '../../components/molecules/upgrade-owner-form/upgrade-owner-form';

export default function UpgradeOwnerRoute() {
    const { onSubmit, onClickPassword, showPassword, icon } =
        ViewModel();

    return (
        <Layout>
            <UpgradeOwnerForm
                onClickPassword={onClickPassword}
                onSubmit={onSubmit}
                showPassword={showPassword}
                iconName={icon}
            />
        </Layout>
    );
}
