// Translation dictionary for all UI labels and messages
const translations = {
  en: {
    logo: "Fridge2Plate",
    filtersTitle: "Filters",
    mealTypeTitle: "Meal type",
    ingredientTitle: "Select your ingredients",
    missingLabel: "Maximum missing ingredients",
    showRecipes: "Show recipes",
    recipesHeading: "Recipes you can cook",
    emptyState: "No recipes match your filters. Try relaxing them.",
    categories: {
      "Vegetable": "Vegetables",
      "Fruit": "Fruits",
      "Dairy / Protein": "Dairy / Protein",
      "Meat": "Meat",
      "Grains": "Grains",
      "Spices": "Spices",
      "Sauces": "Sauces",
      "Other": "Other"
    },
    mealTypes: {
      Breakfast: "Breakfast",
      Soup: "Soup",
      Main: "Main",
      Dessert: "Dessert",
      Salad: "Salad",
      Snack: "Snack",
      Side: "Side"
    },
    difficulty: {
      Easy: "Easy",
      Medium: "Medium",
      Hard: "Hard"
    }
  },
  tr: {
    logo: "Fridge2Plate",
    filtersTitle: "Filtreler",
    mealTypeTitle: "Yemek türü",
    ingredientTitle: "Malzemelerini seç",
    missingLabel: "En fazla eksik malzeme",
    showRecipes: "Tarifleri göster",
    recipesHeading: "Pişirebileceğin tarifler",
    emptyState: "Filtrelerine uyan tarif bulunamadı. Filtreleri gevşetmeyi dene.",
    categories: {
      "Vegetable": "Sebzeler",
      "Fruit": "Meyveler",
      "Dairy / Protein": "Süt Ürünleri / Protein",
      "Meat": "Et",
      "Grains": "Tahıllar",
      "Spices": "Baharatlar",
      "Sauces": "Soslar",
      "Other": "Diğer"
    },
    mealTypes: {
      Breakfast: "Kahvaltı",
      Soup: "Çorba",
      Main: "Ana Yemek",
      Dessert: "Tatlı",
      Salad: "Salata",
      Snack: "Atıştırmalık",
      Side: "Yan Yemek"
    },
    difficulty: {
      Easy: "Kolay",
      Medium: "Orta",
      Hard: "Zor"
    }
  }
};

let currentLanguage = "en";

