import { toast } from "react-toastify";
import { Button } from "./components/Button/Button";
import Carousel from "./components/Carousel/Carousel";
import { Grid } from "./components/Grid/Grid";
import { Image } from "./components/Image/Image";
import { SearchBar } from "./components/Searchbar/Searchbar";
import { Space } from "./components/Space/Space";
import { Text } from "./components/Text/Text";

export function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const getSampleCarousel = () => {
  const id = makeid(3);
  return `"carousel-${id}": {
      "images": [
        "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_375/t_high_res_template/images/growth/home-screen/1667233651076-c210f8.jpeg",
        "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_375/t_high_res_template/images/growth/home-screen/1667386493900-1d5e09.jpeg",
        "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_375/t_high_res_template/images/supply/partner-app-supply/1667472964177-812867.jpeg",
        "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_375/t_high_res_template/images/growth/luminosity/1667594664089-1b275d.jpeg"
      ],
      "gap": "8px",
      "marginVertical": "8px"
    }`
}
export const getSampleButton = () => {
  const id = makeid(3);
  return `"button-${id}": {
      "text": "View All Services",
      "color": "#6d42e5",
      "type": "outline"
    }`
}
export const getSampleGrid = () => {
  const id = makeid(3);
  return `"grid-${id}": {
      "columns": "3",
      "paddingVertical": "8px",
      "items": [
        {
          "image": {
            "src": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category/images/growth/home-screen/1609757635235-1a139e.png",
            "height": "32px"
          },
          "text": {
            "value": "Women's Salon & Spa",
            "fontSize": "10px",
            "marginVertical": "8px"
          }
        },
        {
          "image": {
            "src": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category/images/growth/home-screen/1609757629780-2b2187.png",
            "height": "32px"
          },
          "text": {
            "value": "Men's Salon & Massage",
            "fontSize": "10px",
            "marginVertical": "8px"
          }
        },
        {
          "image": {
            "src": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category/categories/category_v2/category_72d18950.png",
            "height": "32px"
          },
          "text": {
            "value": "AC & Appliance Repair",
            "fontSize": "10px",
            "marginVertical": "8px"
          }
        },
        {
          "image": {
            "src": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category/categories/category_v2/category_6b1f5250.png",
            "height": "32px"
          },
          "text": {
            "value": "Cleaning & Pest Control",
            "fontSize": "10px",
            "marginVertical": "8px"
          }
        },
        {
          "image": {
            "src": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category/categories/category_v2/category_6fbad370.png",
            "height": "32px"
          },
          "text": {
            "value": "Electrician, Plumber & Carpenter",
            "fontSize": "10px",
            "marginVertical": "8px"
          }
        },
        {
          "image": {
            "src": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_category/images/supply/partner-app-supply/1662525927640-954478.png",
            "height": "32px"
          },
          "text": {
            "value": "Home Painting",
            "fontSize": "10px",
            "marginVertical": "8px"
          }
        }
      ]
}`
}

export const itemMapper = ([key, value], idx) => {
  const key2 = key.split("-")[0];
  switch (key2) {
    case "button":
      return <Button key={idx} {...value} />;
    case "text":
      return <Text key={idx} {...value} />;
    case "image":
      return <Image key={idx} {...value} />
    case "space":
      return <Space key={idx} {...value} />
    case "carousel":
      return <Carousel key={idx} {...value} />
    case "grid":
      return <Grid key={idx} {...value} />
    case "searchBar":
      return <SearchBar key={idx} {...value} />
    default:
      return null;
  }
}

export const getSampleText = () => {
  const id = makeid(3);
  return `"text-${id}": {
      "value": "Hello Fellow Coder",
      "fontSize": "16px",
      "fontWeight": "bold",
      "marginVertical": "8px"
    }`
}
export const getSampleSearchBar = () => {
  const id = makeid(3);
  return `"searchBar-${id}":{
      "marginVertical": "16px",
      "text": "Search for UC Services"
    }`
}
export const getSampleImage = () => {
  const id = makeid(3);
  return `"image-${id}": {
      "src": "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_585/t_high_res_template/images/growth/luminosity/1667390631025-141d67.jpeg"
    }`
}
export const getSampleSpace = () => {
  const id = makeid(3);
  return `"space-${id}": {
      "height": "16px",
      "color": "#FFF"
    }`
}


export const sampleData = {
  "Carousel": getSampleCarousel,
  "Grid": getSampleGrid,
  "Button": getSampleButton,
  "Text": getSampleText,
  "Search Bar": getSampleSearchBar,
  "Image": getSampleImage,
  "Space": getSampleSpace
}

export const notify = (text) => toast(text, {
  pauseOnFocusLoss:false,
  autoClose: 2000,
  position: "bottom-center"
});
