export default class Search {
  constructor() {
  }

  query(q) {
    const results = this.get(`http://www.dippam.ac.uk/eppi/results?search%5Bper_page%5D=25&search%5Bpage%5D=1&search%5Btotal_pages%5D=644&search%5Bview%5D=table&search%5Bqclean%5D=${q}&search%5Bq%5D=${q}%0A&search%5Bfields%5D=fulltext&search%5Bchrono%5D=on&search%5Bfrom%5D=1801&search%5Bto%5D=1922&search%5Bcat%5D%5B0%5D=on&search%5Bcat%5D%5B1%5D=on&search%5Bcat%5D%5B2%5D=on&search%5Bcat%5D%5B3%5D=on&search%5Bcat%5D%5B4%5D=on&search%5Bsort%5D=title&search%5Bsort_dir%5D=asc`);
    results.then(x => { document.getElementsByTagName("tbody")[0].innerHTML = x; });
  }

  get(url) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.open('GET', url);
      req.onload = function() {
        if (req.status == 200) resolve(req.response);
        else reject(Error(req.statusText));
      };
      req.onerror = function() { reject(Error("Network Error")); };
      req.send();
    });
  }
}