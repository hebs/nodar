# nodar

> A web app to provide financial analysis for Smartcash Smartnodes. 

## About

This project is just getting off the ground. We are currently laying outu the framework, and defining requirements. Feel free to drop us a line to let us know what features and functionality you would like to see in Nodar.

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## ToDo
- Secure the page

- Create user interface for managing node list
  - Allow the ability to paste a list, rather than having to manually add each node (maybe upload and parse a csv)
  - Buttons: add, update, delete, delete all 
  - Fields: label, hostname, ip address, wallet address
  - Upon saving, have it populate mongo db with entered information, but also have it retrieve historical balance and transaction data from explorer
  
- Create the following views:
  - Main View:
    - Node Label
    - Status 
    - Active Time 
    - Last Seen
    - Last Paid (time)
    - Last Paid (block)
    - Received Transactions (count)
    - Received Transactions (total)
    - Current Node Profit (balance minus 10,000)
    - Current Total Node Balance
  - Charts:
    - Total Received Transactions per node (bar graph)
    - Current Profit per node (bar graph)
    - Average Payouts per hour (line graph)
    
    


## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/nodar; npm install
    ```

3. Start your app

    ```
    npm run watch
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
