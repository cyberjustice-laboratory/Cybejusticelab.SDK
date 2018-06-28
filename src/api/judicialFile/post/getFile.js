/**
 * Get a judicial file.
 * @param {Object} requestHelper
 * @param {Object} config
 * @param {FileId} id
 * @return {Object} A judicial file.
 */
export default (requestHelper, config) => async id => {
  try {
    const response = await requestHelper.post({
      url: `${config.baseUrlApi}JudicialFile/POST/Files`,
      data: Object.assign({}, config.entity, { fileIds: [id] })
    });
    return response.data.count > 0 ? response.data.files[0] : null;
  } catch (error) {
    throw new Error(error);
  }
};
