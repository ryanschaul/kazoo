const sortPageData = (sortOrder, pageData) => {
  if (sortOrder === "Title") {
    pageData.sort((a, b) => {
      if (a.title.trimStart().toLowerCase() < b.title.trimStart().toLowerCase()) {
        return -1;
      } else {
        return 1;
      }
    })
  } else if (sortOrder === "Date Created") {
    pageData.sort((a, b) => {
      if (a.created_at < b.created_at) {
        return 1;
      } else {
        return -1;
      }
    })
  } else if (sortOrder === "Last Updated") {
    pageData.sort((a, b) => {
      if (a.updated_at < b.updated_at) {
        return 1;
      } else {
        return -1;
      }
    })
  } else if (sortOrder === "Comment Count") {
    pageData.sort((a, b) => {
      if (a.comments < b.comments) {
        return 1;
      } else {
        return -1;
      }
    })
  }
}

export default sortPageData;