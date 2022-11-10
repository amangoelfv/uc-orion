import { templateMap } from "./templateMap";


const renderTemplate = (key, state) => {
    const templateKey = key.split("-")[0];           
    const TComponent = templateMap[templateKey];
    if (TComponent) {
        return <TComponent {...state} />;
    } else {
        console.warn('Wrong template key : ', templateKey);
        return null;
    }
}

export default renderTemplate;