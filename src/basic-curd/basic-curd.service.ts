import { Injectable } from '@nestjs/common';
import { CreateBasicCurdInput } from './dto/create-basic-curd.input';
import { UpdateBasicCurdInput } from './dto/update-basic-curd.input';

@Injectable()
export class BasicCurdService {
  create(createBasicCurdInput: CreateBasicCurdInput) {
    return 'This action adds a new basicCurd';
  }

  findAll() {
    return `This action returns all basicCurd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicCurd`;
  }

  update(id: number, updateBasicCurdInput: UpdateBasicCurdInput) {
    return `This action updates a #${id} basicCurd`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicCurd`;
  }
}
