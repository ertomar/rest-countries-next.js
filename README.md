# Countries App Application

This is a simple application using Nextjs and typescript that allows users to log in and view a list of Countries and check their details.

## Demo

A demo of the application can be found here: [SandBox](https://codesandbox.io/p/github/ertomar/rest-countries-next.js/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522vertical%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhst5dtg000a3v64ezcpt206%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhst5dtg000c3v64ncw07wq3%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clhst5dtg000a3v64ezcpt206%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clhst5dtg00093v64fxd48v57%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clhst5dtg000a3v64ezcpt206%2522%252C%2522activeTabId%2522%253A%2522clhst5dtg00093v64fxd48v57%2522%257D%252C%2522clhst5dtg000c3v64ncw07wq3%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clhst5dtg000b3v64al6kunqq%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%255D%252C%2522id%2522%253A%2522clhst5dtg000c3v64ncw07wq3%2522%252C%2522activeTabId%2522%253A%2522clhst5dtg000b3v64al6kunqq%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Afalse%252C%2522sidebarPanelSize%2522%253A0%257D)

## Installation

To install the application, follow these steps:

### Yarn

1. Clone the repository to your local machine
2. Navigate to the root directory of the project in your terminal
3. Run `yarn install` to install the required dependencies
4. Run `yarn dev` to start the development server

## Usage

Once the application is installed and running, you can access it by opening your web browser and navigating to http://localhost:3000. From there, you will be able to:

- Check the list of countries
- Check the details of a country by clicking on the country card

## Testing

This application includes unit and E2E tests. To run the tests, simply run `yarn test` and `yarn cypress` in your terminal.

## Improvements

With more time and resources, some possible improvements to this application could include:

- Create a library for the shared components between App modules in a separate package. This would allow for easy reuse of components in other projects and reduce code duplication.
- Provide a design system with design tokens and variants to match the same tokens in the UI design(Figma, adobeXd, etc).
- Create a library for the shared logic between App modules in a separate package.
- Create environment variables files with different environments(development, staging and production).
- Use GitHub Actions for continuous integration and deployment. This would allow for automated testing, building, and deployment of the application in a streamlined and efficient manner.
- Add more linter and formatter rules to the project to ensure code consistency and quality.
- Add more unit and E2E tests to ensure the application is working as expected.
- Add more documentation to the project to make it easier for other developers to understand and contribute to the project.
- Add a Dockerfile to the project to make it easier to deploy the application to different environments.
- Paginate home page countries list to reduce home page bundle size and provide better user experience. 
