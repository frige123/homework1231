let value = document.getElementById('value'); // value
let plus = document.getElementById('plus'); //+
let minus = document.getElementById('minus');//-
let multiply = document.getElementById('multiply'); // *
let divide = document.getElementById('divide'); // /
let enter = document.getElementById('enter');
let clear = document.getElementById('clear');
let firstValue;
let secondValue;
let result;

plus.addEventListener('click', () => {
    firstValue = +value.value;
    console.log('firstValue ',firstValue );
    value.value = null;
    console.log('value.value',value.value);
    enter.addEventListener('click', () => {
        secondValue = +value.value;
        console.log('secondValue',secondValue);
        result = firstValue + secondValue;
        value.value = result;
        console.log('result',result);
    });
});

minus.addEventListener('click', () => {
    firstValue = +value.value;
    console.log('firstValue ',firstValue );
    value.value = null;
    console.log('value.value',value.value)
    enter.addEventListener('click', () => {
        secondValue = +value.value;
        console.log('secondValue',secondValue);
        result = firstValue - secondValue;
        value.value = result;
        console.log('result',result);
    })
});

multiply.addEventListener('click', () => {
    firstValue = +value.value;
    console.log('firstValue ',firstValue );
    value.value = null;
    console.log('value.value',value.value)
    enter.addEventListener('click', () => {
        secondValue = +value.value;
        console.log('secondValue',secondValue);
        result = firstValue * secondValue;
        value.value = result;
        console.log('result',result);
    })
});

divide.addEventListener('click', () => {
    firstValue = +value.value;
    console.log('firstValue ',firstValue );
    value.value = null;
    console.log('value.value',value.value)
    enter.addEventListener('click', () => {
        secondValue = +value.value;
        console.log('secondValue',secondValue);
        result = firstValue / secondValue;
        console.log('result', result);
        value.value = result;
    })
});

clear.addEventListener('click', () => {
   return value.value=null
});
    