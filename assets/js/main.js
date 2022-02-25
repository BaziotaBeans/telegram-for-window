const app_container = document.querySelector('.app');
const app_content = document.querySelector('.app-content');
const sidebar = document.querySelector('.app-content__left');
const app_content_right_container = document.querySelector('.app-content__right--container');
const wrapper_input_panel = document.querySelector('.wrapper-input-panel');

const me = document.querySelector('.me');
const open = document.querySelector('.open');

let isActiveMaximized = false;

const menu_controller = {
    btn_minimaze_window: document.getElementById('data-minimaze'),
    btn_maximize_window: document.getElementById('data-maximize'),
    btn_close_window: document.getElementById('data-close')
};


function minimize_funct() {
    document.body.classList.add('minimized');
    sidebar.classList.add('hide');
    app_content.classList.add('resize-app');
    app_content_right_container.classList.add('ajust');
    wrapper_input_panel.classList.add('ajust');
}


function maximize_func() {
    document.body.classList.remove('minimized');
    sidebar.classList.remove('hide');
    app_content.classList.remove('resize-app');
    app_content_right_container.classList.remove('ajust');
    wrapper_input_panel.classList.remove('ajust');
}

function validate_funct(){
    console.log(isActiveMaximized)
    isActiveMaximized ? maximize_func() : minimize_funct();
    isActiveMaximized = !isActiveMaximized;
}


function closeWindow() {
    app_container.style.display = 'none';
    me.classList.remove('hide');
    open.classList.remove('hide');
}


function reloadPage(){
    location.reload();
}

menu_controller.btn_minimaze_window.addEventListener('click', minimize_funct);

menu_controller.btn_maximize_window.addEventListener('click', maximize_func);

menu_controller.btn_close_window.addEventListener('click', closeWindow);

open.addEventListener('click', reloadPage);