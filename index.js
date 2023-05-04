function addPlayer(){
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  let confirmation = confirm('Você confirma a escalação do jogador: ' + name +
   '\nna posição de: ' + position + '\nCamisa: ' + number)

  if (confirmation){
    const teamList = document.getElementById('teamList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player- ' + number
    playerItem.innerText = position + ': ' + name + '(' + number + ')'
    teamList.appendChild(playerItem)
    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }else{
    alert('Faça as alterações necessárias')
  }
}

function removePlayer(){
  const number = document.getElementById('remove').value
  const playerToRemove = document.getElementById('player- ' + number)
  const confirmation = confirm('Remover jogador: ' + playerToRemove.innerText + '?' )
 
  if(confirmation){
    document.getElementById('teamList').removeChild(playerToRemove)
    document.getElementById('remove').value = ''
  }
}