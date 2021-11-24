import macbook1 from "../images/macbook-pro-2021-007_1.jpg";
import macbook2 from "../images/macbook-pro-16-inch-2021-silver-300x250.png";
import macbook3 from "../images/macbook-pro-spacegray-m1-2020-300x250 (1).jpeg";
import macbook4 from "../images/macbook-pro-14-inch-2021-gray-300x250.png";
import macbook5 from "../images/macbook-air-gold-select-201810_4.jpg";

import ipad1 from "../images/ipad_10.2_2020_4g_32gb.png";
import ipad2 from "../images/ipad_10.2_2020_wifi_32gb.png";
import ipad3 from "../images/ipad_air_10.9_2020_wifi_64gb.png";
import ipad4 from "../images/ipad_air_10.9_2020_4g_64gb_1.png";
import ipad5 from "../images/ipad-mini-6_1.jpg";
import ipad6 from "../images/ipad_pro_11_2020_4g_256gb.png";
import ipad7 from "../images/ipad_pro_12.9_2020_wifi_128gb.png";
import ipad8 from "../images/ipad_air_5.png";

import iphone1 from "../images/iphone-13-white.jpg";
import iphone2 from "../images/iphone-13-red.jpg";
import iphone3 from "../images/iphone_13-_pro.jpg";
import iphone4 from "../images/iphone_13_pro_black.png";
import iphone5 from "../images/iphone_12_red.png";
import iphone6 from "../images/iphone_12_blue.png";
import iphone7 from "../images/iphone_12_mini_blue.png";
import iphone8 from "../images/iphone_12_mini_purple.png";
import iphone9 from "../images/iphone_11_white.png";
import iphone10 from "../images/iphone_11_red.png";
import iphone11 from "../images/iphone_xr_red.png";
import iphone12 from "../images/iphone-8-plus.jpg";
import iphone13 from "../images/iphone-7-plus.jpg";

import airpodPro from "../images/airpods-pro_5.jpg";
import airpod2 from "../images/airpods-2_6.jpg";
import airpod3 from "../images/airpod-3.jpg";
import appleAirpod from "../images/apple-airpods-max-2_1_1.jpg";
import appleTV from "../images/apple-tv-box_1_1.jpg";
import keyboard from "../images/ban-phim-apple-magic-keyboard-2021.jpg";
import cap1 from "../images/cap-type-c-to-lightning-apple-mll82zpa-2m.jpg";
import cap2 from "../images/cap-type-c-to-type-c-apple-muf72za-1m_2.jpg";
import cap3 from "../images/cap-lightning-apple-0-5m.jpg";

