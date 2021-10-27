"use strict";

const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(''); //clear

    makeGrid(height, width);
    clickCellEvent();
});

function makeGrid(height, width) {
  let i = 0;
  let j = 0;
    while(i < height) {
        $tableElement.append('<tr></tr>');
        i += 1
    };

    while(j < width) {
        $('tr').append('<td></td>');
        j += 1
    };
};

function clickCellEvent() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};

