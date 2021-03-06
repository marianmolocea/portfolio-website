import kodflix from '../../images/project-images/kodflix.png'
import beachResort from '../../images/project-images/beachResort.png'
import forkify from '../../images/project-images/forkify.png'
import kodfit from '../../images/project-images/kodfit.png'

const projectsData = [
  {
    img: kodflix,
    title: 'Kodflix',
    stack: ['JavaScript', 'React', 'CSS', 'Heroku', 'Node.JS'],
    description: 'Kodflix is a Netflix based web app using React JS, JavaScript, CSS3 and Node JS, MongoDB on the backend and deploy to Heroku. This project was one of an application built as part of the Kodiri Bootcamp. I built this project from scratch following the Bootcamp requirements. Some task ware individuals but other required pair programming. This allowed me to communicate efficiently with my team to solve the problems encountered.',
    liveUrl: 'https://kodflix-ian.herokuapp.com/',
    gitUrl: 'https://github.com/marianmolocea/kodflix',
  },
  {
    img: beachResort,
    title: 'Beach Resort',
    stack: ['JavaScript', 'React', 'CSS', 'Heroku', 'Node.JS'],
    description: 'This project is built as part of an online course with React Js, JavaScript and CSS. The application wants to simulate a resort booking website where the users can filter the rooms they want.',
    liveUrl: 'https://resort-react-app-mm.netlify.com/',
    gitUrl: 'https://github.com/marianmolocea/resort-react-app',
  },
  {
    img: kodfit,
    title: 'Kodfit',
    stack: ['JavaScript', 'React', 'CSS',],
    description: 'Kodfit is a fitness application built alongside a team which helps the user to train at home. As part of Kodiri Bootcamp, we had to build a team application in just 2 and a half weeks. We built this application having in mind the mobile-first approach. As part of the team, I implemented couple of functionalities including the google map together with the nearby functionality which shows on the map the nearby gyms or personal trainers. The app integrates the Google Maps API, Google Login. The project is built using React JS, JavaScript and CSS.',
    liveUrl: 'https://kodfit.now.sh/',
    gitUrl: 'https://github.com/kodiri/kodfit',
  },
  {
    img: forkify,
    title: 'Forkify',
    stack: ['JavaScript', 'HTML', 'CSS'],
    description: 'Forkify is an application built with HTML, CSS and JavaScript. This project is built as part of an online course and utilise the API and the local storage of the browser. The user can use this application to search for the recipe they want and add the ingredients to the shopping list. ',
    liveUrl: 'https://forkify-recipe-js-app-mm.netlify.com/',
    gitUrl: 'https://github.com/marianmolocea/Forkify-JS-Recipe-App',
  }
];

export default projectsData;