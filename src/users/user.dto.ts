import { IsEmail, IsNumber, IsString } from "class-validator";

export class UserDto {
    @IsString()
    name : string;

    @IsEmail()
    email: string;

    @IsString()
    status : string;

   @IsNumber()
   companyId : number;
}