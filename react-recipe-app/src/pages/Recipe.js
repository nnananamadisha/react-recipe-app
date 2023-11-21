import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Biltong",
            image: "/img/biltong.jpg",
            ingredients: <ul>
                <li>18g salt</li>
                <li>2g black pepper</li>
                <li>1g brown sugar</li>
                <li>4g coriander</li>
                <li>50/50 - vinegar and Worcestershire sause mixture</li>
            </ul>,
            description: <ol>
                <li>Cut into 2 – 2,5cm strips thick. Remember to cut along with the grain.</li>
                <li>Sprinkle the strips of meat with the vinegar and Worcestershire sauce mixture on both sides. Make sure to coat the meat thoroughly</li>
                <li>Coat the meat both sides with the spice mixture and place in a large tray.</li>
                <li>Place the tray in the fridge and let the meat marinade in the spice and vinegar mixture for about 12 hours. Mix the meat thoroughly and let it marinade for another 12 hours.</li>
                <li>After you have pickled the meat for 24 hours hang directly in a well ventilated area or in front of a fan. Please make sure that the meat is hanging in a cool area with no warm air.</li>
                <li>Do not rinse or wipe off any of the spice and liquid mixture before you hang the Biltong to dry.</li>
                <li>Check the meat after 4 – 5 days depending on how moist you want the inside to be.</li>
            </ol>
        }, 
        {
            title: "Bobotie",
            image: "/img/bobotie.jpg",
            ingredients: <ul>
                <li>1 fairly thick slice crustless bread</li>
                <li>375 ml milk</li>
                <li>25 ml oil</li>
                <li>10ml butter</li>
                <li>2 onions, sliced</li>
                <li>2 cloves garlic, crushed</li>
                <li>25 ml curry powder</li>
                <li>10ml salt</li>
                <li>25ml chutney</li>
                <li>15ml smooth apricot jam</li>
                <li>15ml Worcester sauce</li>
                <li>5ml turmeric</li>
                <li>25ml brown vinegar</li>
                <li>1 kg raw mince</li>
                <li>100 ml sultanas (don’t replace with raisins)</li>
                <li>3 eggs</li>
                <li>pinch each salt and turmeric</li>
                <li>bay leaves</li>
            </ul>,
            description: <ol>
                <li>Soak bread in milk. Heat oil and butter in large pan and fry onions and garlic.</li>
                <li>When onions are soft, add curry powder, salt, chutney, jam, Worcester sauce, turmeric and vinegar and mix well.</li>
                <li>Drain and mash bread and reserve milk. Add bread to pan together with mince and sultanas.</li>
                <li>Cook over low heat, stirring, and when meat loses its pinkness, remove from stove.</li>
                <li>Add 1 beaten egg, mix well, then spoon into a greased, 28 x 16 cm baking dish and level the top.</li>
                <li>Beat remaining eggs with reserved milk (you should have 300ml, or a little more) and the salt and turmeric.</li>
                <li>Pour over meat mixture and put a few bay leaves on top. </li>
                <li>Stand dish in a larger pan of water (this is important to prevent drying out) and bake, uncovered, at 180 degrees celsius for 1 hour or until set.</li>
                <li>Serve with rice, coconut, chutney, nuts and bananas.</li>
            </ol>
        },
        {
            title: "Bunnychow",
            image: "/img/bunnychow.jpg",
            ingredients: <ul>
                <li>2 large white onions, diced</li>
                <li>2 tomatoes, diced</li>
                <li>2 cups diced carrots</li>
                <li>2 garlic cloves, crushed</li>
                <li>1 tsp coriander</li>
                <li>1/2 tsp cumin</li>
                <li>3 tablespoons garam masala*</li>
                <li>1 tsp cayenne pepper</li>
                <li>2 tsp tumeric</li>
                <li>2 ground cardamom pods</li>
                <li>2 bay leaves</li>
                <li>1 stick cinnamon</li>
                <li>1 to 2 cups water</li>
                <li>2 cups potatoes, cubed</li>
                <li>2 boneless, skinless chicken breasts, cut into strips</li>
            </ul>,
            description: <ol>
                <li>In a large saucepan, fry the onions until their almost translucent or clear.</li>
                <li> Then add all your spices and fry for another 1 to 2 minutes.</li>
                <li>Next add the tomatoes and mix in with the spices and onions. Cook until it forms a paste.</li>
                <li>Add chicken, potatoes, carrots, and water to the saucepan. Stir together with the tomato paste and bring to a low simmer.</li> 
                <li>Cover and cook for about 30 minutes until the chicken is tender. Stir occasionally. Remove the bay leaves and cinnamon stick.</li>
                <li>Hollow out a loaf of bread and spoon the cooked curry inside the bread to serve.</li>
                <li> If desired, serve with a side of rice. Traditionally, it's eaten with your hands and the bread is used to soak up the gravy. Enjoy!</li>
            </ol>
        },
        {
            title: "Chicken-feet",
            image: "/img/chicken-feet.jpg",
            ingredients: <ul>
                <li>500 g Chicken feet cleaned</li>
                <li>1 tablespoon turmeric</li>
                <li>2 tablespoon paprika</li>
                <li>1 tablespoon crushed garlic</li>
                <li>1 tablespoon Worcestershire sauce</li>
                <li>1 tablespoon tomato paste</li>
                <li>1 tablespoon all in one curry powder with garlic</li>
                <li>½ chopped onion</li>
            </ul>,
            description: <ol>
                <li>After rinsing and cleaning the chicken feet, add the chicken feet into a pan and add a little water.</li>
                <li>Season with pink Himalayan salt and add the turmeric. Let the chicken feet simmer for 30 minutes with the lid on.</li>
                <li>After 30 minutes remove the chicken feet from the pan.</li>
                <li>In the same pan, add a little oil, allow to heat and add 1 tablespoon all in one curry powder with garlic and let it roast for about 1-2 minutes.</li>
                <li>Add ½ chopped red onion and sauté until translucent. Once fully cooked, add the cooked chicken feet back into the pan.</li>
                <li>Add 1 tablespoon crushed garlic/garlic powder.</li>
                <li>Add 2 tablespoon paprika.</li>
                <li>Add 1 tablespoon Worcestershire sauce.</li>
                <li>Add some dry/fresh thyme.</li>
                <li>Add some water into the pan again and mix.</li>
                <li>Add 1 tablespoon tomato paste.</li>
                <li>Allow to simmer for 15 minutes with the lid on.</li>
                <li>Optional: Add some sugar to balance the acidic taste of the tomatoe paste.</li>
                <li>To serve: Garnish with parsley</li>
            </ol>
        },
        {
            title: "Chakalaka",
            image: "/img/chakalaka.jpg",
            ingredients: <ul>
                <li>1 large onion (diced)</li>
                <li>1/2 green pepper (diced)</li>
                <li>2 tablespoons curry powder</li>
                <li>3 carrots grated</li>
                <li>2 large chopped tomatoes</li>
                <li>1 tin baked beans</li>
                <li>salt and pepper to taste + seasoning (we used garlic, bbq spice and herb seasoning)</li>
            </ul>,
            description: <ol>
                <li>Heat oil in a large pan</li>
                <li>Fry onion and green pepper</li>
                <li>Once onions are translucent, add curry powder and fry for a minute</li>
                <li>Add carrots and fry for a minute</li>
                <li>Stir in tomatoes and season with salt and pepper</li>
                <li>Cover pot with lid and allow to boil for 5 minutes</li>
                <li>Add 1 tin baked beans and season with your seasoning, stir well</li>
                <li>Cover pan with lid and allow to simmer for 10 minutes</li>
            </ol>
        },
        {
            title: "Carrot-cake",
            image: "/img/carrot-cake.jpg",
            ingredients: <ul>
                <li>3 cups carrot(450 g), hand-grated</li>
                <li>2 ½ cups all-purpose flour(310 g)</li>
                <li>1 tablespoon</li>
                <li>2 tsp ground cinnamon</li>
                <li>¼ tsp allspice</li>
                <li>1 tsp kosher salt</li>
                <li>1 tsp baking powder</li>
                <li>½ tsp baking soda</li>
                <li>1 cup light brown sugar(200 g)</li>
                <li>½ cup granulated sugar(100 g)</li>
                <li>3 large eggs</li>
                <li>1 cup vegetable oil(240 mL)</li>
                <li>1 cup raisin(150 g)</li>
                <li>1 cup crushed pineapple(225 g), canned</li>
            </ul>,
            description: <ol>
                <li>Heat the oven to 180C/160C fan/gas 4.</li> 
                <li>Oil and line the base and sides of two 20cm cake tins with baking parchment.</li>
                <li>Whisk the oil, yogurt, eggs, vanilla and zest in a jug.</li> 
                <li>Mix the flour, sugar, cinnamon and nutmeg with a good pinch of salt in a bowl.</li>
                <li> Squeeze any lumps of sugar through your fingers, shaking the bowl a few times to bring the lumps to the surface.</li>
                <li>Add the wet ingredients to the dry, along with the carrots, raisins and half the nuts, if using. Mix well to combine, then divide between the tins.</li>
                <li>Bake for 25-30 mins or until a skewer inserted into the centre of the cake comes out clean. If any wet mixture clings to the skewer, return to the oven for 5 mins, then check again. Leave to cool in the tins.</li>
                <li>To make the icing, beat the butter and sugar together until smooth. Add half the soft cheese and beat again, then add the rest (adding it bit by bit prevents the icing from splitting). Remove the cakes from the tins and sandwich together with half the icing. Top with the remaining icing and scatter with the remaining walnuts. Will keep in the fridge for up to five days. Best eaten at room temperature.</li>
            </ol>
        }, 
        {
            title: "Lamb-sosaties",
            image: "/img/lamb-sosaties.jpg",
            ingredients: <ul>
                <li>¼ onion</li>
                <li>1 clove garlic grated or finely chopped</li>
                <li>1 teaspoon ginger (fresh) grated or finely chopped</li>
                <li>3 tablespoon apricot jam</li>
                <li>3 tablespoon wine vinegar (white or red)</li>
                <li>1 tablespoon curry powder (eg Madras)</li>
                <li>½ tablespoon ground cumin</li>
                <li>¼ teaspoon salt</li>
            </ul>,
            description: <ol>
                Instructions
                <li>Finely chop the onion then soften it in a little oil in a small pan until it is becoming translucent but not browning.</li>
                <li>Add the garlic</li>
                <li>Add the garlic and ginger and cook a minute then add the vinegar, jam, curry powder, cumin and salt. Mix well then remove from heat and leave to cool.</li>
                <li>Dice the lamb into relatively large dice (around 1 ½-2 inch/ 4-5cm dice), trimming excess fat or sinew. Mix the cooled marinade through the lamb then cover and leave a few hours or overnight, refrigerated.</li>
                <li>Soak the apricots in hot water to soften for around 15-20 minutes.</li>
                <li>Thread the meat onto skewers along with the soaked dried apricots and chunks of onion, putting one or other between each chunk of meat.</li>
                <li>Cook on a grill/bbq until the meat is cooked through then serve.</li>

            </ol>
        },
        {
            title: "Samp-and-beans",
            image: "/img/samp-and-beans.jpg",
            ingredients: <ul>
                <li>2 cups samp & beans, washed and soaked overnight</li>
                <li>15ml cooking oil</li>
                <li>1 onion, chopped</li>
                <li>1 green pepper, chopped</li>
                <li>1 tablespoon Rajah Mild & Spiicy curry powder</li>
                <li>1 tsp Robertsons steak and chops spice</li>
                <li>1 cube Knorrox beef stock</li>
            </ul>,
            description: <ol>
                <li>Drain the samp and bean mix (after soaking overnight) and place it in a large pot covered with clean water.</li>
                <li>Leave it to simmer slowly until nearly soft, checking it every 30 minutes.</li>
                <li> Add more water when necessary and stir it frequently. Allow simmering until soft.</li>
                <li>In a pot, fry the onion and green pepper in oil until soft.</li>
                <li>Add the Rajah Mild & Spicy Curry Powder and Robertsons Steak & Chop Spice and fry it for 1 minute. Stir continuously.</li>
                <li>Add the boiled samp and beans, Knorrox Beef Stock cube and a little water. Allow to simmer slowly until the water has evaporated, stirring occasionally. The samp and beans should have a nice creamy, soft texture.</li>
                <li>Serve with curry, chakalaka or on its own.</li>
            </ol>
        },
        {
            title: "Malva-pudding",
            image: "/img/malva-pudding.jpg",
            ingredients: <ul>
                <li>2 tablespoons butter</li>
                <li>1 cup sugar</li>
                <li>2 tablespoons smooth apricot jam/apricot preserves</li>
                <li>2 teaspoons white vinegar</li>
                <li>2 cups flour</li>
                <li>2 cups milk</li>
                <li>2 eggs</li>
                <li>pinch of salt</li>
                <li>2 tbs bicarbonate of soda</li> 
            </ul>,
            description: <ol>Instructions
                <li>To make the pudding, pre-heat the oven to 180°C/350°F and grease a 30cm/11in baking dish.</li>
                <li>In a saucepan set over medium-high heat melt together the butter, sugar, apricot jam and vinegar until the sugar has dissolved and the mixture is smooth. Remove from the heat and allow to cool for 5 minutes then pour into a large mixing bowl.</li>
                <li>Sift the dry ingredients together then add to the butter mixture, alternating with the milk, mixing well after each addition.</li>
                <li>Stir in the beaten eggs.</li>
                <li>Pour the batter into the prepared dish and place in the oven.</li>
                <li>Bake for 30 minutes until the pudding is dark brown and baked through.</li>
                <li>While the pudding is baking, prepare the syrup.</li>
                <li>Bring all the syrup ingredients to a boil and reduce the heat. Allow to simmer for 5 minutes.</li>
                <li>Pour the syrup over the pudding as it comes out of the oven.</li>
                <li>Allow to stand for 20 minutes then serve with custard or cream.</li>
            </ol>
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