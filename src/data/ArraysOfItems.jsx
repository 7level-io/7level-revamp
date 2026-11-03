import sevenLevelLogoOutlined from "../assets/imgs/logos/7level_logo_outlined.png";
import speedxLogoOutlined from "../assets/imgs/logos/speedxlogo-outlined.png";
import navkarLogo from "../assets/imgs/logos/navkar-metal_logo.svg";
import lrnLogo from "../assets/imgs/logos/lrn-studio_logo.jpeg";
import greenRocketLogo from "../assets/imgs/logos/greenrockettv_logo.png";

export const homeItems = [
  {
    index: "01",
    text: "Speed",
    highlight: "X",
    category: "Clean Mobility & E-Bikes",
    description:
      "Affordable e-bike rentals engineered for everyday commuting and high-efficiency delivery usage.",
    color: "#8bb51f",
    gradient: "127deg, rgb(91, 125, 15) 12.55%, rgb(192, 239, 45) 84.61%",
    img: speedxLogoOutlined,
    logoClass: "logo-dark",
    path: "https://speedxrental.7level.in",
    isExternal: true,
    status: "Live Platform",
  },
  {
    index: "02",
    text: "Navkar",
    highlight: " Metal",
    category: "Industrial Steel & Fabrication",
    description:
      "Direct distribution of structural steel, industrial pipes, and raw materials for building projects.",
    color: "#7a58db",
    gradient: "127deg, rgb(72, 50, 139) 12.55%, rgb(134, 94, 255) 84.61%",
    img: navkarLogo,
    logoClass: "logo-dark",
    path: "https://navkarmetals.7level.in/",
    isExternal: true,
    status: "Live Platform",
  },
  {
    index: "03",
    text: "Green",
    highlight: "Rocket TV",
    category: "Broadcast Media & Video",
    description:
      "Commercial video production, digital broadcasts, and brand media delivered with full-service creative.",
    color: "#00a775",
    gradient: "127deg, rgb(0, 119, 78) 12.55%, rgb(0, 167, 110) 84.61%",
    img: greenRocketLogo,
    logoClass: "logo-greenrocket",
    path: "https://greenrockettv.com/",
    isExternal: true,
    status: "Live Platform",
  },
  {
    index: "04",
    text: "LRN",
    highlight: " Studio",
    category: "Custom Embroidery & Digitizing",
    description:
      "Precision embroidery digitizing, uniform crests, custom patches, and bulk thread production.",
    color: "#58799e",
    gradient: "127deg, rgb(78, 121, 158) 12.55%, rgb(124, 184, 235) 84.61%",
    img: lrnLogo,
    logoClass: "logo-round",
    path: "/lrn-studio",
    isExternal: false,
    status: "Live Platform",
  },
  {
    index: "05",
    text: "7level",
    highlight: "-io",
    category: "Software & Digital Platforms",
    description:
      "The engineering studio of 7Level — building web platforms, mobile software, and digital infrastructure.",
    color: "#2840e8",
    gradient: "127deg, rgb(40, 64, 232) 12.55%, rgb(88, 112, 248) 84.61%",
    img: sevenLevelLogoOutlined,
    cardClass: "card-7level-io",
    path: "/7level-io",
    isExternal: false,
    status: "Live Platform",
  },
];
