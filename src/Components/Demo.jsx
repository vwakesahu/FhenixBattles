import React, { useEffect, useState } from "react";
import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { getPlayerData } from "../config/BlockchainServices";
import { useAccount } from "wagmi";

function Demo() {
  const map_path = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy5za99DFm0qQWqXIYXTyUqxErRkpno3XOGmzDiV7KJstjomtrQZlZh-Knce9FpOIgpYEN8VhitJR3wsU-UktSirP0jhrViNRbBQehjg1lWLLtgdVtznfXCGmAvdGDqLv9KKoQTUePrr3NHviYu8bdCAnh25mpa14d3LRcc32AbSvC2QHU-R0AQRNim0o/s1600/untitled.png",
    "https://blogger.googleusercontent.com/img/a/AVvXsEgHxU-HB-lQ9ifrEy-ymcHR6aeTkwzBaOsIQ6SXinjXyVVmqCbtY44ZraIGYM86B6DT7vk3jDrQSbdJn61D6jZB3HX3aRSc7EIYnSStvJmZefxCOpcKRZVFqha7jg0dd4i-0qZN-87FqviZbUY3oODu3bvJZK9ytVKnLRYcgFpo9hz4JzK25BmQS5c9TMI",
  ];

  const [map_count, setMap_count] = useState(0);
  var i = 0;
  const [img_v, setImg] = useState(map_path[i]);
  const image_set = (move) => {
    console.log(move, i);
    if (i > map_path.length - 1 || i < 0) {
      i = 0;
    } else {
      if (move === 1) {
        i++;
      } else {
        i--;
      }
    }
    if (move === 1) {
      setImg(map_path[i]);
      localStorage.setItem("map", map_path[i]);
    } else if (move === 2) {
      localStorage.setItem("map", map_path[i]);
      setImg(map_path[i]);
    }
    if (map_path[i] === undefined) {
      setImg(map_path[0]);
    }
    console.log(localStorage.getItem("timed"), localStorage.getItem("map"));
  };
  const gltf = useLoader(GLTFLoader, "./models/Character_Soldier.gltf");
  const { address, isConnected } = useAccount();
  const playerAddress = address;
  console.log("add", address);
  const [playerdata, setPlayerdata] = useState("");
  useEffect(() => {
    async function getplayere() {
      const res = await getPlayerData({ playerAddress });
      console.log("res", res);
      setPlayerdata(res);
    }
    getplayere();
  }, [address]);

  const map_names = ["pochinki", "pochinki", "Israel"];
  const updateData = async () => {
    console.log({
      map: localStorage.getItem("map"),
      time: localStorage.getItem("timed"),
    });
    try {
      const response = await fetch(
        "https://block-shotter-api.vercel.app/map_info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            map: localStorage.getItem("map"),
            time: localStorage.getItem("timed"),
          }),
        }
      );

      const data = await response.json();
      console.log("Updated data:", data);
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  return (
    <>
      <div className="bg-[url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirjJLoWEUvGMj-1QzqceVDKwtgwjQcIU-QIOp0QIBfaUCSA8QJxGSJa0LU7fZcVdRMgmI7qUcDx-Q-i1JVawfLYBto1yq5oUcqTDGAs2ZLUDttNavphNMCKq58GNlAAPf6vYlejNGBazflG2wUo-5O7MRwX4EUFzfQDu2WfVcdagTGQ2c7n9EEk9VnT-0/s1600/a.jpg')] min-h-screen  bg-no-repeat bg-cover">
        <div className="flex items-center space-x-11 text-white text-xl mx-20 py-8">
          <div className="flex homeprofilebg px-3 py-2 items-center space-x-3">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEilxD0f-Y5qYnr3AA8xT_tvMlR7ru7Yl1zxozlEzg-C5oJqOStwAR8OxsgItoWC112TQTgCt4_xylJDmr4v_Z_A3MDUy22L6CAI_Cvw_FnicYCcoXScwCt41T-xiWNZ8JQJyfbXNdygsgY9TxXvH-Yqdg0vqpeMrakh78RxXj5BAT4XwW1a3KsQVhexzog"
              className="h-12 w-auto"
              alt=""
            />
            <p>
              {playerdata[0]} LVL {playerdata[3]?.toString()}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEispplhVXS52zWgstszpWTDQTrJ7FpVpnN4YjBilPRJ0hmtf0FGRI1-JoXko1x1mIG4Gi7ADUF3Yl9lu5JlsLRFnGUcPJnJzStlHom3K63Wu2QcL-nsJoMq2V66FcenoK7MbQVn_9vg1_8E1Q25wDoQJb2AGKiq4JGDYyknSKoXzYQFFR8LEhpX-R13ad4"
              alt=""
              className="h-8 w-auto"
            />
            <p>{playerdata[1]?.toString()}</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="https://blogger.googleusercontent.com/img/a/AVvXsEie2DZwyszxtLdkqYknRhqV0hDa85fb4knhn16GCCa3HO6AB_BHA19-BnWKl5qzuE8oOJ_WVifNg1FdY05UTucSiz36llzpSqUBjYbOriIDtaQV9iLJe0eMs455RVi3wkImTId7l0BqdOamXFulz7jivdeEiXqlhfItGYU-7iDuUgSBWA1PweMDY341yFM"
              alt=""
              className="h-8 w-auto"
            />
            <p>{playerdata[2]?.toString()}</p>
          </div>
        </div>
        <div className="flex  text-white text-2xl font-semibold  justify-between mx-20">
          <div>
            <div className="homebox mt-20 px-16 py-10">
              <div className="flex items-center space-x-5">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEhwze50sr7c42qWHWl1ZtWP-h91tRw96mnDxbST2rhMGENwxAH4LRxTWod417CEaB4xQfPVZ-0-kB1XCD2BDn1hwqxTPxNK6Z_Dz8F7Fo8hDjazJX_zXr458VZUPjdzdih1xheqz4yJg7oXTEQizG8q-8vC2B69RhKN4WOO6XS0AvvMhgGSGkq64aSJ3dQ"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/optstore">Store</Link>
                </p>
              </div>
              <div className="flex items-center my-10 space-x-5">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEgn6Znvl2a2HObGhEoqPyeJymSTwEqIxV8f7IIQK3sCnu7oyYtZCkSg4XB-SRkV7NaxN7OVjliWj7gsOcc9VFmULUPaex4K3A1oEWf6wNsLfa8y9CcwLEdA52Dh-Hl2OnevhWJVJlI7CAMUpnWT97KEO42TfPhAxgHi7umyV4vGcVoO_XTnyxpNyJasnPg"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/optstore">LuckRoyale</Link>
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <img
                  src="https://blogger.googleusercontent.com/img/a/AVvXsEj9mP_S5zrE05iA7nZDHHKPCR4xSdtSRPtzr9tu1TMRYbTkG9wNiCq_Ri20Nna07x-B775iuyjcJBplvhELJglNv426Q-hq-SVkXOhxSDrBLoROEbIAxMzxcUSWOaNF5lpgFBf35PUWkcEoyFN-rhZnwh9o4Q8ply2YLZrxTbmzr_zobAF7jEPIIunNH9s"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/Guns">Vault</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="root2">
            <Canvas camera={{ fov: 75, position: [0, 1, 5] }} shadows>
              <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
              <primitive object={gltf.scene} position={[0, 1, 0]} castShadow />
              <OrbitControls target={[0, 1, 0]} />
            </Canvas>
          </div>
          <div className="mt-32 ">
            <div className="border border-white p-2 rounded-lg backdrop-blur-lg">
              <div className="backdrop-blur border-[0.1px] w-72 rounded-lg px-4 flex flex-col items-center justify-center relative  ">
                <div className=" flex items-center justify-center gap-2 py-2">
                  <FaMapMarkerAlt />
                  <p className="">Map</p>
                  <div className="absolute  flex top-7 h-full w-full px-2 ">
                    <div className="flex items-center w-full  justify-between ">
                      <IoIosArrowBack
                        className="rounded-full cursor-pointer backdrop-blur-lg border w-10 h-10 p-2"
                        onClick={() => {
                          if (map_count > 1) {
                            image_set(2);
                            setMap_count(map_count - 1);
                          }
                        }}
                      />
                      <IoIosArrowForward
                        className="rounded-full cursor-pointer backdrop-blur-lg border w-10 h-10 p-2"
                        onClick={() => {
                          if (map_count < 2) {
                            image_set(1);
                            setMap_count(map_count + 1);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <p className="mb-0">{map_names[map_count]}</p>
                <img
                  src={img_v}
                  className="h-40 rounded-lg mb-5  w-auto"
                  alt=""
                />
              </div>

              <div
                className="flex justify-between mx-2 items-center mt-3"
                onClick={() => {
                  localStorage.setItem("time", "60");
                }}
              >
                <p
                  onClick={() => {
                    localStorage.setItem("timed", "60");
                  }}
                  className="px-3 text-lg hover:text-black cursor-pointer hover:bg-[white] py-1 border border-[white] rounded-xl text-[white]"
                >
                  1 min
                </p>
                <p
                  onClick={() => {
                    localStorage.setItem("timed", "300");
                  }}
                  className="px-3 text-lg hover:text-black cursor-pointer hover:bg-[white] py-1 border border-[white] rounded-xl text-[white]"
                >
                  5 min
                </p>
                <p
                  onClick={() => {
                    localStorage.setItem("timed", "600");
                  }}
                  className="px-3 text-lg hover:text-black cursor-pointer hover:bg-[white] py-1 border border-[white] rounded-xl text-[white]"
                >
                  10 min
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  className="bg-white rounded-lg w-full text-center px-10 font-semibold  py-2 mt-5 text-xl text-black "
                  href="/game"
                >
                  Play!!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
