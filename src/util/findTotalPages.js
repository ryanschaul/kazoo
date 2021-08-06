const findTotalPages = (setTotalPages, result) => {
    const stringNum = result.headers.link.split(',')[1].split(/[=>]/)[1];
    setTotalPages(Number(stringNum));
}

export default findTotalPages