// Ingredient dataset around 150 items grouped by category
const ingredientSeeds = [
  // Dairy / Protein
  { nameEn: "Egg", nameTr: "Yumurta", category: "Dairy / Protein" },
  { nameEn: "Milk", nameTr: "Süt", category: "Dairy / Protein" },
  { nameEn: "Yogurt", nameTr: "Yoğurt", category: "Dairy / Protein" },
  { nameEn: "Feta Cheese", nameTr: "Beyaz Peynir", category: "Dairy / Protein" },
  { nameEn: "Cheddar", nameTr: "Kaşar", category: "Dairy / Protein" },
  { nameEn: "Mozzarella", nameTr: "Mozzarella", category: "Dairy / Protein" },
  { nameEn: "Butter", nameTr: "Tereyağı", category: "Dairy / Protein" },
  { nameEn: "Cream", nameTr: "Krema", category: "Dairy / Protein" },
  { nameEn: "Ricotta", nameTr: "Ricotta", category: "Dairy / Protein" },
  { nameEn: "Parmesan", nameTr: "Parmesan", category: "Dairy / Protein" },
  { nameEn: "Labneh", nameTr: "Labne", category: "Dairy / Protein" },
  { nameEn: "Halloumi", nameTr: "Hellim", category: "Dairy / Protein" },
  { nameEn: "Plain Yogurt", nameTr: "Sade Yoğurt", category: "Dairy / Protein" },
  { nameEn: "Greek Yogurt", nameTr: "Süzme Yoğurt", category: "Dairy / Protein" },
  { nameEn: "Cottage Cheese", nameTr: "Lor Peyniri", category: "Dairy / Protein" },
  { nameEn: "Goat Cheese", nameTr: "Keçi Peyniri", category: "Dairy / Protein" },
  { nameEn: "Cream Cheese", nameTr: "Krem Peynir", category: "Dairy / Protein" },
  { nameEn: "Paneer", nameTr: "Paneer", category: "Dairy / Protein" },
  { nameEn: "Tofu", nameTr: "Tofu", category: "Dairy / Protein" },
  { nameEn: "Tempeh", nameTr: "Tempeh", category: "Dairy / Protein" },
  { nameEn: "Chickpea", nameTr: "Nohut", category: "Dairy / Protein" },
  { nameEn: "Lentil", nameTr: "Mercimek", category: "Dairy / Protein" },
  { nameEn: "Kidney Bean", nameTr: "Barbunya", category: "Dairy / Protein" },
  { nameEn: "White Bean", nameTr: "Kuru Fasulye", category: "Dairy / Protein" },
  { nameEn: "Black Bean", nameTr: "Siyah Fasulye", category: "Dairy / Protein" },
  { nameEn: "Peanut", nameTr: "Yer Fıstığı", category: "Dairy / Protein" },
  { nameEn: "Almond", nameTr: "Badem", category: "Dairy / Protein" },
  { nameEn: "Walnut", nameTr: "Ceviz", category: "Dairy / Protein" },
  { nameEn: "Hazelnut", nameTr: "Fındık", category: "Dairy / Protein" },
  { nameEn: "Sunflower Seed", nameTr: "Ayçekirdeği", category: "Dairy / Protein" },
  { nameEn: "Pumpkin Seed", nameTr: "Kabak Çekirdeği", category: "Dairy / Protein" },
  { nameEn: "Sesame", nameTr: "Susam", category: "Dairy / Protein" },
  { nameEn: "Tahini", nameTr: "Tahin", category: "Dairy / Protein" },
  { nameEn: "Egg White", nameTr: "Yumurta Beyazı", category: "Dairy / Protein" },
  { nameEn: "Quark", nameTr: "Quark", category: "Dairy / Protein" },
  { nameEn: "Soy Milk", nameTr: "Soya Sütü", category: "Dairy / Protein" },
  { nameEn: "Almond Milk", nameTr: "Badem Sütü", category: "Dairy / Protein" },
  { nameEn: "Coconut Milk", nameTr: "Hindistan Cevizi Sütü", category: "Dairy / Protein" },
  { nameEn: "Oat Milk", nameTr: "Yulaf Sütü", category: "Dairy / Protein" },

  // Meat
  { nameEn: "Chicken Breast", nameTr: "Tavuk Göğsü", category: "Meat" },
  { nameEn: "Chicken Thigh", nameTr: "Tavuk But", category: "Meat" },
  { nameEn: "Ground Beef", nameTr: "Kıyma", category: "Meat" },
  { nameEn: "Beef Steak", nameTr: "Biftek", category: "Meat" },
  { nameEn: "Lamb", nameTr: "Kuzu", category: "Meat" },
  { nameEn: "Sausage", nameTr: "Sosis", category: "Meat" },
  { nameEn: "Sucuk", nameTr: "Sucuk", category: "Meat" },
  { nameEn: "Pastirma", nameTr: "Pastırma", category: "Meat" },
  { nameEn: "Salami", nameTr: "Salam", category: "Meat" },
  { nameEn: "Turkey Meat", nameTr: "Hindi", category: "Meat" },
  { nameEn: "Shrimp", nameTr: "Karides", category: "Meat" },
  { nameEn: "Salmon", nameTr: "Somon", category: "Meat" },
  { nameEn: "White Fish", nameTr: "Beyaz Balık", category: "Meat" },
  { nameEn: "Tuna", nameTr: "Ton Balığı", category: "Meat" },
  { nameEn: "Anchovy", nameTr: "Hamsi", category: "Meat" },
  { nameEn: "Calamari", nameTr: "Kalamar", category: "Meat" },
  { nameEn: "Mussels", nameTr: "Midye", category: "Meat" },
  { nameEn: "Octopus", nameTr: "Ahtapot", category: "Meat" },
  { nameEn: "Duck", nameTr: "Ördek", category: "Meat" },
  { nameEn: "Veal", nameTr: "Dana Eti", category: "Meat" },
  { nameEn: "Meatball", nameTr: "Köfte", category: "Meat" },
  { nameEn: "Bacon", nameTr: "Pastırma Bacon", category: "Meat" },
  { nameEn: "Ham", nameTr: "Jambon", category: "Meat" },
  { nameEn: "Prosciutto", nameTr: "Prosciutto", category: "Meat" },
  { nameEn: "Crab", nameTr: "Yengeç", category: "Meat" },
  { nameEn: "Liver", nameTr: "Ciğer", category: "Meat" },
  { nameEn: "Beef Broth", nameTr: "Et Suyu", category: "Meat" },

  // Vegetables
  { nameEn: "Tomato", nameTr: "Domates", category: "Vegetable" },
  { nameEn: "Onion", nameTr: "Soğan", category: "Vegetable" },
  { nameEn: "Garlic", nameTr: "Sarımsak", category: "Vegetable" },
  { nameEn: "Green Pepper", nameTr: "Yeşil Biber", category: "Vegetable" },
  { nameEn: "Red Pepper", nameTr: "Kırmızı Biber", category: "Vegetable" },
  { nameEn: "Potato", nameTr: "Patates", category: "Vegetable" },
  { nameEn: "Carrot", nameTr: "Havuç", category: "Vegetable" },
  { nameEn: "Cucumber", nameTr: "Salatalık", category: "Vegetable" },
  { nameEn: "Eggplant", nameTr: "Patlıcan", category: "Vegetable" },
  { nameEn: "Zucchini", nameTr: "Kabak", category: "Vegetable" },
  { nameEn: "Broccoli", nameTr: "Brokoli", category: "Vegetable" },
  { nameEn: "Cauliflower", nameTr: "Karnabahar", category: "Vegetable" },
  { nameEn: "Spinach", nameTr: "Ispanak", category: "Vegetable" },
  { nameEn: "Kale", nameTr: "Kara Lahana", category: "Vegetable" },
  { nameEn: "Lettuce", nameTr: "Marul", category: "Vegetable" },
  { nameEn: "Parsley", nameTr: "Maydanoz", category: "Vegetable" },
  { nameEn: "Dill", nameTr: "Dereotu", category: "Vegetable" },
  { nameEn: "Cilantro", nameTr: "Kişniş", category: "Vegetable" },
  { nameEn: "Celery", nameTr: "Kereviz", category: "Vegetable" },
  { nameEn: "Leek", nameTr: "Pırasa", category: "Vegetable" },
  { nameEn: "Mushroom", nameTr: "Mantar", category: "Vegetable" },
  { nameEn: "Scallion", nameTr: "Taze Soğan", category: "Vegetable" },
  { nameEn: "Arugula", nameTr: "Roka", category: "Vegetable" },
  { nameEn: "Beetroot", nameTr: "Pancar", category: "Vegetable" },
  { nameEn: "Okra", nameTr: "Bamya", category: "Vegetable" },
  { nameEn: "Corn", nameTr: "Mısır", category: "Vegetable" },
  { nameEn: "Green Bean", nameTr: "Taze Fasulye", category: "Vegetable" },
  { nameEn: "Peas", nameTr: "Bezelye", category: "Vegetable" },
  { nameEn: "Artichoke", nameTr: "Enginar", category: "Vegetable" },
  { nameEn: "Asparagus", nameTr: "Kuşkonmaz", category: "Vegetable" },
  { nameEn: "Butternut Squash", nameTr: "Bal Kabağı", category: "Vegetable" },
  { nameEn: "Sweet Potato", nameTr: "Tatlı Patates", category: "Vegetable" },
  { nameEn: "Red Cabbage", nameTr: "Kırmızı Lahana", category: "Vegetable" },
  { nameEn: "White Cabbage", nameTr: "Beyaz Lahana", category: "Vegetable" },
  { nameEn: "Radish", nameTr: "Turp", category: "Vegetable" },
  { nameEn: "Pumpkin", nameTr: "Balkabağı", category: "Vegetable" },
  { nameEn: "Green Olive", nameTr: "Yeşil Zeytin", category: "Vegetable" },
  { nameEn: "Black Olive", nameTr: "Siyah Zeytin", category: "Vegetable" },
  { nameEn: "Cherry Tomato", nameTr: "Çeri Domates", category: "Vegetable" },
  { nameEn: "Pickle", nameTr: "Turşu", category: "Vegetable" },

  // Fruit
  { nameEn: "Apple", nameTr: "Elma", category: "Fruit" },
  { nameEn: "Banana", nameTr: "Muz", category: "Fruit" },
  { nameEn: "Orange", nameTr: "Portakal", category: "Fruit" },
  { nameEn: "Lemon", nameTr: "Limon", category: "Fruit" },
  { nameEn: "Lime", nameTr: "Misket Limonu", category: "Fruit" },
  { nameEn: "Grape", nameTr: "Üzüm", category: "Fruit" },
  { nameEn: "Strawberry", nameTr: "Çilek", category: "Fruit" },
  { nameEn: "Blueberry", nameTr: "Yaban Mersini", category: "Fruit" },
  { nameEn: "Raspberry", nameTr: "Ahududu", category: "Fruit" },
  { nameEn: "Peach", nameTr: "Şeftali", category: "Fruit" },
  { nameEn: "Apricot", nameTr: "Kayısı", category: "Fruit" },
  { nameEn: "Pear", nameTr: "Armut", category: "Fruit" },
  { nameEn: "Pineapple", nameTr: "Ananas", category: "Fruit" },
  { nameEn: "Mango", nameTr: "Mango", category: "Fruit" },
  { nameEn: "Watermelon", nameTr: "Karpuz", category: "Fruit" },
  { nameEn: "Melon", nameTr: "Kavun", category: "Fruit" },
  { nameEn: "Kiwi", nameTr: "Kivi", category: "Fruit" },
  { nameEn: "Pomegranate", nameTr: "Nar", category: "Fruit" },
  { nameEn: "Fig", nameTr: "İncir", category: "Fruit" },
  { nameEn: "Date", nameTr: "Hurma", category: "Fruit" },
  { nameEn: "Plum", nameTr: "Erik", category: "Fruit" },
  { nameEn: "Cherry", nameTr: "Kiraz", category: "Fruit" },
  { nameEn: "Blackberry", nameTr: "Böğürtlen", category: "Fruit" },
  { nameEn: "Cranberry", nameTr: "Turna Yemişi", category: "Fruit" },
  { nameEn: "Avocado", nameTr: "Avokado", category: "Fruit" },
  { nameEn: "Coconut", nameTr: "Hindistan Cevizi", category: "Fruit" },
  { nameEn: "Mandarin", nameTr: "Mandalina", category: "Fruit" },
  { nameEn: "Grapefruit", nameTr: "Greyfurt", category: "Fruit" },
  { nameEn: "Passion Fruit", nameTr: "Çarkıfelek", category: "Fruit" },
  { nameEn: "Papaya", nameTr: "Papaya", category: "Fruit" },

  // Grains
  { nameEn: "Rice", nameTr: "Pirinç", category: "Grains" },
  { nameEn: "Bulgur", nameTr: "Bulgur", category: "Grains" },
  { nameEn: "Quinoa", nameTr: "Kinoa", category: "Grains" },
  { nameEn: "Couscous", nameTr: "Kuskus", category: "Grains" },
  { nameEn: "Pasta", nameTr: "Makarna", category: "Grains" },
  { nameEn: "Spaghetti", nameTr: "Spagetti", category: "Grains" },
  { nameEn: "Whole Wheat Pasta", nameTr: "Tam Buğday Makarna", category: "Grains" },
  { nameEn: "Brown Rice", nameTr: "Kepekli Pirinç", category: "Grains" },
  { nameEn: "Barley", nameTr: "Arpa", category: "Grains" },
  { nameEn: "Oats", nameTr: "Yulaf", category: "Grains" },
  { nameEn: "Bread", nameTr: "Ekmek", category: "Grains" },
  { nameEn: "Lavash", nameTr: "Lavaş", category: "Grains" },
  { nameEn: "Pita", nameTr: "Pide Ekmeği", category: "Grains" },
  { nameEn: "Tortilla", nameTr: "Tortilla", category: "Grains" },
  { nameEn: "Noodle", nameTr: "Erişte", category: "Grains" },
  { nameEn: "Ramen Noodle", nameTr: "Ramen Eriştesi", category: "Grains" },
  { nameEn: "Vermicelli", nameTr: "Şehriye", category: "Grains" },
  { nameEn: "Flour", nameTr: "Un", category: "Grains" },
  { nameEn: "Corn Flour", nameTr: "Mısır Unu", category: "Grains" },
  { nameEn: "Rice Flour", nameTr: "Pirinç Unu", category: "Grains" },
  { nameEn: "Buckwheat", nameTr: "Karabuğday", category: "Grains" },
  { nameEn: "Millet", nameTr: "Darı", category: "Grains" },
  { nameEn: "Breadcrumbs", nameTr: "Galeta Unu", category: "Grains" },
  { nameEn: "Phyllo", nameTr: "Yufka", category: "Grains" },
  { nameEn: "Polenta", nameTr: "Polenta", category: "Grains" },
  { nameEn: "Cracker", nameTr: "Kraker", category: "Grains" },
  { nameEn: "Tapioca", nameTr: "Tapyoka", category: "Grains" },

  // Spices
  { nameEn: "Salt", nameTr: "Tuz", category: "Spices" },
  { nameEn: "Black Pepper", nameTr: "Karabiber", category: "Spices" },
  { nameEn: "Red Pepper Flakes", nameTr: "Pul Biber", category: "Spices" },
  { nameEn: "Cumin", nameTr: "Kimyon", category: "Spices" },
  { nameEn: "Paprika", nameTr: "Toz Biber", category: "Spices" },
  { nameEn: "Turmeric", nameTr: "Zerdeçal", category: "Spices" },
  { nameEn: "Curry Powder", nameTr: "Köri", category: "Spices" },
  { nameEn: "Oregano", nameTr: "Kekik", category: "Spices" },
  { nameEn: "Thyme", nameTr: "Kekik", category: "Spices" },
  { nameEn: "Rosemary", nameTr: "Biberiye", category: "Spices" },
  { nameEn: "Basil", nameTr: "Fesleğen", category: "Spices" },
  { nameEn: "Mint", nameTr: "Nane", category: "Spices" },
  { nameEn: "Sumac", nameTr: "Sumak", category: "Spices" },
  { nameEn: "Cinnamon", nameTr: "Tarçın", category: "Spices" },
  { nameEn: "Nutmeg", nameTr: "Muskat", category: "Spices" },
  { nameEn: "Clove", nameTr: "Karanfil", category: "Spices" },
  { nameEn: "Allspice", nameTr: "Yenibahar", category: "Spices" },
  { nameEn: "Cardamom", nameTr: "Kakule", category: "Spices" },
  { nameEn: "Ginger Powder", nameTr: "Zencefil Tozu", category: "Spices" },
  { nameEn: "Garlic Powder", nameTr: "Sarımsak Tozu", category: "Spices" },
  { nameEn: "Onion Powder", nameTr: "Soğan Tozu", category: "Spices" },
  { nameEn: "Black Sesame", nameTr: "Çörek Otu", category: "Spices" },
  { nameEn: "Fennel Seed", nameTr: "Rezene", category: "Spices" },
  { nameEn: "Coriander", nameTr: "Kişniş Tohumu", category: "Spices" },
  { nameEn: "Chili Powder", nameTr: "Acı Biber Tozu", category: "Spices" },
  { nameEn: "Saffron", nameTr: "Safran", category: "Spices" },
  { nameEn: "Bay Leaf", nameTr: "Defne Yaprağı", category: "Spices" },

  // Sauces
  { nameEn: "Olive Oil", nameTr: "Zeytinyağı", category: "Sauces" },
  { nameEn: "Vegetable Oil", nameTr: "Ayçiçek Yağı", category: "Sauces" },
  { nameEn: "Butter Sauce", nameTr: "Tereyağı Sosu", category: "Sauces" },
  { nameEn: "Soy Sauce", nameTr: "Soya Sosu", category: "Sauces" },
  { nameEn: "Fish Sauce", nameTr: "Balık Sosu", category: "Sauces" },
  { nameEn: "Worcestershire", nameTr: "Worcestershire Sosu", category: "Sauces" },
  { nameEn: "Balsamic Vinegar", nameTr: "Balzamik Sirke", category: "Sauces" },
  { nameEn: "Apple Cider Vinegar", nameTr: "Elma Sirkesi", category: "Sauces" },
  { nameEn: "Red Wine Vinegar", nameTr: "Kırmızı Şarap Sirkesi", category: "Sauces" },
  { nameEn: "Mayonnaise", nameTr: "Mayonez", category: "Sauces" },
  { nameEn: "Ketchup", nameTr: "Ketçap", category: "Sauces" },
  { nameEn: "Mustard", nameTr: "Hardal", category: "Sauces" },
  { nameEn: "Hot Sauce", nameTr: "Acı Sos", category: "Sauces" },
  { nameEn: "Tahini Sauce", nameTr: "Tahin Sosu", category: "Sauces" },
  { nameEn: "Pesto", nameTr: "Pesto", category: "Sauces" },
  { nameEn: "Tomato Paste", nameTr: "Salça", category: "Sauces" },
  { nameEn: "Harissa", nameTr: "Harissa", category: "Sauces" },
  { nameEn: "Chili Paste", nameTr: "Biber Salçası", category: "Sauces" },
  { nameEn: "Vinegar", nameTr: "Sirke", category: "Sauces" },
  { nameEn: "Honey", nameTr: "Bal", category: "Sauces" },
  { nameEn: "Molasses", nameTr: "Pekmez", category: "Sauces" },
  { nameEn: "Maple Syrup", nameTr: "Akçaağaç Şurubu", category: "Sauces" },
  { nameEn: "Barbecue Sauce", nameTr: "Barbekü Sosu", category: "Sauces" },
  { nameEn: "Salsa", nameTr: "Salsa", category: "Sauces" },
  { nameEn: "Tartar Sauce", nameTr: "Tartar Sosu", category: "Sauces" },

  // Other
  { nameEn: "Sugar", nameTr: "Şeker", category: "Other" },
  { nameEn: "Brown Sugar", nameTr: "Esmer Şeker", category: "Other" },
  { nameEn: "Powdered Sugar", nameTr: "Pudra Şekeri", category: "Other" },
  { nameEn: "Baking Powder", nameTr: "Kabartma Tozu", category: "Other" },
  { nameEn: "Baking Soda", nameTr: "Karbonat", category: "Other" },
  { nameEn: "Yeast", nameTr: "Maya", category: "Other" },
  { nameEn: "Gelatin", nameTr: "Jelatin", category: "Other" },
  { nameEn: "Cornstarch", nameTr: "Nişasta", category: "Other" },
  { nameEn: "Cocoa Powder", nameTr: "Kakao", category: "Other" },
  { nameEn: "Vanilla", nameTr: "Vanilin", category: "Other" },
  { nameEn: "Chocolate", nameTr: "Çikolata", category: "Other" },
  { nameEn: "Dark Chocolate", nameTr: "Bitter Çikolata", category: "Other" },
  { nameEn: "White Chocolate", nameTr: "Beyaz Çikolata", category: "Other" },
  { nameEn: "Peanut Butter", nameTr: "Fıstık Ezmesi", category: "Other" },
  { nameEn: "Jam", nameTr: "Reçel", category: "Other" },
  { nameEn: "Hazelnut Spread", nameTr: "Kakaolu Fındık Kreması", category: "Other" },
  { nameEn: "Raisin", nameTr: "Kuru Üzüm", category: "Other" },
  { nameEn: "Dried Apricot", nameTr: "Kuru Kayısı", category: "Other" },
  { nameEn: "Dried Fig", nameTr: "Kuru İncir", category: "Other" },
  { nameEn: "Almond Flour", nameTr: "Badem Unu", category: "Other" },
  { nameEn: "Coconut Flour", nameTr: "Hindistan Cevizi Unu", category: "Other" },
  { nameEn: "Rolled Oats", nameTr: "Yulaf Ezmesi", category: "Other" },
  { nameEn: "Granola", nameTr: "Granola", category: "Other" },
  { nameEn: "Breadcrumb Mix", nameTr: "Pane Harcı", category: "Other" },
  { nameEn: "Vanilla Ice Cream", nameTr: "Vanilyalı Dondurma", category: "Other" },
  { nameEn: "Coconut Cream", nameTr: "Hindistan Cevizi Kreması", category: "Other" },
  { nameEn: "Matcha", nameTr: "Maça", category: "Other" },
  { nameEn: "Espresso", nameTr: "Espresso", category: "Other" },
  { nameEn: "Coffee", nameTr: "Filtre Kahve", category: "Other" },
  { nameEn: "Tea", nameTr: "Çay", category: "Other" },
  { nameEn: "Sparkling Water", nameTr: "Soda", category: "Other" },
  { nameEn: "Mineral Water", nameTr: "Maden Suyu", category: "Other" },
  { nameEn: "Rice Vinegar", nameTr: "Pirinç Sirkesi", category: "Other" },
  { nameEn: "White Wine Vinegar", nameTr: "Beyaz Şarap Sirkesi", category: "Other" },
  { nameEn: "Nori", nameTr: "Nori", category: "Other" }
];

