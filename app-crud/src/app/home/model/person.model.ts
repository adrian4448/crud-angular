import { Sex } from "./enum/sex.enum";

export interface Person {
    id: number,
    name: string,
    age: number,
    sex: Sex,
    imageUrl: string,
    createDate: string
}