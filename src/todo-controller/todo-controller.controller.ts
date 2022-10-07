import { Body, Controller,Delete,Get,Param,Post, Put } from '@nestjs/common';
import { get } from 'http';
import { TodoDto } from 'src/todo-module/dto/todo.dto';
import { UpdateTodoDto } from 'src/todo-module/dto/update-todo.dto';
import { TodoModel } from 'src/todo-module/TodoModel';
import { v4 as uuidv4 } from 'uuid';
@Controller('todo-controller')
export class TodoControllerController {
    private todos = [];
    @Get('liste-todos')
    getListeTodos(){
        return this.todos
    }
    @Post()
  addTodo(@Body() todoDto: TodoDto) {
    const todo = new TodoModel();
    todo.name = todoDto.name;
    todo.description = todoDto.description;
    this.todos.push(todo);
    return todo;
  }
  @Get(':id')
  getTodoById(@Param('id') id){
    return this.todos.find((todo) => todo.id == id);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    return 'Deleted';
  }

  @Put(':id')
  updateTodo(@Param('id') id, @Body() updateTodoDto:UpdateTodoDto) {
    const todo = this.todos.find((todo) => todo.id == id);
    updateTodoDto.name=todo.name??updateTodoDto.name;
    // if (updateTodoDto.name) {
    //   todo.name = updateTodoDto.name;
    // }
    updateTodoDto.description=todo.description??updateTodoDto.description;
    // if (updateTodoDto.description) {
    //   todo.description = updateTodoDto.description;
    // }
    updateTodoDto.status=todo.status??updateTodoDto.status
    // if (updateTodoDto.status) {
    //   todo.status = updateTodoDto.status;
    // }
    return todo;
  }
}
