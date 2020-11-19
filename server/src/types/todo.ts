 import { Document } from "mongoose"

 export interface ITodo extends Document {
     name: string
     description: string
     status: boolean
     date: Date
     tag: string
     priority: number
     category: string
}