// Build full ingredient list with ids
const ingredients = ingredientSeeds.map((item, index) => ({
  id: index + 1,
  ...item
}));

const ingredientMap = new Map(ingredients.map((i) => [i.nameEn, i.id]));

// Helper to map ingredient names to ids
function getIngredientIds(names) {
  return names.map((name) => ingredientMap.get(name)).filter(Boolean);
}

// Core recipe seeds with diverse dishes
const baseRecipeSeeds = [
  {
    nameEn: "Menemen",
    nameTr: "Menemen",
    mealType: "Breakfast",
    country: "Turkey",
    durationMinutes: 15,
    difficulty: "Easy",
    tags: ["breakfast", "turkish", "pan"],
    ingredientNames: ["Egg", "Tomato", "Onion", "Green Pepper", "Olive Oil", "Salt", "Black Pepper"],
    summaryEn: "A quick Turkish egg dish with tomatoes, peppers and onions.",
    summaryTr: "Domates, biber ve soğanla hazırlanan hızlı bir Türk yumurta yemeği."
  },
  {
    nameEn: "Lentil Soup",
    nameTr: "Mercimek Çorbası",
    mealType: "Soup",
    country: "Turkey",
    durationMinutes: 30,
    difficulty: "Easy",
    tags: ["soup", "lentil", "comfort"],
    ingredientNames: ["Lentil", "Onion", "Carrot", "Potato", "Tomato Paste", "Olive Oil", "Cumin", "Salt", "Black Pepper"],
    summaryEn: "A comforting Turkish red lentil soup.",
    summaryTr: "Doyurucu ve klasik bir Türk kırmızı mercimek çorbası."
  },
  {
    nameEn: "Stuffed Peppers",
    nameTr: "Dolma",
    mealType: "Main",
    country: "Turkey",
    durationMinutes: 55,
    difficulty: "Medium",
    tags: ["rice", "pepper", "bake"],
    ingredientNames: ["Green Pepper", "Rice", "Onion", "Tomato", "Ground Beef", "Tomato Paste", "Parsley", "Olive Oil", "Salt", "Black Pepper"],
    summaryEn: "Bell peppers stuffed with rice, minced meat and herbs.",
    summaryTr: "Kıyma, pirinç ve otlarla doldurulmuş biberler."
  },
  {
    nameEn: "Pasta Alfredo",
    nameTr: "Alfredo Makarna",
    mealType: "Main",
    country: "Italy",
    durationMinutes: 25,
    difficulty: "Easy",
    tags: ["pasta", "creamy", "quick"],
    ingredientNames: ["Pasta", "Cream", "Parmesan", "Butter", "Garlic", "Black Pepper", "Salt"],
    summaryEn: "Silky pasta tossed in a creamy parmesan sauce.",
    summaryTr: "Kremalı parmesan sosuyla harmanlanan yumuşak makarna."
  },
  {
    nameEn: "Greek Salad",
    nameTr: "Yunan Salatası",
    mealType: "Salad",
    country: "Greece",
    durationMinutes: 10,
    difficulty: "Easy",
    tags: ["salad", "fresh", "summer"],
    ingredientNames: ["Tomato", "Cucumber", "Onion", "Feta Cheese", "Olive Oil", "Black Olive", "Oregano"],
    summaryEn: "A crisp salad with tomato, cucumber, feta and olives.",
    summaryTr: "Domates, salatalık, feta ve zeytinle hazırlanan çıtır salata."
  },
  {
    nameEn: "Chocolate Brownie",
    nameTr: "Çikolatalı Brownie",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 35,
    difficulty: "Medium",
    tags: ["dessert", "chocolate", "bake"],
    ingredientNames: ["Dark Chocolate", "Butter", "Sugar", "Flour", "Egg", "Vanilla", "Salt"],
    summaryEn: "Rich and fudgy chocolate brownies.",
    summaryTr: "Yoğun ve ıslak dokulu çikolatalı brownie."
  },
  {
    nameEn: "Avocado Toast",
    nameTr: "Avokado Tost",
    mealType: "Breakfast",
    country: "International",
    durationMinutes: 10,
    difficulty: "Easy",
    tags: ["toast", "quick", "brunch"],
    ingredientNames: ["Bread", "Avocado", "Egg", "Olive Oil", "Salt", "Black Pepper"],
    summaryEn: "Creamy avocado spread on toasted bread with egg.",
    summaryTr: "Kızarmış ekmeğin üzerinde kremsi avokado ve yumurta."
  },
  {
    nameEn: "Chicken Stir Fry",
    nameTr: "Tavuk Sote",
    mealType: "Main",
    country: "International",
    durationMinutes: 20,
    difficulty: "Easy",
    tags: ["chicken", "quick", "pan"],
    ingredientNames: ["Chicken Breast", "Soy Sauce", "Garlic", "Ginger Powder", "Carrot", "Broccoli", "Onion", "Olive Oil"],
    summaryEn: "Quick stir-fried chicken with vegetables and soy sauce.",
    summaryTr: "Sebzeler ve soya sosuyla hızlı tavuk sote."
  },
  {
    nameEn: "Tomato Soup",
    nameTr: "Domates Çorbası",
    mealType: "Soup",
    country: "International",
    durationMinutes: 25,
    difficulty: "Easy",
    tags: ["soup", "comfort", "tomato"],
    ingredientNames: ["Tomato", "Onion", "Garlic", "Butter", "Flour", "Milk", "Salt", "Black Pepper"],
    summaryEn: "Creamy tomato soup with a hint of butter.",
    summaryTr: "Tereyağı dokunuşlu kremalı domates çorbası."
  },
  {
    nameEn: "Kuru Fasulye",
    nameTr: "Kuru Fasulye",
    mealType: "Main",
    country: "Turkey",
    durationMinutes: 60,
    difficulty: "Medium",
    tags: ["bean", "stew", "comfort"],
    ingredientNames: ["White Bean", "Onion", "Tomato Paste", "Olive Oil", "Cumin", "Salt", "Black Pepper"],
    summaryEn: "Classic Turkish white bean stew.",
    summaryTr: "Klasik Türk usulü kuru fasulye yemeği."
  },
  {
    nameEn: "Pilaf",
    nameTr: "Pilav",
    mealType: "Side",
    country: "Turkey",
    durationMinutes: 30,
    difficulty: "Easy",
    tags: ["rice", "side", "butter"],
    ingredientNames: ["Rice", "Butter", "Salt", "Black Pepper", "Vermicelli"],
    summaryEn: "Fluffy buttery Turkish rice pilaf.",
    summaryTr: "Tereyağlı tane tane Türk pilavı."
  },
  {
    nameEn: "Caesar Salad",
    nameTr: "Sezar Salata",
    mealType: "Salad",
    country: "International",
    durationMinutes: 15,
    difficulty: "Easy",
    tags: ["salad", "quick", "greens"],
    ingredientNames: ["Lettuce", "Bread", "Parmesan", "Olive Oil", "Garlic", "Lemon", "Black Pepper"],
    summaryEn: "Crunchy lettuce with parmesan and garlicky dressing.",
    summaryTr: "Parmesan ve sarımsaklı sosla çıtır marul salatası."
  },
  {
    nameEn: "Simit Sandwich",
    nameTr: "Simit Sandviç",
    mealType: "Snack",
    country: "Turkey",
    durationMinutes: 8,
    difficulty: "Easy",
    tags: ["street", "quick", "sesame"],
    ingredientNames: ["Bread", "Feta Cheese", "Tomato", "Cucumber", "Black Olive", "Mint"],
    summaryEn: "Sesame ring bread stuffed with cheese and veggies.",
    summaryTr: "Susamlı simit içine peynir ve sebzelerle atıştırmalık."
  },
  {
    nameEn: "Mücver",
    nameTr: "Mücver",
    mealType: "Snack",
    country: "Turkey",
    durationMinutes: 25,
    difficulty: "Medium",
    tags: ["zucchini", "fry", "herb"],
    ingredientNames: ["Zucchini", "Egg", "Flour", "Dill", "Parsley", "Garlic", "Salt", "Black Pepper", "Vegetable Oil"],
    summaryEn: "Golden fried zucchini fritters with herbs.",
    summaryTr: "Otlu, çıtır kabak mücverleri."
  },
  {
    nameEn: "Pancakes",
    nameTr: "Pankek",
    mealType: "Breakfast",
    country: "International",
    durationMinutes: 20,
    difficulty: "Easy",
    tags: ["sweet", "fluffy", "brunch"],
    ingredientNames: ["Flour", "Milk", "Egg", "Baking Powder", "Sugar", "Butter", "Vanilla"],
    summaryEn: "Fluffy breakfast pancakes.",
    summaryTr: "Yumuşacık kahvaltılık pankekler."
  },
  {
    nameEn: "Cheesecake",
    nameTr: "Cheesecake",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 70,
    difficulty: "Hard",
    tags: ["dessert", "bake", "creamy"],
    ingredientNames: ["Cream Cheese", "Sugar", "Egg", "Butter", "Flour", "Vanilla", "Lemon"],
    summaryEn: "Creamy baked cheesecake with buttery crust.",
    summaryTr: "Tereyağlı tabanlı kremalı fırın cheesecake."
  },
  {
    nameEn: "Lahmacun",
    nameTr: "Lahmacun",
    mealType: "Main",
    country: "Turkey",
    durationMinutes: 35,
    difficulty: "Medium",
    tags: ["flatbread", "meat", "bake"],
    ingredientNames: ["Ground Beef", "Onion", "Tomato", "Parsley", "Green Pepper", "Tomato Paste", "Lavash", "Cumin", "Black Pepper", "Salt"],
    summaryEn: "Thin flatbread topped with seasoned minced meat.",
    summaryTr: "Baharatlı kıymayla kaplı ince hamur."
  },
  {
    nameEn: "Börek",
    nameTr: "Börek",
    mealType: "Snack",
    country: "Turkey",
    durationMinutes: 40,
    difficulty: "Medium",
    tags: ["pastry", "feta", "bake"],
    ingredientNames: ["Phyllo", "Feta Cheese", "Parsley", "Egg", "Milk", "Butter", "Black Sesame"],
    summaryEn: "Flaky pastry filled with cheese and herbs.",
    summaryTr: "Peynir ve otlarla doldurulmuş çıtır börek."
  },
  {
    nameEn: "Poached Eggs",
    nameTr: "Poşe Yumurta",
    mealType: "Breakfast",
    country: "International",
    durationMinutes: 12,
    difficulty: "Medium",
    tags: ["egg", "brunch", "simple"],
    ingredientNames: ["Egg", "Vinegar", "Salt", "Bread", "Butter"],
    summaryEn: "Soft poached eggs served on toasted bread.",
    summaryTr: "Kızarmış ekmek üstünde yumuşak poşe yumurta."
  },
  {
    nameEn: "Hummus Bowl",
    nameTr: "Humus Kasesi",
    mealType: "Side",
    country: "Middle East",
    durationMinutes: 15,
    difficulty: "Easy",
    tags: ["dip", "vegan", "spread"],
    ingredientNames: ["Chickpea", "Tahini", "Lemon", "Garlic", "Olive Oil", "Cumin", "Salt"],
    summaryEn: "Creamy chickpea dip with tahini and lemon.",
    summaryTr: "Tahin ve limonla hazırlanan kremamsı nohut ezmesi."
  },
  {
    nameEn: "Mushroom Risotto",
    nameTr: "Mantarlı Risotto",
    mealType: "Main",
    country: "Italy",
    durationMinutes: 45,
    difficulty: "Hard",
    tags: ["rice", "creamy", "comfort"],
    ingredientNames: ["Rice", "Mushroom", "Onion", "Garlic", "Butter", "Parmesan", "White Wine Vinegar", "Vegetable Oil"],
    summaryEn: "Creamy risotto with sautéed mushrooms.",
    summaryTr: "Sote mantarlı kremalı risotto."
  },
  {
    nameEn: "Falafel Wrap",
    nameTr: "Falafel Dürüm",
    mealType: "Snack",
    country: "Middle East",
    durationMinutes: 30,
    difficulty: "Medium",
    tags: ["vegan", "wrap", "fried"],
    ingredientNames: ["Chickpea", "Parsley", "Cilantro", "Garlic", "Onion", "Cumin", "Coriander", "Flour", "Lavash"],
    summaryEn: "Crispy falafel balls wrapped with veggies.",
    summaryTr: "Sebzelerle dürümlenen çıtır falafel topları."
  },
  {
    nameEn: "Lemon Tart",
    nameTr: "Limonlu Tart",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 50,
    difficulty: "Medium",
    tags: ["dessert", "lemon", "bake"],
    ingredientNames: ["Flour", "Butter", "Sugar", "Egg", "Lemon", "Cream", "Vanilla"],
    summaryEn: "Tangy lemon tart with buttery crust.",
    summaryTr: "Tereyağlı tabanlı ekşi limonlu tart."
  },
  {
    nameEn: "Quinoa Salad",
    nameTr: "Kinoa Salatası",
    mealType: "Salad",
    country: "International",
    durationMinutes: 18,
    difficulty: "Easy",
    tags: ["healthy", "grain", "fresh"],
    ingredientNames: ["Quinoa", "Cucumber", "Tomato", "Parsley", "Lemon", "Olive Oil", "Salt", "Black Pepper"],
    summaryEn: "Light quinoa salad with fresh vegetables.",
    summaryTr: "Taze sebzelerle hafif kinoa salatası."
  },
  {
    nameEn: "Banana Smoothie",
    nameTr: "Muzlu Smoothie",
    mealType: "Snack",
    country: "International",
    durationMinutes: 5,
    difficulty: "Easy",
    tags: ["drink", "fresh", "quick"],
    ingredientNames: ["Banana", "Milk", "Honey", "Yogurt", "Vanilla"],
    summaryEn: "Creamy banana smoothie with honey.",
    summaryTr: "Ballı, kremsi muzlu smoothie."
  },
  {
    nameEn: "Granola Parfait",
    nameTr: "Granola Parfe",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 10,
    difficulty: "Easy",
    tags: ["dessert", "no-bake", "quick"],
    ingredientNames: ["Granola", "Greek Yogurt", "Strawberry", "Blueberry", "Honey"],
    summaryEn: "Layered yogurt parfait with granola and berries.",
    summaryTr: "Granola ve orman meyveli yoğurt katları."
  },
  {
    nameEn: "Frittata",
    nameTr: "Frittata",
    mealType: "Breakfast",
    country: "Italy",
    durationMinutes: 25,
    difficulty: "Medium",
    tags: ["egg", "bake", "veggie"],
    ingredientNames: ["Egg", "Milk", "Spinach", "Tomato", "Cheddar", "Onion", "Salt", "Black Pepper"],
    summaryEn: "Baked omelette loaded with vegetables.",
    summaryTr: "Bol sebzeli fırın omlet."
  },
  {
    nameEn: "Chocolate Chip Cookies",
    nameTr: "Parçacıklı Kurabiye",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 30,
    difficulty: "Easy",
    tags: ["cookie", "chocolate", "bake"],
    ingredientNames: ["Flour", "Sugar", "Brown Sugar", "Butter", "Egg", "Chocolate", "Baking Soda", "Vanilla"],
    summaryEn: "Chewy cookies with melting chocolate chips.",
    summaryTr: "Eriyen çikolata parçacıklı yumuşak kurabiye."
  },
  {
    nameEn: "Tomato Bruschetta",
    nameTr: "Domates Bruschetta",
    mealType: "Side",
    country: "Italy",
    durationMinutes: 12,
    difficulty: "Easy",
    tags: ["appetizer", "bread", "fresh"],
    ingredientNames: ["Bread", "Tomato", "Garlic", "Basil", "Olive Oil", "Salt", "Black Pepper"],
    summaryEn: "Toasted bread topped with tomato and basil.",
    summaryTr: "Domates ve fesleğenle süslenmiş kızarmış ekmek."
  },
  {
    nameEn: "Veggie Pide",
    nameTr: "Sebzeli Pide",
    mealType: "Main",
    country: "Turkey",
    durationMinutes: 40,
    difficulty: "Medium",
    tags: ["flatbread", "bake", "vegetarian"],
    ingredientNames: ["Lavash", "Cheddar", "Tomato", "Green Pepper", "Mushroom", "Olive Oil", "Black Pepper"],
    summaryEn: "Boat-shaped flatbread with cheese and vegetables.",
    summaryTr: "Peynir ve sebzeli kayık şeklinde pide."
  },
  {
    nameEn: "Spicy Shakshuka",
    nameTr: "Acılı Şakşuka",
    mealType: "Breakfast",
    country: "Middle East",
    durationMinutes: 28,
    difficulty: "Easy",
    tags: ["egg", "pan", "spicy"],
    ingredientNames: ["Egg", "Tomato", "Red Pepper", "Onion", "Garlic", "Cumin", "Red Pepper Flakes", "Olive Oil"],
    summaryEn: "Eggs poached in spicy tomato pepper sauce.",
    summaryTr: "Baharatlı domates-biber sosunda pişen yumurtalar."
  },
  {
    nameEn: "Sushi Bowl",
    nameTr: "Sushi Kasesi",
    mealType: "Main",
    country: "Japan",
    durationMinutes: 35,
    difficulty: "Medium",
    tags: ["rice", "fish", "bowl"],
    ingredientNames: ["Rice", "Salmon", "Avocado", "Soy Sauce", "Cucumber", "Sesame", "Nori", "Rice Vinegar"],
    summaryEn: "Deconstructed sushi with rice, salmon and veggies.",
    summaryTr: "Pirinç, somon ve sebzelerle açık sushi kasesi."
  },
  {
    nameEn: "Veggie Omelette",
    nameTr: "Sebzeli Omlet",
    mealType: "Breakfast",
    country: "International",
    durationMinutes: 15,
    difficulty: "Easy",
    tags: ["egg", "quick", "pan"],
    ingredientNames: ["Egg", "Milk", "Spinach", "Mushroom", "Cheddar", "Salt", "Black Pepper"],
    summaryEn: "Quick omelette with spinach and mushrooms.",
    summaryTr: "Ispanak ve mantarlı hızlı omlet."
  },
  {
    nameEn: "Veggie Noodle Bowl",
    nameTr: "Sebzeli Noodle",
    mealType: "Main",
    country: "Asia",
    durationMinutes: 18,
    difficulty: "Easy",
    tags: ["noodle", "quick", "stir-fry"],
    ingredientNames: ["Noodle", "Soy Sauce", "Carrot", "Red Pepper", "Scallion", "Garlic", "Ginger Powder", "Sesame"],
    summaryEn: "Stir-fried noodles with colorful vegetables.",
    summaryTr: "Renkli sebzelerle sotelenmiş noodle."
  },
  {
    nameEn: "Pea Soup",
    nameTr: "Bezelye Çorbası",
    mealType: "Soup",
    country: "International",
    durationMinutes: 30,
    difficulty: "Easy",
    tags: ["soup", "pea", "smooth"],
    ingredientNames: ["Peas", "Onion", "Garlic", "Butter", "Milk", "Salt", "Black Pepper", "Mint"],
    summaryEn: "Smooth pea soup with minty freshness.",
    summaryTr: "Naneli yumuşak bezelye çorbası."
  },
  {
    nameEn: "Fruit Salad",
    nameTr: "Meyve Salatası",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 10,
    difficulty: "Easy",
    tags: ["fruit", "fresh", "light"],
    ingredientNames: ["Apple", "Banana", "Orange", "Strawberry", "Grape", "Honey", "Mint"],
    summaryEn: "Colorful mixed fruit salad with honey.",
    summaryTr: "Ballı, renkli meyve salatası."
  },
  {
    nameEn: "Lentil Köfte",
    nameTr: "Mercimek Köftesi",
    mealType: "Snack",
    country: "Turkey",
    durationMinutes: 30,
    difficulty: "Medium",
    tags: ["vegan", "bulgur", "mezze"],
    ingredientNames: ["Lentil", "Bulgur", "Onion", "Tomato Paste", "Cumin", "Mint", "Parsley", "Olive Oil"],
    summaryEn: "Vegan lentil patties with bulgur and herbs.",
    summaryTr: "Bulgurlu, otlu vegan mercimek köftesi."
  },
  {
    nameEn: "Apple Crumble",
    nameTr: "Elmalı Crumble",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 45,
    difficulty: "Easy",
    tags: ["apple", "bake", "dessert"],
    ingredientNames: ["Apple", "Flour", "Sugar", "Butter", "Cinnamon", "Oats", "Walnut"],
    summaryEn: "Baked apples with crunchy oat topping.",
    summaryTr: "Gevrek yulaflı elmalı tatlı."
  },
  {
    nameEn: "Caprese Sandwich",
    nameTr: "Kapreze Sandviç",
    mealType: "Snack",
    country: "Italy",
    durationMinutes: 12,
    difficulty: "Easy",
    tags: ["sandwich", "fresh", "cheese"],
    ingredientNames: ["Bread", "Mozzarella", "Tomato", "Basil", "Olive Oil", "Balsamic Vinegar"],
    summaryEn: "Mozzarella, tomato and basil sandwich.",
    summaryTr: "Mozzarella, domates ve fesleğenli sandviç."
  },
  {
    nameEn: "Pumpkin Soup",
    nameTr: "Balkabağı Çorbası",
    mealType: "Soup",
    country: "International",
    durationMinutes: 35,
    difficulty: "Easy",
    tags: ["soup", "creamy", "pumpkin"],
    ingredientNames: ["Pumpkin", "Onion", "Garlic", "Cream", "Butter", "Salt", "Nutmeg"],
    summaryEn: "Velvety pumpkin soup with cream.",
    summaryTr: "Kremalı kadifemsi balkabağı çorbası."
  },
  {
    nameEn: "Turkish Breakfast Plate",
    nameTr: "Serpme Kahvaltı",
    mealType: "Breakfast",
    country: "Turkey",
    durationMinutes: 15,
    difficulty: "Easy",
    tags: ["spread", "cheese", "olive"],
    ingredientNames: ["Bread", "Feta Cheese", "Black Olive", "Tomato", "Cucumber", "Honey", "Butter", "Egg"],
    summaryEn: "Classic Turkish spread with cheese, olives and egg.",
    summaryTr: "Peynir, zeytin ve yumurtalı klasik serpme kahvaltı."
  },
  {
    nameEn: "Strawberry Yogurt Bowl",
    nameTr: "Çilekli Yoğurt Kasesi",
    mealType: "Breakfast",
    country: "International",
    durationMinutes: 6,
    difficulty: "Easy",
    tags: ["fresh", "quick", "light"],
    ingredientNames: ["Greek Yogurt", "Strawberry", "Granola", "Honey", "Mint"],
    summaryEn: "Yogurt bowl with strawberries and granola.",
    summaryTr: "Çilek ve granola ile yoğurt kasesi."
  },
  {
    nameEn: "Zucchini Pasta",
    nameTr: "Kabaklı Makarna",
    mealType: "Main",
    country: "International",
    durationMinutes: 22,
    difficulty: "Easy",
    tags: ["pasta", "light", "quick"],
    ingredientNames: ["Spaghetti", "Zucchini", "Garlic", "Olive Oil", "Parmesan", "Black Pepper", "Salt"],
    summaryEn: "Garlicky pasta with sautéed zucchini.",
    summaryTr: "Sarımsaklı, sote kabaklı makarna."
  },
  {
    nameEn: "Baked Salmon",
    nameTr: "Fırında Somon",
    mealType: "Main",
    country: "International",
    durationMinutes: 25,
    difficulty: "Easy",
    tags: ["fish", "oven", "healthy"],
    ingredientNames: ["Salmon", "Lemon", "Olive Oil", "Garlic", "Salt", "Black Pepper", "Rosemary"],
    summaryEn: "Oven baked salmon with lemon and herbs.",
    summaryTr: "Limon ve otlarla fırınlanmış somon."
  },
  {
    nameEn: "Coconut Rice Pudding",
    nameTr: "Hindistan Cevizli Sütlaç",
    mealType: "Dessert",
    country: "International",
    durationMinutes: 50,
    difficulty: "Medium",
    tags: ["dessert", "rice", "creamy"],
    ingredientNames: ["Rice", "Coconut Milk", "Milk", "Sugar", "Vanilla", "Cinnamon"],
    summaryEn: "Creamy rice pudding with coconut aroma.",
    summaryTr: "Hindistan cevizi aromalı kremalı sütlaç."
  },
  {
    nameEn: "Spinach Börek",
    nameTr: "Ispanaklı Börek",
    mealType: "Snack",
    country: "Turkey",
    durationMinutes: 45,
    difficulty: "Medium",
    tags: ["pastry", "spinach", "bake"],
    ingredientNames: ["Phyllo", "Spinach", "Feta Cheese", "Onion", "Egg", "Milk", "Butter"],
    summaryEn: "Flaky pastry filled with spinach and cheese.",
    summaryTr: "Ispanak ve peynirle doldurulmuş börek."
  },
  {
    nameEn: "Chili Con Carne",
    nameTr: "Acılı Etli Fasulye",
    mealType: "Main",
    country: "Mexico",
    durationMinutes: 55,
    difficulty: "Medium",
    tags: ["bean", "spicy", "stew"],
    ingredientNames: ["Ground Beef", "Kidney Bean", "Tomato", "Onion", "Garlic", "Chili Powder", "Cumin", "Paprika"],
    summaryEn: "Spicy beef and bean stew.",
    summaryTr: "Acılı kıymalı fasulye yemeği."
  },
  {
    nameEn: "Veggie Quesadilla",
    nameTr: "Sebzeli Quesadilla",
    mealType: "Snack",
    country: "Mexico",
    durationMinutes: 15,
    difficulty: "Easy",
    tags: ["cheese", "pan", "quick"],
    ingredientNames: ["Tortilla", "Cheddar", "Red Pepper", "Onion", "Corn", "Black Bean", "Olive Oil"],
    summaryEn: "Cheesy tortilla filled with veggies.",
    summaryTr: "Sebzeli, peynirli tortilla."
  }
];

