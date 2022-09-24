function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
  }
  function fadeOut(){
    setInterval(loader, 8000)
  }
  window.onload=fadeOut
