console.log('js');

$(document).ready(readyNow);
let counter = 1;

function readyNow() {
    console.log('JQ');
    $('.btn').click(appendDiv);
    $('#container').on('click', '.swap', changeColor);
    $('#container').on('click', '.delete', removeParent);

}

function appendDiv() {

    $('#container').append('<div class="generate">' + counter + '<p></p><button class="swap">Swap</button><button class="delete">Delete</button></div>');
    counter++;
    



}
function changeColor() {
    $(this).parent().toggleClass('highlight');
}
function removeParent() {   
    $(this).parent().remove();
}