// Convert seeds to full recipe objects with ingredient ids
const baseRecipes = baseRecipeSeeds.map((seed, idx) => ({
  id: idx + 1,
  ...seed,
  ingredientIds: getIngredientIds(seed.ingredientNames)
}));

// Generate additional recipes to reach around 200 items
const extraMealTypes = ["Main", "Salad", "Snack", "Side", "Soup", "Dessert", "Breakfast"];
const extraCountries = ["International", "Turkey", "Italy", "Mexico", "USA", "France", "Japan", "Greece"];
const difficulties = ["Easy", "Medium", "Hard"];
const mealTypeTrMap = {
  Breakfast: "Kahvaltı",
  Soup: "Çorba",
  Main: "Ana Yemek",
  Dessert: "Tatlı",
  Salad: "Salata",
  Snack: "Atıştırmalık",
  Side: "Yan Yemek"
};

const generatedRecipes = [];
const totalTarget = 200;
const extraNeeded = totalTarget - baseRecipes.length;

for (let i = 0; i < extraNeeded; i++) {
  const mealType = extraMealTypes[i % extraMealTypes.length];
  const country = extraCountries[i % extraCountries.length];
  const difficulty = difficulties[i % difficulties.length];
  const durationMinutes = 15 + (i % 6) * 5;
  const ingredientIds = [];
  while (ingredientIds.length < 7) {
    const pick = ingredients[(i * 3 + ingredientIds.length * 7) % ingredients.length].id;
    if (!ingredientIds.includes(pick)) {
      ingredientIds.push(pick);
    }
  }
  const nameEn = `${mealType} Idea ${i + 1}`;
  const nameTr = `${mealTypeTrMap[mealType]} Fikri ${i + 1}`;
  generatedRecipes.push({
    id: baseRecipes.length + i + 1,
    nameEn,
    nameTr,
    mealType,
    country,
    durationMinutes,
    difficulty,
    tags: [mealType.toLowerCase(), "creative", "home"],
    ingredientIds,
    summaryEn: "A flexible, pantry-friendly recipe idea with balanced flavors.",
    summaryTr: "Kiler dostu, dengeli aromalara sahip esnek bir tarif fikri."
  });
}

