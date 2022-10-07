import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('controleur1')
export class Controleur1Controller {
    @Get('test')
    getHello():string{
        console.log('hehi rahi get method');
        return 'hello nest its a get method'
    }
    @Post('test')
    postHello():string{
        
        return 'hello nest its a post method'
    }

    @Delete('test')
    DeletHello():string{
      
        return 'hello nest its a Delete method'
    }
    
    @Put('test')
    PutHello():string{
        
        return 'hello nest its a put  method'
    }

}
