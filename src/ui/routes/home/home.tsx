import MainMenu from '../../components/organisms/main-menu/main-menu';
import Layout from '../../layout/layout';
import ViewModel from './viewmodel';

export default function HomeRoute() {
    const {
        user,
        onProfileClick,
        onLogout,
        isAdmin,
        showNavbar,
        toggleNavbar,
        profileLink,
    } = ViewModel();

    return (
        <Layout
            withHeader
            user={user}
            onLogout={onLogout}
            showNavbar={showNavbar}
            toggleNavbar={toggleNavbar}
            isAdmin={isAdmin}
        >
            <MainMenu />
        </Layout>
    );
}
