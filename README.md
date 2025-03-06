# GameNest

## About

GameNest is a React-based learning project. The goal of this project is to create a platform where users can view games and their descriptions. Users will be able to connect their Steam accounts to see all their games displayed in an organized manner. Additionally, the project integrates with the RAWG API to search and browse games based on various categories. Future plans include integrating resources like SteamDB and GG.deals to view price history for games.

## Features

- View detailed descriptions of games.
- Interactive UI/UX elements.
- Connect to Steam account to display owned games.
- Search and browse games using the RAWG API.
- Future integration with SteamDB and GG.deals for price history.

## Media

<!-- Space for video and images to be showcased on the front page -->

# Technichal Details

## Components

- **ColorModeSwitch**: Toggle between light and dark modes.
- **CriticScore**: Display the critic score of a game.
- **DefinitionItem**: Display a term and its definition.
- **Emoji**: Display an emoji based on the game's rating.
- **ExpandableText**: Display expandable text for game descriptions.
- **GameAttributes**: Display various attributes of a game.
- **GameCard**: Display a card with game details.
- **GameCardContainer**: Container for game cards with hover effects.
- **GameCardSkeleton**: Skeleton loader for game cards.
- **GameGrid**: Display a grid of game cards.
- **GameHeading**: Display the heading for the game section.
- **GameScreenshots**: Display screenshots of a game.
- **GameTrailer**: Display the trailer of a game.
- **GenreList**: Display a list of game genres.
- **NavBar**: Navigation bar with logo, search input, and color mode switch.
- **PlatformIconList**: Display icons for game platforms.
- **PlatformSelector**: Dropdown to select game platforms.
- **SearchInput**: Input field to search for games.
- **SortSelector**: Dropdown to select sorting order for games.

## Hooks

- **useGame**: Fetch a single game by slug.
- **useGames**: Fetch a list of games with infinite scrolling.
- **useGenre**: Fetch a single genre by ID.
- **useGenres**: Fetch a list of genres.
- **usePlatform**: Fetch a single platform by ID.
- **usePlatforms**: Fetch a list of platforms.
- **useScreenshots**: Fetch screenshots for a game.
- **useTrailers**: Fetch trailers for a game.

## Services

- **api-client**: Axios-based API client for making HTTP requests.
- **image-url**: Utility to get cropped image URLs.

## How to Run

1. Ensure you have Node.js installed.
2. Clone the repository.
3. Navigate to the project directory.
4. Get a RAWG API key at https://rawg.io/apidocs. and Add the API key to **api-client.ts**
5. Run `npm install` to install dependencies.
6. Run `npm run dev` to start the development server.

## Future Plans

- Integrate with SteamDB and GG.deals to view price history for games.
- Add user authentication and profiles.
- Enhance the UI/UX with more interactive elements.
