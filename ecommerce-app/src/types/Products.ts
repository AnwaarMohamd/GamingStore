export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: 'Headsets' | 'Keyboards' | 'Mouses' | 'Monitors' | 'Controllers' | 'Chairs' | 'MousePads' | 'RGBAccessories' | 'Desk' | 'Setup' |'Console';
}