
// FILE GENERATED BY `rollup-plugin-dts@0.15.1`
// https://github.com/Swatinem/rollup-plugin-dts

interface IRectangle {
    width: number;
    height: number;
    x: number;
    y: number;
    [propName: string]: any;
}
declare class Rectangle implements IRectangle {
    width: number;
    height: number;
    x: number;
    y: number;
    rot: boolean;
    data: any;
    oversized: boolean;
    constructor(width?: number, height?: number, x?: number, y?: number, rot?: boolean);
    static Collide(first: Rectangle, second: Rectangle): boolean;
    static Contain(first: Rectangle, second: Rectangle): boolean;
    area(): number;
    collide(rect: Rectangle): boolean;
    contain(rect: Rectangle): boolean;
}

interface IBin {
    width: number;
    height: number;
    maxWidth: number;
    maxHeight: number;
    freeRects: IRectangle[];
    rects: IRectangle[];
    options: IOption;
}
declare abstract class Bin implements IBin {
    width: number;
    height: number;
    maxWidth: number;
    maxHeight: number;
    freeRects: IRectangle[];
    rects: IRectangle[];
    options: IOption;
    abstract add(rect: IRectangle): IRectangle | undefined;
    abstract add(width: number, height: number, data: any): IRectangle | undefined;
}

/**
 * Options for MaxRect Packer
 * @property {boolean} options.smart Smart sizing packer (default is true)
 * @property {boolean} options.pot use power of 2 sizing (default is true)
 * @property {boolean} options.square use square size (default is false)
 * @export
 * @interface Option
 */
interface IOption {
    smart?: boolean;
    pot?: boolean;
    square?: boolean;
    allowRotation?: boolean;
}
declare class MaxRectsPacker<T extends IRectangle = Rectangle> {
    width: number;
    height: number;
    padding: number;
    options: IOption;
    bins: Bin[];
    /**
     * Creates an instance of MaxRectsPacker.
     * @param {number} width of the output atlas (default is 4096)
     * @param {number} height of the output atlas (default is 4096)
     * @param {number} padding between glyphs/images (default is 0)
     * @param {IOption} [options={}] (Optional) packing options
     * @memberof MaxRectsPacker
     */
    constructor(width?: number, height?: number, padding?: number, options?: IOption);
    /**
     * Add a bin/rectangle object with data to packer
     * @param {number} width of the input bin/rectangle
     * @param {number} height of the input bin/rectangle
     * @param {*} data custom data object
     * @memberof MaxRectsPacker
     */
    add(width: number, height: number, data: any): IRectangle;
    /**
     * Add a bin/rectangle object extends IRectangle to packer
     * @template T Generic type extends IRectangle interface
     * @param {T} rect the rect object add to the packer bin
     * @memberof MaxRectsPacker
     */
    add(rect: T): T;
    /**
     * Add an Array of bins/rectangles to the packer.
     * Object structure: { width, height, data }
     * @param {IRectangle[]} rects Array of bin/rectangles
     * @memberof MaxRectsPacker
     */
    addArray(rects: T[]): void;
    /**
     * Load bins to the packer, overwrite exist bins
     * @param {MaxRectsBin[]} bins MaxRectsBin objects
     * @memberof MaxRectsPacker
     */
    load(bins: Bin[]): void;
    /**
     * Output current bins to save
     * @memberof MaxRectsPacker
     */
    save(): IBin[];
    private sort;
}

declare class MaxRectsBin<T extends IRectangle = Rectangle> extends Bin {
    maxWidth: number;
    maxHeight: number;
    padding: number;
    options: IOption;
    width: number;
    height: number;
    freeRects: Rectangle[];
    rects: IRectangle[];
    private verticalExpand;
    private stage;
    constructor(maxWidth?: number, maxHeight?: number, padding?: number, options?: IOption);
    add(rect: T): T | undefined;
    add(width: number, height: number, data: any): Rectangle | undefined;
    private findNode;
    private splitNode;
    private pruneFreeList;
    private updateBinSize;
    private expandFreeRects;
}

declare class OversizedElementBin<T extends IRectangle = Rectangle> extends Bin {
    width: number;
    height: number;
    data: any;
    maxWidth: number;
    maxHeight: number;
    options: IOption;
    rects: T[];
    freeRects: IRectangle[];
    constructor(rect: T);
    constructor(width: number, height: number, data: any);
    add(): undefined;
}

export { Bin, IOption, IRectangle, MaxRectsBin, MaxRectsPacker, OversizedElementBin, Rectangle };