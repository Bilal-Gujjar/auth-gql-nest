import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCurdModule } from './basic-curd/basic-curd.module';

@Module({
  imports: [BasicCurdModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
