# My Social App

A modern social media application built with Angular that allows users to connect, share posts, and interact with others.

## Features

- User Authentication
  - Login functionality
  - User registration
- Post Management
  - Create and view posts
  - Interactive post feed
- Modern UI/UX design
- Responsive layout

## Prerequisites

- Node.js (v14 or higher)
- Angular CLI (v14.2.2)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd my-social-app
```

2. Install dependencies:
```bash
npm install
```

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Structure

```
src/app/
├── login/          # Login component and related files
├── register/       # Registration component and related files
├── post/          # Post management components
├── model/         # Data models and interfaces
├── services/      # Angular services
└── route/         # Route guards and resolvers
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
