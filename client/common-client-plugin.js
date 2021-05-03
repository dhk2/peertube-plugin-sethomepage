function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:router.navigation-end',
    handler: async ({ path }) => {
      const panel = document.createElement('div');
      panel.setAttribute('class', 'custom-links');
      html="this is a test only a test";
      panel.innerHTML = "this is halloween "+html;
      setInterval(async function(){
        if (document.querySelector('.top-menu .custom-links') === null ) {
          const topMenu = document.querySelector('.top-menu');
          if (topMenu) {
            topMenu.appendChild(panel);
          }
        }
        if (document.querySelector('.menu-wrapper .custom-links') === null ) {
          const mainContent = document.querySelector('.menu-wrapper');
          if (mainContent) {
            panel.classList.add('section')
            mainContent.appendChild(panel)
          }
        }
      }, 1)
    }
  })
}

export {
  register
}
