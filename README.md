# MyReads Project

This is assessment project for Udacity's React Fundamentals course. The goal of this app is for user to have a Bookcase with 3 shelves:
* Currently Reading
* Want to Read
* Read
 User will be able to place the book they are reading in the "Currently Reading" shelf, the book that they will read, they can place tehm in the "Want to read" shelf. and the books that they already read they cna place them in the "Read" shelf. If they want to remove a book, they can do so, by setting it to "None". User can also add a book, by searching it when pressing the "Add" buuton, from the bottom right corner.

You can find a sample of the working code [here](https://myreads.novasyon.net/): [myreads.novasyon.net/](https://myreads.novasyon.net/).

## To Run The Code

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What is included
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Book.js # To render a single book in the bookcase or in the search result
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookTable.js # To render a bookcase
    ├── BookTableRow.js # To render a shelf in the book case
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Searchbar.js #To show the search component
```

## Backend Server

To simplify your development process, a backend server is provided to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## TO DO
Adding a Switch to handle 404 pages lin in [Handling 404 pages (catch all routes) with React Router v4](https://tylermcginnis.com/react-router-handling-404-pages/)
I would like to add drap an drop functionality to this app. Any idea? 

## Contributing

If you would like to Contribute, imporove or help this project, please contact me at apps at novasyon.net.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
