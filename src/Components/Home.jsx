import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useSelector } from "react-redux";
import Link from "next/link";
import { isusrregistered, registerusr } from "../config/BlockchainServices";
import { useAccount } from "wagmi";

import TrippyScroll from "./Scroll";
import DemoStore from "./DemoStore";
import DemoStore2 from "./DemoStore2";

import { useEffect, useState } from "react";

export default function Home() {
  const connection = useSelector((state) => state.connection);

  console.log("Provider:", connection?.provider);
  const [playeradd, setUplayeradd] = useState("");
  const names = [
    "Programmer Boy",
    "Chocolaty Queen",
    "Sawgyboy",
    "Tigger Fresh",
    "Ghost Rider",
    "Twilight Queenbee",
    "Brucebanner",
    "Bikewithgirl",
    "Inspire You",
    "Makegirls",
    "Thinkbig",
    "Lovecapri",
    "Lucky Point",
    "Hot Babe",
    "Mankind",
    "Peace Hug",
    "MachoManiac",
    "Lil Cutie",
    "Texas Tiger",
    "Kara",
    "Gamez Slayer",
    "Tiger Kitty",
    "Demon Slayer",
    "Missie Lucky",
    "Light Yagami",
    "The chill pixel",
    "Cyberwarrior",
    "Girlyapa",
    "Skullcrusher",
    "Shining Starlight",
    "Fight God",
    "Trustmeimalair",
    "Sparky God",
    "StarryEyes",
    "Bad captain",
    "Pretty Angel",
    "Dead deal",
    "Fab Girl",
    "Deal Anneal",
    "Pink Princess",
    "Tonight Gamer",
    "Strawberry",
    "Dead Guru",
    "Blueberry",
    "Lucky Lad",
    "Dilo ki Rani",
    "Will of Washington",
    "Pretty girl",
    "Mouth of Mexico",
    "Baby Love",
    "Creepy Camp",
    "Unicorn Girl",
    "Caption Master",
    "Bunny Angel",
    "Daily Punch",
    "Dance and Sing",
    "Cool Samurai",
    "Girl True",
    "Dead Ultra",
    "Techie Luve",
    "Captain America",
    "Pink Feathers",
    "Ninjastic Ninja",
    "Cupcake hugs",
    "Devil Ultra",
    "Vanilla Flower Love",
    "American Ape",
    "Garden Heart",
    "Extra Loud",
    "Marsala Magic",
    "Ninja Nun",
    "Tweed Love",
    "Bald Saloon",
    "Magic Lily",
    "Day Owl",
    "Dark Princess",
    "Imported Sense",
    "Pretty Eyes",
    "Pick a Stick",
    "Bossy Queen",
    "Balloon Face",
    "Twinkle Light",
    "Gym Freak",
    "Zoom Fire",
    "Hell Devil",
    "Rose Catcher",
    "Smart Champ",
    "Red Ocean",
    "Mystery Man",
    "Princess Land",
    "Star Lord",
    "Tweety Sweetie",
    "Insta Master",
    "The Sassy Babe",
    "Doctor Strange",
    "Zoom Fire",
    "Captain Mighty",
    "Summer Glows",
    "attitudeboy",
    "angel_and_glitch",
    "awesome_me",
    "angelic_princess",
    "berojgarr_engineer",
    "babykins",
    "big_bites",
    "beauty_babe",
    "compact_racer",
    "boring_nose",
    "creepy_camp",
    "candycane_missy",
    "deal_cereal",
    "caressmil2001",
    "drugmylife",
    "classy_girl",
    "fake_guy",
    "cool_strawberry",
    "famous_guy",
    "crazy_kupkakes",
    "gamer_slayer",
    "cupid_of_hearts",
    "ghost_rider",
    "dark_lady",
    "hitch_hiker",
    "dark_princess",
    "hunk",
    "enchantedwas",
    "legal_heartbreaker",
    "famous_cat_planet",
    "macho_moron",
    "haggy_pie",
    "lowercase_guy",
    "honey_blossom_dimples",
    "macho_moron",
    "honeycomb",
    "ninjasinpyjamas",
    "hot_userame_here",
    "potato_lover",
    "jelly_cuddles",
    "professer_x",
    "kitty_bloom",
    "singletomorrow",
    "lil_cutie",
    "windy_orbits",
    "love_pink",
    "yellow_menace",
    "missie_lucky",
    "unused_guy",
    "omg_girl_dance",
    "london_lions",
    "peppermint_candy",
    "Chin Chillin",
    "alohanic64",
    "Colonial Cousins",
    "chiaroscuro",
    "Dare to face",
    "cool_dora",
    "King elf",
    "cupcake_hugs",
    "Alien Brain",
    "dandy",
    "Not James Bond",
    "darling",
    "bab_pure_purpose",
    "fairy_hot",
    "beacon_boss",
    "fancy_doll",
    "billy_hills",
    "gelbmannhearty",
    "couldnt_find_good_name",
    "gorgeous_sweetie",
    "crazy_anyone",
    "honey_blossom_dimples",
    "dead_guru",
    "hot_cupid",
    "dr_cocktail",
    "huggable_bab",
    "Geekstar",
    "internet_monster",
    "Hearthacker",
    "jelly_cuddles",
    "Instaman",
    "lady_in_pink",
    "little_cobra",
    "lime_green_soda",
    "mad_boxer",
    "lovecapri",
    "Metalhead",
    "lovely_poison",
    "Natureboy",
    "nectarwas",
    "Pooldude",
    "omg_girl_dance",
    "Professer_x",
    "pretty_pumpkin",
    "Swag_grant",
    "rainbow_colours",
    "Technishien",
    "secret_fruity",
    "Thornylife",
    "squiggly_munchkin",
    "Bean_Basket",
    "Krazy_Girl",
    "Awesome_Dreamer",
    "Waiting_you",
    "PUBGNoober",
    "Cute_Eyes",
    "PUBGLover",
    "Lovely_Dove",
    "Dream_Peace",
    "Smilee_Doll",
    "Soul_Hacker",
    "Yeah_Me",
    "Chocolate_Boy",
    "Kitty_Cute",
    "Innocent_Boy",
    "Cute_Pixel",
    "King_Of_Insta",
    "Sweet_kristy",
    "Heart_Hacker",
    "Sleepy_World",
    "Unique_guy",
    "White_Energy",
    "Cool_Dude",
    "Twinkle_Night",
    "Cute_Kameena",
    "Tweety_Sweetie",
    "Desi_Munda",
    "Pink_Garden",
    "Loffer_Boy",
    "Tiny_Heart",
    "Mr_Devil",
    "Love_Graphic",
    "Swagger_boy",
    "Oops_Lady",
    "Loyal_guy",
    "Open_Heart",
    "Army_Man",
    "Dream girl",
    "Big_bites",
    "Moon_Up",
    "London_lions",
    "Melody",
    "mylifeline21",
    "Readyfourfun",
    "SecretAgent",
    "Silly_Pie",
    "StudMonkeyBikers",
    "Naughty_Gamer",
    "BigBoyBikers",
    "Love_Insta",
    "supermagnificentextreme",
    "fairy_princess_kristy",
    "ragulykrackr",
    "woman_perfect_harmony",
    "pig_benis",
    "pie_sweetness",
    "fifty_shades_of_love",
    "cupid_of_hearts",
    "floating_heart",
    "pink_female",
    "foxer",
    "cute_sugar",
    "foxface",
    "pink_garden",
    "freak_bad",
    "cuteness",
    "freak_treat",
    "pink_lover",
    "freaky_fred_creep",
    "cutesy",
    "frenky_dude",
    "pink_page",
    "frozen",
    "woman_perfect_harmony",
    "funky_dude",
    "Missie Lucky",
    "funky_money",
    "Thechillpixel",
    "gamer_simmer",
    "Dilo Ki Rani",
    "gamer_slayer",
    "Girlyapa",
    "gamer_tales",
    "Butterfly Girl",
    "gamie",
    "Pretty Lil Princess",
    "geekstar",
    "Bunny Angel",
    "geez",
    "Dance And Sing",
    "genius_general",
    "Girl True",
    "gentleman",
    "She Is Resilient",
    "hello_hell",
    "Techie Luxe",
    "incident_story",
    "Classy Claire",
    "loose_ex_comfy_baby",
    "Fashion Princess",
    "lovely_lads",
    "little_miss_piggy",
  ];

  function generateRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }

  const { address, isConnected } = useAccount();
  useEffect(() => {
    setUplayeradd(address);
  }, [address]);
  console.log("add", address);
  const navigateTo = useNavigate();

  async function reg() {
    console.log("intereacting contract");
    const playername = generateRandomName();

    const res = await isusrregistered({ playeradd });

    console.log("res", res);
    if (res == false) {
      const response = await registerusr({ playeradd, playername });
      console.log("response", response);
      if (response) {
        navigateTo("lobby");
      }
    } else {
      navigateTo("/lobby");
    }
  }

  return (
    <>
      <DemoStore />
      <TrippyScroll />
      <DemoStore2 />
    </>
  );
}
