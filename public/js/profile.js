const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blogposts-name').value.trim();
    const description = document.querySelector('#blogposts-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/blogposts`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blogpost');
      }
    }
  };
  
  document
    .querySelector('.new-blogposts-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blogposts-list')
    .addEventListener('click', delButtonHandler);
  