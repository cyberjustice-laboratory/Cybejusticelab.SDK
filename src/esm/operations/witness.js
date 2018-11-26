/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import * as tslib_1 from "tslib";
import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/witnessMappers";
import * as Parameters from "../models/parameters";
/** Class representing a Witness. */
var Witness = /** @class */ (function () {
    /**
     * Create a Witness.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    function Witness(client) {
        this.client = client;
    }
    Witness.prototype.deleteWitness = function (fileId, witnessId, options, callback) {
        return this.client.sendOperationRequest({
            fileId: fileId,
            witnessId: witnessId,
            options: options
        }, deleteWitnessOperationSpec, callback);
    };
    Witness.prototype.deleteWitnessDocument = function (documentId, witnessId, fileId, options, callback) {
        return this.client.sendOperationRequest({
            documentId: documentId,
            witnessId: witnessId,
            fileId: fileId,
            options: options
        }, deleteWitnessDocumentOperationSpec, callback);
    };
    Witness.prototype.getWitnesses = function (fileId, options, callback) {
        return this.client.sendOperationRequest({
            fileId: fileId,
            options: options
        }, getWitnessesOperationSpec, callback);
    };
    Witness.prototype.getWitnesses1 = function (requestModel, options, callback) {
        return this.client.sendOperationRequest({
            requestModel: requestModel,
            options: options
        }, getWitnesses1OperationSpec, callback);
    };
    Witness.prototype.getExternalWitnessesLinkByFileId = function (fileId, options, callback) {
        return this.client.sendOperationRequest({
            fileId: fileId,
            options: options
        }, getExternalWitnessesLinkByFileIdOperationSpec, callback);
    };
    Witness.prototype.getExternalWitnessesLinkByWitnessCode = function (witnessCode, options, callback) {
        return this.client.sendOperationRequest({
            witnessCode: witnessCode,
            options: options
        }, getExternalWitnessesLinkByWitnessCodeOperationSpec, callback);
    };
    Witness.prototype.createWitness = function (witnessModel, options, callback) {
        return this.client.sendOperationRequest({
            witnessModel: witnessModel,
            options: options
        }, createWitnessOperationSpec, callback);
    };
    Witness.prototype.updateWitnessAttributes = function (updateWitnessAttributesParameter, options, callback) {
        return this.client.sendOperationRequest({
            updateWitnessAttributesParameter: updateWitnessAttributesParameter,
            options: options
        }, updateWitnessAttributesOperationSpec, callback);
    };
    Witness.prototype.updateWitness = function (updateWitnessParameter, options, callback) {
        return this.client.sendOperationRequest({
            updateWitnessParameter: updateWitnessParameter,
            options: options
        }, updateWitnessOperationSpec, callback);
    };
    return Witness;
}());
export { Witness };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var deleteWitnessOperationSpec = {
    httpMethod: "DELETE",
    path: "Witness/DELETE/DeleteWitness",
    queryParameters: [
        Parameters.fileId0,
        Parameters.witnessId
    ],
    responses: {
        403: {},
        404: {},
        default: {}
    },
    serializer: serializer
};
var deleteWitnessDocumentOperationSpec = {
    httpMethod: "DELETE",
    path: "Witness/DELETE/DeleteWitnessDocument",
    queryParameters: [
        Parameters.documentId,
        Parameters.witnessId,
        Parameters.fileId0
    ],
    responses: {
        403: {},
        404: {},
        default: {}
    },
    serializer: serializer
};
var getWitnessesOperationSpec = {
    httpMethod: "GET",
    path: "Witness/GET/Witnesses",
    queryParameters: [
        Parameters.fileId0
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "CyberjusticeLabKernelServiceContractsWitnessWitnessData"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var getWitnesses1OperationSpec = {
    httpMethod: "POST",
    path: "Witness/POST/GetWitnesses",
    requestBody: {
        parameterPath: "requestModel",
        mapper: tslib_1.__assign({}, Mappers.CyberjusticeLabKernelSharedWitnessModelsWitnessApiRequestData, { required: true })
    },
    responses: {
        404: {},
        default: {}
    },
    serializer: serializer
};
var getExternalWitnessesLinkByFileIdOperationSpec = {
    httpMethod: "GET",
    path: "Witness/GET/ExternalWitnessesLinkByFileId",
    queryParameters: [
        Parameters.fileId0
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var getExternalWitnessesLinkByWitnessCodeOperationSpec = {
    httpMethod: "GET",
    path: "Witness/GET/ExternalWitnessesLinkByWitnessCode",
    queryParameters: [
        Parameters.witnessCode
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData"
                        }
                    }
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
var createWitnessOperationSpec = {
    httpMethod: "POST",
    path: "Witness/POST/CreateWitness",
    requestBody: {
        parameterPath: "witnessModel",
        mapper: tslib_1.__assign({}, Mappers.CyberjusticeLabKernelSharedWitnessModelsCreateWitnessModel, { required: true })
    },
    responses: {
        400: {},
        404: {},
        409: {},
        default: {}
    },
    serializer: serializer
};
var updateWitnessAttributesOperationSpec = {
    httpMethod: "PUT",
    path: "Witness/PUT/UpdateWitnessAttributes",
    requestBody: {
        parameterPath: "updateWitnessAttributesParameter",
        mapper: tslib_1.__assign({}, Mappers.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessAttributes, { required: true })
    },
    responses: {
        403: {},
        404: {},
        default: {}
    },
    serializer: serializer
};
var updateWitnessOperationSpec = {
    httpMethod: "PUT",
    path: "Witness/PUT/UpdateWitness",
    requestBody: {
        parameterPath: "updateWitnessParameter",
        mapper: tslib_1.__assign({}, Mappers.CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessModel, { required: true })
    },
    responses: {
        403: {},
        404: {},
        409: {},
        default: {}
    },
    serializer: serializer
};
//# sourceMappingURL=witness.js.map