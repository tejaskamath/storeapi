# Storage API

Interact with local storage just like a REST API.

## Installation

`npm i storeapi --save`

## Usage

```javascript
const storeapi = require('@tj/storeapi')

// OR

import storeapi from '@tj/storeapi'
```

## Setting & Getting Single Variables

```javascript
storeapi.setVar('date', new Date())
storeapi.getVar('date') // => 2020-07-20T12:38:07.562Z
```

## Adding Data

```javascript
// Posting
// storeapi.post adds an object to a locally stored collection

storeapi.post('users', {name: 'Bob'})
// users => [{name: 'Bob', id: 'ea73b53eb868556b6884ba1a0'}]
```

## Getting data

```javascript
// Getting
// storeapi.get retreives the data from localStorage

storeapi.get('users')
// returns [{name: 'Bob', id: 'ea73b53eb868556b6884ba1a0'}]
```

## Editing Data
```javascript
// Patching
// storeapi.patch edits a single property for the object 

storeapi.patch('users/ea73b53eb868556b6884ba1a0', {age: 40})
// users => [{name: 'Bob', age: 40, id: 'ea73b53eb868556b6884ba1a0'}]

// Updating
// storeapi.put replaces all properties within an object with new properties

storeapi.put('users/ea73b53eb868556b6884ba1a0', {name: Max, age: 20})
// users => [{name: 'Max', age: 20, id: 'ea73b53eb868556b6884ba1a0'}]
```


## Deleting Data
```javascript
// Deleting
// storeapi.delete deletes the item within the locally stored collection.
// Passing no id deletes the entire collection.

storeapi.delete('users/ea73b53eb868556b6884ba1a0')
// users => []

```