export default function SideBar(){
  const UserAccount ={
    conta:"catanacomics",
    nome:"Catana"
  }
    return (
        <div class="sidebar">
          <Usuario conta={UserAccount.conta} nome={UserAccount.nome} />

          <Sugestoes />

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    )
}
function Usuario(props){
  
  return(
    <div class="usuario">
      <img src={`assets/img/${props.conta}.svg`} />
      <div class="texto">
        <strong>{props.conta}</strong>
        {props.nome}
      </div>
    </div>
  )
}
function Sugestoes(){
  const sugestedUsers = [
    "bad.vibes.memes",
    "chibirdart",
    "razoesparaacreditar",
    "adorable_animals",
    "smallcutecats"
  ]
  const sugestion= sugestedUsers.map(Sugestion =>
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/${Sugestion}.svg`} />
        <div class="texto">
          <div class="nome">{Sugestion}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  )
  return(
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      <div class="sugestoes">
        {sugestion}
      </div>
    </div>
  )
}
