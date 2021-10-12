document.querySelector('.busca').addEventListener('submit', async(evento) => {
    evento.preventDefault()

    let input = document.querySelector('#searchInput').value
    if (input !== '') {
        showwarning('carregando....')

        //let url = `https://api.openweathermap.org/data/2.5/weather?q=RI(input)}}&appid=c5bbb4566082ed254040e5522fc70b99&units=metrics&lang=pt_br`{${encodeU
            // `https://api.openweathermap.org/data/2.5/weather?q={${encodeURI(input)}}&appid={ae131b334db91f967ac6aae89dbbb6fa&units=metric&lang=pt_br}`

        let results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${encodeURI(input)}&units=metric&lang=pt_br&appid=c5bbb4566082ed254040e5522fc70b99`)
        let json = await results.json()

        

        if (json.cod === 200) {

            showInfo({
                name:json.name,
                country:json.sys.country,
                temp:json.main.temp,
                tempIcon:json.weather[0].icon,
                windSpeed:json.wind.speed,
                windAngle:json.wind.deg
                
            })

               // console.log(json)
        } else {
            showwarning('localização não encontrada...')
        }

    } else {
        clearInfo()
        showwarning('favor digitar a sua busca...')
    }
})
function showInfo(obj){
    showwarning('');
   
    document.querySelector('.titulo').innerHTML=`${obj.name},${obj.country}`
    document.querySelector('.tempInfo').innerHTML =`${obj.temp}<sup>ºC</sup>`
    document.querySelector('.ventoInfo').innerHTML=`${obj.windSpeed}<span>km/h</span>`
    document.querySelector('.temp img').setAttribute('src', 
    `http://openweathermap.org/img/wn/${obj.tempIcon}@2x.png`);
    
    document.querySelector('.ventoPonto').style.transform = `rotate(${obj.windAngle-90}deg)`
    document.querySelector('.resultado').style.display= 'block'


}
function clearInfo(){
    showwarning('')
    document.querySelector('.resultado').style.display='none'
}


function showwarning(msg) {
    document.querySelector('.aviso').innerHTML = msg

}