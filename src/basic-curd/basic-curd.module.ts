import { Module } from '@nestjs/common';
import { BasicCurdService } from './basic-curd.service';
import { BasicCurdResolver } from './basic-curd.resolver';

@Module({
  providers: [BasicCurdResolver, BasicCurdService]
})
export class BasicCurdModule {}
