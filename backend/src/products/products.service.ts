import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './products.schema'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

    create(data: { name: string; price: number; quantity: number }) {
      return this.productModel.create(data)
    }


  findAll() {
    return this.productModel.find()
  }
}
