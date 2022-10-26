const data = [
  {
    country: "US",
    languages: ["en"]
  },
  {
    country: "BE",
    languages: ["nl", "fr", "de"]
  },
  {
    country: "NL",
    languages: ["nl", "fy"]
  },
  {
    country: "DE",
    languages: ["de"]
  },
  {
    country: "ES",
    languages: ["es"]
  }];

/*
returns the number of countries in the world
- finds the country with the most official languages, where they officially speak German (de).
- that counts all the official languages spoken in the listed countries.
- to find the country with the highest number of official languages.
- to find the most common official language(s), of all countries.
*/
function handle(data) {
  let fieldWithBiggestLanguage = { languages: [] };
  let officialLanguagesSpoken = [];
  let countryWithHighestNumberOfOfficialLanguages = '';
  let controlSize = 0;
  let allLanguages = []
  data.forEach((field) => {
    // find the country
    if (field.languages.includes('de')) {
      if (field.languages.length > fieldWithBiggestLanguage.languages.length) {
        fieldWithBiggestLanguage = field
      }
    }


    // counts all official languages
    let languages = field.languages
    languages.forEach(language => {
      if (officialLanguagesSpoken.indexOf(language) === -1) {
        officialLanguagesSpoken.push(language);
      }
    })

    // get the highest country w/ languages
    if (controlSize < languages.length) {
      countryWithHighestNumberOfOfficialLanguages = field
      controlSize = languages.length
    }
    allLanguages.push(...field.languages);
  })

  console.log(`fieldWithBiggestLanguage: `, fieldWithBiggestLanguage);
  console.log(`officialLanguagesSpoken: `, officialLanguagesSpoken);
  console.log(`countryWithHighestNumberOfOfficialLanguages: `, countryWithHighestNumberOfOfficialLanguages);
  const counts = {};
  for (const num of allLanguages) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  console.log(`most common official languages, count frequency: `, counts);
}

handle(data)

// dev note: you can use all in one loop to do all the tasks