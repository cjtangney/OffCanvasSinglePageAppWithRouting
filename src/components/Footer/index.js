const getCopyrightDateString = () => {
  let copyrightDateString = '2011 - ';
  copyrightDateString += (new Date()).getFullYear();
  return copyrightDateString;
}

export default function Footer(){
  return(`
    <footer>
      <p>Footer information</p>
      <p>Copyright &#169; <span id="footer-copyright-date">${getCopyrightDateString()}</span></p>
    </footer>
  `);
};
