import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') //handles everything with /users
export class UsersController {
    
    //create autowired userService variable
    //else we had to make it like UsersService usersService = new UserService();
    constructor(private readonly usersService: UsersService){}

    @Get() //  GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') { // FOR /users?role=value
        //role? makes it an optional query parameter
        return this.usersService.findAll(role)
    }

    //ParseIntPipe is validating the data
    @Get(':id') //  GET /users/:id
    findOne(@Param('id',ParseIntPipe) id: number){ //param takes the id and puts it into id variable that should be string
        //return this.usersService.findOne(+id) without ParseIntPipe and when id is string
        //+ easily converts a string into number
        return this.usersService.findOne(id) 
    }

    /*
    @Get('interns') // GET /users/interns
    findAllInterns(){
        return {}
    }
    
     -- but the above function would not work because interns would be caught as an id
     -- so it is important to just order your handlers correctly
    */

     //ValidationPipe validates the decorators used at DTO definition
    @Post() //  POST /users
    // create(@Body() user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        create(@Body(ValidationPipe) createUserDto: CreateUserDto){ //now we are using DTO
        return this.usersService.create(createUserDto)
    }

    @Patch(':id') //  PATCH /users/:id
    update(@Param('id',ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id') //  DELETE /users/:id
    deleteOne(@Param('id',ParseIntPipe) id: number){ //param takes the id and puts it into id variable that should be string
        return this.usersService.delete(id)
    }
}