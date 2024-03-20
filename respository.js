const synonyms = new Map()

export function readAllSynonyms() {
    return synonyms.values
}

export function readSynonym(text) {
    if (synonyms.has(text)) {
        return synonyms.get(text)
    }
    else {
        throw new Error('NOT FOUND')
    }
}

export function createSynonym(synonym) {
    if (!synonyms.has(synonym.text)) {
        synonyms.set(synonym.text, synonym)
    } else {
        throw new Error('ALREADY EXISTS')
    }
}

export function updateSynonym(text, synonym) {
    synonyms.set(text, synonym)
}

export function deleteSynonym(text) {
    synonyms.delete(text)
}