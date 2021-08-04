const findTotalPages = (setTotalPages, result) => {
  setTotalPages(result.headers.link.split(',')[1].split(/[=>]/)[1]);
}

export default findTotalPages
