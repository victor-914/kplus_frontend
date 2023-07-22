import palour from "../assets/palour.gif";
import bedRoom from "../assets/bedroom.gif";
import guestSpace from "../assets/guestSpace.gif";
import Image from "next/image";
import currentBeenViewed from "../assets/houseHunter.gif";

export const propertyNavView = [
  {
    videoSrc: (
      <Image
        src={currentBeenViewed}
        layout="fill"
        style={{ borderRadius: "20px" }}
      />
    ),
    videoSrcTitle: "event space",
    _key: "098098762ojcddnxkjndjk",
    _key1:
      "kneckaKAKCQEKJCJqejnsqmcjmsjksjmnxmnsllllxlxlxxxxxxxcjqscsqackqwnkkqwnf",
    _style: "20px",
  },
  {
    videoSrc: (
      <Image src={guestSpace} layout="fill" style={{ borderRadius: "20px" }} />
    ),
    videoSrcTitle: "guest space",
    _key: "098098762ojcddnxkjndjk",
    _key1:
      "kneckaKAKCQEKJCJqejnsqmcjmsjksjmnxmnsllllxlxlxxxxxxxcjqscsqackqwnkkqwnf",
  },
  {
    videoSrc: (
      <Image src={palour} layout="fill" style={{ borderRadius: "20px" }} />
    ),
    videoSrcTitle: "palour",
    _key: "09809876mxls;lslslsllslslslslsndjk",
    _key1: "kneckaKAKCQElllllllllllllllllnbxxjjsnsqmcjcjqscsqackqwnkkqwnf",
  },
  {
    videoSrc: (
      <Image src={bedRoom} layout="fill" style={{ borderRadius: "20px" }} />
    ),
    videoSrcTitle: "master Bedroom",
    _key: "NKDNDKNSKNKMNXCKSKS,CK",
    _key1: "kdklqmwlksoieiumnjjjjjjlsuytdikmsHDJKDNLMNSDJS",
  },

  {
    videoSrc: (
      <Image src={bedRoom} layout="fill" style={{ borderRadius: "20px" }} />
    ),
    videoSrcTitle: "bedroom",
    _key: "NKDNDKNSKNKMNXCKSKS,Cxmmxkxkkxkxkccoclc",
    _key1: "kdklqmwlksoieiumnjmxmmxmxsuytdikmsHDJKDNLMNSDJS",
  },
];
