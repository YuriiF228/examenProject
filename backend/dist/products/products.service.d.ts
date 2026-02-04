import { Model } from 'mongoose';
import { Product } from './products.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, Product, "find", {}>;
    create(name: string, price: number): Promise<import("mongoose").Document<unknown, {}, Product, {}, import("mongoose").DefaultSchemaOptions> & Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
