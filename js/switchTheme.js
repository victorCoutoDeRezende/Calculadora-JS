export default function switchTheme(){
    const main = document.querySelector('main')
    const root = document.querySelector(':root')

    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#EEEEEE')
        root.style.setProperty('--border-color', '#393E46')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#008eb5')
        root.style.setProperty('--error-color', '#b81c45')
        main.dataset.theme = 'light'
    }
    else{
        root.style.setProperty('--bg-color', '#222831')
        root.style.setProperty('--border-color', '#393E46')
        root.style.setProperty('--font-color', '#EEEEEE')
        root.style.setProperty('--primary-color', '#00ADB5')
        root.style.setProperty('--error-color', '#73001e')
        main.dataset.theme = 'dark'
    }
}