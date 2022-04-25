import './styles/globals.scss';
import Menu from './modules/Menu';
import HeaderScroll from './modules/HeaderScroll';

const menu = new Menu('[data-menu]', '[data-menu="button"]');
menu.init();

const headerScroll = new HeaderScroll('#header');
headerScroll.init();
