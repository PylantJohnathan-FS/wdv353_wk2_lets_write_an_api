const getTranslation = async (sentence)  =>{
    console.log('Fetching Mocked Translation');
    return Promise.resolve({
        data: {
            success: { total: 1 },
            contents: {
              translated: 'Skil nam-tor ours',
              text: 'Victory is ours',
              translation: 'vulcan'
            }
          },
    });
};

module.exports = getTranslation;