const recipes = [...baseRecipes, ...generatedRecipes];

// DOM references
const mealTypeContainer = document.getElementById("meal-type-options");
const ingredientContainer = document.getElementById("ingredient-options");
const recipeGrid = document.getElementById("recipe-grid");
const emptyState = document.getElementById("empty-state");
const missingSelect = document.getElementById("missing-select");
const showRecipesBtn = document.getElementById("show-recipes");
const langButtons = document.querySelectorAll(".lang-btn");

// Render meal type checkboxes
function renderMealTypes() {
  mealTypeContainer.innerHTML = "";
  const mealTypes = ["Breakfast", "Soup", "Main", "Dessert", "Salad", "Snack", "Side"];
  mealTypes.forEach((type) => {
    const id = `meal-${type}`;
    const label = document.createElement("label");
    label.className = "option";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = type;
    checkbox.id = id;
    const span = document.createElement("span");
    span.dataset.mealType = type;
    span.textContent = translations[currentLanguage].mealTypes[type];
    label.appendChild(checkbox);
    label.appendChild(span);
    mealTypeContainer.appendChild(label);
  });
}

// Render ingredient filters grouped by category
function renderIngredients() {
  const selected = new Set(
    Array.from(ingredientContainer.querySelectorAll("input[type=checkbox]:checked")).map((c) => Number(c.value))
  );
  ingredientContainer.innerHTML = "";
  const categories = Object.keys(translations[currentLanguage].categories);
  categories.forEach((category) => {
    const wrapper = document.createElement("div");
    wrapper.className = "category";
    const title = document.createElement("h4");
    title.dataset.category = category;
    title.textContent = translations[currentLanguage].categories[category];
    wrapper.appendChild(title);

    const group = document.createElement("div");
    group.className = "options-grid";

    ingredients
      .filter((ing) => ing.category === category)
      .forEach((ing) => {
        const label = document.createElement("label");
        label.className = "option";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = ing.id;
        checkbox.checked = selected.has(ing.id);
        const span = document.createElement("span");
        span.dataset.ingredientId = ing.id;
        span.textContent = currentLanguage === "en" ? ing.nameEn : ing.nameTr;
        label.appendChild(checkbox);
        label.appendChild(span);
        group.appendChild(label);
      });

    wrapper.appendChild(group);
    ingredientContainer.appendChild(wrapper);
  });
}

