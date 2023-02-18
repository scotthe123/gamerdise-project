import { writeFileSync } from "fs";

const db = {
  users: [
    {
      username: "test",
      password: "password",
      id: 0,
    },
    {
      username: "smashguy213",
      password: "SimplePassword",
      id: 1,
    },
    {
      username: "AlreadyHere",
      password: "123456789",
      id: 2,
    },
    {
      username: "mastermind199",
      password: "ILoveMovies!",
      id: 3,
    },
    {
      username: "pokeman29",
      password: "PokemonMaster",
      id: 4,
    },
    {
      username: "yesman",
      password: "nobro",
      id: 5,
    },
  ],
  marketplaceItems: [
    {
      name: "Game Boy Advance SP",
      description:
        "Almost new, Game Boy SP from way back in the past. Still fully functional.",
      image: "https://m.media-amazon.com/images/I/81E9LMtyupL.jpg",
      category: "electronic",
      price: 49.99,
      postedBy: "AlreadyHere",
      sellerID: 2,
      id: 0,
    },
    {
      name: "Cloud's Buster Sword",
      description:
        "Cloud from the Final Fantasy series' most iconic weapon, the Buster Sword.",
      image:
        "https://m.media-amazon.com/images/I/414nm2Ak+0S._AC_UF1000,1000_QL80_.jpg",
      category: "prop",
      price: 249.99,
      postedBy: "AlreadyHere",
      sellerID: 2,
      id: 1,
    },
    {
      name: "Undertale heart hoodie",
      description:
        "A hoodie from the game Undertale. The hoodie shows a heart with determination.",
      image:
        "https://i5.walmartimages.com/asr/c1e0a8c3-2904-4aac-95be-2777a43e0fa7_1.71210f395a853d0741631f62b426e928.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      category: "apparel",
      price: 27.99,
      postedBy: "smashguy213",
      sellerID: 1,
      id: 2,
    },
    {
      name: "Fallout Series Cookbook",
      description:
        "A Fallout themed cookbook. Many recipes to use to make food from the Fallout universe!",
      image:
        "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_396/MTc2MjM1OTg5MjUyMTIyNTAz/video-game-cookbooks.webp",
      category: "food",
      price: 14.99,
      postedBy: "AlreadyHere",
      sellerID: 2,
      id: 3,
    },
    {
      name: "Pokemon Platinum",
      description:
        "A Pokemon game from the world-famous Pokemon series. Requires a Nintendo DS to be able to play",
      image: "https://i.ebayimg.com/images/g/RBcAAOSw8XZjV6ev/s-l640.jpg",
      category: "game",
      price: 39.99,
      postedBy: "pokeman29",
      sellerID: 4,
      id: 4,
    },
    {
      name: "Witcher key chain",
      description:
        "A key chain from the Witcher series. Worn by Geralt of Rivia",
      image:
        "https://ae01.alicdn.com/kf/Hfc176773242e4d6ca0d0b6a3d8635d0c3/Wild-Hunt-Game-Key-Chain-Wolf-Head-keyring-Metal-Medallion-Gaming-Peripherals-Zinc-Alloy-Men-Keychain.jpg",
      category: "accessory",
      price: 29.99,
      postedBy: "mastermind199",
      sellerID: 3,
      id: 5,
    },
  ],
  userCartItems: [
    {
      inCartForUser: 0,
      marketplaceID: 0,
      id: 0,
    },
  ],
  userNotifications: [
    {
      notificationForUser: 0,
      message:
        "Someone just bought off your NAME_OF_ITEM! The item was removed from your cart",
      id: 0,
    },
  ],
};

writeFileSync("db.json", JSON.stringify(db), { encoding: "utf-8" });
