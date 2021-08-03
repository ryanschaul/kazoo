const findTotalPages = (totalPages, setTotalPages, result) => {
  if (!totalPages) {
    setTotalPages(result.headers.link.split(',')[1].split(/[=>]/)[1]);
  }
}

export default findTotalPages