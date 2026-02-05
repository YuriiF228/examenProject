import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { ProductsModule } from './products/products.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:admin@examen.jyzol2r.mongodb.net/?appName=examen"),
    AuthModule,
    UsersModule,
    ProductsModule
  ],
})
export class AppModule {}
