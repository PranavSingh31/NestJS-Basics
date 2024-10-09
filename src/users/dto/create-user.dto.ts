//data transfer objects

import { IsEmail, IsEnum, IsNotEmpty, IsString} from "class-validator";


//all are required
export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(["INTERN","ENGINEER","ADMIN"],{
        message: "Valid role required"
    })
    role: "INTERN" | "ENGINEER" | "ADMIN"
}

