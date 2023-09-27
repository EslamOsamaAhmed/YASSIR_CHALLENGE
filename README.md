<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project is a live tracking tool to be able to track the pollution of each country or through the given points on GPS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://www.iqair.com/fr/dashboard/api]([https://www.iqair.com/fr/dashboard/api](https://www.iqair.com/fr/dashboard/api))
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env` File
   ```js
   KEY = 'ENTER YOUR API KEY';
   ```
5. Run your Application
   ```js
   npm start
   ```
6. Cron Job is running in a separate command to not make all things in one project and to have a separation concept, To run Cron Schedule
   ```js
   node cron.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Project Structure -->
## Project Structure

- api_routes
  - routes.js
    
- controllers
  - postController.js
    
- helpers
  - apiResponse.js
  - queryParamsConverter.js
    
- middlewares
  - paramsValidation.js
    
- models
  - airQuality.js
  - logs.js
    
- service
  - integration.js
    
- validators
  - validationSchema.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Eslam Osama - eslamosama203@gmai.com

Project Link: [https://github.com/EslamOsamaAhmed/YASSIR_CHALLENGE](https://github.com/EslamOsamaAhmed/YASSIR_CHALLENGE)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
