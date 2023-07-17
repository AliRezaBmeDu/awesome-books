const showSection = (sectionName) => {
  const listDiv = document.querySelector('.list');
  const formDiv = document.getElementById('form');
  const contactDiv = document.querySelector('.contact');

  listDiv.classList.add('hide-seek');
  formDiv.classList.add('hide-seek');
  contactDiv.classList.add('hide-seek');

  switch (sectionName) {
    case 'list':
      listDiv.classList.remove('hide-seek');
      break;
    case 'form':
      formDiv.classList.remove('hide-seek');
      break;
    case 'contact':
      contactDiv.classList.remove('hide-seek');
      break;
    default:
      break;
  }
};

export default showSection;