import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto)
    return product.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate({
      _id: id
    },{
        $set: updateProductDto,
      },
      {
        new: true
      },
  ).exec();
  }

  remove(id: string) {
    return this.productModel.deleteOne({
      _id: id,
    }).exec();
  }
}
