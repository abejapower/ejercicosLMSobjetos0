const favoriteMovies = [
  'fight club',
  'kill bill',
  'the matrix',
  'the godfather',
  ];
  //console.log(favoritesMovies);
  console.log(favoriteMovies[2])

let movie = {
     title:'fight club',
     director:' David Fincher',
     protagonists:['Edward Norton','Brad Pitt'],
     release:"1999",
   };
   //console.log(movie)
   console.log(movie.protagonists[1])
const person = {
  name: 'nicole',
  age: '36',
  classmates: ['carolaA','caroalaL', 'eli','isa','paola'],
};
console.log(person)
console.log(person.classmates[3])
  
const name = prompt ('¿cual es tu nombre?');

console.log(name);

//COMBINANDO ARRAYS CON OBJECTS

//copiado de lms
const michelle = {
  name: 'Michelle',
  points: 2000,
  isActive: true,
  courses: ['Intro JS', 'JS avanzado', 'JS master']
};

const alexandra = {
  name: 'Alexandra',
  points: 4100,
  isActive: true,
  courses: ['Intro JS', 'Intro UX', 'UX master']
};

const andrea = {
  name: 'Andrea',
  points: 800,
  isActive: false,
  courses: ['Intro JS', 'JS avanzado']
};

const students = [michelle, alexandra, andrea];


  
  //1) estudiantes activas
  for (let i=0; i< students.length;i++){
    if(students[i].isActive){
      console.log(students[i].name);
    }
  }
  //2) sumar los points de las students
 let total = 0;
 for(let i = 0; i < students.length; i++){    
    //console.log(students[i].points); esto era para ver si esta bien //
    total += students[i].points ;
  }console.log(total);
 
 //3) students llevado curso js avanzado
 for (let i=0; i< students.length; i++){
  let studentsCourses= students[i].courses;
  console.log(students[i].courses);
  for(j = 0; j< studentsCourses.length; j++) {
    if(studentsCourses[j] === 'JS avanzado'){
   console.log(students[i].name);
    }
  }
 }
   
 
 
