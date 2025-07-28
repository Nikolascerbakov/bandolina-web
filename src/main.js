import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Select all dropdown toggles
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle')
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const dropdownMenu = toggle.nextElementSibling

      if(dropdownMenu.classList.contains('hidden')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.add('hidden')
        })

        dropdownMenu.classList.remove('hidden')
      } else {
        dropdownMenu.classList.add('hidden')
      }
    })
  })

  // mobile menu toggle

  const mobileMenuButton = document.querySelector('.mobile-menu-button')
  const mobileMenu = document.querySelector('.nav-div__navigation')

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })

})

