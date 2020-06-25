# MVP-Project


## Setup

- Create necessary files in repository

### Dependencies

- Run `yarn` and `yarn start` for backend


### Database Prep

- Access the MySQL interface  by running `mysql -u root -p`
- Create a new database called winepage: `create database `
- Add a `.env` file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=winepage
  DB_PASS=YOURPASSWORD
```

- Run `yarn run migrate` to create a table called 'winepage' in the database.

- In MySQL console,  run `use winepage;` and then `describe winepage;` to see the structure of the winepage table.

### Development

Express server on port 5000

- `cd client` and run `yarb start` to start client server in development mode with hot reloading in port 3000.

## Basic Requirements

Create a webpage with the following functionality:

- [ ] A list of wine regions.
- [ ] A list of  the wines.
- [ ] Create a host and a client page.
- [ ] A form to add new wine regions and new wines in the host pasge. Wine regions: input for region name, description, image separately. Wines: input for wine name, description, price, image separately. 
- [ ] In the host page after clicking a button in the form, the new region / wine should be added to the database and displayed on the page.
- [ ] In the host page each region / wine can be deleted with a delete button. After clicking on this button, region / wine  should be deleted from the database and the updated list of region / wine  shown on the page.
- [ ] In the client page by cicking the wine region, a panel with the wines should appear. By clicking a wine, the details should appear. The info to display this should be obtained from a fetch request to `/wine/:id`
- [ ] Style the app. To load CSS and Bootstrap in the index.html file.
- [ ] Finish the routes in the API server (`/routes/wineregions.js`  `/routes/wines.js`).
- [ ] Finish the front end (`/client/src/`). 


## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._

# MVP_wine
