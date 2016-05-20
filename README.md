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

## REST APIs

```javascript
[ { method: '*',
    path: '/api/v1/view/helloWorld',
    handler: [Function: bound helloWorld],
    config: { pre: [] } },
  { method: 'POST',
    path: '/api/v1/{model}',
    handler: [Function: bound create],
    config: { pre: [Object] } },
  { method: 'GET',
    path: '/api/v1/{model}/{id?}',
    handler: [Function: bound find],
    config: { pre: [Object] } },
  { method: [ 'PUT', 'PATCH' ],
    path: '/api/v1/{model}/{id?}',
    handler: [Function: bound update],
    config: { pre: [Object] } },
  { method: 'DELETE',
    path: '/api/v1/{model}/{id?}',
    handler: [Function: bound destroy],
    config: { pre: [Object] } },
  { method: 'POST',
    path: '/api/v1/{parentModel}/{parentId}/{childAttribute}',
    handler: [Function: bound createAssociation],
    config: { pre: [Object] } },
  { method: 'GET',
    path: '/api/v1/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: [Function: bound findAssociation],
    config: { pre: [Object] } },
  { method: 'PUT',
    path: '/api/v1/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: [Function: bound updateAssociation],
    config: { pre: [Object] } },
  { method: 'DELETE',
    path: '/api/v1/{parentModel}/{parentId}/{childAttribute}/{childId?}',
    handler: [Function: bound destroyAssociation],
    config: { pre: [Object] } },
  { method: 'GET',
    path: '/',
    handler: [Function: bound helloWorld],
    config: { pre: [] } },
  { method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: [Function: bound info],
    config: { pre: [] } } ]
```
