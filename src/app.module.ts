import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { Controleur1Controller } from './controleur1/controleur1.controller';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoControllerController } from './todo-controller/todo-controller.controller';

@Module({
  imports: [PremierModule, TodoModuleModule],
  controllers: [AppController, Controleur1Controller, TodoControllerController],
  providers: [AppService],
})
export class AppModule {}
