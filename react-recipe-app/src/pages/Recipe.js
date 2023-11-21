import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Biltong",
            image: "/img/biltong.jpg",
        }, 
        {
            title: "Bobotie",
            image: "/img/bobotie.jpg",
        },
        {
            title: "Bunnychow",
            image: "/img/bunnychow.jpg",
        },
        {
            title: "Chicken-feet",
            image: "/img/chicken-feet.jpg",
        },
        {
            title: "Chakalaka",
            image: "/img/chakalaka.jpg",
        },
        {
            title: "Carrot-cake",
            image: "/img/carrot-cake.jpg",
        }, 
        {
            title: "Lamb-sosaties",
            image: "/img/lamb-sosaties.jpg",
        },
        {
            title: "Samp-and-beans",
            image: "/img/samp-and-beans.jpg",
        },
        {
            title: "Malva-pudding",
            image: "/img/malva-pudding.jpg",
        }
       
       
    ].sort(() => Math.random() - 0.5)

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