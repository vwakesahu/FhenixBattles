# FhenixBattle


FhenixBattle is an exciting online multiplayer game where players from various regions can join, play, and compete for rewards in the form of NFTs. This game leverages the power of Fhenix, providing a dynamic and engaging gaming experience.

## Highlights
- **Fhenix Integration:** FhenixBattles utilizes the capabilities of Fhenix, ensuring a secure and seamless gaming environment.
  
- **NFT Rewards:** Winners of FhenixBattles are rewarded with unique NFTs, adding a valuable incentive to the competitive gaming experience.

## Contract Functions

### Asset Struct

```solidity
struct Asset {
    string name;
    string imageHash;
    EncryptedInt price;
    EncryptedInt strength;
    EncryptedInt armorPower;
    EncryptedInt rateOfFire;
    EncryptedInt range;
    EncryptedInt speed;
    AssetType assetType;
}
```

### Random Character Spawn with TFHE
TFHE is integrated to spawn characters at random locations on the map, enhancing the unpredictability and excitement of each game session.
```solidity
function _createRandomNum() public returns (euint8) {
    euint8 randomNum = TFHE.randEuint8();
    return randomNum;
}
```
## Steps to Play

1. **Login with Fhenix:**
   - Ensure you have a Fhenix account. Log in to your Fhenix account to access FhenixBattle.

2. **Press Play:**
   - Located at the bottom of the page, the "Play" button initiates your journey into FhenixBattle.

3. **Navigate the Lobby:**
   - Upon pressing play, you'll be redirected to the lobby. Customize your gaming experience by selecting the timer, choosing a map, and clicking "Play."

4. **Invite Friends:**
   - Before launching into battle, invite your friends to join the gaming session.

5. **Launch and Enjoy:**
   - Click on "Launch" to start the game. Enjoy an immersive multiplayer experience and compete for victory.

## Running Locally

To run the application in your local environment, follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/vwakesahu/FhenixBattles
```
2. **Navigate to the project directory:**
 ```bash
 cd FhenixBattles
```
3. **Install dependencies:**
 ```bash
 npm install
```
4. **Run the development server:**
 ```bash
 npm run dev
```

Now, you're ready to experience FhenixBattle locally on your machine! 
