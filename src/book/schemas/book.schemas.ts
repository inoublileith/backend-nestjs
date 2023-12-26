import { Schema , Prop, SchemaFactory} from "@nestjs/mongoose";

export enum Category {
    ADVENTURE ='Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime ',
    FANTASY= ' Fantasy'
}



@Schema({
    timestamps: true 
})
export class Book {

    @Prop()
    title: String ;

    @Prop()
    description: String ;

    @Prop()
    author: String ;
    
    @Prop()
    price: number ;

     @Prop()    
    category : Category ;

    

}
export const BookSchema  =  SchemaFactory.createForClass(Book)

