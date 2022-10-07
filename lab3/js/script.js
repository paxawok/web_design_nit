const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

$(document).ready(function(){
    update_amounts();
    $('.form_control, .price_control').on('keyup keypress blur change', function(e){
        update_amounts();
    });
});

function update_amounts(){
    var sum = 0.0;
    $('#table_c > tbody > tr').each(function(){
        var qty = $(this).find('.form_control').val();
        var price = $(this).find('.price_control').val();
        var amount = (qty*price);
        sum += amount;
        $(this).find('.amount').text('' + amount);
    });
    $('.total').text(sum);
}