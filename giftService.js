app.service("giftService", function ($http) {
    //  Strictly Dummy Data 
    // Below are constructors of all the dummy gifts 
    // Specified attributes such as TYPE will connect these and show up in filtered search

    var Gift = function (id, name, description, price, tagline, type, image) {
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
        "Florals packed and presented in the most gorgeous way and in European fashion.", 50, "Make anyone feel amazing!", "flowers", "http://www.lovethispic.com/uploaded_images/298910-Venus-Et-Fleur.jpg"))
    gifts[0].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Balloons",
        "Made of latex.", 1.25, "Balloons ordered in odd numbers look best", "Balloons", "https://78.media.tumblr.com/3a5036a07e84567620668771149072b6/tumblr_omg5iaMF9h1w520aqo1_500.jpg"))
    gifts[1].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Chocolates", "Choose a random box of chocolate mixes or be specific. (i.e.) White Chocolate, Dark Chocolate, Caramel, Strawberry, or Milk Chocolate.",
        3, "Sweets for your sweets", "chocolates", "https://i.pinimg.com/736x/f1/e6/db/f1e6dbc6c50f8333ef15fa6efa16a940--white-chocolate-truffles-chocolate-gift-boxes.jpg"))

    gifts[2].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Birthday Card", "Specify what card you'd like, we'll find it accordingly.", 2.50, "Let the card do the talking", "Occasion Card", "https://i.imgflip.com/1xt29h.jpg"))
    gifts[3].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Slice of Cake", "Options are: chocolate, vanilla, birthday, and tiramisu.", 4, "They might be hungry and could use a slice!", "Cake", "http://img1.cookinglight.timeinc.net/sites/default/files/updated_main_images/1006p78-slice-cake-x.jpg"))
    gifts[4].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Lingerie", "Imagine your bae in this once you get home", 30, "Your bae deserves to feel special, you seeing them in this, will make you feel special too!", "Lingerie", "https://i.pinimg.com/736x/22/7d/41/227d41dde3e3615f99b0035a7eef694c--wedding-dress-chiffon-casual-wedding-dresses.jpg"))
    gifts[5].tag.push("In Love", "Naughty", "Her")

    gifts.push(new Gift(giftId++, "Giftcard", "They could use free money in a different form.", 100, "This is what they need!", "Giftcard", "http://media.divine.ca/2017/07/s257261684267286_p11111_i5_w500.jpeg"))
    gifts[6].tag.push("Wise", "Friends", "Family", "Him", "Her", "I'm Sorry", "Good Vibes", "Sympathy", "Celebrate")

    gifts.push(new Gift(giftId++, "Succulent", "A succulent for your succulent", 12, "A cute lil plant to make them feel at ease", "Plant", "http://www.ikea.com/gb/en/images/products/succulent-potted-plant-with-pot-grey__0493626_pe626426_s4.jpg"))
    gifts[7].tag.push("Celebration", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Case of Beer", "A case of good brew that'll make anyone feel warm", 20, "Brew for the soul", "Beer", "https://1372d34c156f12457517-c8b49206fc42ea00d5fd50b8ec61d670.ssl.cf2.rackcdn.com/0080660956150_A1L1_ItemMaster_default_large.jpeg"))
    gifts[8].tag.push("Celebration", "Him", "Friends", "Good Vibes")

    gifts.push(new Gift(giftId++, "Cakepops", "Sweets for your sweets", 5, "Yum!! These'll make anyone's tummy happy", "Cakepops", "http://2.bp.blogspot.com/-vpA5M8v7h2I/UcDh_6MfAxI/AAAAAAAAIJM/Bp5yke5rD14/s1600/cakepops.jpg"))
    gifts[9].tag.push("In Love", "Celebration", "Good Vibes", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Card Game", "Fun night", 50, "For friends and all", "fun", "https://www.boysstuff.co.uk/uploaded/prod_zoom_center/naughtypairs500_61557.jpg"))
    gifts[10].tag.push("Celebrate", "Family", "Friends", "Wise", "Good Vibes")

    gifts.push(new Gift(giftId++, "Teddy Bears", "Cute cuddly bears", 10, "Fluffy wuffy bear for your honeybear", "Teddybear", "https://media.costco.co.uk/medias/sys_master/root/h7a/h9c/8891753529374.jpg"))
    gifts[11].tag.push("Celebration", "Sympathy", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Tiffanys", "Diamonds and what not", 32, "For your fiance", "Lingerie", "https://media-cdn.tripadvisor.com/media/photo-s/0e/a0/97/27/tiffany-s-blue-bag.jpg"))
    gifts[12].tag.push("Her", "Him", "In Love")

    gifts.push(new Gift(giftId++, "Bitcoin", "Money that is used anonymously for large purchases", 11000, "For anyone who wants a bitcoin but doesn't want to use their own money!", "Bitcoin", "https://ae01.alicdn.com/kf/HTB12h81JVXXXXblXpXXq6xXFXXXz/Hot-Old-German-Coins-100pcs-Gold-Plated-amp-Bronze-Physical-Bitcoins-Casascius-Bit-Souvenir-Replica-Coins.jpg"))
    gifts[13].tag.push("Wise", "Him", "Her", "Friends", "Family")

    gifts.push(new Gift(giftId++, "Hermes Scarf", "If you're a baller, show it buy purchasing this. We dare you!", 3000, "Accessory", "Scarf", "https://carredeparis.me/wp-content/uploads/2015/11/2-cavaliers-dor-hermes-scarves-with-anneau-ceinture-horn-scarf-carre-de-paris-ii.jpg"))
    gifts[14].tag.push("Friends", "Family", "Her", "Him", "I'm Sorry", "Good Vibes", "Celebration", "Wise")

    gifts.push(new Gift(giftId++, "Ray Ban Glasses", "Everyone likes new pricey sunglasses!", 110, "Can't make it to the mall? Here!!!", "Sunglasses", "https://cdn.shopify.com/s/files/1/0874/9936/products/Men-Driving-Sunglasses-Fashion-Brand-Designer-Coating-Mirror-Sun-Glasses-Oculos-de-sol-feminino-Retro-lunettes_large.jpg?v=1470017743"))
    gifts[15].tag.push("Him", "Her", "Family")

    gifts.push(new Gift(giftId++, "Cheese & Wine Set", "For yourself or others, the cheese and wine are imported", 40, "The quick and easy option sometimes", "CheeseNWine", "https://gourmetbasket.com.au/wp-content/uploads/2016/08/Cheese-and-Wine-Gift-Basket.jpg"))
    gifts[16].tag.push("In Love", "Celebration", "Good Vibes", "I'm Sorry", "Friends", "Family", "Him", "Her")

    gifts.push(new Gift(giftId++, "Drinking Game", "Like Monopoly, but beer.", 35, "Beer Monopoly", "Boardgame", "https://i.pinimg.com/736x/54/e3/df/54e3df4588ea9401dbb2d276bf2d4bbd--drinking-games-what-next.jpg"))
    gifts[17].tag.push("Celebrate", "Family", "Friends", "Wise", "Good Vibes")

    gifts.push(new Gift(giftId++, "Victoria Secret Set", "A mega sexy Victoria Secret set for your special lady", 90, "Imagine your bae in this!", "Lingerie", "http://picture-cdn.wheretoget.it/125l6s-l-610x610-underwear-victoria+s+secret-sequins-lingerie-lingerie+set-sexy-garter+belt-garter-bra-black-vs-victoria+s+secret+fashion.jpg"))
    gifts[18].tag.push("Her", "In Love")

    gifts.push(new Gift(giftId++, "Grooming Set", "Keep the men in your life looking fresh and clean!", 30, "Smooth and efficient razors", "Set", "https://images-na.ssl-images-amazon.com/images/I/81nW25fxXaL._SY355_.jpg"))
    gifts[19].tag.push("Him", "Friends", "Family")

    gifts.push(new Gift(giftId++, "Perfume/Cologne", "Smells like rich people", 120, "Ahhhh!!! Smells so good", "Fragrance", "https://media.kohlsimg.com/is/image/kohls/2664746?wid=1000&hei=1000&op_sharpen=1"))
    gifts[20].tag.push("Him", "Friends", "Family")

    gifts.push(new Gift(giftId++, "Protein Powder", "Fitness goodie!", 17, "For someone who wants to get fit but needs motivation!", "Protein", "https://images-na.ssl-images-amazon.com/images/I/610JkBuY7mL._SY355_.jpg"))
    gifts[21].tag.push("Him", "Her", "Family", "Friends")

    gifts.push(new Gift(giftId++, "Pinata", "Party ready!", 22, "Can't make it to the market and party on time? This'll do!", "Party Accessory", "https://images-na.ssl-images-amazon.com/images/I/71ojsuAQ6SL._SL1500_.jpg"))
    gifts[22].tag.push("Friends", "Good Vibes", "Family", "Celebration")

    gifts.push(new Gift(giftId++, "Disneyland Tickets", "Be with your bae @ the mouse trap", 300, "For Disney lovers!", "Amusement Park Tickets", "https://static1.squarespace.com/static/5764b5749f745637012cad40/t/59baf1854c326d1763405f5c/1505423951734/2017+Disney+Halloween+650x308.jpg"))
    gifts[23].tag.push("In Love", "Celebration", "Good Vibes", "I'm Sorry", "Friends", "Family", "Him", "Her")

    // view
    this.getGifts = function () {
        return gifts
    }
    // create
    this.getGiftById = function (create) {
        return getGiftById
    }
    // edit
    this.updateGift = function (edit) {

    }
    // add
    this.addGift = function () {

    }
    
    // delete
    this.deleteGift = function () {
        for (var i = 0; i < gifts.length; i++) {
            if (deleteGift[i].name === name) {
                index = i;
                break;
            }
            if (index === -1) {
                alert("Ruh roh! Something went wrong.");
            }
        }
    }

})

