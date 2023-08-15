import './style.css';
import dragBtnSvg from '../assets/more_vert.svg';

const dragBtns = Array.from(document.getElementsByClassName('drag-btn'));
dragBtns.forEach((btn) => {
  btn.src = dragBtnSvg;
});
