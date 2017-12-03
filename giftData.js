//  Strictly Dummy Data 
// Below are constructors of all the dummy gifts 
// Angular injection included below

var Gift = function(id, name, description, price, tagline, type, image){

    this.id = id; 
    this.name = name;
    this.description = description; 
    this.price = price;
    this.tagline = tagline; 
    this.type = type; 
    this.image = image; 
    this.tag = []; 
}

var giftId = 0
var gifts = []; 

gifts.push(new Gift(giftId++, "Flower Bouqets", 
"Florals packed and presented in the most gorgeous way and in European fashion.", 50, "Make anyone feel amazing!", "flowers", "imgurl"))
gifts[0].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Balloons",
"Made of latex.", 1.25, "Balloons ordered in odd numbers look best", "Balloons", "urlofimage"))
gifts[1].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Chocolates", "Choose a random box of chocolate mixes or be specific. (i.e.) White Chocolate, Dark Chocolate, Caramel, Strawberry, or Milk Chocolate.",
3, "Sweets for your sweets", "chocolates", "urlofimage"))
gifts[2].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Occassion Card", "Specify what card you'd like, we'll find it accordingly.", 2.50, "Let the card do the talking", "Occasion Card", "urlimg"))
gifts[3].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Slice of Cake", "Options are: chocolate, vanilla, birthday, and tiramisu.", 4, "They might be hungry and could use a slice!", "Cake", "urlimg"))
gifts[4].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Lingerie", "Imagine your bae in this once you get home", 30, "Your bae deserves to feel special, you seeing them in this, will make you feel special too!", "Lingerie", "urlimg"))
gifts[5].tag.push("In Love", "Naughty", "Her")

gifts.push(new Gift(giftId++, "Giftcard", "They could use free money in a different form.", 100, "This is what they need!", "Giftcard", "urlimg"))
gifts[6].tag.push("Wise", "Friends", "Family", "Him", "Her", "I'm Sorry", "Good Vibes", "Sympathy", "Celebrate")

gifts.push(new Gift(giftId++, "Succulent", "A succulent for your succulent", 12, "A cute lil plant to make them feel at ease", "Plant", "urlimg"))
gifts[7].tag.push("Celebration", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Case of Beer", "A case of good brew that'll make anyone feel warm", 20, "Brew for the soul", "Beer", "imgurl"))
gifts[8].tag.push("Celebration", "Him", "Friends", "Good Vibes")

gifts.push(new Gift(giftId++, "Cupcakes", "Sweets for your sweets", 5, "Yum!! These'll make anyone's tummy happy", "Cupcakes", "urlimg"))
gifts[9].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Adult Fun", "This'll make your woman happy", 50, "Get her this, then she won't have time to think about cheating on you", "Adult Toy", "urlimg"))
gifts[10].tag.push("Naughty", "Her", "In Love")

gifts.push(new Gift(giftId++, "Teddy Bears", "Cute cuddly bears", 10, "Fluffy wuffy bear for your honeybear", "Teddybear", "urlimg"))
gifts[11].tag.push("Celebration", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "BDSM Set", "Kit includes a blindfold, handcuffs, gag ball, silk tie", 32, "For the sexually adventurous", "Lingerie", "urlimg"))
gifts[12].tag.push("Naughty", "Her", "Him", "In Love")

gifts.push(new Gift(giftId++, "Bitcoin", "Money that is used anonymously for large purchases", 15, "For anyone who wants a bitcoin but doesn't want to use their own money!", "Bitcoin", "urlimg"))
gifts[13].tag.push("Wise", "Him", "Her", "Friends", "Family")

gifts.push(new Gift(giftId++, "Hermes Unisex Scarf", "If you're a baller, show it buy purchasing this. We dare you!", 3,000, "Scarf", "urlimg"))
gifts[14].tag.push("Friends", "Family", "Her", "Him", "I'm Sorry", "Good Vibes", "Celebration", "Wise")

gifts.push(new Gift(giftId++, "Ray Ban Sunglasses", "Everyone likes new pricey sunglasses!", 110, "Can't make it to the mall? Here!!!", "Sunglasses", "urlimg"))
gifts[15].tag.push("Him", "Her", "Family")

gifts.push(new Gift(giftId++, "Cheese & Wine Gift Set", "For yourself or others, the cheese and wine are imported", 40, "The quick and easy option sometimes", "CheeseNWine", "urlimg"))
gifts[16].tag.push("In Love", "Celebration", "Good Vibes", "I'm Sorry", "Friends", "Family", "Him", "Her")

gifts.push(new Gift(giftId++, "Drinking Game", "Like Monopoly, but beer.", 35, "Beer Monopoly", "Boardgame", "urlimg"))
gifts[17].tag.push("Celebrate", "Family", "Friends", "Wise", "Good Vibes")

gifts.push(new Gift(giftId++, "Victoria Secret Set", "A mega sexy Victoria Secret set for your special lady", 90, "Imagine your bae in this!", "Lingerie", "urlimg"))
gifts[18].tag.push("Her", "In Love")

gifts.push(new Gift(giftId++, "Grooming Set", "Keep the men in your life looking fresh and clean!", 30, "Smooth and efficient razors", "Set", "imgurl"))
gifts[19].tag.push("Him", "Friends", "Family")

gifts.push(new Gift(giftId++, "Burberry Perfume/Cologne", "Smells like rich people", 120, "Ahhhh!!! Smells so good", "Fragrance", "imgurl"))
gifts[20].tag.push("Him", "Friends", "Family")

gifts.push(new Gift(giftId++, "Whiskey Set", "For the strong souls", 100, "A hell of a jar for a hell of person", "Alcohol", "urlimg"))
gifts[21].tag.push("Him", "Friends", "Family", "Celebration", "Good Vibes", "I'm Sorry")


$scope.id = "";
$scope.name = "";
$scope.description = "";
$scope.price = "";
$scope.tagline = "";
$scope.type = "";
$scope.image = "";
$scope.tag = "";

$scope.addGifts = function() {
$scope.gifts.unshift(new gifts($scope.id, $scope.name, $scope.description, $scope.price, $scope.tagline, $scope.type, $scope.image, $scope.tag))

// reset the variables 
$scope.id = "";
$scope.name = "";
$scope.description = "";
$scope.price = "";
$scope.tagline = "";
$scope.type = "";
$scope.image = "";
$scope.tag = "";

console.log($scope.gifts);
}

