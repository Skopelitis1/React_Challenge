import React from 'react'
import { loremIpsum } from 'react-lorem-ipsum';

function loremMax50() {
    const description_generated = loremIpsum({ p: 1, avgSentencesPerParagraph: 1, random: true, startWithLoremIpsum: false }); //return random desc
    return description_generated[0].slice(0, 50);
}

const normalizeRepo = (repo) => {
    return (
        {
            ...repo,
            description: repo.description?.trim() || loremMax50()
        });
}

export default normalizeRepo
