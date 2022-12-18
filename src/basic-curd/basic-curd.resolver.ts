import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BasicCurdService } from './basic-curd.service';
import { CreateBasicCurdInput } from './dto/create-basic-curd.input';
import { UpdateBasicCurdInput } from './dto/update-basic-curd.input';

@Resolver('BasicCurd')
export class BasicCurdResolver {
  constructor(private readonly basicCurdService: BasicCurdService) {}

  @Mutation('createBasicCurd')
  create(@Args('createBasicCurdInput') createBasicCurdInput: CreateBasicCurdInput) {
    return this.basicCurdService.create(createBasicCurdInput);
  }

  @Query('basicCurd')
  findAll() {
    return this.basicCurdService.findAll();
  }

  @Query('basicCurd')
  findOne(@Args('id') id: number) {
    return this.basicCurdService.findOne(id);
  }

  @Mutation('updateBasicCurd')
  update(@Args('updateBasicCurdInput') updateBasicCurdInput: UpdateBasicCurdInput) {
    return this.basicCurdService.update(updateBasicCurdInput.id, updateBasicCurdInput);
  }

  @Mutation('removeBasicCurd')
  remove(@Args('id') id: number) {
    return this.basicCurdService.remove(id);
  }
}
