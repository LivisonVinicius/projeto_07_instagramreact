export default function FundoMobile(){
    const Icons =[
        "home",
        "search-outline",
        "add-circle-outline",
        "heart-outline",
        "person-outline"
      ];
      const componentesIcons= Icons.map(Icon =><ion-icon name={Icon}></ion-icon> )
    return(
        <div class="fundo-mobile">
            {componentesIcons}
        </div>
    )
}