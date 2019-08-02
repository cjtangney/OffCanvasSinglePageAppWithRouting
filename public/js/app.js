import Header from '/components/Header';
import Footer from '/components/Footer';

import LoginPage from '/pages/LoginPage';
import Page1 from '/pages/Page1';
import Page2 from '/pages/Page2';
import Page3 from '/pages/Page3';
import AdminPage from '/pages/AdminPage';

export default class App {
  constructor() {
    this.domParser = new DOMParser();
    this.appRoot = document.getElementById('app-root');
    this.pageRoot = document.createElement('section');
    this.pageRootId = 'pages';
    this.pageRoot.setAttribute('id', this.pageRootId);
    this.pageRoot.classList.add('animate');
    this.pageRoot.innerHTML = LoginPage();
    this.appHeader = new Header();
    this.appHeaderId = 'main-nav';
    this.adminLinkNodeId = 'admin-links';
  }

  initializeListeners = () => {
    const mainNavNode = document.getElementById(this.appHeaderId);
    const adminLinkNode = document.getElementById(this.adminLinkNodeId);
    const showAdminLinksBtn = document.getElementById('show-admin-links')
    const currentPage = document.querySelector('.page.active');
    mainNavNode.addEventListener('click', event => {
      const btn = event.target;
      const btnId = btn.id;
      let newActivePage, activeBtn;
      adminLinkNode.classList.contains('shown') && toggleAdminLinks();
      if(document.querySelector('.main-nav-link.active')) {
        activeBtn = document.querySelector('.main-nav-link.active');
      }
      activeBtn !== undefined && activeBtn.classList.remove('active');
      !(btn.classList.contains('active')) && btn.classList.add('active');
      switch(btnId) {
        case 'page-1-btn': {
          newActivePage = Page1();
          break;
      }
        case 'page-2-btn': {
          newActivePage = Page2();
          break;
        }
        case 'page-3-btn': {
          newActivePage = Page3();
          break;
        }
      }
      if(newActivePage !== undefined) {
        currentPage.classList = 'page slide-page-out';
        this.showPage(newActivePage);
      }
    });
    showAdminLinksBtn.addEventListener('click', () => {
      this.toggleAdminLinks();
    });
    adminLinkNode.addEventListener('click', event => {
      const btnId = event.target.id;
      const currentPage = document.querySelector('.page.active');
      let newActivePage, activeBtn;
      if(btnId === 'admin-btn') {
        if(document.querySelector('.main-nav-link.active')) {
          activeBtn = document.querySelector('.main-nav-link.active');
        }
        activeBtn !== undefined && activeBtn.classList.remove('active');
        newActivePage = AdminPage();
        currentPage.classList = 'page slide-page-out';
        this.showPage(newActivePage);
        this.toggleAdminLinks();
      }
    });
  }

  toggleAdminLinks = () => {
    const adminLinks = document.getElementById('admin-links');
    const showAdminLinksBtn = document.getElementById('show-admin-links');
    adminLinks.classList.toggle('shown');
    showAdminLinksBtn.classList.toggle('rotate');
  }

  showPage = (newActivePage) => {
    const mainNavNode = document.getElementById(this.appHeaderId);
    mainNavNode.style.pointerEvents = 'none';
    const pagesTarget = document.getElementById(this.pageRootId);
    pagesTarget.innerHTML += newActivePage;
    const newPage = pagesTarget.children[1];
    newPage.classList.add('active');
    setTimeout(() => {
      pagesTarget.removeChild(pagesTarget.children[0]);
      //pagesTarget.style.width = '100%';
      mainNavNode.style.pointerEvents = 'auto'; // enable click events
    }, 250); // 250 is equal to the CSS animation duration
  }

  render = () => {
    this.appRoot.append(this.appHeader.render());    
    this.appRoot.append(this.pageRoot);
    this.appRoot.innerHTML += Footer();
    this.initializeListeners();
  }
}

const app = new App();
app.render();
