window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const main_context = document.querySelector('.main-context')
  const animatedText = document.querySelector('.text');


  // Make sure the loading screen stays visible for at least 2 seconds
  setTimeout(() => {
    loadingScreen.style.display = 'none'; // Hide the loading screen after the delay
    document.body.style.backgroundImage = "";
    main_context.style.display = 'block';
    animatedText.classList.add('animation-text')
    animatedText.addEventListener('animationend', (event) => {
      if (event.animationName === 'typing') {
        // Replace the animation-text class with neon-text
        animatedText.classList.remove('animation-text');
        animatedText.classList.add('neon-text');
      }
    });
  }, 3000); // Adjust this delay to your preference (e.g., 3 seconds)

  main_context.style.display = 'none';
  document.body.style.backgroundImage = "url('../src/images/robot.png')";



});
