const clickEvent = "click"

const puffer = document.querySelector('#puffer')
puffer.addEventListener(clickEvent, () => {
    const pufferPanel = new WinBox({
        title: "Game Server",
        url: "https://panel.ferretbusiness.cyou/"
    })
})

const about = document.querySelector('#about')
about.addEventListener(clickEvent, () => {
    const aboutBox = new WinBox({
        title: 'About',
        url: "pages/about.html"
    })
})

const contact = document.querySelector('#contact')
contact.addEventListener(clickEvent, () => {
    const contactBox = new WinBox("Contact", {
        title: 'Contact',
        url: "pages/contact.html"
    })
})

const github = document.querySelector('#github')
github.addEventListener(clickEvent, () => {
    const githubBox = new WinBox("Repositories", {
        title: 'Projects',
        url: "pages/repositories.html"
    })
})