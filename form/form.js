const form = document.getElementById("form");
const name = document.getElementById("name");
const date = document.getElementById("birthday");
const man = document.getElementById("man")
const woman = document.getElementById("woman")
const volume = document.getElementById("volume")
const bt = document.querySelector('.btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    name: name.value,
    date: date.value,  
    man: man.checked,
    woman: woman.checked,
    volume: volume.value
  };fetch('http://localhost:3000/sign', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, 
   body: JSON.stringify(formData)
  })
  .then(response => {
    console.log(response.status);
  })

});
