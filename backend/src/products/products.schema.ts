import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  price: number

  @Prop({ required: true, min: 0 })
  quantity: number

  @Prop()
  article?: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)
