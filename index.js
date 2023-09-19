const button = document.querySelector('button')
const convidado = document.querySelector('#convidado')
const convidou = document.querySelector('#convidou')
const resultado = document.querySelector('p')

const participantes = [
    {nome: 'João', convidados: ['Fernando','Julia']},
    {nome: 'Fernanda', convidados: ['Alysson','Brena']}
]

button.addEventListener('click', () => {
    let nomeConvidado = convidado.value
    let nomeConvidou = convidou.value

    const convidouExiste = participantes.find(participante => participante.nome === nomeConvidou)

    if(convidouExiste){
        const convidadoExiste = convidouExiste.convidados.includes(nomeConvidado)

        if(convidadoExiste){
            resultado.innerHTML = 'Você pode entrar'
            return
        } else {
        resultado.innerHTML = 'Você não pode entrar!'
        }
    }else{
        resultado.innerHTML = `${nomeConvidou} que te convidou não está na lista de participantes`
    }
})
