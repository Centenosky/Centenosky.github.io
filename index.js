const $aboutButton = document.getElementById('aboutButton');
const $portfolioButton = document.getElementById('portfolioButton');
const $hide = document.getElementById('hide');

const $project1Container = document.getElementById('project-1');
const $project2Container = document.getElementById('project-2');
const $project3Container = document.getElementById('project-3');
const $project4Container = document.getElementById('project-4');

// const $home = document.querySelector('#home');
// const $about = document.querySelector('#about');
// const $portfolio = document.querySelector('#document');
// const $contact = document.querySelector('#contact');


$aboutButton.addEventListener('click', () => {
  $hide.classList.toggle('fadeIn');
  if ($aboutButton.value == 'Ver más') {
    $aboutButton.setAttribute('value', 'Ver menos')
  } else {
    $aboutButton.setAttribute('value', 'Ver más')
  }
});
$portfolioButton.addEventListener('click', () => {
  $project3Container.classList.toggle('fadeIn');
  $project4Container.classList.toggle('fadeIn');
  if ($portfolioButton.value == 'Ver más') {
    $portfolioButton.setAttribute('value', 'Ver menos')
  } else {
    $portfolioButton.setAttribute('value', 'Ver más')
  }
});

function projectTemplate (project) {
  return (
    `
    <h3 class="project-title">${project.title}</h3>
    <figure class="project-image">
      <img src="${project.image}" alt="">
      <div class="overlay">
        <a href="">Ver el código</a>
        <a href="">Ver la página</a>
      </div>
    </figure>
    <div class="project-details">
      <p>${project.details}</p>
    </div>
    `
  )
}

const project1 = {
  title: 'Mi blog',
  image: 'images/projects/mi-blog.png',
  details: 'Lorem ipsum',
}
const project2 = {
  title: 'Platzi Conf Hawaii',
  image: 'images/projects/platzi-conf.png',
  details: 'Lorem ipsum',
}
const project3 = {
  title: 'Clon de Google',
  image: 'images/projects/clon-google.png',
  details: 'Lorem ipsum',
}
const project4 = {
  title: 'Clon de Facebook',
  image: 'images/projects/clon-facebook.png',
  details: 'Lorem ipsum',
}
const firstProject = projectTemplate(project1);
const secondProject = projectTemplate(project2);
const thirdProject = projectTemplate(project3);
const fourthProject = projectTemplate(project4);

$project1Container.innerHTML = firstProject;
$project2Container.innerHTML = secondProject;
$project3Container.innerHTML = thirdProject;
$project4Container.innerHTML = fourthProject;
  