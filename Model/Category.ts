import { Item } from './Item';


export type Category = {
    categoryId: string,
    categoryName: string,
    items?: Array<Item>,
}