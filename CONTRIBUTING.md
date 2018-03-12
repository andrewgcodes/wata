# Pull requests template

[**feature** / **translation** / **word** / **fix**] Pull request details

## Adding translations

Translations data can be found in `data` folder.

1. Check if language exists in `languages.js`
2. Check if language is already translated in `words.js` by searching for language slug
3. Translate
4. Run `yarn test` or `npm test` to check for potential issues

## Adding new words
1. Check whether emoji exists in `words.js`
2. Check whether category exists in `category.js`, if not add new one
3. Create new word object or objects
```
{
  name: "emoji name",
  category: "valid category",
  emoji: "emoji symbol",
  translations: {},
},
```
4. Run `yarn test` or `npm test` to check for potential issues

## How to make a pull request

1. Fork it (<https://github.com/michalczmiel/bln>)
2. Create your branch
(`git checkout -b feature/<feature name>`) or (`git checkout -b translation/<language slug>`) or (`git checkout -b word/<words names>`) or (`git checkout -b fix/<fix name>`) 
3. Test, lint and format your code (`yarn test && yarn lint && yarn format`)
4. Commit your changes (`git commit -m 'Added <feature name> feature'`)
5. Push to the branch (`git push origin feature/<feature name>`)
6. Create a new Pull Request
