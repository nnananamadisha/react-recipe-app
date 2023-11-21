import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Biltong",
            image: "/Img/biltong.jpg",
        }, 
        {
            title: "Bobotie",
            image: "/Img/bobotie.jpg",
        },
        {
            title: "Bunnychow",
            image: "/Img/bunnychow.jpg",
        },
        {
            title: "Chicken-feet",
            image: "/Img/chicken-feet.jpg",
        },
        {
            title: "Chakalaka",
            image: "/img/chakalaka.jpg",
        },
        {
            title: "Carrot-cake",
            image: "/Img/carrot-cake.jpg",
        }, 
        {
            title: "Lamb-sosaties",
            image: "/Img/lamb-sosaties.jpg",
        },
        {
            title: "Samp-and-beans",
            image: "/Img/samp-and-beans.jpg",
        },
        {
            title: "Malva-pudding",
            image: "/Img/malva-pudding.jpg",
        },

    ].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}