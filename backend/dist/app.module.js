"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const products_controller_1 = require("./products/products.controller");
const products_service_1 = require("./products/products.service");
const products_module_1 = require("./products/products.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot("mongodb+srv://user:user@examen.jyzol2r.mongodb.net/?appName=examen"),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            products_module_1.ProductsModule
        ],
        controllers: [app_controller_1.AppController, products_controller_1.ProductsController],
        providers: [app_service_1.AppService, products_service_1.ProductsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map