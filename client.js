console.log('js');

$(document).ready(readyNow);
let counter = 1; //global counter

function readyNow() {
    console.log('JQ');
    $('.btn').on('click', appendDiv); // when button is clicked run appendDiv function
    $('#container').on('click', '.swap', changeColor); // look for class container when swap is clicked run changeColor function
    $('#container').on('click', '.delete', removeParent); // look for class container when delete is clicked run removeParent function

}

function appendDiv() {

    $('#container').append('<div class="generate">' + counter + '<p></p><button class="swap">Swap</button><button class="delete">Delete</button></div>');
    counter++;
    
    //look for class container and append div, paragraph, and two buttons
    //increment variable counter


}
function changeColor() {
    $(this).parent().toggleClass('highlight');
    //toggle this parent's class based on the highlight class's styling
}
function removeParent() {   
    $(this).parent().remove();
    // remove this parent's element and everything within it
}
