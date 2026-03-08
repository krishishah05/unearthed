Week 1 Lab: UnEarthed, Part 1 | Week 2 Lab: UnEarthed, Part 2 | Week 3 Lab: UnEarthed, Part 3

Submitted by: Krishi Shah

## Lab Description

UnEarthed is a gift discovery web app built with React, Express, and PostgreSQL. In this third iteration, the app was migrated from vanilla JavaScript to a React frontend that communicates with a Node/Express backend API using `useEffect`, `async/await`, and React Router.

## Required Features

The following **required** features are completed:

- [x] The web app uses React to display data from the API.
- [x] The web app is connected to a PostgreSQL database with an appropriately structured gifts table.
- [x] The web app displays the title and logo of UnEarthed.
- [x] The web app displays a list of gifts that have been submitted, including at least the name, price point, audience, and image.
- [x] The user can click on each item in the list to see a detail view of it, including all database fields.
- [x] Each gift detail page has its own unique URL.

## Stretch Features

The following **stretch** features are implemented:

- [ ] Users can search for a specific gift.
- [ ] Users can filter gifts by one or more feature (such as audience or price point).

## Notes

- Used `cors` middleware to allow cross-origin requests between the React frontend (Vite dev server) and the Express backend.
- Replaced static HTML/JS client with a React app using React Router for client-side routing.
- Backend routes updated to return JSON responses consumed by the React frontend via `fetch`.

## License

Copyright 2026 Krishi Shah

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
