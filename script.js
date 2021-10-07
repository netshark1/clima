document.querySelector('.busca').addEventListener('submit', async(evento) => {
    evento.preventDefault()

    let input = document.querySelector('#searchInput').value
    if (input !== '') {
        showwarning('carregando....')

        let url = `https://api.openweathermap.org/data/2.5/weather?q={${encodeURI(input)}}&appid={ae131b334db91f967ac6aae89dbbb6fa&units=metric&lang=pt_br}`

        let results = await fetch(url)
        let json = await results.json()

        if (json.cod === 200) {

        } else {
            showwarning('localização não encontrada...')
        }

    } else {
        showwarning('favor digitar a sua busca...')
    }
})

function showwarning(msg) {
    document.querySelector('.aviso').innerHTML = msg
}