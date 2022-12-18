import { CreateBasicCurdInput } from './create-basic-curd.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBasicCurdInput extends PartialType(CreateBasicCurdInput) {
  id: number;
}
