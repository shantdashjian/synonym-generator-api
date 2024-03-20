import express from 'express'
import cors from 'cors'

import { readAllSynonyms, readSynonym, createSynonym, updateSynonym, deleteSynonym } from './respository.js'

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.get('/api/synonym', (req, res) => {
    res.status(200).json(readAllSynonyms())
})

app.post('/api/synonym', (req, res) => {
    const synonym = req.body
    try {
        createSynonym(synonym)
        res.status(201).json(synonym)
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})