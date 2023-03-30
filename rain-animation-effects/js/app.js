(() => {

  const handleRain = () => {
    let amount = 200;
    let body = document.querySelector('body');
    let i = 0;
    while(i < amount) {
      let drop = document.createElement('i');

      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;
      let duration = Math.random() * 5;
      // let content = Math.round(Math.random() * 5);

      // drop.textContent = content;

      drop.style.width = 0.2 + size+'px';
      drop.style.left = posX + 'px';
      drop.style.animationDelay = delay+'s';
      drop.style.animationDuration = 5 + duration+'s';
      body.append(drop);
      i++;
    }
  }

  handleRain();

})()
