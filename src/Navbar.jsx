export default function Navbar() {
    return (
        <div class="navbar">
			<div class="container">
                <Logo />
                <LogoMobile />
                <InstagramMobile />
                <Pesquisa />
                <Icones />
                <IconesMobile />
            </div>
		</div>
    )
}
function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    )
}
function LogoMobile() {
    return (
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}
function InstagramMobile() {
    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    )
}
function Pesquisa () {
    return(
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}
function Icones () {
    const Icons =[
        "paper-plane-outline",
        "compass-outline",
        "heart-outline",
        "person-outline"
    ];
    const componentesIcons= Icons.map(Icon =><ion-icon name={Icon}></ion-icon> )
    
    return (
        <div class="icones">
            {componentesIcons}
        </div>
    )
}
function IconesMobile () {
    return (
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}