const dataProduct = [
  {
    id: 1,
    title: "Macbook Pro 2021",
    price: "44500000",
    star: 5,
    img: macbook1,
    categorySlug: "macbook",
    slug: "macbook-pro-2021",
  },
  {
    id: 2,
    title: "Macbook Pro 16 Inch 2021",
    price: "65000000",
    star: 4,
    img: macbook2,
    categorySlug: "macbook",
    slug: "macbook-pro-16-inch-2021",
  },
  {
    id: 3,
    title: "Macbook M1 2021",
    price: "32000000",
    star: 4,
    img: macbook3,
    categorySlug: "macbook",
    slug: "macbook-m1-2021",
  },
  {
    id: 4,
    title: "Macbook Pro 14 Inch 2021",
    price: "43000000",
    star: 5,
    img: macbook4,
    categorySlug: "macbook",
    slug: "macbook-pro-14-inch-2021",
  },
  {
    id: 5,
    title: "Macbook Air 2021",
    price: "25000000",
    star: 3,
    img: macbook5,
    categorySlug: "macbook",
    slug: "macbook-air-2021",
  },
  {
    id: 6,
    title: "Ipad 10 Inch 4G 32GB",
    price: "13000000",
    star: 4,
    img: ipad1,
    categorySlug: "ipad",
    slug: "ipad-10-inch-4g-32gb",
  },
  {
    id: 7,
    title: "Ipad 10 Inch Wifi 32GB",
    price: "16000000",
    star: 5,
    img: ipad2,
    categorySlug: "ipad",
    slug: "ipad-10-inch-wifi-32gb",
  },
  {
    id: 8,
    title: "Ipad Air Wifi 32GB",
    price: "12000000",
    star: 3,
    img: ipad3,
    categorySlug: "ipad",
    slug: "ipad-air-wifi-32gb",
  },
  {
    id: 9,
    title: "Ipad Air Wifi 32GB",
    price: "12500000",
    star: 4,
    img: ipad4,
    categorySlug: "ipad",
    slug: "ipad-air-wifi-32gb",
  },
  {
    id: 10,
    title: "Ipad Mini Wifi 32GB",
    price: "10500000",
    star: 5,
    img: ipad5,
    categorySlug: "ipad",
    slug: "ipad-mini-wifi-32gb",
  },
  {
    id: 11,
    title: "Ipad Pro 11 inch 32GB",
    price: "18000000",
    star: 5,
    img: ipad6,
    categorySlug: "ipad",
    slug: "ipad-11-inch-32gb",
  },
  {
    id: 12,
    title: "Ipad Pro 12 inch 32GB",
    price: "17200000",
    star: 4,
    img: ipad7,
    categorySlug: "ipad",
    slug: "ipad-12-inch-32gb",
  },
  {
    id: 13,
    title: "Ipad Air 32GB",
    price: "8000000",
    star: 3,
    img: ipad8,
    categorySlug: "ipad",
    slug: "ipad-air",
  },
  {
    id: 14,
    title: "Iphone 13 White",
    price: "19000000",
    star: 5,
    img: iphone1,
    categorySlug: "iphone",
    slug: "iphone-13-white",
  },
  {
    id: 15,
    title: "Iphone 13 Red",
    price: "18000000",
    star: 4,
    img: iphone2,
    categorySlug: "iphone",
    slug: "iphone-13-red",
  },
  {
    id: 16,
    title: "Iphone 13 Pro Silver",
    price: "22500000",
    star: 5,
    img: iphone3,
    categorySlug: "iphone",
    slug: "iphone-13-pro-silver",
  },
  {
    id: 17,
    title: "Iphone 13 Pro Black",
    price: "23000000",
    star: 5,
    img: iphone4,
    categorySlug: "iphone",
    slug: "iphone-13-black",
  },
  {
    id: 18,
    title: "Iphone 12 Red",
    price: "17500000",
    star: 4,
    img: iphone5,
    categorySlug: "iphone",
    slug: "iphone-12-red",
  },
  {
    id: 19,
    title: "Iphone 12 Blue",
    price: "17000000",
    star: 4,
    img: iphone6,
    categorySlug: "iphone",
    slug: "iphone-12-blue",
  },
  {
    id: 20,
    title: "Iphone 12 Mini Blue",
    price: "15400000",
    star: 5,
    img: iphone7,
    categorySlug: "iphone",
    slug: "iphone-12-mini-blue",
  },
  {
    id: 21,
    title: "Iphone 12 Mini Purple",
    price: "14500000",
    star: 4,
    img: iphone8,
    categorySlug: "iphone",
    slug: "iphone-12-mini-purple",
  },
  {
    id: 22,
    title: "Iphone 11 White",
    price: "15200000",
    star: 5,
    img: iphone9,
    categorySlug: "iphone",
    slug: "iphone-11-white",
  },
  {
    id: 23,
    title: "Iphone 11 Red",
    price: "14900000",
    star: 5,
    img: iphone10,
    categorySlug: "iphone",
    slug: "iphone-11-red",
  },
  {
    id: 24,
    title: "Iphone XR Red",
    price: "11300000",
    star: 3,
    img: iphone11,
    categorySlug: "iphone",
    slug: "iphone-xr-red",
  },
  {
    id: 25,
    title: "Iphone 8 Plus",
    price: "9200000",
    star: 3,
    img: iphone12,
    categorySlug: "iphone",
    slug: "iphone-8-plus",
  },
  {
    id: 26,
    title: "Iphone 7 Plus",
    price: "8100000",
    star: 4,
    img: iphone13,
    categorySlug: "iphone",
    slug: "iphone-7-plus",
  },
  {
    id: 27,
    title: "Airpod Pro",
    price: "4200000",
    star: 4,
    img: airpodPro,
    categorySlug: "accessories",
    slug: "airpod-pro",
  },
  {
    id: 28,
    title: "Airpod 3",
    price: "3030000",
    star: 5,
    img: airpod3,
    categorySlug: "accessories",
    slug: "airpod-3",
  },
  {
    id: 29,
    title: "Airpod 2",
    price: "500000",
    star: 4,
    img: airpod2,
    categorySlug: "accessories",
    slug: "airpod-2",
  },
  {
    id: 30,
    title: "Airpod Max",
    price: "500000",
    star: 5,
    img: appleAirpod,
    categorySlug: "accessories",
    slug: "airpod-max",
  },
  {
    id: 31,
    title: "Apple TV Box",
    price: "500000",
    star: 3,
    img: appleTV,
    categorySlug: "accessories",
    slug: "apple-tv-box",
  },
  {
    id: 32,
    title: "Smart Keyboard",
    price: "500000",
    star: 4,
    img: keyboard,
    categorySlug: "accessories",
    slug: "smart-keyboard",
  },
  {
    id: 33,
    title: "Cap Lightning 2m",
    price: "500000",
    star: 5,
    img: cap1,
    categorySlug: "accessories",
    slug: "cap-lightning-2m",
  },
  {
    id: 34,
    title: "Cap Lightning 1m",
    price: "500000",
    star: 4,
    img: cap2,
    categorySlug: "accessories",
    slug: "cap-lightning-1m",
  },
  {
    id: 35,
    title: "Cap Lightning 0.5m",
    price: "500000",
    star: 3,
    img: cap3,
    categorySlug: "accessories",
    slug: "cap-lightning-0-5m",
  },
];
export default dataProduct;
