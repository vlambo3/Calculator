## Preview

You can view the calculator in action [here](https://calculator-vlambo3s-projects.vercel.app/).

## Main Functions

### `add(valueReceived)`

This function is responsible for appending the provided value to the calculator screen. It takes a parameter `valueReceived`, representing the value to be appendede. It utilizes `document.getElementById('screen')` to retrieve the screen element by its identifier and then updates the `value` field by concatenating the new value.

    function add(valueReceived) {
        document.getElementById('screen').value += value;
    }

### `calculate()`

The `calculate()` funciont is executed when the equal (=) button is pressed on the calculator. First, it retrieves the current value on the screen using `document.getElementById('screen').value`. Then, it utilizes the `eval()` function to evaluate the mathematical expression represented by the screen value. The result is stored in the `result` variable. Finally, the screen value is updated with the calculated result.

    function calcular() {
        const screenValue = document.getElementById('screen').value;
        const result = eval(screenValue);
        document.getElementById('screen').value = result;
    }

It´s important to note that the use of `eval()` can pose security risks if users are allowed to iput arbitrary code. In this case, we assume that the code will only be excecuted in a secure environment.

### `deleteScreen()`

The `deleteScreen()` is used to erase the content of the calculator screen. It simply assigns an empty string to the `value` field of the screen element.

    function deleteScreen() {
        document.getElementById('screen').value = '';
    }

## Integration with HTML and CSS

To utilize these functions, ensure you have an HTML element with the id "screen" representing the calculator display. You can find the corresponding HTML and CSS code in the files provided in the repository.
