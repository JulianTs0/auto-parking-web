import DefaultIcon from '../../ui/assets/icons/default.svg';
import CarIcon from '../../ui/assets/icons/car.svg';
import LocationIcon from '../../ui/assets/icons/location.svg';
import HouseIcon from '../../ui/assets/icons/house.svg';

export class IconMapper {
    private static readonly ICONS: Record<string, string> = {
        CAR: CarIcon,
        LOCATION: LocationIcon,
        HOUSE: HouseIcon,
    };

    public static getIcon(type?: string): string {
        if (!type) return DefaultIcon;
        const key = type.toUpperCase().trim();
        return this.ICONS[key] || DefaultIcon;
    }
}
