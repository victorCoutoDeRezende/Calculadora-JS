//-------------------- IMPORTS --------------------
import calculate from "./calculate.js"
import copyToClipboard from "./copy.js"
import switchTheme from "./switchTheme.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandlers.js"
//--------------------------------------------------

document.querySelectorAll('.charKey').forEach((charkeyBtn)=>{
    charkeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('clear').addEventListener('click', handleClearButton)
document.getElementById('input').addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', switchTheme)