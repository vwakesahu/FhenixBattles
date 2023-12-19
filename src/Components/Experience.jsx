import { Environment } from "@react-three/drei";
import {
  Joystick,
  insertCoin,
  isHost,
  myPlayer,
  onPlayerJoin,
  useMultiplayerState,
} from "playroomkit";
import { useEffect, useState } from "react";
import { Bullet } from "./Bullet";
import { BulletHit } from "./BulletHit";
import { CharacterController } from "./CharacterController";
import { Map } from "./Map";
import {
  useWaku,
  useContentPair,
  useLightPush,
  useStoreMessages,
  useFilterMessages,
} from "@waku/react";
import protobuf from "protobufjs";

const ChatMessage = new protobuf.Type("ChatMessage")
  .add(new protobuf.Field("timestamp", 1, "uint64"))
  .add(new protobuf.Field("sender", 2, "string"))
  .add(new protobuf.Field("message", 3, "string"));

export const Experience = ({ downgradedPerformance = false }) => {
  const [players, setPlayers] = useState([]);
  const { node } = useWaku();
  const { decoder, encoder } = useContentPair();
  const { messages: storeMessages } = useStoreMessages({
    node,
    decoder,
  });
  const { messages: filterMessages } = useFilterMessages({ node, decoder });
  const { push } = useLightPush({ node, encoder });
  async function sendMessage(sender, message) {
    const protoMessage = ChatMessage.create({
      timestamp: Date.now(),
      sender,
      message,
    });
    const serialisedMessage = ChatMessage.encode(protoMessage).finish();
    const timestamp = new Date();
    await push({
      payload: serialisedMessage,
      timestamp,
    });
    console.log("MESSAGE PUSHED");
  }

  function decodeMessage(wakuMessage) {
    if (!wakuMessage.payload) return;
    const { timestamp, sender, message } = ChatMessage.decode(
      wakuMessage.payload
    );
    if (!timestamp || !sender || !message) return;
    const time = new Date();
    time.setTime(Number(timestamp));
    return {
      message,
      timestamp: time,
      sender,
      timestampInt: wakuMessage.timestamp,
    };
  }
  const processMessages = () => {
    let messages = storeMessages.concat(filterMessages);
    messages = messages.map(decodeMessage);
    messages.forEach(({ message, sender }) => {
      if (message.type === "bulletFired") {
        const bulletData = JSON.parse(message.data);
        setBullets((currentBullets) => [...currentBullets, bulletData]);
      } else if (message.type === "bulletHit") {
        const hitData = JSON.parse(message.data);
        setHits((currentHits) => [...currentHits, hitData]);
      }
    });
  };

  useEffect(() => {
    processMessages();
  }, [storeMessages, filterMessages]);

  const start = async () => {
    await insertCoin();
    onPlayerJoin(async (state) => {
      const joystick = new Joystick(state, {
        type: "angular",
        buttons: [
          { id: "fire", label: "Fire" },
          { id: "jump", label: "Jump" },
        ],
      });
      state.setState("health", 100);
      state.setState("deaths", 0);
      state.setState("kills", 0);
      const newPlayer = {
        id: state.id,
        state,
        joystick,
        health: 100,
        deaths: 0,
        kills: 0,
      };
      setPlayers((players) => [...players, newPlayer]);
      state.onQuit(() => {
        setPlayers((players) => players.filter((p) => p.state.id !== state.id));
      });
      const playerJoinedMessage = {
        id: state.id,
        health: 100,
        deaths: 0,
        kills: 0,
      };
      await sendMessage(
        "system",
        JSON.stringify({ type: "playerJoined", data: playerJoinedMessage })
      );
    });
  };

  useEffect(() => {
    start();
  }, []);

  const [bullets, setBullets] = useState([]);
  const [hits, setHits] = useState([]);

  const [networkBullets, setNetworkBullets] = useMultiplayerState(
    "bullets",
    []
  );
  const [networkHits, setNetworkHits] = useMultiplayerState("hits", []);

  const onFire = (bullet) => {
    setBullets((bullets) => [...bullets, bullet]);
  };

  const onHit = (bulletId, position) => {
    setBullets((bullets) => bullets.filter((bullet) => bullet.id !== bulletId));
    setHits((hits) => [...hits, { id: bulletId, position }]);
  };

  const onHitEnded = (hitId) => {
    setHits((hits) => hits.filter((h) => h.id !== hitId));
  };

  useEffect(() => {
    setNetworkBullets(bullets);
  }, [bullets]);

  useEffect(() => {
    setNetworkHits(hits);
  }, [hits]);

  const onKilled = (_victim, killer) => {
    const killerState = players.find((p) => p.state.id === killer).state;
    killerState.setState("kills", killerState.state.kills + 1);
  };

  return (
    <>
      <Map />
      {players.map(({ state, joystick }, index) => (
        <CharacterController
          key={state.id}
          state={state}
          userPlayer={state.id === myPlayer()?.id}
          joystick={joystick}
          onKilled={onKilled}
          onFire={onFire}
          downgradedPerformance={downgradedPerformance}
        />
      ))}
      {(isHost() ? bullets : networkBullets).map((bullet) => (
        <Bullet
          key={bullet.id}
          {...bullet}
          onHit={(position) => onHit(bullet.id, position)}
        />
      ))}
      {(isHost() ? hits : networkHits).map((hit) => (
        <BulletHit key={hit.id} {...hit} onEnded={() => onHitEnded(hit.id)} />
      ))}
      <Environment preset="sunset" />
    </>
  );
};
