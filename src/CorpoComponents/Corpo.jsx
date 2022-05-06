import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";
import FundoMobile from "./FundoMobile"
export default function Corpo(){
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
            <FundoMobile />
        </div>
    )
}
