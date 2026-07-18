import UserProfile from '../../components/organisms/user-profile/user-profile';
import Layout from '../../layout/layout';
import ViewModel from './viewmodel';

export default function ProfileRoute() {
    const { user, onLogout, isAdmin, showNavbar, toggleNavbar } =
        ViewModel();

    return (
        <Layout
            withHeader
            user={user}
            onLogout={onLogout}
            showNavbar={showNavbar}
            toggleNavbar={toggleNavbar}
            isAdmin={isAdmin}
        >
            <UserProfile />
        </Layout>
    );
}
