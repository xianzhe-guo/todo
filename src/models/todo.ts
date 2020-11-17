import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: false,
        },

        status: {
            type: Boolean,
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        tag: {
            type: String,
            required: false,
        },

        priority: {
            type: Number,
            required: false,
        },

        category: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)
