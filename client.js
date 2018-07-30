console.log('js');

$(document).ready(readyNow);
let counter = 0;
function readyNow() {
    console.log('Jquery is now working');
    $('.btn').click(appendDiv);
    
}

function appendDiv() {
    
    $('body').append('<div class="generate"><p></p><button class="swap">Swap</button><button class="delete">Delete</button></div>');
    counter++;
    console.log('button was clicked ' + counter + ' time');
    function changeColor() {
        $(this).parent().toggleClass('highlight');
    }
    function removeParent() {
        $(this).parent().remove(); 
    }
    $('.swap').on( 'click', changeColor);
    $('.delete').on( 'click', removeParent);
}
