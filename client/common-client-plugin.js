function register ({ registerHook, peertubeHelpers }) {
  registerHook({
    target: 'action:router.navigation-end',
    handler: async ({ path }) => {
      const c = await peertubeHelpers.getSettings('custom_links_markdown')
      const panel = document.createElement('div');
      panel.setAttribute('class', 'custom-links');
      html="this is a test only a test";
      panel.innerHTML = "this is halloween "+html;
      setInterval(async function(){
        if (document.querySelector('.top-menu .custom-links') === null && c['custom_links_markdown']) {
          const topMenu = document.querySelector('.top-menu');
          if (topMenu) {
            topMenu.appendChild(panel);
          }
        }
        if (document.querySelector('.menu-wrapper .custom-links') === null && c['custom_links_markdown']) {
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
