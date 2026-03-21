import DefaultIcon from '../../ui/assets/icons/default.svg';

export class ImagessMapper {
    private static readonly IMAGES: Record<string, string> = {};

    public static getImage(type?: string): string {
        if (!type) return DefaultIcon;
        const key = type.toUpperCase().trim();
        return this.IMAGES[key] || DefaultIcon;
    }
}