// Update UI texts using translation keys
function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = translations[currentLanguage][key];
  });

  document.querySelectorAll("[data-meal-type]").forEach((el) => {
    const type = el.dataset.mealType;
    el.textContent = translations[currentLanguage].mealTypes[type];
  });

  document.querySelectorAll("[data-category]").forEach((el) => {
    const cat = el.dataset.category;
    el.textContent = translations[currentLanguage].categories[cat];
  });

  document.querySelectorAll("[data-ingredient-id]").forEach((el) => {
    const ing = ingredients.find((i) => i.id === Number(el.dataset.ingredientId));
    if (ing) {
      el.textContent = currentLanguage === "en" ? ing.nameEn : ing.nameTr;
    }
  });

  renderRecipes(lastRenderData.selectedIngredients || [], lastRenderData.selectedMeals || [], lastRenderData.maxMissing || Number(missingSelect.value));
}

// Language toggle buttons
langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLanguage = btn.dataset.lang;
    langButtons.forEach((b) => b.classList.toggle("active", b.dataset.lang === currentLanguage));
    renderMealTypes();
    renderIngredients();
    updateTranslations();
  });
});

// Scoring and rendering
let lastRenderData = { selectedIngredients: [], selectedMeals: [], maxMissing: Number(missingSelect.value) };

