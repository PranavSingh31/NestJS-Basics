import { CreateUserDto } from "./create-user.dto";
import { PartialType } from "@nestjs/mapped-types"

//we took the already present DTO and made it not required type
export class UpdateUserDto extends PartialType(CreateUserDto) {}