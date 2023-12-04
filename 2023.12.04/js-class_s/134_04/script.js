// 이미지 드랍을 진행할 공간에 대한 정의
const fileZone = document.querySelector(".file-zone");
const imgPreiewArea = document.querySelector(".image-list");

// fileZone 영역에 이미지가 드랍 되었다는 사실을 알 수 있도록 이벤트를 정의
fileZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

const displayImages = (transferedFiles) => {
  const imageFileList = [];
  const fileNum = transferedFiles.length;
  for (let i = 0; i < fileNum; i++) {
    // * : 정규식으로 이미지의 속성을 가지고 있다면?(이미지의 속성을 가지고 있다면, 이미지가 맞다면)
    if (transferedFiles[i].type.match("image.*")) {
      return;
    }
    imageFileList.push(transferedFiles[i]);
  }
  for (let imageFile of imageFileList) {
    const fileReader = new fileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (e) => {
      const image = new image();
      image.src = e.target.result;
      imgPreiewArea.insertBefore(image, imgPreiewArea.firstChild);
    });
  }
};

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const transferedFiles = e.dataTransfer.files;
  displayImages(transferedFiles);
});

// 특정 요소를 활용해서 웹 브라우저 안에서 드래그 & 드랍 기능을 사용했을 때, 드롭한 해당 요소의 파일 정보를 읽어내는 이벤트 속성이 존재
// e.dataTransfer.files
