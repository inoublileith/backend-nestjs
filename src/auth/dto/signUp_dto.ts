import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from "class-validator";




export class SingUpDto {


    @IsNotEmpty()
    @IsString()
    readonly name : String 
    
    @IsNotEmpty()
    @IsEmail({}, {message : "Please enter correct email"})
    readonly email : String 

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password : String 

   

}