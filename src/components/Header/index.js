export default function Header() {
  const headerNode = document.createElement('header');
  const headerLogo = document.createElement('div')
  headerLogo.setAttribute('id', 'header-logo');
  const mainNavNode = document.createElement('nav')
  mainNavNode.setAttribute('id', 'main-nav');
  const adminLinkNode = document.createElement('div')
  adminLinkNode.setAttribute('id', 'admin-links');
  const showAdminLinksBtn = document.createElement('div')
  showAdminLinksBtn.setAttribute('id', 'show-admin-links');
  showAdminLinksBtn.setAttribute('title', 'Administration');
  const contentNode = document.createElement('div')
  contentNode.setAttribute('class', 'content');
  const adminBtn = document.createElement('div')
  adminBtn.setAttribute('id', 'admin-btn')
  adminBtn.setAttribute('class', 'main-nav-link');
  
  headerNode.append(headerLogo);
  mainNavNode.innerHTML = `
    <div id="page-1-btn" class="main-nav-link">LINK 1</div>
    <div id="page-2-btn" class="main-nav-link">LINK 2</div>
    <div id="page-3-btn" class="main-nav-link">LINK 3</div>
  `;
  headerNode.append(mainNavNode);  
  showAdminLinksBtn.innerHTML = `<i class="material-icons">arrow_left</i>`;
  adminLinkNode.append(showAdminLinksBtn);  
  adminBtn.innerText = 'ADMIN LINK';
  contentNode.append(adminBtn);
  adminLinkNode.append(contentNode);
  headerNode.append(adminLinkNode);
  
  this.toggleAdminLinks = function() {
    adminLinkNode.classList.toggle('shown');
    showAdminLinksBtn.classList.toggle('rotate');
  }

  this.render = function() {
    return(headerNode);
  }
};
