export const init = (callback: () => void):void => {
  console.log("dafault initialization");
  callback();
  console.log("all initialization finished");
};
