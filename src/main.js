let $menu = document.querySelector('#main-menu');
let $navbar = document.querySelector("#main-navbar");
let $menuToggle = document.querySelector('#toggle-navbar');
let $portalMenu = document.querySelector('#portals-submenu');

$menuToggle.addEventListener('click', function() {

    let $icon = $menuToggle.querySelector('i');
    switchIcon($icon, 'fas fa-bars', 'fas fa-times');
    $menu.classList.toggle('active');
});

$portalMenu.addEventListener('click', function() {

    let $icon = $portalMenu.querySelector('i');
    switchIcon($icon, 'fas fa-caret-down', 'fas fa-caret-up');
    $portalMenu.classList.toggle('active');
});

function switchIcon($icon, active, inactive) {

    if ($icon.className == active) $icon.className = inactive;
    else $icon.className = active;
}