import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 800

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_ADMIN}:${process.env.MONGO_PASSWORD}${process.env.MONGO_NET}${process.env.MONGO_CLUSTER}?retryWrites=true&w=majority`

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options).
    .then(() =>
          app.listen(PORT, () =>
                     console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
         throw error
    })
