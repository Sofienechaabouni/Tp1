import { Module } from '@nestjs/common';
import { TodoControllerController } from 'src/todo-controller/todo-controller.controller';

@Module({controllers:[TodoControllerController]})
export class TodoModuleModule {}
