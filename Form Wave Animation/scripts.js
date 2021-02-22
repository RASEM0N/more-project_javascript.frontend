const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerHTML
            // раскукоживаем на буквы
            .split('') 
            // каждую букву заталкиваем в span
            .map((letter, index) => `<span style="transition-delay: ${index * 50}ms;">${letter}</span>`) 
            // собираем все обратно в строку
            .join('')
})