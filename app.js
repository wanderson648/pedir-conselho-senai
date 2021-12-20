
const btnButtonGoat = document.querySelector('.conselho-button')

const getGoatUrl = ()=> {
  const getGoat = fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())

  const showGoat = document.getElementById('mostrar-conselho')

  getGoat
    .then(({ slip }) => {
      showGoat.innerHTML = `<p>${slip.advice}</p>` 
  })
}



btnButtonGoat.addEventListener('click', ()=> {
  getGoatUrl()
})





