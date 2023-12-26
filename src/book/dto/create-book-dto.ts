import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Category } from "src/book/schemas/book.schemas";



export class CreateBookDto {


    @IsNotEmpty()
    @IsString()
    readonly title : String 
    readonly description : String 
    readonly author : String 
    readonly price : number


    @IsEnum(Category , {message : ' please enter correct category '})
    readonly category  : Category 
}