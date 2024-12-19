# AnimeTrail
Documentation for T3A2-B Coder Academy assignment. 

## Chapters 

- [ R1: Introduction](#introduction)
- [ R2: Dataflow Diagram](#dataflow-diagram)
- [ R3: Application Architecture Diagram](#application-architecture-diagram)
- [ R4: User Stories](#user-stories)
- [R5: Wireframes](#wireframes)
- [R6: Tracking the Tasks](#tracking-the-tasks)

## Introduction 
### Purpose 
This project aims to create a platform where anime enthusiasts can discover new titles, receive personalized recommendations based on specific title searches, and keep track of the most trending anime. 
The app simplifies anime discovery and fosters a connected fan community by allowing users to create and manage custom lists and stay updated on the latest trends and releases in the anime field. It is designed to make anime exploration both engaging and accessible. 
It sets itself apart from platforms like MyAnimeList and AniList for the recommendation by title feature, which is missing in the other two competitors. 

### Features 

- User will be able to : 
    * Create a profile - Set up and personalize a user profile
    * Browse anime with filter by genre.
    * Receive recommendations - Recommendations based on user preferences 
    * Create custom lists - Build and manage personal lists for organizing favourite titles
    * View news and announcements
      
- Admin will be able to: 
    * Curate recommendations - Create curated lists like Top 10 Anime of the Year, Seasonal Anime
    * Broadcast announcements - Post announcements or updates for all users

### Target audience
The app is aimed at anime enthusiasts of all ages, from casual viewers who want to know the latest trending anime, to dedicated fans who wish to manage lists of their favourite titles. Given anime's increasing popularity worldwide, with its themes and outstanding animation, it is set to become an overpowering influence for future generations. 

### Tech Stack 
- **Front End**
  - HTML
  - CSS
  - Javascript
  - ReactJS

- **Back End**
  - Javascript
  - NodeJS
  - ExpressJS
  - MongoDB
  - Mongoose

- **Third Party Services**
  - JikanAPI
 
- **Deployment**
  - Netlify for front-end hosting
  - Render for back-end deployment

## Dataflow Diagram 
The application's Dataflow Diagram (DFD) was made with draw.io in order to provide a graphical representation on how data flows through the application for a better understanding of the latest. 
![Dataflow Diagram](/src/docs/dfd.png)

## Application Architecture Diagram 
Application Architecture Diagram built using draw.io. 
![Application Architecture Diagram](/src/docs/application-arch-diagram.png)

## User Stories 
The user stories for this application were made by following [Atlassian's](https://www.atlassian.com/agile/project-management/user-stories) format. 
The process can also be seen on [T3A2-A User Stories](https://www.notion.so/User-Stories-13f9e6fc48268081a3e4d8e4c1f3caba?pvs=4) in Notion. 

Format: **“As a [persona], I [want to], [so that].”**

From Atlassian's page: 
- "As a [persona]": Who are we building this for? We’re not just after a job title, we’re after the persona of the person. Max. Our team should have a shared understanding of who Max is. We’ve hopefully interviewed plenty of Max’s. We understand how that person works, how they think and what they feel. We have empathy for Max.
- “Wants to”: Here we’re describing their intent — not the features they use. What is it they’re actually trying to achieve? This statement should be implementation free — if you’re describing any part of the UI and not what the user goal is you're missing the point.
- “So that”: how does their immediate desire to do something this fit into their bigger picture? What’s the overall benefit they’re trying to achieve? What is the big problem that needs solving?

For example, user stories might look like:

- As Max, I want to invite my friends, so we can enjoy this service together.
- As Sascha, I want to organize my work, so I can feel more in control.
- As a manager, I want to be able to understand my colleagues progress, so I can better report our sucess and failures.

### Personas
The application has been built with different users' backgrounds and motives in mind. 

| Name | Age | Bio | Need | Purpose |
|:---- | :---| :---|:-----|:------- | 
| Camilla | 25 | Camilla loves anime but she's also picky in what she watches. | Discover anime with specific themes or genres | So she can reduce search time and find shows that satisfy her.|
| Gwen | 27| Gwen is a university student who has been watching anime since she was a kid but can't remember the names of some of her old favourites. | Search by filtering by release date, studio, and genre. | So she can rediscover nostalgic anime from her past|
| Peter | 35 | Peter is an artist who would like to open his own animation studio in Japan. | To access reliable, updated news on the anime and animation industry.| So he can stay informed and inspired as he builds his dream career. |
| Rosanna | 45 | Rosanna has a young daughter who likes watching Sailor Moon on the TV but Rosanna is at work at the time and she has problems in using computers.| Simple navigation and recommendations feature.| So she can share and understand her daughter's love for anime without technical barriers.|
|Johan | 13 | Johan is a middle-school student who struggles to make friends. His classmates always talk about a certain "Chainsaw Man" show they're watching. | Easy access to popular anime titles. | So he can join in conversations with his classmates and make new friends around common interests.|

![Camilla Persona](/src/docs/1.png)
![Gwen Persona](/src/docs/2.png)
![Peter Persona](/src/docs/3.png)
![Rosanna Persona](/src/docs/4.png)
![Johan Persona](/src/docs/5.png)

### Example User Stories

|Name | Story|
|:----|:-----|
|Camilla|As Camilla, I want to filter anime by genre and themes so I can find shows that align with my interests and avoid those I might not enjoy.|
|Gwen| As Gwen, I want to search for anime based on release date so that I can rediscover the shows I watched as a child.|
|Peter| As Peter, I want to see regular updates and news about the anime industry, so that I can stay informed about trends for my career goals.|
|Rosanna| As Rosanna, I want a simple anime recommendation section so that I can connect with my daughter. |
|Johan| As Johan, I want to find popular anime titles, so that I can talk about them with my friends and feel included in conversations.|

![User stories tracking](/src/docs/user-stories.png)
![User stories tracking 2](/src/docs/user-stories2.png)
![User stories tracking 3](/src/docs/user-stories3.png)
![User stories tracking 4](/src/docs/user-stories4.png)


## Wireframes
Wireframes for Desktop, tablet and mobile frames were created using Figma and Canva. 
On each page, a legend can be found explaining various components and their function.

The following wireframes are not the final version of the application. 

### Homepage
![Homepage](/src/docs/wireframe-homepage.png)
### Sign up page
![Sign up page](/src/docs/wireframe-signup.png)
### Login page
![Login page](/src/docs/wireframe-login.png)
### User Dashboard
![User dashboard](/src/docs/wireframe-userdashboard.png)
### Admin Dashboard
![Admin dashboard](/src/docs/wireframe-admindashboard.png)
### Users management page (admin only)
![Manage Users page(only for admin)](/src/docs/wireframe-manageusers.png)
### Profile page
![Profile page](/src/docs/wireframe-profile.png)
### Search anime by title page
![Search anime title](/src/docs/wireframe-searchtitle.png)
### Anime results page
![Anime results](/src/docs/wireframe-animeresults.png)
### Recommendations page
![Recommendations results](/src/docs/wireframe-recommendations.png)
### Announcements page
![Announcements page](/src/docs/wireframe-announcements.png)

## Tracking the tasks 
[Trello Board](https://trello.com/invite/b/673536c7a5b3ccdad32707ea/ATTI050239c69f4df74c90db72906ccf17613B637CFE/t3a2-full-stack-app)

The tasks are tracked using a Kanban method in Trello.com. They are divided by colors: tasks related to the documentation are in purple, deadlines (red) and reminders(orange). The server tasks are in blue, the admin and user model and as well as authorization and authentication features are labelled in yellow. Fetching the data from Jikan API is in pink and finally the user and admin CRUD operations are in green. 

Labeling the tasks by color and focusing on one task at the time was an essential part in developing this project. 

![Trello 1](/src/docs/Trello1.png)
![Trello 2](/src/docs/Trello2.png)
![Trello 3](/src/docs/Trello3.png)
![Trello 4](/src/docs/Trello4.png)
![Trello 5](/src/docs/Trello5.png)
![Trello 6](/src/docs/Trello6.png)
![Trello 7](/src/docs/Trello7.png)
![Trello 8](/src/docs/Trello8.png)
![Trello 9](/src/docs/Trello9.png)
![Trello 10](/src/docs/Trello10.png)
![Trello 11](/src/docs/Trello11.png)
![Trello 12](/src/docs/Trello12.png)
![Trello 13](/src/docs/Trello13.png)
![Trello 14](/src/docs/Trello14.png)
![Trello 15](/src/docs/Trello15.png)
![Trello 16](/src/docs/Trello16.png)
![Trello 17](/src/docs/Trello17.png)
![Trello 18](/src/docs/Trello18.png)
![Trello 19](/src/docs/Trello19.png)
![Trello 20](/src/docs/Trello20.png)
![Trello 21](/src/docs/Trello21.png) 


