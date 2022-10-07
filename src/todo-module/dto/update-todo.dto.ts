import { TodoStatusEnum } from '../todo-status-enum';
export class UpdateTodoDto {
  name: string;
  description: string;
  status: TodoStatusEnum;
}