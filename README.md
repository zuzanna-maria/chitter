Chitter
=================

- This app allows you to make posts (cheeps) and see posts made by others.
- Anyone can view posts made by others, but in order to post one yourself, you need to be signed in.
- You can sign up for an account using an email, name, username and password.


To install and run this app, clone this repository locally and run the following commands:
-------

```
npm install
postgres -D /usr/local/var/postgres (this command starts the postgres server on Mac if it was installed with Homebrew - if your OS is different, please refer to commands specific to it)
npx sequelize-cli db:migrate
node app.js

```


To run tests:
-------

```
NODE_ENV=test npx sequelize-cli db:migrate
NODE_ENV=test npx cypress open

```
