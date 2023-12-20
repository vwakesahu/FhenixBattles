import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import { LightNodeProvider } from "@waku/react";
import { Protocols } from "@waku/sdk";
import Lobby from "./Components/Lobby";
import Home from "./Components/Home";
import SlideApp from "./Components/SlideApp";
import Options from "./Components/Options";
import StoreOptions from "./Components/StoreOption";
import Result from "./Components/Result";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  polygonZkEvmTestnet,
  mantleTestnet,
  polygonMumbai,
  celoAlfajores,
  base,
  xdcTestnet,
  lineaTestnet,
  filecoinHyperspace,
  scrollSepolia,
  filecoinCalibration,
  arbitrumGoerli,
} from "viem/chains";

const { chains, publicClient } = configureChains(
  [
    polygonZkEvmTestnet,
    mantleTestnet,
    polygonMumbai,
    celoAlfajores,
    base,
    xdcTestnet,
    lineaTestnet,
    filecoinCalibration,
    arbitrumGoerli,
    scrollSepolia,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "BlockBattle",
  projectId: "BlockBattle",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

import { HuddleClient, HuddleProvider } from "@huddle01/react";
import Demo from "./Components/Demo";

const huddleClient = new HuddleClient({
  projectId: "64oMGEVTnuPWGxDY-MGTKlLQe7xLje4f",
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HuddleProvider key="huddle01-provider" client={huddleClient}>
      <Router>
        <LightNodeProvider
          options={{ defaultBootstrap: true }}
          protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
        >
          <Provider store={store}>
            <WagmiConfig config={wagmiConfig}>
              <RainbowKitProvider chains={chains}>
                <Routes>
                  <Route path="/demo" exact element={<Demo />} />

                  <Route path="/" exact element={<Home />} />
                  <Route path="/lobby" exact element={<Lobby />} />
                  <Route path="/game" exact element={<App />} />
                  <Route path="/result" exact element={<Result />} />
                  <Route
                    path="/Character"
                    exact
                    element={<SlideApp data={"1"} />}
                  />
                  <Route path="/Guns" exact element={<SlideApp data={"2"} />} />
                  <Route path="/Car" exact element={<SlideApp data={"3"} />} />
                  <Route path="/options" exact element={<Options />} />
                  <Route path="/optstore" exact element={<StoreOptions />} />
                </Routes>
              </RainbowKitProvider>
            </WagmiConfig>
          </Provider>
        </LightNodeProvider>
      </Router>
    </HuddleProvider>
  </React.StrictMode>
);
