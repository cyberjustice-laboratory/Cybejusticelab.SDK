// Imports
import buildConnect from "./helpers/buildConnect";
import judicialFile from "./api/judicialFile";
import judicialEntity from "./api/judicialEntity";
import document from "./api/document";
import calendar from "./api/calendar";
import user from "./api/user";

const rawApiArray = {
  judicialFile,
  judicialEntity,
  document,
  calendar,
  user
};

// Each method has the right confiugations and helper functions.
const sdkConnectedApiArray = (APIs => {
  const connectedApiArray = {};
  Object.keys(APIs).forEach(key => {
    const api = APIs[key];
    connectedApiArray[`${key}Api`] = (sdkConfig, authState) => api(buildConnect(sdkConfig, authState));
  });
  return connectedApiArray;
})(rawApiArray);

// Exports
export default sdkConnectedApiArray;
