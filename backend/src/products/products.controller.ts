import { Body, Controller, Get, Post } from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

@Post()
create(
  @Body()
  body: { name: string; price: number; quantity: number },
) {
  return this.productsService.create(body)
}


  @Get()
  findAll() {
    return this.productsService.findAll()
  }
}
