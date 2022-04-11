//setTimeOut

const GlaDos = () => {
    console.log('Добро пожаловать в компьютеризированный экспериментальный центр при лаборатории исследования природы порталов')
}
setTimeout(GlaDos,1000)

const Gentle = document.getElementById('btn1')
Gentle.addEventListener('click', function (){
    const toxic1 = setTimeout(function (){
        console.log('Для недалёких существ подобных тебе,я Гл   адос')
    },1000)
})

const stranger = document.getElementById('btn2')
stranger.addEventListener('click', function (){
    const toxic2 = setTimeout(function (){
        console.log('Торт это ложь')
    },2000)
})

const last = document.getElementById('btn3')
last.addEventListener('click', function (){
    const toxic3 = setTimeout(function (){
        console.log('Было весело,не возращяйся')
    },2000)
})