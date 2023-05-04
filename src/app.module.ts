import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://test:test@sempreinternettest.lgmsnn4.mongodb.net/'), ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
