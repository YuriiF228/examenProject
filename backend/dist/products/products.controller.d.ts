import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    create(body: {
        name: string;
        price: number;
        quantity: number;
    }): Promise<import("mongoose").Document<unknown, {}, import("./products.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./products.schema").Product & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./products.schema").Product, {}, import("mongoose").DefaultSchemaOptions> & import("./products.schema").Product & Required<{
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
}
