import Explore from "./Explore";
import Singular from "./Singular";
import ArtistsSlider from "./ArtistsSlider";

export default function Main({cards, openModal}) {
    return (
        <main className="main">
            <div className="">
                <ArtistsSlider cards={cards} openModal={openModal} />
                <Singular/>
                <Explore cards={cards}/>
            </div>
        </main>
    )
}