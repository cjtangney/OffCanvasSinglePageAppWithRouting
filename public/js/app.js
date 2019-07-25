import Page1 from '/pages/Page1';
import Page2 from '/pages/Page2';
import Page3 from '/pages/Page3';
import AdminPage from '/pages/AdminPage';

const mainNavLinks = document.getElementById('main-nav');
const adminLinks = document.getElementById('admin-links');
const showLinksBtn = document.getElementById('show-admin-links')
const pagesTarget = document.getElementById('pages');
const copyrightTarget = document.getElementById('footer-copyright-date');

// nav
function toggleAdminLinks() {
  adminLinks.classList.toggle('shown');
  showLinksBtn.classList.toggle('rotate');
}

// page / root
function showPage(currentPage, newActivePage) {
  mainNavLinks.style.pointerEvents = 'none'; // block click events
  pagesTarget.innerHTML += newActivePage;
  const newPage = pagesTarget.children[1];
  newPage.classList.add('active');
  setTimeout(() => {
  	pagesTarget.removeChild(pagesTarget.children[0]);
    //pagesTarget.style.width = '100%';
    mainNavLinks.style.pointerEvents = 'auto'; // enable click events
  }, 250); // 250 is equal to the CSS animation duration
}

// footer
function getCopyrightDateString() {
	let copyrightDateString = '2011 - ';
  copyrightDateString += (new Date()).getFullYear();
  return copyrightDateString;
}

// nav
mainNavLinks.addEventListener('click', event => {
	const btn = event.target;
	const btnId = btn.id;
  const currentPage = document.querySelector('.page.active');
  let newActivePage, activeBtn;
  adminLinks.classList.contains('shown') && toggleAdminLinks();
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
    showPage(currentPage, newActivePage);
  }
});

// nav
adminLinks.addEventListener('click', event => {
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
    showPage(currentPage, newActivePage);
    toggleAdminLinks();
  }
});

// nav
showLinksBtn.addEventListener('click', () => {
	toggleAdminLinks();
});

// footer
copyrightTarget.innerText = getCopyrightDateString();
