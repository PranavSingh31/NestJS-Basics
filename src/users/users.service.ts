import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    //creating a temporary data store to test methods
    private users = [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "role": "ENGINEER"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "role": "ADMIN"
        },
        {
          "id": 3,
          "name": "Emily Johnson",
          "email": "emily.johnson@example.com",
          "role": "INTERN"
        },
        {
          "id": 4,
          "name": "Michael Brown",
          "email": "michael.brown@example.com",
          "role": "ENGINEER"
        },
        {
          "id": 5,
          "name": "Sarah Davis",
          "email": "sarah.davis@example.com",
          "role": "ADMIN"
        },
        {
          "id": 6,
          "name": "David Wilson",
          "email": "david.wilson@example.com",
          "role": "INTERN"
        },
        {
          "id": 7,
          "name": "Laura White",
          "email": "laura.white@example.com",
          "role": "ENGINEER"
        },
        {
          "id": 8,
          "name": "James Taylor",
          "email": "james.taylor@example.com",
          "role": "ADMIN"
        }
    ]
    
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') //role is optional
    {
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number)
    {
        const user = this.users.find(user => user.id === id)
        return user
    }

    //create(user: {name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN'})
    create(createUserDto: CreateUserDto) 
    {
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }

    //update(id: number, updatedUser: {name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
    update(id: number, updateUserDto: UpdateUserDto){
        this.users = this.users.map(user => {
            if(user.id == id){
                return {...user, ...updateUserDto} //overwriting
            }
            return user
        })
        
        return this.findOne(id)
    }

    delete(id: number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
