export default class Collection {
  constructor(title = '', description = '', uri ='/', from, to) {
    this.title = title
    this.description = description
    this.uri = uri
    this.from = from || 1700
    this.to = to || new Date().getFullYear()
  }
}

export class IEDCollection extends Collection {
  constructor() {
    super()
    
    this.types = [
      "Diaries and Journals",
      "Family Papers",
      "Folklore, Song, Music",
      "Hansard",
      "Letters (Emigrants)",
      "Letters (Other)",
      "Births, Deaths, Marriages",
      "Newspapers Extracts",
      "Shipping Advertisements",
      "Shipping News",
      "Official Documents",
      "Periodical Extracts",
      "Statistics",
      "Wills"
    ]
  }
}

export class EPPICollection extends Collection {
  constructor() {
    super()

    this.types = ["Account", "Bill", "Report", "Command Paper"]
  }
}

export class VMRCollection extends Collection {
  constructor() {
    super()

    this.types = ["Interviews"]
    
    // Demographics
    this.gender = "";
    this.age = "";
    this.denomination = "";
    
    // Places 
    this.birthplace = "";
    this.childhoodResidence = "";
    this.currentResidence = "";
    this.destination = "";
  }
}