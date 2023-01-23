const getTranslation = require('./translationService');

//describe, test, expect
jest.mock('./translationService');

describe('Translation Service Test', ()=>{
    test('As a user, I want to get a translated text from a sentence', async ()=>{
        const result = await getTranslation("Victory is ours");
        expect(result.data.contents.text).toEqual("Victory is ours");
        expect(result.data.contents.translated).toEqual("Skil nam-tor ours");
        expect(result.data.contents.translation).toEqual("vulcan");
    });
});