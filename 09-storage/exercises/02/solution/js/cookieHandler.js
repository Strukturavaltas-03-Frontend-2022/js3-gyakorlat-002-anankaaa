const cookieHandler = {
  getAll() {
    
  }
  toSessionStorage() {

  }
  flush(cookiesObject) {
      document.cookie = `${cookiesObject}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`
  }
}

export default cookieHandler;
