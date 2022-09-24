function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
  }
  function fadeOut(){
    setInterval(loader, 7000)
  }
  window.onload=fadeOut
