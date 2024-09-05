import HomeButton from "@assets/mobileFooterIcons/IconsSVG/HomeButton.svg";
import AccountButton from "@assets/mobileFooterIcons/IconsSVG/AccountButton.svg";
import AiButton from "@assets/mobileFooterIcons/IconsSVG/AiButton.svg";
import CartButton from "@assets/mobileFooterIcons/IconsSVG/CartButton.svg";
import Search from "@assets/mobileFooterIcons/IconsSVG/Search.svg";
import Strips from "@assets/mobileFooterIcons/IconsSVG/Strips.svg";

export const MobileFooterItems = [
  {
    iconSrc: HomeButton,
    alt: "Home",
    link: "/",
  },
  {
    iconSrc: AccountButton,
    alt: "User",
    link: "/",
  },
  {
    iconSrc: AiButton,
    alt: "AI",
    link: "/",
  },
  {
    iconSrc: CartButton,
    alt: "Cart",
    notificationCount: 4,
    link: "/cart",
  },
  {
    iconSrc: Search,
    alt: "Search",
  },
  {
    iconSrc: Strips,
    alt: "Menu",
    link: "/catalog",
  },
];
