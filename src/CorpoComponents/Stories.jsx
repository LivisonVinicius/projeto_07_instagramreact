
export default function Stories() {
  const listaDeStories = [
    
    {conta:"9gag"},
    {conta:"meowed"},
    {conta:"barked"},
    {conta:"nathanwpylestrangeplanet"},
    {conta:"wawawicomics"},
    {conta:"respondeai"},
    {conta:"filomoderna"},
    {conta:"memeriagourmet"}
  ];
  const componenteStories = listaDeStories.map(Storie =>
    <Story conta={Storie.conta}/>)
  return (
    <div class="stories">
        {componenteStories}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
);
}
function Story(props) {
  return(
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${props.conta}.svg`}/>
      </div>
      <div class="usuario">
        {props.conta}
      </div>
    </div>
  )
}