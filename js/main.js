const form =  document.getElementById('formReserva');

const year = new Date();
document.getElementById('year').innerText = year.getFullYear();

function Show_menu(){
    let boton = document.getElementById('boton_show');
    let nav = document.getElementsByClassName('nav_index');

    nav[0].classList.toggle('active');

    if (nav[0].classList.contains('open')){
        boton.innerText('x');
    }else{
        boton.innerText('Menu')
    }
}


document.querySelectorAll('.form-group').forEach(g => {
    const el = g.querySelector('input, select, textarea');
    if (!el) return;
    const upd = () => {
        g.classList.toggle('active', document.activeElement === el);
        g.classList.toggle('filled', !!el.value);
    };
    el.addEventListener('focus', upd);
    el.addEventListener('blur',  upd);
    el.addEventListener('input', upd);
    el.addEventListener('change', upd);
    });
