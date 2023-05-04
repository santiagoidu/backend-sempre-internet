
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  produto: string;

  @Prop()
  preco: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
