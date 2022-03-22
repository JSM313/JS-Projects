const url = "./sample.pdf"; // This url is used where the location of the pdf is going to be.

let pdfDoc = null,
  pageNum = 1,
  pagesRendering = false,
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.querySelector("#pdfRender"),
  ctx = canvas.getContext("2d");

const renderPage = (num) => {
  pagesRendering = true;

  // Get the page
  pdfDoc.getPage(num).then((page) => {
    const viewport = page.getViewport({ scale: scale });

    canvas.height = viewport.height;

    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport,
    };

    page.render(renderCtx).promise.then(() => {
      pagesRendering = false;

      if (pageNumIsPending != null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page
    document.querySelector("#pageNum").textContent = num;
  });
};

// Check for pages rendering

const queueRenderPage = (num) => {
  if (pagesRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// Show previous page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }

  pageNum++;
  queueRenderPage(pageNum);
};

// Get Document
pdfjsLib
  .getDocument(url)
  .promise.then((pdfDoc_) => {
    pdfDoc = pdfDoc_;

    document.querySelector("#pageCount").textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch((error) => {
    // Display error
    const div = document.createElement("div");
    div.className = "error";
    div.appendChild(document.createTextNode(error.message));
    document.querySelector("body").insertBefore(div, canvas);

    // remove the top bar
    document.querySelector(".topBar").style.display = "none";
  });

// button events
document.querySelector("#prevPage").addEventListener("click", showPrevPage);
document.querySelector("#nextPage").addEventListener("click", showNextPage);
