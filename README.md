# Storage API

Interact with local storage just like a REST API.

## Installation

`npm i storageapi --save`

## Usage

```javascript
const storageapi = require('storageapi')

// OR

import storageapi from 'storageapi'
```

## Setting & Getting Single Variables

```javascript
storageapi.setVar('date', new Date())
storageapi.getVar('date') // => 2020-07-20T12:38:07.562Z
```

## Adding Data

```javascript
// Posting
// storageapi.post adds an object to a locally stored collection

storageapi.post('users', {name: 'Bob'})
// users => [{name: 'Bob', id: 'ea73b53eb868556b6884ba1a0'}]
```

## Getting data

```javascript
// Getting
// storageapi.get retreives the data from localStorage

storageapi.get('users')
// returns [{name: 'Bob', id: 'ea73b53eb868556b6884ba1a0'}]
```

## Editing Data
```javascript
// Patching
// storageapi.patch edits a single property for the object 

storageapi.patch('users/ea73b53eb868556b6884ba1a0', {age: 40})
// users => [{name: 'Bob', age: 40, id: 'ea73b53eb868556b6884ba1a0'}]

// Updating
// storageapi.put replaces all properties within an object with new properties

storageapi.put('users/ea73b53eb868556b6884ba1a0', {name: Max, age: 20})
// users => [{name: 'Max', age: 20, id: 'ea73b53eb868556b6884ba1a0'}]
```


## Deleting Data
```javascript
// Deleting
// storageapi.delete deletes the item within the locally stored collection.
// Passing no id deletes the entire collection.

storageapi.delete('users/ea73b53eb868556b6884ba1a0')
// users => []

```