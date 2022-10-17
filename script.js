let reg = document.forms.reg
let sing = document.forms.sing
let reg_btn = document.querySelector('.reg_btn')
let sing_btn = document.querySelector('.sing_btn')

reg.onsubmit = (e) => {
    
    let arr = {
        id: Math.round(Math.random()*100000000),
    }
    
    let fm = new FormData(reg)
    
    fm.forEach((value, key) => {
        arr[key] = value
    })
    
    localStorage.setItem('reg', arr)
}

let tr = false

if(localStorage.length !== 0){
    tr = true
}

let href = window.location.href.split('#').at(-1)

if(tr == true){
    window.location.href = 'http://127.0.0.1:5500/sing_in.html'
}

reg_btn.onclick = () => {
    localStorage.clear()
}