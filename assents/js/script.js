const hora = document.getElementById('horas')
const minutos  = document.getElementById('minutos')
const segundos = document.getElementById('segundos')




setInterval( function (){
   
    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let s = dia.getSeconds() 

    hora.textContent = (hr<10)?'0'+hr :hr
    minutos.textContent = (min<10)?'0'+min :min
    segundos.textContent = (s<10)?'0'+s :s
}

)
