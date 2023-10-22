let btn = document.querySelector('.btn');
    btn.onclick = () => {
    let txt = document.querySelector('.enter'
    ).value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = txt;
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;

     speechSynthesis.speak(speech);
    }