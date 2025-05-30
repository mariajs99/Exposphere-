# Exposphere

## [See the App!](https://exposphere.netlify.app/)

![App Logo](/src/assets/icon.png)

## Description

Exposphere is a web platform to discover, rate, create and save your favorite museums across Spain. Designed for culture enthusiasts, it provides an organized, visual, and user-friendly experience for all audiences.

#### [Client Repo here](https://github.com/mariajs99/Exposphere)
#### [Server Repo here](https://github.com/mariajs99/Exposphere-Server.git)

## Technologies, Libraries & APIs used

<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>React</li>
<li>React Router</li>
<li>Axios</li>
<li>Bootstrap</li>
<li>Node.js (Backend)</li>
</ul>



## Backlog Functionalities

<ul>
<li>Museum map view with geolocation</li>
<li>Filters by city, rating, or price</li>
<li>Total accessibility improvements for screen readers and usability</li>
<li>Add spinners to loading screens</li>
<li>Calculate the average score of museums based on the scores given by users in the comments.</li>
<li>Create a counter for comment likes, which calculates how many likes the comment has received in total.</li>
<li>force the completion of all form fields</li>
</ul>

# Client Structure

## User Stories

- **404 - NotFound:** The app shows a custom 404 page when a user navigates to a non-existent route.
- **500 - ServerError:**  The app shows a user-friendly error page when a server error occurs.
- **UnderConstruction:** The app shows a user-friendly error page when a server error occurs.
- **Home:** The user can view a home screen with a brief description of what they can do on the website and includes an image carousel.
- **Explore:** The user can view all museum entries and filter them by category.
- **Events create:** The user can create his or her own museum entry.
- **Events edit:** The user can edit his or her own museum entry and others.
- **Events delete:** The user can delete his or her own museum entry and others.
- **Favorites:** The user can add the museum tickets they like the most to favorites.
- **See details:** The user can see the details of each of the museums.
- **See reviews** The user can see reviews from other users about each of the museums on the website.
- **Events create:** The user can add their own review to the museum entry of their choice.
- **Search bar:** The user can search for a museum by name or city.

## Client Routes

**NOTE -** Use below table to list your frontend routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Behavior                                                      |
| ------------------------- | ----------------| ----------------  |  ------------------------------------------------------------  |
| `/`                       | Home            |                   | Home page                                                     |
| `/explorar`                 | Explore          |  ExploreMuseums, MuseumCards, Sidebar                 | View museums and filters, link to museum details, and create a museum |
| `/ldetalles/:id`                  | MuseumDetails           |  MuseumAddReview, MuseumDescription, MuseumDetails, MuseumReviews                 | View museum details, reviews, and create a review. Add to favorites buttons and links to edit or delete museums.  |
| `/añadirMuseo`                | AddMuseum         |        | Create a new museum, Navigate to homepage after create         |
| `/detalles/:id/editar`             | EditMuseum        |       | Edit or delete an existing museum, navigate to details after editing and to home after deleting.                                     |
| `/aboutus`             | AboutUs       |                   | Description of the website and the creator, personal links                      |
| `/favoritos`       | Favoritos   |           | Displays favorite museums, links to details, and a delete favorites button.                                    |
| `/error`       | ServerError   |           | shows 500 error page, link to home                                    |
| `/construccion`       | UnderConstruction   |           | warns the user of an unfinished page, link to home                                    |
| `*`       | NotFound   |           | shows 404 error page, link to home                                    |
## Other Components

- Navbar
- Footer
  
## Links

### Collaborators

[María Jiménez Sánchez](https://github.com/mariajs99)

### Project

[Repository Link Client](https://github.com/mariajs99/Exposphere.git)

[Repository Link Server](https://github.com/mariajs99/Exposphere-Server.git)

[Deploy Link](https://exposphere.netlify.app)

