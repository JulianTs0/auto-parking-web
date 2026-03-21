import DefaultIcon from '../../ui/assets/icons/default.svg';

export class IconMapper {
    private static readonly ICONS: Record<string, string> = {};

    public static getIcon(type?: string): string {
        if (!type) return DefaultIcon;
        const key = type.toUpperCase().trim();
        return this.ICONS[key] || DefaultIcon;
    }
}