function calculateScore(recipe, chosenIds, maxMissing) {
  const needed = new Set(recipe.ingredientIds);
  const chosen = new Set(chosenIds);
  let matchCount = 0;
  recipe.ingredientIds.forEach((id) => {
    if (chosen.has(id)) matchCount += 1;
  });
  const missingCount = recipe.ingredientIds.filter((id) => !chosen.has(id)).length;
  if (missingCount > maxMissing) return null;
  let score = matchCount * 2 + Math.max(0, 3 - missingCount);
  return { score, missingCount, matchCount };
}

// Render recipe cards with ingredient badges
function renderRecipes(selectedIngredients, selectedMeals, maxMissing) {
  lastRenderData = { selectedIngredients, selectedMeals, maxMissing };
  recipeGrid.innerHTML = "";

  const filtered = recipes
    .filter((recipe) => {
      if (selectedMeals.length === 0) return true;
      return selectedMeals.includes(recipe.mealType);
    })
    .map((recipe) => {
      const result = calculateScore(recipe, selectedIngredients, maxMissing);
      return result ? { recipe, ...result } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  if (filtered.length === 0) {
    emptyState.style.display = "block";
    emptyState.textContent = translations[currentLanguage].emptyState;
    return;
  }

  emptyState.style.display = "none";

  filtered.forEach(({ recipe, missingCount }) => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    const title = document.createElement("h3");
    title.textContent = currentLanguage === "en" ? recipe.nameEn : recipe.nameTr;
    card.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "recipe-meta";
    const meal = translations[currentLanguage].mealTypes[recipe.mealType];
    const diff = translations[currentLanguage].difficulty[recipe.difficulty];
    meta.textContent = `${meal} • ${recipe.country} • ${recipe.durationMinutes} min • ${diff}`;
    card.appendChild(meta);

    const tags = document.createElement("div");
    tags.className = "badges";
    recipe.tags.forEach((tag) => {
      const badge = document.createElement("span");
      badge.className = "badge tag";
      badge.textContent = tag;
      tags.appendChild(badge);
    });
    card.appendChild(tags);

    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = currentLanguage === "en" ? recipe.summaryEn : recipe.summaryTr;
    card.appendChild(summary);

    const ingredientsList = document.createElement("div");
    ingredientsList.className = "badges";
    const chosenSet = new Set(selectedIngredients);

    recipe.ingredientIds.forEach((id) => {
      const ingredient = ingredients.find((i) => i.id === id);
      if (!ingredient) return;
      const badge = document.createElement("span");
      const hasIt = chosenSet.has(id);
      badge.className = `badge ${hasIt ? "have" : "missing"}`;
      badge.textContent = currentLanguage === "en" ? ingredient.nameEn : ingredient.nameTr;
      ingredientsList.appendChild(badge);
    });

    card.appendChild(ingredientsList);

    const missingInfo = document.createElement("small");
    missingInfo.className = "summary";
    missingInfo.textContent = `${missingCount} ${currentLanguage === "en" ? "missing ingredient(s)" : "eksik malzeme"}`;
    card.appendChild(missingInfo);

    recipeGrid.appendChild(card);
  });
}

// Gather selected filter values and show recipes
function applyFilters() {
  const selectedMeals = Array.from(document.querySelectorAll("#meal-type-options input:checked")).map((c) => c.value);
  const selectedIngredients = Array.from(document.querySelectorAll("#ingredient-options input:checked")).map((c) =>
    Number(c.value)
  );
  const maxMissing = Number(missingSelect.value);
  renderRecipes(selectedIngredients, selectedMeals, maxMissing);
}

// Initial render
renderMealTypes();
renderIngredients();
renderRecipes([], [], Number(missingSelect.value));

// Button binding
showRecipesBtn.addEventListener("click", applyFilters);

// Expose translation update on load
updateTranslations();
