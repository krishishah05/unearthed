Week 1 Lab: UnEarthed, Part 1 | Week 2 Lab: UnEarthed, Part 2 | Week 3 Lab: UnEarthed, Part 3 | Week 5 Lab: UnEarthed, Part 4

Submitted by: Krishi Shah

## Lab Description

UnEarthed is a gift discovery web app built with React, Express, and PostgreSQL. In this fourth and final iteration, full CRUD support was added — users can now create, update, and delete gifts in addition to browsing and viewing them.

## Required Features

The following **required** features are completed:

- [x] The web app uses React to display data from the API.
- [x] The web app is connected to a PostgreSQL database, with an appropriately structured gifts table.
- [x] The web app displays the title and logo of UnEarthed.
- [x] The web app displays a list of gifts that have been submitted, including at least the name, price point, audience, and image.
- [x] The user can click on each item in the list to see a detail view of it, including all database fields.
- [x] The user can edit or delete an item from the detail page.
- [x] Each gift detail page has its own unique URL.
- [x] The user can create a new item to add to UnEarthed, which is then displayed on the home page upon creation.

## Stretch Features

The following **stretch** features are implemented:

- [ ] The user can edit or delete a gift from the home page.

## Notes

- Added `createGift`, `updateGift`, and `deleteGift` controller functions with corresponding POST, PATCH, and DELETE routes.
- Added `express.json()` middleware to parse JSON request bodies.
- Extracted card rendering into a `Card.jsx` component with a link to the edit page.
- Created `CreateGift.jsx` and `EditGift.jsx` pages using controlled form inputs and `fetch` with appropriate HTTP methods.

## License

Copyright 2026 Krishi Shah

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
