import { Category } from "src/book/schemas/book.schemas";
export declare class CreateBookDto {
    readonly title: String;
    readonly description: String;
    readonly author: String;
    readonly price: number;
    readonly category: Category;
}
