let repos;

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

fetch('https://api.github.com/comav/repos')
    .then((u) => {
        return u.json();
    })
    .then((json) => {
        repos = json;
    })