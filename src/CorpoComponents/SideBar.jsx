export default function SideBar(){
  const UserAccount ={
    conta:"catanacomics",
    nome:"Catana"
  }
  const sugestedUsers = [
    {conta:"bad.vibes.memes",
    follow:"Segue você"},
    {conta:"chibirdart",
    follow:"Segue você"},
    {conta:"razoesparaacreditar",
    follow:"Novo no Instagram"},
    {conta:"adorable_animals",
    follow:"Segue você"},
    {conta:"smallcutecats",
    follow:"Segue você"}
  ]
  const SugestoesDeUsuario = sugestedUsers.map(Sugestao => 
    <div class="sugestao">
      <Sugestoes conta={Sugestao.conta} follow={Sugestao.follow}/>
    </div>
    )
    return (
        <div class="sidebar">
          <Usuario conta={UserAccount.conta} nome={UserAccount.nome} />

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {SugestoesDeUsuario}
          </div>

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
function Sugestoes(props){
  return(
    <div class="usuario">
      <img src={`assets/img/${props.conta}.svg`} />
      <div class="texto">
        <div class="nome">{props.conta}</div>
        <div class="razao">{props.follow}</div>
      </div>
    </div>
  )
}
