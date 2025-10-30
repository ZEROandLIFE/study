export interface PersonInterface{
    id: string
    name: string
    age:number
}
//都可以用来简化
export type persons = PersonInterface[]

export type personss=Array<PersonInterface>