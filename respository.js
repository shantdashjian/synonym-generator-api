const synonyms = new Map()

synonyms.set('smart', {text: 'smart', synonym: 'brilliant'})
synonyms.set('stupid', {text: 'stupid', synonym: 'dumb'})

export function readAllSynonyms() {
    return Array.from(synonyms.values())
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
        return synonym
    } else {
        throw new Error('ALREADY EXISTS')
    }
}

export function updateSynonym(text, synonym) {
    synonyms.set(text, synonym)
    return synonym
}

export function deleteSynonym(text) {
    synonyms.delete(text)
}