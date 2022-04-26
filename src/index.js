import Menu from './modules/Menu';
import HeaderScroll from './modules/HeaderScroll';
import initSwiper from './modules/initSwiper';
import initScrollReveal from './modules/initScrollReveal';
import BackToTopButton from './modules/BackToTopButton';
import AddPageStatus from './modules/AddPageStatus';
import './styles/globals.scss';

const menu = new Menu('#header nav', '.toggle');
menu.init();

const headerScroll = new HeaderScroll('#header');
headerScroll.init();

initSwiper();
initScrollReveal();

const backToTopButton = new BackToTopButton('.back-to-top');
backToTopButton.init();

const addPageStatus = new AddPageStatus('main section[id]');
addPageStatus.init();
