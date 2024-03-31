# React Weather Dashboard

## Overview

This React application provides a dynamic weather dashboard, allowing users to explore weather conditions in various cities. Utilizing the OpenWeatherMap API, it features a favorites system, recent searches, and detailed weather information including temperature, humidity, wind speed, and more. Built with React, Redux, and React Bootstrap, it offers a responsive and user-friendly interface.

## Features

- **Favorites Management:** Users can add or remove cities to/from a favorites list for quick access.
- **Recent Searches:** Displays a list of recently searched cities.
- **Weather Details:** Shows detailed current weather conditions, including temperature, wind speed, humidity, and an icon representation of the weather.
- **Navigation and Layout:** Utilizes React Router for navigation and React Bootstrap for a responsive layout.

## Setup

### Prerequisites

- Node.js and npm installed
- An API key from OpenWeatherMap

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies with npm:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of your project and add your OpenWeatherMap API key:

   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

4. Start the application:

   ```bash
   npm start
   ```

   This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `components/`: Contains reusable UI components like Header, CardComponent, etc.
- `routes/`: Defines the application routes and their corresponding components.
- `store/`: Contains Redux setup files, actions, and reducers for managing application state.
- `utils/`: Utility functions for processing data.
- `assets/`: Static assets like weather icons.
- `ui/`: Contains reusable navbar


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes or improvements.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

---

Feel free to adjust the content to match your project's specific details or requirements further!
![Screenshot 2024-03-31 145905](https://github.com/jameswhitaker007/weather-react-app/assets/138829204/5f5a8d96-ee6c-4010-ad78-3f8e80656f54)
![Screenshot 2024-03-31 150127](https://github.com/jameswhitaker007/weather-react-app/assets/138829204/5643b3f3-9b3b-4f3a-855f-c263990b8e27)
