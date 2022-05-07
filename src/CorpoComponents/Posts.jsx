export default function Posts (){
    const listaDoPost=[
      {
        perfil:"meowed",
        fotoPost:"gato-telefone",
        curtida: "respondeai",
        numCurtidas:"101.523"
      },
      {
        perfil:"barked",
        fotoPost:"dog",
        curtida: "adorable_animals",
        numCurtidas:"99.159"
      }
    ]
    const componentePost=listaDoPost.map(Post =>
      <div class="post">
        <Topo perfil={Post.perfil} />
        <Conteudo fotoPost={Post.fotoPost}/>
        <Fundo curtida={Post.curtida} numCurtidas={Post.numCurtidas} />
      </div>
      )
    return(
        <div class="posts">
          {componentePost}
        </div>
    )
}
function Topo(props){
  return (
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${props.perfil}.svg`} />
        {props.perfil}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  )
}
function Conteudo(props){
  return (
    <div class="conteudo">
      <img src={`assets/img/${props.fotoPost}.svg`} />
    </div>
  )
}
function Fundo(props){
  const Icons =[
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline"
  ];
  const componentesIcons= Icons.map(Icon =><ion-icon name={Icon}></ion-icon> )
  return(
    <div class="fundo">
      <div class="acoes">
        <div>
          {componentesIcons}
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
      <Curtida curtida={props.curtida} numCurtidas={props.numCurtidas} />
    </div>
  )
}
function Curtida(props){
  return(
    <div class="curtidas">
      <img src={`assets/img/${props.curtida}.svg`} />
      <div class="texto">
        Curtido por <strong>{props.curtida}</strong> e <strong>outras {props.numCurtidas} pessoas</strong>
      </div>
    </div>
  )
}