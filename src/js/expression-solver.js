const btnRemove = document.querySelector('.remove-elements')

const getInputsAmount = () => document.querySelectorAll('.input-num')
const getSelectsAmount = () => document.querySelectorAll('.math-op')

const changeAttribute = () => getInputsAmount() >= 2 ? false : true
btnRemove.disabled = changeAttribute()