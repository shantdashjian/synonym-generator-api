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
        res.status(201).json(createSynonym(synonym))
    } catch (error) {
        res.status(422).json({ error: error.message })
    }
})

app.get('/api/synonym/:text', (req, res) => {
    const { text } = req.params
    try {
        res.status(200).json(readSynonym(text))
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

app.put('/api/synonym/:text', (req, res) => {
    const { text } = req.params
    const synonym = req.body
    try {
        readSynonym(text)
        res.status(200).json(updateSynonym(text, synonym))
    } catch (error) {
        res.status(201).json(createSynonym(synonym))
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})