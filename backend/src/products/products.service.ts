import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  findAll() {
    return this.productModel.find();
  }

  create(name: string, price: number) {
    return this.productModel.create({ name, price });
  }
}
