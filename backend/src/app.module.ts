import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://user:user@examen.jyzol2r.mongodb.net/?appName=examen"),
    AuthModule,
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
