import sukiyaki from './images/image-list/sukiyaki.jpg';
import french_toast from './images/image-list/french-toast.jpg';
import yakisoba from './images/image-list/yakisoba.jpg';
import yakitori from './images/image-list/yakitori.jpg';
import birthday_cake from './images/image-list/birthday-cake.jpg';
import napolitan_pasta from './images/image-list/napolitan-pasta.jpg';
import omurice from './images/image-list/omurice.jpg';
import katsu_curry from './images/image-list/katsu-curry.jpg';
import bento from './images/image-list/bento.jpg';
import hamburger from './images/image-list/hamburger.jpg';
import oyakodon from './images/image-list/oyakodon.jpg';
import steak from './images/image-list/steak.jpg';
import tomato_salad from './images/image-list/tomato-salad.jpg';

const itemData = [
  {
    img: tomato_salad,
    title: 'トマトサラダ (Tomato salad)',
    price: '????',
    videoId: 'K0-apUyUfbQ',
    modalCols: 5,
    recipeCard: false,
    ingredientsEN: [],
    ingredientsJP: [],
    stepsEN: [],
    stepsJP: [],
  },
  {
    img: steak,
    title: 'ステーキ (Steak)',
    price: '????',
    videoId: 'IiuOwq97BRo',
    modalCols: 4,
    recipeCard: true,
    ingredientsEN: [
      { name: 'Cucumber' },
      { name: 'Salt & pepper' },
      { name: 'Steak' },
      { name: 'Garlic clove' },
      { name: 'Thyme' },
      { name: 'Mustard' },
      { name: 'Wasabi paste' },
      { name: 'Pineapple' },
      { name: 'Sesame dressing' },
      { name: 'Oil' },
      { name: 'Butter' },
      { name: 'Egg soft boiled' },
      { name: 'Bibim men' }
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Slice Cucumber into thin strips', time: 1160 },
      { step: 'Season Steak with salt and pepper', time: 1868 },
      { step: 'Add oil to the pan and heat until very hot', time: 2345 },
      { step: 'Add Steak to the pan and sear each side for 30 seconds.', time: 2398 },
      { step: 'Continue to cook, turning the Steak', time: 2489 },
      { step: 'Add crushed Garlic cloves, Thyme and more oil', time: 2568 },
      { step: 'Remove Thyme and add Butter, baste the Steak in the melted Butter / Garlic.', time: 2755 },
      { step: 'Rest the Steak on a wire rack and cover with tin foil.', time: 2856 },
      { step: 'Boil a pot with water, cook Bibim men noodles for 3 minutes.', time: 2958 },
      { step: 'Wash Noodles in cold water.', time: 3306 },
      { step: 'Grill Pineapple.', time: 3410 },
      { step: 'Add sauce to Bibim men ramen and stir.', time: 3467 },
      { step: 'Add Cucumber and Boiled egg to the ramen.', time: 3599 },
      { step: 'Serve Steak with Truffle salt, Wasabi and Mustard.', time: 3722 },
      { step: 'Add some Sesame Dressing to some sliced Cucumber.', time: 3872 },
      { step: 'Slice up Steak into strips.', time: 3946 },
    ],
    stepsJP: [],
  },
  {
    img: sukiyaki,
    title: 'すき焼き (Sukiyaki)',
    price: '5,000円',
    videoId: '1Ed8GLLJJHk',
    modalCols: 4,
    recipeCard: false,
    ingredientsEN: [],
    ingredientsJP: [],
    stepsEN: [],
    stepsJP: [],
  },
  {
    img: french_toast,
    title: 'フレンチトースト (French toast)',
    price: 'Good question',
    videoId: 'UZdP0fDG8cg',
    modalCols: 4,
    recipeCard: true,
    ingredientsEN: [
      { name: '2 Eggs' },
      { name: 'Salt' },
      { name: 'Butter' },
      { name: 'Mint leaves' },
      { name: 'Bread' },
      { name: 'Bananer' },
      { name: 'Blueberry' },
      { name: 'Mango' },
      { name: 'Grapefruit' },
      { name: 'Apricot Jam' },
      { name: 'Aligo sweetener' },
      { name: 'Whipped Cream' },
      { name: 'Milk' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Set a slice of bread in a bowl and leave on the side', time: 1160 },
      { step: 'Crack 2 eggs in a bowl', time: 2004 },
      { step: 'Whip them until both are combined', time: 2044 },
      { step: 'Add the sweetener and the milk', time: 2217 },
      { step: 'Continue whipping a few seconds to combine the sweetener and milk to the egg mixture', time: 1160 },
      { step: 'Drop the egg mix unto the bread bowl', time: 2501 },
      { step: 'Coat the bread on both sides and leave aside for 10 minutes', time: 2501 },
      { step: 'Cut the bananer in small bite size', time: 3046 },
      { step: 'Remove the skin on the Mango and cut it in small bite pieces', time: 3939 },
      { step: 'Remove the skin on the Grapefruit and cut it in small bite pieces', time: 4213 },
      { step: 'In a pan add butter and put the bread in the pan', time: 5617 },
      { step: 'Cook until both sides are golden brown then take off the heat and put the bread on a plate', time: 10424 },
      { step: 'Add the Bananer, Mango, Grapefruit and Blueberry on the plate', time: 1160 },
      { step: 'Add mint leaves on top of the fruits', time: 10715 },
      { step: 'Add whipped cream and apricot jam on the side and serve', time: 10915 },

    ],
    stepsJP: [],
  },
  {
    img: yakisoba,
    title: '焼きそば (Yakisoba)',
    price: '2,000円',
    videoId: 'mbkE_SqVR58',
    modalCols: 5,
    recipeCard: true,
    ingredientsEN: [
      { name: '1/4 Cabbage' },
      { name: '100g Pork' },
      { name: '50g Chives' },
      { name: 'Chinese Noodles' },
      { name: 'Salt' },
      { name: 'Pepper' },
      { name: 'Yakisoba Sauce' },
      { name: 'Oyster Sauce' },
      { name: 'Tsuyu Sauce' },
      { name: '1 Egg' },
      { name: 'Pickled Ginger' },
      { name: 'Bonito Flakes' },
      { name: 'Aonori' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Slice the Cabbage', time: 1417 },
      { step: 'Slice the Chives', time: 1621 },
      { step: 'Slice the Pork', time: 1782 },
      { step: 'Warm the pan', time: 1904 },
      { step: 'Grill the noodles for 10 minutes', time: 2023 },
      { step: 'Add Salt and Pepper to taste to the Pork', time: 2796 },
      { step: 'Add Oil to the pan and stir-fry the Pork for 3 minutes', time: 2870 },
      { step: 'Add the Cabbage to the pan and continue stirring for 4 minutes', time: 3070 },
      { step: 'Add the Noodles to the pan and continue stirring for 2 minutes', time: 3315 },
      { step: 'Add one spoon of Yakisoba Sauce, one spoon of Oyster Sauce and one spoon of Tsuyu Sauce to the pan and continue stirring for 5 minutes', time: 3474 },
      { step: 'Serve on a plate', time: 3812 },
      { step: 'Add the Chives to the pan and stir-fry for 2 minutes', time: 3891 },
      { step: 'Add the Chives on top of the plate', time: 4042 },
      { step: 'Add Oil to the pan and cook the Egg sunny side up', time: 4125 },
      { step: 'Add the Pickled Ginger to the side of the plate', time: 4200 },
      { step: 'Add the Bonito Flakes on top of the plate', time: 4222 },
      { step: 'Add the Aonori on top of the plate', time: 4245 },
      { step: 'Add the Egg to the side of the plate', time: 4321 },
    ],
    stepsJP: [],
  },
  {
    img: oyakodon,
    title: '親子丼 (Oyakodon)',
    price: '????',
    videoId: 'dMYMXT6uGrY',
    modalCols: 4,
    recipeCard: true,
    ingredientsEN: [
      { name: '1 Large Onion' },
      { name: 'Chicken breast or thigh meat' },
      { name: '2 Large Eggs' },
      { name: '1 Spring Onion' },
      { name: 'Soy Sauce' },
      { name: 'Cooking oil' },
      { name: 'Rice' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Slice 1/2 a Large onion', time: 652 },
      { step: 'Warm the pan', time: 771 },
      { step: 'Slice a Spring Onion', time: 804 },
      { step: 'Fry Chicken in the pan turning until cooked', time: 864 },
      { step: 'Slice the Chicken into smaller chunks', time: 1128 },
      { step: 'To make the sauce combine: 1 spoon of Oil, 1 spoon Soy Sauce and 1 spoon Water', time: 1219 },
      { step: 'Add the sliced Large Onion to the pan and cook', time: 1322 },
      { step: 'Add one more spoon of Soy Sauce', time: 1445 },
      { step: 'Add the cooked Chicken back to the pot', time: 1486 },
      { step: 'Add one more spoon of Water if its starting to dry', time: 1520 },
      { step: 'Crack 1 Egg in beaker, swirl 3 times to mix and then add to pot.', time: 1716 },
      { step: 'Cook for 1 minute on low heat', time: 1779 },
      { step: 'Repeat step 11 with another egg. Then add the Spring Onions.', time: 1944 },
      { step: 'Cook a portion of Rice, add to pot and mix', time: 2074 },
    ],
    stepsJP: []
  },
  {
    img: yakitori,
    title: '焼き鳥 (Yakitori)',
    price: '500円',
    videoId: 'OdYSQ_I7gYQ',
    modalCols: 5,
    recipeCard: false,
    ingredientsEN: [],
    ingredientsJP: [],
    stepsEN: [],
    stepsJP: [],
  },
  {
    img: birthday_cake,
    title: '誕生日ケーキ (Birthday cake)',
    price: '????',
    videoId: 'ITC4esgZbAA',
    modalCols: 5,
    recipeCard: true,
    ingredientsEN: [
      { name: '3 Eggs' },
      { name: 'Sugar' },
      { name: 'Vanilla Extract' },
      { name: 'Flour' },
      { name: 'Butter' },
      { name: 'Baking Paper' },
      { name: 'Milk' },
      { name: '3 Mangos' },
      { name: '1 Slice of Pineapple' },
      { name: 'Honey' },
      { name: '20g Apple & Mango Puree' },
      { name: 'Whipped Cream' },
      { name: 'Gelatin' },
      { name: 'White Chocolate' },
      { name: 'Heavy Cream' },
      { name: 'Apple Mint' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Crack the Eggs in a bowl, put it in a pot with hot water, mix the Eggs and Sugar with a Whisk until they reach 30°C (86°F)', time: 876 },
      { step: 'Add 5 droplets of Vanilla Extract in the bowl and continue mixing until the mixture reaches 40°C (104°F)', time: 1149 },
      { step: 'Remove the bowl from the pot and continue mixing with a Mixer until the mixture gets a white color (approx. 8 minutes)', time: 1517 },
      { step: 'Sift the Flour into the bowl and mix with a Spatula', time: 2055 },
      { step: 'In another bowl, melt the Butter until it reaches 40°C (104°F) and mix it with the Milk using a Whisk', time: 2369 },
      { step: 'Add a small portion of the Egg mixture to the Butter mixture and mix with the Spatula', time: 2462 },
      { step: 'Add the whole Butter mixture to the Egg mixture and mix with the Spatula', time: 2510 },
      { step: 'Coat the insides of a cake pan with Butter and Baking Paper, then add the mixture', time: 2659 },
      { step: 'Preheat the oven for 5 minutes, put the pan inside and bake for 40 minutes', time: 2762 },
      { step: 'Slice the Mangos and peel their skin', time: 3552 },
      { step: 'Slice the Pineapple', time: 4401 },
      { step: 'In a bowl on top of hot water, mix the Puree, Sugar and Honey', time: 5098 },
      { step: 'Add the Gelatin to the bowl and continue mixing', time: 5293 },
      { step: 'Add the Whipped Cream to the bowl and continue mixing', time: 5398 },
      { step: 'Add the White Chocolate to the bowl and continue mixing until it melts', time: 5433 },
      { step: 'Put the bowl in the refrigerator', time: 6992 },
      { step: 'In another bowl, add Heavy Cream and whip it using a Mixer while adding Sugar to make Whipped Cream', time: 7030 },
      { step: 'Remove the cake pan from the oven, remove the Cake Base and take the Baking Paper off', time: 8005 },
      { step: 'Slice the Cake Base horizontally to make 3 slices', time: 8341 },
      { step: 'Place one of the slices on top of a cake turntable and cover it with Whipped Cream turning using an Icing Spatula', time: 8747 },
      { step: 'Add slices of Mango and Pineapple on top, then add more Whipped Cream and spread with the Icing Spatula', time: 8851 },
      { step: 'Place the 2nd slice of Cake Base on top, then add more Whipped Cream and spread with the Icing Spatula', time: 8993 },
      { step: 'Add more slices of Mango and Pineapple, then add more Whipped Cream and spread with the Icing Spatula', time: 9086 },
      { step: 'Place the 3rd slice of Cake Base on top, then add more Whipped Cream and spread with the Icing Spatula', time: 9385 },
      { step: 'Take the bowl from the refrigerator and cover one half of the top of the Cake with the contents', time: 9859 },
      { step: 'Add more slices of Mango and Pineapple on top of the covered top of the Cake', time: 9975 },
      { step: 'Add some leaves of Apple Mint to decorate', time: 10070 },
    ],
    stepsJP: [],
  },
  {
    img: napolitan_pasta,
    title: 'ナポリタン (Napolitan pasta)',
    price: '????',
    videoId: 'N-jbTbpLOJU',
    modalCols: 4,
    recipeCard: true,
    ingredientsEN: [
      { name: '100g Spaghetti' },
      { name: '1 Pineapple Sausage' },
      { name: '1/2 Onion' },
      { name: '1 Green Pepper' },
      { name: '50g Mushroom' },
      { name: 'Cooking Oil' },
      { name: 'Ketchup' },
      { name: '10g Butter' },
      { name: '10g Grated Cheese' },
      { name: 'Ground Parsley' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Slice the Sausage diagonally', time: 1473 },
      { step: 'Slice the Mushroom', time: 1654 },
      { step: 'Slice the Onion', time: 1822 },
      { step: 'Slice the Green Pepper', time: 1981 },
      { step: 'Add Oil to the pan and turn on the heat', time: 2280 },
      { step: 'When the pan is hot, add the Sausage slices and fry for 4 minutes while turning them around', time: 2361 },
      { step: 'Add the Onion to the pan still with the Sausage and stir-fry for 3 minutes', time: 2620 },
      { step: 'Add 5 spoons of Ketchup to the pan and continue stirring for 2 minutes', time: 2730 },
      { step: 'Add the Mushroom to the pan and continue stirring for 3 minutes and then turn off the heat', time: 2860 },
      { step: 'Add water to a pot and bring it to a boil', time: 3063 },
      { step: 'Add the Spaghetti to the pot and cook it for 15 minutes', time: 3480 },
      { step: 'Turn on the heat again on the pan with the Sausage, Onion and Mushroom, add the Butter and stir', time: 4433 },
      { step: 'After the Butter has melted, add the Green Pepper and continue stirring for 1 minute', time: 4551 },
      { step: 'Add the Spaghetti to the pan, add more Ketchup to taste and continue stirring for 2 minutes', time: 4633 },
      { step: 'Serve on a plate, add the Grated Cheese and a pinch of Ground Parsley on top', time: 4866 },
    ],
    stepsJP: [],
  },
  {
    img: omurice,
    title: 'オムライス (Omurice)',
    price: '????',
    videoId: 'KNYf-ym6W-k',
    modalCols: 4,
    recipeCard: false,
    ingredientsEN: [],
    ingredientsJP: [],
    stepsEN: [],
    stepsJP: [],
  },
  {
    img: katsu_curry,
    title: 'カツカレー (Katsukare)',
    price: '????',
    videoId: 'Z6wMEJf8wJk',
    modalCols: 5,
    recipeCard: true,
    ingredientsEN: [
      { name: 'Beef' },
      { name: 'Pork' },
      { name: '1 Onion' },
      { name: '1 Carrot' },
      { name: '2 Potatoes' },
      { name: 'Curry Sauce Mix' },
      { name: 'Cooking Oil' },
      { name: 'Salt' },
      { name: 'Pepper' },
      { name: '1 Egg' },
      { name: 'Flour' },
      { name: 'Bread Crumbs' },
      { name: 'Instant Rice' },
      { name: 'Sliced Cabbage' },
      { name: '2 Cherry Tomatoes' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Peel and slice the Carrot', time: 1096 },
      { step: 'Peel and slice the Potatoes', time: 1304 },
      { step: 'Slice the Onion', time: 1574 },
      { step: 'Slice the Beef', time: 1815 },
      { step: 'Add the sliced ingredients in a pot with two spoons of Cooking Oil and stir-fry for 6 minutes', time: 1968 },
      { step: 'Add water to the pot until the ingredients are covered and cook for 15 minutes with the lid on', time: 2339 },
      { step: 'Tenderize the Pork', time: 2756 },
      { step: 'Add Salt and Pepper to the Pork', time: 3329 },
      { step: 'Crack the Egg in a bowl, add Flour and water, and mix with a Whisk', time: 3484 },
      { step: 'Submerge the Pork in the bowl and cover it with the mix', time: 3778 },
      { step: 'Cover the Pork with the Bread Crumbs', time: 3806 },
      { step: 'Turn off the heat for the pot, add the Curry Sauce Mix and mix', time: 3975 },
      { step: 'Add Oil in a pan, enough to deep-fry one side of the Pork and wait until it is hot', time: 4260 },
      { step: 'Place the Pork in the Oil and fry for 10 minutes while turning it around', time: 4553 },
      { step: 'Place the Rice, the Cabbage and the Tomatoes on a plate', time: 5582 },
      { step: 'Slice the Fried Pork and place it on top of the Cabbage', time: 5777 },
      { step: 'Serve the Curry on the plate', time: 6275 },
    ],
    stepsJP: [],
  },
  {
    img: bento,
    title: 'お弁当 (Bento)',
    price: '????',
    videoId: 'Om-HYEPV1O4',
    modalCols: 5,
    recipeCard: true,
    ingredientsEN: [
      { name: '250g Chicken Breast' },
      { name: '50g Mashed Garlic' },
      { name: 'Soy Sauce' },
      { name: 'Mirin' },
      { name: 'Ajinomoto' },
      { name: 'Pepper' },
      { name: 'Sake' },
      { name: 'Ground Nutmeg' },
      { name: '4 Cocktail Sausages' },
      { name: '2 Smiley Potatoes' },
      { name: 'Cooking Oil' },
      { name: 'Rice' },
      { name: 'Blue Food Color' },
      { name: '1/2 Lettuce' },
      { name: '4 Broccoli Heads' },
      { name: '2 Cherry Tomatoes' },
      { name: '1 Slice of Processed Cheese' },
      { name: 'Seaweed' },
      { name: '1 Crab Stick' },
      { name: 'Flour' },
      { name: '1/4 Lemon' },
      { name: '2 Bento Boxes' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Cut the chicken breast in small pieces', time: 926 },
      { step: 'Add three spoons of Soy Sauce, the mashed garlic, two spoons of Mirin, one spoon of Ajinomoto, Pepper to taste, one spoon of Sake and one spoon of Ground Nutmeg to the Chicken', time: 1220 },
      { step: 'Knead the Chicken and mix the added ingredients', time: 1500 },
      { step: 'Let the Chicken rest for 30 minutes', time: 1600 },
      { step: 'Cut one end of 2 Cocktail Sausages to form an X shape', time: 1747 },
      { step: 'Stripe cut the sides of the other 2 Cocktail Sausages', time: 1788 },
      { step: 'Add Oil to the pan and fry the Cocktail Sausages for 1 minute and the Smiley Potatoes for 5 minutes', time: 1950 },
      { step: 'Add Blue Food Color to the Rice and mix', time: 2409 },
      { step: 'Give the Rice a slime shape', time: 2680 },
      { step: 'Place Lettuce on the bottom of one Bento Box until it is covered', time: 2890 },
      { step: 'Place the Rice, 3 Broccoli Heads, the Smiley Potatoes, the Cherry Tomatoes and the Cocktail Sausages on top of the Lettuce', time: 3010 },
      { step: 'Take 2 circle shapes from the Slice of Processed Cheese and place them on top of the Rice like eyes', time: 3275 },
      { step: 'Take 2 small circle shapes of Seaweed and place them on top of the cheese like pupils', time: 3343 },
      { step: 'Cut the Crab Stick, make a mouth shape and place it on top of the rice', time: 3383 },
      { step: 'Add enough Oil to the pan to fry the chicken and warm it on low heat for 3 minutes', time: 3773 },
      { step: 'Take the pieces of Chicken, cover them in Flour and put them in the pan for 10 minutes while turning them around', time: 3963 },
      { step: 'Place Lettuce on the bottom of the other Bento Box until it is covered', time: 5030 },
      { step: 'Place the Fried Chicken, one Broccoli Head and the Lemon on top of the Lettuce', time: 5047 },
    ],
    stepsJP: [],
  },
  {
    img: hamburger,
    title: 'ハンバーガー (Hamburger)',
    price: '????',
    videoId: '4MdM34zBqI8',
    modalCols: 4,
    recipeCard: true,
    ingredientsEN: [
      { name: '1 Hamburger Bun' },
      { name: '200g Ground Beef' },
      { name: 'Butter' },
      { name: '1 Slice of Cheese' },
      { name: '1/4 Onion' },
      { name: '1/4 Tomato' },
      { name: '1/4 Lettuce' },
      { name: 'Pepper' },
      { name: 'Soy Sauce' },
      { name: 'Mustard' },
      { name: 'Mayonnaise' },
      { name: 'Ketchup' },
      { name: 'Chili Sauce' },
      { name: '2 Pickled Cucumbers' },
      { name: 'Sugar' },
      { name: 'Cooking Oil' },
      { name: '1 Pineapple Slice' },
      { name: '3 Slices of Bacon' },
    ],
    ingredientsJP: [],
    stepsEN: [
      { step: 'Slice the bun in half', time: 590 },
      { step: 'Slice the tomato', time: 727 },
      { step: 'Slice the onion', time: 820 },
      { step: 'Add one spoon of Soy Sauce to the Ground Beef', time: 1060 },
      { step: 'Add one spoon of Sugar to the Ground Beef', time: 1148 },
      { step: 'Knead the Ground Beef and mix the added ingredients', time: 1187 },
      { step: 'Add Pepper to taste to the Ground Beef', time: 1232 },
      { step: 'Knead the Ground Beef and mix the Pepper', time: 1290 },
      { step: 'Shape the Ground Beef into a patty', time: 1320 },
      { step: 'Warm the pan', time: 1682 },
      { step: 'Add Butter to the sliced bun and grill on the pan for 30 seconds on medium heat', time: 1782 },
      { step: 'Add Oil to the pan and fry the sliced onion and pineapple for 3 minutes on medium heat', time: 1890 },
      { step: 'Add Oil to the pan and fry the patty for 3 minutes on each side on medium heat', time: 2181 },
      { step: 'Add Oil to the pan and fry the sliced bacon for 2 minutes', time: 2298 },
      { step: 'Cover the patty with the slice of cheese while still on the pan and wait for the cheese to melt', time: 2668 },
      { step: 'Slice the pickled cucumbers', time: 2882 },
      { step: 'Add mustard to one half of the bun', time: 2956 },
      { step: 'Add the lettuce on top of the bun', time: 3057 },
      { step: 'Add the onion on top of the lettuce', time: 3120 },
      { step: 'Add the patty on top of the onion', time: 3169 },
      { step: 'Add mayonnaise, ketchup and chili sauce to taste on top of the patty', time: 3253 },
      { step: 'Add the tomato on top of the sauces', time: 3398 },
      { step: 'Add the pineapple on top of the tomato', time: 3430 },
      { step: 'Add bacon on top of the pineapple', time: 3500 },
      { step: 'Add the pickled cucumbers on top of the bacon', time: 3553 },
      { step: 'Add the other half of the bun on top', time: 3800 },
    ],
    stepsJP: [],
  },
];

export default itemData;