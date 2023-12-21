
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
    "Pranav",
    "Priyanka",
    "Sagar",
    "Tanmay",
    "Aakash",
    "Twinkle",
    "Vivek",
    "Ritika",
    "Prerna",
    "Mayank",
    "Vikas",
    "Asha",
    "Lucky",
    "Radhika",
    "Harsh",
    "Shanti",
    "Rajesh",
    "Ananya",
    "Vikram",
    "Kavita",
    "Gaurav",
    "Anjali",
    "Vijay",
    "Meera",
    "Rohan",
    "Neha",
    "Rohan",
    "Arjun",
    "Anjali",
    "Shivam",
    "Aarav",
    "Tanu",
    "Rohit",
    "Shreya",
    "Riya",
    "Aryan",
    "Ananya",
    "Mukesh",
    "Anita",
    "Preeti",
    "Ankur",
    "Isha",
    "Sanya",
    "Amit",
    "Priya",
    "Mukul",
    "Ishita",
    "Aditi",
    "Aniket",
    "Renuka",
    "Baby",
    "Chaitanya",
    "Anurag",
    "Arun",
    "Geet",
    "Swati",
    "Komal",
    "Pooja",
    "Neeraj",
    "Avantika",
    "Shubham",
    "Lavanya",
    "Anshu",
    "Ria",
    "Shivani",
    "Deepak",
    "Pragya",
    "Sumit",
    "Kiran",
    "Vidya",
    "Mihir",
    "Vaishali",
    "Nitin",
    "Aradhya",
    "Sahil",
    "Nikita",
    "Shikha",
    "Ashish",
    "Priyanshi",
    "Rohan",
    "Suhana",
    "Nikhil",
    "Mansi",
    "Anushka",
    "Pooja",
    "Aryan",
    "Sonia",
    "Kunal",
    "Ritu",
    "Akshay",
    "Aditya",
    "Sweety",
    "Pihu",
    "Sanya",
    "Aditi",
    "Sanjay",
    "Tanisha",
    "Aditya",
    "Aditi",
    "Siddharth",
    "Arnav",
    "Shreya",
    "Aditya",
    "Suman",
    "Tanvi",
    "Anusha",
    "Divya",
    "Manisha",
    "Vishal",
    "Amit",
    "Aman",
    "Arpita",
    "Ankita",
    "Baby",
    "Pankaj",
    "Pranjal",
    "Jyoti",
    "Neha"
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
