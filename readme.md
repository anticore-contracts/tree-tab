# @anticore-contracts/tree-tab

An [anticore](https://github.com/Lcfvs/anticore) contract to switch the tabs.

## Install

`npm i @anticore-contracts/tree-tab`

## Reminder

The tree contracts should be added lastly, to improve the performances.

## Exports

### on
```js
import '@anticore-contracts/tree-tab/on.js'
```

### when
```js
import '@anticore-contracts/tree-tab/when.js'
```

## Lifecycle

* Matches `.anticore .tab`
* Searches the related `a[role="tab"][href]` for the response url providing that tab
* Searches the closest ancestor containing the previous tab
* Replaces the previous tab by the new one

## License

[MIT](./license.md)
