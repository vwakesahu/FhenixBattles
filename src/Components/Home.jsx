import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useSelector } from "react-redux";
import Link from "next/link";
import { isusrregistered, registerusr } from "../config/BlockchainServices";
import { useAccount } from "wagmi";
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
    <main className=" bg-black min-h-screen">
      <div className="bg-[url('https://blogger.googleusercontent.com/img/a/AVvXsEg39AIUhTdnF2XMWF49TXwa4xZqcNqIr6mIouVMRYhn5MsAKN1kccXzp7yGE-lfISQOCCbnTSvU1xI1JIxvBmHTLzhHCLePNJrXowFlaaxDgADweNo0iNAGyDpPML1rfZqA6-Ns5z4CtIMZAIhR3U1c3eAV-Pje3sMhSVVVgn4Onz4bKCRmkPtB0LGuhJo')]   bg-cover bg-no-repeat text-white min-h-screen ">
        <Navbar />
        <div className="pt-28">
          <div className="text-center font-bold pt-5 md:pt-5 font-serif  text-xl   md:text-9xl">
            <div className="flex justify-between">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgQzzWX2Yv7Wbrsq5it0UQsl14mDTmXUQnkAm6BkhhNqZeBjreNAR6H3Ra_EJOcT6wUqeaEOlWfqkFHm-SyZJ1ko5A_vth7aUPjt7ju3M_3OhZtGQktsfZiFFuk4HOO9VO3JA69AiY0yIkfHa_cYSC-4tYAAzjh8PBWOpbPu-_MBhcnhi8uqptx-qcOiZc"
                alt=""
                className="md:h-20 h-8 w-auto"
              />
              <p className="herotext">BLOCKBATTLE</p>
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEg1wUR4ock3lkLd6GwFLwwaeA03b8O1O4xAPhtQMg2W9mKJt1Voiw7Ld94ruH-i3ta7f9pWOI_FmtqxzEUHm4f-cUscPTTWf8BmVIOMA4QFbbeYnXO1x2-2Y7Z3b_tcLaV9JgBK6gNpvxs906WoKWYej8RzYY3L9knZ62gmpd2gMXehiN3jOu7JWF0DHfE"
                alt=""
                className="md:h-20 h-8 w-auto"
              />
            </div>

            <div className="flex justify-center">
              <div className="flex fontpop mx-10 md:mx-0  md:text-3xl justify-center">
                <p>
                  <span className="  text-[#C5F404]">
                    Decentralized Domination :
                  </span>{" "}
                  Command Your Character,
                  <br /> Conquer the Blockchain Battlefield!
                </p>
              </div>
            </div>
            <div className="mt-5 mx-20 flex justify-between space-x-4">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhwm8wvo0d75uUK7qADGTsYREvEE0E2CH7XYM-_6INqEfIfO-OxsXx_yst9etVWcY36h1RHLlP6oOa7Krub-3DxH8aShC8VVJiQ0wPXAVzYhF5UJQx9KLpXseRf2vBoN9R5Id3NqQyMypTORnKPRwOKdh3zWZ2IxmoswxZNLDxN_GAuIw7j1hhv780HU-A"
                alt=""
                className="h-14 w-auto md:h-auto"
              />
              <div className="flex ">
                <div>
                  <button
                    onClick={reg}
                    className="border-2 md:w-60 rounded-full border-l-8 py-2 px-3 border-[#9FC610] text-xl md:text-4xl"
                  >
                    Play Now!!
                  </button>
                </div>
              </div>
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgz6-KqO7JJnjiajuTzrfyEHzgtMEgiaZ-b6wO3NukP89dKfqVRMVg0d1ENDpE0b5KoXuREAHN6syJjBlqTXBTFkWOxAthRZp0ofDSQPZi3Yn7_UbZWNK-GoA43pzSOaqnDkywnRy5rpwaqtewiIbsBbSLNzQN5f6RjR6GRSjBKpY4SsGUAIFj2XRP15dE"
                alt=""
                className="w-auto  rotate-45	 h-10 md:h-60"
              />
            </div>
          </div>
        </div>
        <div className="text-[#CDFF00] text-center md:my-40 mt-10  text-xl md:text-[160px]">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEg20vD_qWiSqH6UyoWrX5m2WAhP_TH-gTKYU1hSSTHnHm9xtkloWGfbZOb1OLgX44J_ZAVfdrL5RK8LG_aFQgtmY2WEOMh9_DM9JcVA_KvFaIU02W9KuwISUhFjyE68CAmxPMmfKG_bkMjrgfBFi3giUYr5LclJ4Jk2vQ8x6t8DTuk1jBxt8KBm2I3KfYM"
            alt=""
            className=" px-20"
          />
        </div>
        <div className="flex flex-col  md:flex-row md:space-x-16 mx-5 md:mx-32 mt-20">
          <div className="flex  md:space-x-8 border-2 border-r-4 border-b-8 border-[#9FC610] px-5 md:px-20 py-5 rounded-xl md:rounded-full">
            <div>
              <img
                className="h-10 mt-2 w-auto"
                src="https://blogger.googleusercontent.com/img/a/AVvXsEh_NpbSDHBIVFDgZE-VWSiX42DtF5GzpuITVjjy87N3dA8kt6ArW33EPHRYkUihwJ55LCafxqtqk2dJpdl8VWNxdPngmVcXJFBAu40SixVoBUYAGwi7-WlAiFlUtNEdWjk_F1njLpI8_pZ-oNoAuaqVDy00g5dcsp5ySyjlAdKeSpDulCyB50EKWgw9oe4"
                alt=""
              />
            </div>
            <div>
              <p className="text-xl ">
                Game <br /> Features
              </p>
              <p className="  my-5 text-[#A2A2A2] text-md md:w-[600px]">
                Experience intense multiplayer battles, climb leaderboards for
                exclusive NFT rewards, and enjoy lifelike graphics powered by
                blockchain technology. Enter custom rooms, strategize, and
                dominate countdown-driven challenges for unparalleled gaming
                excitement.
              </p>
            </div>
            <div>
              <div className="bg-[#9FC610] rounded-full p-2 mt-12">
                <MdArrowOutward className="text-6xl rounded-full border-2 border-black text-black bg-[#9FC610]" />
              </div>
            </div>
          </div>
          <div className="border-2 mt-5 md:mt-5 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
              alt=""
              className="md:h-12 h-8 w-auto"
            />
            <p className="md:text-xl text-sm text-center">
              Blockchain
              <br />
              Powered
              <br />
              Realism
            </p>
          </div>
        </div>
        <div className="flex md:flex-row space-y-5 md:space-y-0 flex-col mx-5 md:mx-0 justify-center  md:space-x-20">
          <div className="  md:mt-32">
            <div className="border-2 mt-3 md:mt-0 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
                alt=""
                className="md:h-12 h-8 w-auto"
              />
              <p className="md:text-xl text-sm text-center">
                Intense
                <br />
                Multiplayer
                <br />
                Showdowns
              </p>
            </div>
          </div>
          <div className="md:mt-16">
            <div className="border-2  md:mt-20 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
                alt=""
                className="md:h-12 h-8 w-auto"
              />
              <p className="md:text-xl text-sm text-center">
                Dynamic
                <br />
                Timer-driven
                <br />
                Challenges{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 mt-3 md:mt-0 mx-20 md:mx-0 border-[#9FC610] flex flex-col md:space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="https://blogger.googleusercontent.com/img/a/AVvXsEgYDnRdQS_te0YbrIdK2D1nGL5EPPaN0pjRJr-3TUUM1Zc6IQbcX48JnToqKyE2wTjkCKck1ekwvHK1-npja4ZAi1VvuZiWvwIzYl8ZXq7Z6ssdgJ-Fxws8gK7AUBLdaQUxw2-8NjR7ic5Rp0r1xxB_gKbVATKIU_mNnhJ5xZFrNut9dTSR5yveEuZ5TOc"
                alt=""
                className="md:h-12 h-8 w-auto"
              />
              <p className="md:text-xl text-sm text-center">
                NFT Rewards
                <br />&
                <br />
                Leaderboard
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-end mx-10">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhdS7NEVBdqV9dSYUdLiCChJOWMfy-dxrfvKavSeO88mN8Y96u4fuNg92oMMALzAVEjZ1d8IGCGrbsFMbZVrx32FWwRAX5Klfqqk31khwDBhxJCQNf4wXrTapTwptYWM24zT7hkvbOwIoYlN3g98h4cP-xkR75IKFyUA4Y8YihmaGlmsT0jNGWy-QZnHro"
            alt=""
            className="md:h-auto h-12"
          />
        </div>
        <div className="flex  mx-16 md:mx-40 space-x-4 items-center">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEh_NpbSDHBIVFDgZE-VWSiX42DtF5GzpuITVjjy87N3dA8kt6ArW33EPHRYkUihwJ55LCafxqtqk2dJpdl8VWNxdPngmVcXJFBAu40SixVoBUYAGwi7-WlAiFlUtNEdWjk_F1njLpI8_pZ-oNoAuaqVDy00g5dcsp5ySyjlAdKeSpDulCyB50EKWgw9oe4"
            alt=""
            className=""
          />
          <p className="md:text-4xl text-xl font-bold">How it Works?</p>
        </div>
        <div className="flex mx-10 md:mx-0 md:flex-row flex-col mt-10 justify-center space-x-3">
          <div className="mt-2 ">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Choose Your
                <br />
                Warrior
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10    w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEiz1_JHsBBvn0d_TTfRIoQnYXnMhSs3-eU7VNTmKAyPVK7dfExGbgOUAg633Luur0IwSHgOeQLDoEMftbk_qUezmySwUZh-vogXRcDK2qS6e0PTSAUReO4L2WeIcT8t1PkPpd8bvLlQn8HOW_pkNzLH6ckJ8-8R3SV8n0NU8lQUmNvb8JCvsrve3U5vXBk"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEj44BtkfqscsWU3UbBd9c6Xtg3s1AZFQZN-VsunaOU07PldkT5bLDYs0C4g68E6FiqiVP2dh8DKlkiL-kGl-9rfwLYDwJwhgJ9LDXcFWhwP794UHac7dkm2BZLyZJ9wVCUi6xSKIkE3GZKCvm6CX7AduqN0ZsiGPXXsdz6BwLskuhyYeuxQjj6kCMqaHmo"
            className="w-auto md:block hidden h-32 mt-5 md:mt-20"
            alt=""
          />
          <div className="md:mt-28 mt-5">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Enter the
                <br />
                Battle Arena
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10   w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgcsuxugFu9AbGKvZrQ00CAxIkj6mQqH6aEBbRnzyKmAZx_WMhRlNIRvL_rBDQImRpYQNG2Rb8xF2LO1OsGVdn5wVnUdok5I8uQwX-Q2h09Z-E87JuMDF85OmQ36HrjTU2gNHH8r54mffcOa3cMUuvRGnmmVF_9lJXl5YaVScTUE9E-e2AzQJ84iNqvcc8"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiBXT2oHi-Kt9ocRHkHLvq7gxxfKgR4Ayp4UqDVj-nm-YYbV6fj8LRzoy4nrTuofZ2R-gW49Q9d_4QoE4JcrVRsDJZE6kHol2oqiNNgn-hS9aswHudgtVIqBl_6S9hz_gCaWzlf2VI73yFD0HAnn7r2eQoJ1AiKNrsSufUS4QDmhJscFuuH29Ue9FK68Vw"
            className="w-20 h-24 md:block hidden "
            alt=""
          />
          <div className="md:mt-0 mt-5">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Countdown
                <br />
                to Chaos
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10   w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgM5oinAQ_UE6Rcmfl2dDMRc-g65R8bNUn0oZrAqGXxombtAkz8qomvTEP-qX5G4om99zF1AbjTcAQT6jO-iDDpa4saCQmCcZ2TB1XTwxI-Yu3uc0c9ia8fN6VsZFwDkKClaYYcFldegCFeCMqEvEHUISfwWjrBLJP-a3E1sXswP_KD7gx570VcEtIGmEA"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEiSKOMVa9qV_1KCRR2qdT-oKjqOQkcqaOeOaUzXkDKGIpQ9RNul1JkpjuFhID8bcBK39QXNEu-B2diXcC9a5BHH2Uva_EbUccSDcZ2fk6tZQ2n0x7lXhVSfwYc2ELby7_YMnoxZChWup_zDuXH6OxF3tNEvHrAhhCGcp8_-qD_z3PkzPB6F3O4AsfDmBWo"
            alt=""
            className="md:block hidden"
          />
        </div>
        <div className="flex  md:flex-row flex-col mt-10 md:mt-0 md:mx-52   justify-between space-x-3">
          <img
            className="md:h-52 h-40  w-auto"
            src="https://blogger.googleusercontent.com/img/a/AVvXsEjGxp02ByIDTr8MCj2zorW34gqPq0NL7yQN539S5AABjJGmxXlVLT9wEPeWhm1FIghikmRu4qy_CHnm88S9IzByI89pJGvSX3Y1xkunm6OPMMSHFyoryvThC2BC-4aUbT6E4K_lF_DL1LdHw6PxRDITLY_1plZppnpDLcJEKgimGhXZVEExdUfYazxqDi4"
            alt=""
          />

          <div className="flex md:flex-row flex-col space-x-2">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjyDVfmTYIC0QbectXKUlUtiwHfbiHCpua1AtVStBbs_GIXgAH4CqoSSR3EE5OMTzlLKa59XRn_1UcKjzNzCIvrAPS67GNRsFsVOpCMf2GCvZeeC4-hb7MgIZfWg9-iavxYhCAMccO-JnQfjReH7Iwo60k0951mtvIXafcccONCQWo1Xuf3PdYXstZx7LQ"
              className="h-60 w-auto md:block hidden"
              alt=""
            />
            <div>
              <div className="border-2 mx-10 md:mx-0 mt-5 md:mt-0 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
                <p className="text-xl text-center">
                  Battle for
                  <br />
                  Supremacy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  md:flex-row  items-center flex-col mx-5 md:mx-60   justify-between">
          <div className="md:mr-20">
            <Link href="/lobby">
              <button className="border-2 w-60 mt-5 rounded-full border-l-8 py-2 px-3 border-[#9FC610] text-3xl">
                Play Now!!
              </button>
            </Link>
          </div>
          <div>
            <div className="border- mt-5 md:mt-0 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Claim Your
                <br />
                NFT Prize
              </p>
              <div>
                <img
                  className="h-10 absolute mt-10   w-auto"
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhCtP1iRRYCTIV8JZqseg-gQh63_qgz2hjvVe-zgkXe-42f7-QfkL7FwbLv_HQtBFAGpVU5gu98sfo7cGsmPKJTUX9pbv3r6Uu8fGZkjhXuFEUy-SEB6xiP7rjUOWMSJKbmh6-2XVYW53TxcF7ffnkgZcmvtNI4jBL8djH9XaRwxvzgbpsMlG1FxIzJauI"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEjvDs5X51vKMddkwvsJ5HNXVk6mFVbw4aCp0dnbgywKvlplU_8xK5WI_XRaQ7Nt6qvhADqa15PfpenLsObkOkXUie9pEYQiAVJq6NziJFgzHnF2cGIRorJ8XiSg9YPdu0cEuxvDhVdl0hvco-U81mTzZjF0rZfCcQcjL2nsms7fGQG9XIrcKyXrJ8qqg9E"
              className="md:ml-20 mt-20"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#9FC610] mt-20 py-3">.</div>
      </div>
    </main>
  );
}
