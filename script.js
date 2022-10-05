const KEYBOARD = ['q','w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g','h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b']

const keys = document.querySelectorAll('.key');
const wrapper = document.querySelector('.wrapper');
const spans = document.querySelectorAll('.keyboard');

wrapper.addEventListener('mouseenter', () => {
    spans.forEach(span => {
        span.style.opacity = '1';
    })
})

wrapper.addEventListener('mouseleave', () => {
    spans.forEach(span => {
        span.style.opacity = '0';
    })
})

keys.forEach((key, i) => {
    key.addEventListener('click', () => playKey(key, i))   
})

document.addEventListener('keydown', e => {
    if(e.repeat) return;
    const key = e.key;
    const KeyIndex = KEYBOARD.indexOf(key);  
    if(KeyIndex > -1) playKey(keys[KeyIndex],KeyIndex);   
})


function playKey(key, i) {
    const url = `piano-keys/key${i < 9 ? '0' + (i + 1) : (i + 1)}.mp3`;
    const activeAudio = new Audio(url);
    activeAudio.currentTime = 0;
    activeAudio.play();
    key.classList.add('active');
    activeAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
    document.addEventListener('keyup', () => {
        activeAudio.pause();
        key.classList.remove('active');
    })
}