import { Button } from './components/Button/Button';
import Carousel from './components/Carousel/Carousel';
import { Grid } from './components/Grid/Grid';
import { Image } from './components/Image/Image';
import { SearchBar } from './components/Searchbar/Searchbar';
import { Space } from './components/Space/Space';
import { Text } from './components/Text/Text';
import {
    BUTTONVIEW,
    CAROUSEL,
    GRID,
    IMAGEVIEW,
    SEARCHBAR,
    SPACER,
    TEXTVIEW
} from './templateEnums';


export const templateMap = {
    [BUTTONVIEW]: Button,
    [CAROUSEL]: Carousel,
    [GRID]: Grid,
    [IMAGEVIEW]: Image,
    [SEARCHBAR]: SearchBar,
    [SPACER]: Space,
    [TEXTVIEW]: Text
};

