# Journey
Journey is a user-friendly website that allows users to easily book tickets for upcoming bus routes.
With Journey, you can find direct bus routes to a specific destination without any stops in between, making your travel experience faster and more convenient. This README provides an overview of the project, installation instructions, and usage guidelines to help you get started.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributors](#contributors)
- [License](#license)

## Installation
To run Journey locally on your machine, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/Ausgore/Journey.git
```
2. Install the necessary dependencies:
```bash
# Client
cd Journey/client
npm install
# Server
cd Journey/server
npm install
```

## Usage
Once you have completed the installation steps, you can run the development server for each directories locally.
### Client
The command below will start the web application and provide you with a local URL where you can access the website, usually http://localhost:3000.
```bash
cd Journey/client
npm run dev
```
### Server
Go to `Journey/server/.env` to provide the port for the server to run on before executing the following command:
```bash
cd Journey/server
npm start
```

## Contributors
The Journey website project is the result of contributions from the following individuals:
- 211107B ([@Ausgore](https://github.com/Ausgore))
- 221519Z ([@rhaylenee](https://github.com/rhaylenee))
- 201464N ([@Syeri500](https://github.com/Syeri500))
- 220180T ([@NovalZ01](https://github.com/NovaIZ01))

## License
Journey is licensed under the [Apache License 2.0](https://github.com/Ausgore/Journey/blob/main/LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.
