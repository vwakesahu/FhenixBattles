// ImageUploadForm.js
import React, { useState } from "react";

import axios from "axios";
import { ethers } from "ethers";
import lighthouse from "@lighthouse-web3/sdk";

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const urle = URL.createObjectURL(e.target.files[0]);
    setUrl(urle);
  };

  const signAuthMessage = async (privateKey, verificationMessage) => {
    const signer = new ethers.Wallet(privateKey);
    const signedMessage = await signer.signMessage(verificationMessage);
    return signedMessage;
  };

  const getApiKey = async () => {
    const wallet = {
      publicKey: "0x161ac1BAD1b9cfE7a940aaCe6BC998d41Cbb536a", // Ex: '0xEaF4E24ffC1A2f53c07839a74966A6611b8Cb8A1'
      privateKey:
        "3d0b42233b05e0fe92a28f150a14fd033a2acf38b0acdd991fadced1d5f0fe5d",
    };
    const verificationMessage = (
      await axios.get(
        "https://api.lighthouse.storage/api/auth/get_message?publicKey=${wallet.publicKey}"
      )
    ).data;
    const signedMessage = await signAuthMessage(
      wallet.privateKey,
      verificationMessage
    );
    const response = await lighthouse.getApiKey(
      wallet.publicKey,
      signedMessage
    );
    console.log(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("description", description);

      console.log(formData);

      const uploadResponse = await lighthouse.uploadBuffer(
        url,
        "cd6bb6a4.2b71d1c6cbdd4902830c42d7bff4bc1d"
      );

      console.log(uploadResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async (file) => {
    // Push file to lighthouse node
    // Both file and folder are supported by upload function
    // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
    // Fourth parameter is the deal parameters, default null
    const output = await lighthouse.upload(
      file,
      "cd6bb6a4.2b71d1c6cbdd4902830c42d7bff4bc1d",
      false,
      null,
      progressCallback
    );
    console.log("File Status:", output);
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => uploadFile(e.target.files)}
        />
      </label>
      <br />
      <button type="submit">Upload</button>
      <button onClick={getApiKey}>Get API</button>
    </form>
  );
};

export default ImageUploadForm;
