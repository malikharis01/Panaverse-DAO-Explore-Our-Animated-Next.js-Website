"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Public_Sans } from "next/font/google";
import { DM_Sans } from "next/font/google";

const mont = Public_Sans({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});
const dm = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start pl-10"
    >
      <div className="  animate-fade-down animate-once flex w-screen h-screen  items-center justify-center  ">
        <motion.div variants={slideInFromLeft(0.5)} className=" mt-16">
          <h1
            className={` text-3xl text-white font-semibold ${mont.className}`}
          >
            Specialized Track
          </h1>
          <h1
            className={` animate-fade-down animate-once  text-5xl ${mont.className} font-extrabold text-cyan-600 `}
          >
            Web 3.O Specialization
          </h1>

          <h1
            className={` w-[600px] ${dm.className} text-justify pt-6 text-gray-400 font-medium text-lg leading-8`}
          >
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
            metaverse client experiences.
          </h1>
          <button
            className={`${dm.className} mt-8  transition duration-500 ease-in-out bg-blue-900 border-blue-600 text-white  transform hover:-translate-y-1 hover:scale-110 py-3 px-4 rounded-md font-semibold `}
          >
            <Link href={"https://portal.piaic.org/signup"}>Enroll Now</Link>
          </button>
        </motion.div>
        <motion.div variants={slideInFromRight(0.5)}>
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={550}
            width={550}
          />
        </motion.div>
      </div>

      <div className="  text-lg text-justify flex flex-col pt-8 pl-4 pr-28 space-y-4 text-gray-300">
        <h1 className=" text-xl font-bold text-blue-500">
          W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Description:
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          In this course you will learn how to develop Web 3.0 DApps, create a
          project, deploy it in production, write smart contracts, unit test
          them, and create user interfaces for them. We will also learn to
          develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in
          order to develop Web 3 applications you also need to build on top of
          Web 2.0 technologies which we have already covered in the previous
          quarters.
        </h1>
        <h1
          className={`${mont.className} " text-5xl font-extrabold text-blue-700"`}
        >
          Course Outline
        </h1>
        <h1 className=" text-xl font-bold">Blockchain and Metaverse Theory</h1>

        <Link
          href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
          className=" text-red-500 underline"
        >
          The Metaverse: And How It Will Revolutionize Everything by Matthew
          Ball
        </Link>
        <Link
          href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
          className=" text-red-500 underline"
        >
          Mastering Blockchain - Fourth Edition by Imran Bashir
        </Link>

        <h1 className=" text-xl font-bold">
          Smart Contract Development in Solidity
        </h1>
        <Link
          href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
          className=" text-red-500 underline"
        >
          https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181
        </Link>
        <Link
          href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
          className=" text-red-500 underline"
        >
          Solidity Learning Repo
        </Link>

        <h1 className=" text-xl font-bold">
          Dapp Development using Ethers.js and Next.js 13
        </h1>
        <Link
          href="https://github.com/panaverse/dapps-nextjs"
          className=" text-red-500 underline"
        >
          Dapp Learning Repo
        </Link>

        <h1 className=" text-xl font-bold">Tokennomics</h1>
        <h1 className=" text-2xl font-bold">
          Blockchain Project: Create a Token and Launch ICO/IEO/IDO
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          As you probably know, the ICO (Initial Coin Offering) industry has
          been booming, and it is completely reinventing the way new startups
          kickstart themselves. In fact, have a look at Wikipedia list of
          highest crowdfunding projects, and you wll notice that blockchain
          projects absolutely dominate the list.
        </h1>
        <Link
          href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
          className=" text-red-500 underline"
        >
          crowdfunding projects,
        </Link>
        <Link
          href="https://phemex.com/blogs/what-is-a-dex-ido"
          className=" text-red-500 underline"
        >
          Understand the difference between IDO vs. IEO vs. ICO
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Also check these links for latest listings:
        </h1>
        <Link href="https://icodrops.com/" className=" text-red-500 underline">
          ICO list at ICO Drops
        </Link>
        <Link
          href="https://topicolist.com/"
          className=" text-red-500 underline"
        >
          ICO List of Best New Initial Coin Offerings
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and
          IDOsTop-Rated Crypto Token Sales:
        </h1>
        <Link
          href="https://cryptototem.com/ico-list/"
          className=" text-red-500 underline"
        >
          New ICOs, STOs, IEOs and IDOs
        </Link>
        <Link
          href="https://www.icolistingonline.com/"
          className=" text-red-500 underline"
        >
          ICO List Online
        </Link>
        <Link
          href="https://coincodex.com/ieo-list/binance/"
          className=" text-red-500 underline"
        >
          Binance IEO List
        </Link>
        <Link
          href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
          className=" text-red-500 underline"
        >
          Binance Launchpad
        </Link>
        <Link
          href="https://icomarks.com/ieo"
          className=" text-red-500 underline"
        >
          IEO List
        </Link>
        <Link
          href="https://polkastarter.com/"
          className=" text-red-500 underline"
        >
          Polkastarter
        </Link>
        <h1 className=" text-xl font-bold">
          Project Part 1: How to Launch a IEO on Binance Launchpad
        </h1>
        <Link
          href="https://appinventiv.com/blog/how-to-launch-an-ieo/"
          className=" text-red-500 underline"
        >
          Read How to Launch an IEO
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Your first task of the project is to make a google slides presentation
          on how to start a IEO on
        </h1>
        <Link
          href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04"
          className=" text-red-500 underline"
        >
          {" "}
          Binance Launch Pad
        </Link>
        <h1 className=" text-xl font-bold">
          Note: Also document the alternatives to Binance Launchpad.
        </h1>
        <h1 className=" text-xl font-bold">
          Project Part 2: How to Launch a IDO on Polkastarter
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Review the list of top
        </h1>
        <Link
          href="https://cryptorank.io/fundraising-platforms"
          className=" text-red-500 underline"
        >
          fundraising platforms
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Your second task of the project is to make a google slides
          presentation on how to start a IDO on the
        </h1>
        <Link
          href="https://polkastarter.com/"
          className=" text-red-500 underline"
        >
          Polkastarter
        </Link>
        <h1 className=" text-xl font-bold">
          Project Part 3: Create a Pako Token
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          By creating a token and related contracts, you wll also learn how to
          handle money sent to your contracts, which should come in handy if you
          want to create some kind of paid decentralized service in the future.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Therefore, for the sake of this chapter, lets imagine that our Pako
          DApp uses its own coin – the Pako Token. We will create two contracts
          – one for the token itself and one for the token crowd sale (the ICO)
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Now Create your own Pako ERC20 Token and deploy it on a testnet. The
          Token should be to use OpenZeppelin contracts. You will use the
          Hardhat development environment. Also, write at least twenty automated
          tests. We will be using Solidity and Typescript for development
        </h1>
        <h1 className=" text-xl font-bold">
          Project Part 4: Develop Crowd Sale Contract
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          This contract will be responsible for allowing users to exchange ETH
          for our Pako Token. In order to do that we need to set a price for our
          token (1 ETH = 100 Pako Token)
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Implement a payable buyToken() function.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Emit a BuyTokens event that will log who’s the buyer, the amount of
          ETH sent and the amount of Token bought
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Transfer 75% of the Tokens to the Crowd Sale contract at deployment
          time. i.e. Right after the contract is deployed, we want the token
          contract to send 75% of our token supply to it. While 25% remain in
          our personal owner account.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Transfer the ownership of the Crowd Sale contract (at deploy time) to
          our frontend address so that we are able to withdraw the ETH.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          You can use the openzeppelin crowd sale contracts however you will
          have to update the code to the latest solidity version.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Also write extensive tests, for example we will simply send a
          transaction of 1 ETH from a random account to the contract. After the
          transaction, we should expect the account to have received Pako, while
          the contracts balance should have been reduced.
        </h1>
        <h1 className=" text-xl font-bold">
          Note: Before you get started writing the token contract we suggest you
          review the access control
        </h1>
        <Link
          href="https://docs.openzeppelin.com/contracts/4.x/access-control"
          className=" text-red-500 underline"
        >
          https://docs.openzeppelin.com/contracts/4.x/access-control
        </Link>
        <h1 className=" text-xl font-bold">
          Project Part 5: Trying it with MetaMask
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          While its always good to test your code, its often more satisfying
          to see the results of your work wrapped in a nice UI. Lets see how we
          can deploy our contracts and get some Pako tokens into our MetaMask
          wallet!
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          We start by running our deployment scripts for the test network so
          that the new token contracts are uploaded and deployed.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          When its done, take note of what addresses the contracts were
          uploaded to and copy it!
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Now head to MetaMask, and send a transaction of 1 ETH to the crowd
          sale contract address. If your MetaMask wallet does not have any
          ethers, remember that you can use any faucet.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          After the transaction has been confirmed, you might be confused about
          why you cannot see any tokens in your wallet. It turns out that you
          need to manually add the token address in MetaMask in order to
          register it – after all, there are so many tokens out there, there is
          no way MetaMask could list them all by default!
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          To do this, open the side menu and click on the Add token button to
          get started:
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Once you are on the token page, click on Add custom token and paste
          in the token contracts address in the address field.
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          After confirming that you want to add the token, you should be able to
          see your Pako balance right next to your ETH balance in the wallet.
          How cool!
        </h1>
        <h1 className=" text-xl font-bold">
          Project Part 6: Trying it with Multisignature Wallets
        </h1>
        <h1 className={` font-normal text-md text-justify`}>Read</h1>
        <Link
          href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
          className=" text-red-500 underline"
        >
          https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
        </Link>
        <Link
          href="https://gnosis-safe.io/"
          className=" text-red-500 underline"
        >
          Now use Gnosis Safe{" "}
        </Link>
        <h1 className=" text-xl font-bold">
          Project Part 7: Sending Tokens using Ethers.js
        </h1>
        <h1 className={` font-normal text-md text-justify`}>
          Write a Typescript program to send Pako Token to some friends address
          using Ethers.js.
        </h1>
        <Link
          href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
          className=" text-red-500 underline"
        >
          You may follow this tutorial{" "}
        </Link>
        <h1 className=" text-xl font-bold">
          Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT
        </h1>
        <Link
          href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
          className=" text-red-500 underline"
        >
          Read this NFT tutorial series{" "}
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Create a NFT contract using the
        </h1>
        <Link
          href="https://docs.openzeppelin.com/contracts/4.x/erc721"
          className=" text-red-500 underline"
        >
          OpenZepplen ERC721 NFT Standard
        </Link>
        <h1 className={` font-normal text-md text-justify`}>You may use the</h1>
        <Link
          href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
          className=" text-red-500 underline"
        >
          Preset ERC721 contract
        </Link>
        <h1 className={` font-normal text-md text-justify`}>
          Deploy your NFT contract on a testnet, mint it, and view it on the
          MetaMask wallet and list it on OpenSea Marketplace for sale.
        </h1>
        <Link href="https://opensea.io/" className=" text-red-500 underline">
          {" "}
          OpenSea Marketplace{" "}
        </Link>
        <Link
          href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
          className=" text-red-500 underline"
        >
          {" "}
          Implement a ERC721 Market
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroContent;
