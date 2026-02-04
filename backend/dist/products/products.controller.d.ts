import { ProductsService } from './products.service';
export declare class ProductsController {
    private service;
    constructor(service: ProductsService);
    getAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./products.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./products.schema").Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[], import("mongoose").Document<unknown, {}, import("./products.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./products.schema").Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }, {}, import("./products.schema").Product, "find", {}>;
    create(body: {
        name: string;
        price: number;
    }): Promise<import("mongoose").Document<unknown, {}, import("./products.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./products.schema").Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
}
