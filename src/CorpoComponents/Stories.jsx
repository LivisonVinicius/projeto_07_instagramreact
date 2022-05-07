
export default function Stories() {
  const listaDeStories = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet"
  ]
  return (
    <div class="stories">
        <Story listaDeStories={listaDeStories}/>
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
)
}
function Story(props) {
  const componenteStories = props.map(Storie =>
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${Storie}.svg`}/>
      </div>
      <div class="usuario">
        {Storie}
      </div>
    </div>)
  return(
    {componenteStories}
  )
}