# trailmaster

Simple project management.


## Use it

* Clone this repository.
* `npm install`
* `npm start`
* Browse to `localhost:3000`

## Models (Resources)

- Students
- Projects
- Tasks
- Development
- Locations
- Teams

## Requests

* Requests headers must specify `Content-Type` as `application/json`.
* Data sent to the API must be sent as JSON.

##### Example Request

POST to `http://localhost:3000/api/v1/project`
HEADER `Content-Type`:`application/json`
BODY 
```json
{
    "name": "First",
    "location": "Here"
}
```

##### Example Response
```json
{
  "updatedAt": "2016-05-20T01:26:27.876Z",
  "createdAt": "2016-05-20T01:26:27.876Z",
  "name": "First",
  "location": "Here",
  "_id": "573e67c3063e660f236e1015",
  "id": "573e67c3063e660f236e1015"
}
```

## REST APIs

```javascript
{ method: 'GET',
  path: '/',
  handler: [Function: bound helloWorld],
  config: { pre: [] } },
{ method: [ 'GET' ],
  path: '/api/v1/default/info',
  handler: [Function: bound info],
  config: { pre: [] } },
{ method: 'POST',
  path: '/api/v1/Project',
  handler: [Function: bound create],
  config: { pre: [Object] } },
{ method: 'GET',
  path: '/api/v1/Project/{id?}',
  handler: [Function: bound find],
  config: { pre: [Object] } },
{ method: [ 'PUT', 'PATCH' ],
  path: '/api/v1/Project/{id?}',
  handler: [Function: bound update],
  config: { pre: [Object] } },
{ method: 'DELETE',
  path: '/api/v1/Project/{id?}',
  handler: [Function: bound destroy],
  config: { pre: [Object] } }
```
