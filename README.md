# Testdriven-Development-Vegetable-Garden
This is my first assignment I made with "Jest" A library for Test Driven Development (Javascript) from NPM. In this assignment we are going to write code for a vegetable garden. Where we are increasingly implementing a little more functionality
![tdd](https://user-images.githubusercontent.com/72910410/110774897-94ce0b00-825e-11eb-8e6a-6729170d9181.jpg)

#### Assignment: TDD Vegetable-Garden


## Terminology and vegetable formulas
But first back to the plants. We grow fruit and vegetables in a garden. We are going to calculate how much yield the various fruits and vegetables have for the garden. We will also take into account environmental factors such as sun, wind and temperature. These environmental factors influence how many kilos of fruit and vegetables grow on the plants. Finally, we will calculate how much profit we can make with our vegetable garden.

## Terms and definitions:

>- "crop" is a collection of plants of the same species, eg a field of maize
>- "costs" are the costs of sowing one plant
>- "yield" is the yield of one plant or one crop (in kilos)
>- "sale price" is the selling price of a type of fruit or vegetable per kilo
>- "revenue" is the turnover or income of one kilogram of fruit or vegetables
>- "profits" is profit, so that is revenue - costs
>- "factor" in this context is an environmental factor that influences the yield

To keep the calculations simple in the first instance, we make the following assumptions: * fruit and vegetables are always sold immediately (you do not have to take into account spoilage or too little demand) * there are no wage costs * we do not use fertilizer * we do not have to not to pay for the land
We have a number of formulas for the calculations. The formulas are relatively simple, but taken together the code can get quite complex.

**cost**
The costs to sow a plant are fixed per plant.
>- Example: Sowing 1 corn plant costs 1 euro.

If you have a crop of 230 corn plants, the costs for that crop are 230 euros.

**Revenue**
Each plant has a "sale price". That is how many euros you earn with one kilo of fruit or vegetables from that plant.
If apples have a sale price of 2 euros and we sell 5 kilos of apples, the revenue is 10 euros.

**Yield of one plant**
Each plant has a standard yield in kilograms. If there are no environmental factors at play, that is the yield.
Each plant can have zero, one or more environmental factors. Each environmental factor has a value, that value is the percentage effect on the yield.
As an example we can take avocado and the sun as an environmental factor. If an avocado gets a certain amount of sun, the yield will be different:
>- lots of sun: + 50% yield
>- medium sun: 100% yield
>- little sun: -20% yield

Let's say an avocado plant has a standard yield of 3 pounds. In addition, let's say there is a lot of sun. Then that plant will yield 3kg * 150% = 4.5 kilos of avocados.

**But suppose there is another factor: wind.**
>- a lot of wind: -60% yield
>- medium wind: -30% yield
>- little wind: 100% yield
>
And let's say that now there is not only a lot of sun, but also a lot of wind. Then we can calculate the yield like this: 3 kg * 150% * 40% = 1.8 kg.
If there is a factor that does not affect a particular plant species, then you do not have to include it. Example:
The growth of avocado plants is not affected by the soil type. If the avocado plant grows on clay, that factor has no influence on how many kilos of avocados an avocado plant produces. If other plants grow in the vegetable garden that are affected by this, you must of course take this into account.

## Then add functionality step by step. 

**Use the TDD cycle at the top of this command. Add the functionality in the following steps:**
>- calculate the cost for a crop: getCostsForCrop
>- calculate earnings for a crop (without environmental factors): getRevenueForCrop
>- calculate the profit for a crop (without environmental factors): getProfitGorCrop
>- calculate the profit for multiple crops (without environmental factors): getTotalProfit
__(BONUS) You can take the following steps by modifying the previously written functions. So you do not write new functions. This means that you must check in the position whether or not relevant environmental factors have been included.__
>- take environmental factors into account when calculating the yield (in kilos) of a plant: getYieldForPlant, use the following data structures:
