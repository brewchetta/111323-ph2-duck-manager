# Phase 2 Practice Code Challenge - Duck Manager 2022 - React Edition

To get started, fork and clone the repository and run `npm install` followed by `npm run server`. In a seperate terminal, run `npm start`.

Endpoints: You have access to all the ducks at `http://localhost:4001/ducks`.

## Deliverable One

Fetch all the ducks from the db.json and use `.map` in order to show a `DuckListCard` for each of them in the `DuckList`. State has already been built for you for this one...

## Deliverable Two

When a `DuckListCard` is clicked, it becomes the `featuredDuck` in state. The `featuredDuck` details are shown in the `DuckDisplay` component.

## Deliverable Three

When the button that says `Open Duck Form` is clicked, it will toggle whether the DuckForm is displayed or not. Use best practices with conditional rendering to show it. Additionally, the button should either read `Open Duck Form` or `Close Duck Form` depending on whether the form is already opened or closed.

## Deliverable Four

In the duck detail, the number of likes should increment whenever the likes button is clicked.

## Deliverable Five

When the number of likes increments, send a PATCH request to edit the duck in the backend.

Example request:

```js
fetch(`http://localhost:4001/ducks/2`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({likes: 4})
})
```

## Deliverable Six

Make the `DuckForm` a controlled form. When submitted, a new duck gets posted to the `db.json`.

Example request:

```js
fetch(`http://localhost:4001/ducks`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({name: "Sir Quackington", image_url: "http://ducks.com/duckington.jpg", likes: 0})
})
```

Assume ducks start with 0 likes.
