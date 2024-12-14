# Rick and Morty App

## URL APP:

http://aws-rick-and-morty-app-website.s3-website-us-east-1.amazonaws.com

#### Consideration:

The app was deployed in an AWS S3 bucket, but a distribution with cloudfront was not implemented, **if you have problems accessing** the app from mobile devices with the first link, use this second link

https://federicoben.github.io/Rick_and_Morty_app/

The **Rick and Morty App** is a web application built using **React**, **Vite**, and **TypeScript**. The app consumes the [Rick and Morty API](https://rickandmortyapi.com/) to display information about characters, episodes, and locations from the Rick and Morty universe.

## Features

- **Technologies used**:

  - React
  - Vite
  - TypeScript
  - Apollo Client and GraphQL to fetch data from the [Rick and Morty API](https://rickandmortyapi.com/)
  - TailwindCSS for styling
  - React Router DOM for routing management
  - Zustand for global state management

- **Design**:

  - An **atomic design** approach is implemented, where components are organized based on modular design principles.
  - **TailwindCSS** was used to quickly create a responsive and attractive design.

  ## Application Screenshots

Here are some views of the application:

## Desktop Design

![App Image](/src/assets/img/preview_desktop_app.png)

## Responsive Design

![App Image](/src/assets/img/preview_responsive_app_filter.png)
![App Image](/src/assets/img/preview_responsive_app_menu.png)
![App Image](/src/assets/img/preview_responsive_app_vie_character.png)

## Setup to Run the Project

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the application locally:**:

   ```bash
   npm run dev
   ```
