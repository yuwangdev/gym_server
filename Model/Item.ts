import { Subitem } from './Subitem';

export type Item = {
    itemId: string,
    itemName: string,
    subItems: Array<Subitem>
}
