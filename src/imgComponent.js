import img from './images/lotus-001.jpg';
import css from './styles/styles.css';

export default () => {
    const element = document.createElement("div");
    element.innerHTML = "<img src='images/lotus-001.jpg' alt='' />";
    return element;
};