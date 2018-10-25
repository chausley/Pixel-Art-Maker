/* @makeGrid adjusts the <tr></tr> and <td></td> attributes in the sizePicker using the 
*inputHeight and inputWidth values and the submit button to activate */
document.getElementById('sizePicker').addEventListener('submit', function makeGrid(event) {
    let columnHeight = document.querySelector('#inputHeight').value;
    let rowLength = document.querySelector('#inputWidth').value;
    let table = document.querySelector('#pixelCanvas');
    
    table.innerHTML = '' /* Clear the table before running the function */
    
    /* Actually builds the grid pulling the inputHeight and inputWidth numbers */
    for (var col = 1; col <= columnHeight; col++) {
        $('table').append('<tr></tr>');
        for (var row = 1; row <= rowLength; row++) {
            $('tr:last').append('<td></td>');
    }
    event.preventDefault(); /* keep the grid here */
}
/* function to fill individual cells with selected color */
$('td').click(function fillCell() {
    cellColor = $('#colorPicker').val();

    /* Will remove color if there is already the style attr attached to the td */
    if ($(this).attr('style')) {
        $(this).removeAttr('style');
    /* Adds the background-color attribute to the td */
    } else {
        $(this).attr('style', 'background-color:' + cellColor);
    }
})
});