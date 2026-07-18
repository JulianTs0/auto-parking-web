import DefaultIcon from '../../ui/assets/icons/default.svg';
import CarIcon from '../../ui/assets/icons/car.svg';
import LocationIcon from '../../ui/assets/icons/location.svg';
import HouseIcon from '../../ui/assets/icons/house.svg';
import DefaultProfile from '../../ui/assets/icons/profile.svg';
import NavVar from '../../ui/assets/icons/navbar-menu.svg';
import Close from '../../ui/assets/icons/cross.svg';
import LogOut from '../../ui/assets/icons/logout.svg';

export class IconMapper {
    private static readonly ICONS: Record<string, string> = {
        CAR: CarIcon,
        LOCATION: LocationIcon,
        HOUSE: HouseIcon,
        PROFILE: DefaultProfile,
        NAVVAR: NavVar,
        CLOSE: Close,
        LOGOUT: LogOut,
    };

    public static getIcon(type?: string): string {
        if (!type) return DefaultIcon;
        const key = type.toUpperCase().trim();
        return this.ICONS[key] || DefaultIcon;
    }
}
