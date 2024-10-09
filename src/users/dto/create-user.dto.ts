//data transfer objects

//all are required
export class CreateUserDto{
    name: string;
    email: string;
    role: "INTERN" | "ENGINEER" | "ADMIN"
}

