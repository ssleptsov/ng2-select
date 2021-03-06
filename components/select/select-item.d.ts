export declare class SelectItem {
    id: string;
    text: string;
    source: any;
    children: Array<SelectItem>;
    parent: SelectItem;
    constructor(source: any);
    fillChildrenHash(optionsMap: Map<string, number>, startIndex: number): number;
    hasChildren(): boolean;
    getSimilar(): SelectItem;
}
