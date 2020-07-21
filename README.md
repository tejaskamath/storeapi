# Store REST API

Interact with local storage just like a REST API.

## Installation

`npm i storerestapi --save`

## Usage

```javascript
const srapi = require('storerestapi')

// OR

import srapi from 'storerestapi'
```

### Setting & Getting Single Variables

```javascript
srapi.setVar('date', new Date())
srapi.getVar('date') // => 2020-07-20T12:38:07.562Z
srapi.deleteVar('date') // Removes 'date' from localStorage
```

### Adding Data

```javascript
// Posting
// srapi.post adds an object to a locally stored collection

srapi.post('users', {name: 'Bob'})
// users => [{name: 'Bob', id: 'ea73b53eb868556b6884ba1a0'}]
```

### Getting data

```javascript
// Getting
// srapi.get retreives the data from localStorage

srapi.get('users')
// returns [{name: 'Bob', id: 'ea73b53eb868556b6884ba1a0'}]
```

### Editing Data
```javascript
// Patching
// srapi.patch edits a single property for the object 

srapi.patch('users/ea73b53eb868556b6884ba1a0', {age: 40})
// users => [{name: 'Bob', age: 40, id: 'ea73b53eb868556b6884ba1a0'}]

// Updating
// srapi.put replaces all properties within an object with new properties

srapi.put('users/ea73b53eb868556b6884ba1a0', {name: Max, age: 20})
// users => [{name: 'Max', age: 20, id: 'ea73b53eb868556b6884ba1a0'}]
```


### Deleting Data
```javascript
// Deleting
// srapi.delete deletes the item within the locally stored collection.
// Passing no id deletes the entire collection.

srapi.delete('users/ea73b53eb868556b6884ba1a0')
// users => []
```