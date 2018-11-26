/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/journalMappers";
import * as Parameters from "../models/parameters";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";

/** Class representing a Journal. */
export class Journal {
  private readonly client: CyberjusticeAPIsContext;

  /**
   * Create a Journal.
   * @param {CyberjusticeAPIsContext} client Reference to the service client.
   */
  constructor(client: CyberjusticeAPIsContext) {
    this.client = client;
  }

  /**
   * @summary Returns a queryable collection of all the
   * {CyberjusticeLab.Kernel.ServiceContracts.Journal.JournalData} in the system according to the
   * specified journal.
   * @param fileId The Id of the file.
   * @param journalId The ID of the journal.
   * @param lang The two letters code for the requested culture.
   * @param [options] The optional parameters
   * @returns Promise<Models.JournalGetJournalEntryByIdResponse>
   */
  getJournalEntryById(fileId: string, journalId: string, lang: string, options?: msRest.RequestOptionsBase): Promise<Models.JournalGetJournalEntryByIdResponse>;
  /**
   * @param fileId The Id of the file.
   * @param journalId The ID of the journal.
   * @param lang The two letters code for the requested culture.
   * @param callback The callback
   */
  getJournalEntryById(fileId: string, journalId: string, lang: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJournalJournalData[]>): void;
  /**
   * @param fileId The Id of the file.
   * @param journalId The ID of the journal.
   * @param lang The two letters code for the requested culture.
   * @param options The optional parameters
   * @param callback The callback
   */
  getJournalEntryById(fileId: string, journalId: string, lang: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJournalJournalData[]>): void;
  getJournalEntryById(fileId: string, journalId: string, lang: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJournalJournalData[]>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJournalJournalData[]>): Promise<Models.JournalGetJournalEntryByIdResponse> {
    return this.client.sendOperationRequest(
      {
        fileId,
        journalId,
        lang,
        options
      },
      getJournalEntryByIdOperationSpec,
      callback) as Promise<Models.JournalGetJournalEntryByIdResponse>;
  }

  /**
   * @summary Get the latest journal instance for each of the requested journal codes in a file.
   * @param fileId File Guid.
   * @param journalCodes Requested journal codes.
   * @param [options] The optional parameters
   * @returns Promise<Models.JournalGetLatestJournalsByCodesResponse>
   */
  getLatestJournalsByCodes(fileId: string, journalCodes: string[], options?: msRest.RequestOptionsBase): Promise<Models.JournalGetLatestJournalsByCodesResponse>;
  /**
   * @param fileId File Guid.
   * @param journalCodes Requested journal codes.
   * @param callback The callback
   */
  getLatestJournalsByCodes(fileId: string, journalCodes: string[], callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalModel[]>): void;
  /**
   * @param fileId File Guid.
   * @param journalCodes Requested journal codes.
   * @param options The optional parameters
   * @param callback The callback
   */
  getLatestJournalsByCodes(fileId: string, journalCodes: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalModel[]>): void;
  getLatestJournalsByCodes(fileId: string, journalCodes: string[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalModel[]>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalModel[]>): Promise<Models.JournalGetLatestJournalsByCodesResponse> {
    return this.client.sendOperationRequest(
      {
        fileId,
        journalCodes,
        options
      },
      getLatestJournalsByCodesOperationSpec,
      callback) as Promise<Models.JournalGetLatestJournalsByCodesResponse>;
  }

  /**
   * @summary Get the history of a file.
   * @param requestModel Request filter model.
   * @param [options] The optional parameters
   * @returns Promise<Models.JournalGetFileHistoryResponse>
   */
  getFileHistory(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData, options?: msRest.RequestOptionsBase): Promise<Models.JournalGetFileHistoryResponse>;
  /**
   * @param requestModel Request filter model.
   * @param callback The callback
   */
  getFileHistory(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData>): void;
  /**
   * @param requestModel Request filter model.
   * @param options The optional parameters
   * @param callback The callback
   */
  getFileHistory(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData>): void;
  getFileHistory(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData>): Promise<Models.JournalGetFileHistoryResponse> {
    return this.client.sendOperationRequest(
      {
        requestModel,
        options
      },
      getFileHistoryOperationSpec,
      callback) as Promise<Models.JournalGetFileHistoryResponse>;
  }

  /**
   * @summary Retrieve the latest journal of the requested files.
   * @param requestModel Request filter model.
   * @param [options] The optional parameters
   * @returns Promise<Models.JournalGetFileLatestJournalsResponse>
   */
  getFileLatestJournals(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData, options?: msRest.RequestOptionsBase): Promise<Models.JournalGetFileLatestJournalsResponse>;
  /**
   * @param requestModel Request filter model.
   * @param callback The callback
   */
  getFileLatestJournals(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData>): void;
  /**
   * @param requestModel Request filter model.
   * @param options The optional parameters
   * @param callback The callback
   */
  getFileLatestJournals(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData>): void;
  getFileLatestJournals(requestModel: Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData>, callback?: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData>): Promise<Models.JournalGetFileLatestJournalsResponse> {
    return this.client.sendOperationRequest(
      {
        requestModel,
        options
      },
      getFileLatestJournalsOperationSpec,
      callback) as Promise<Models.JournalGetFileLatestJournalsResponse>;
  }

  /**
   * @summary Retrieve the latest journal of the requested files.
   * @param journalEntry Request filter model.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  addJournalEntry(journalEntry: Models.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param journalEntry Request filter model.
   * @param callback The callback
   */
  addJournalEntry(journalEntry: Models.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param journalEntry Request filter model.
   * @param options The optional parameters
   * @param callback The callback
   */
  addJournalEntry(journalEntry: Models.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  addJournalEntry(journalEntry: Models.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        journalEntry,
        options
      },
      addJournalEntryOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getJournalEntryByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Journal/GET/JournalEntryById",
  queryParameters: [
    Parameters.fileId0,
    Parameters.journalId,
    Parameters.lang
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
              className: "CyberjusticeLabKernelServiceContractsJournalJournalData"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const getLatestJournalsByCodesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Journal/GET/LatestJournalsByCodes",
  queryParameters: [
    Parameters.fileId0,
    Parameters.journalCodes
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
              className: "CyberjusticeLabKernelSharedJournalModelsJournalModel"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const getFileHistoryOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Journal/POST/FileHistory",
  requestBody: {
    parameterPath: "requestModel",
    mapper: {
      ...Mappers.CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData
    },
    default: {}
  },
  serializer
};

const getFileLatestJournalsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Journal/POST/FileLatestJournals",
  requestBody: {
    parameterPath: "requestModel",
    mapper: {
      ...Mappers.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData
    },
    default: {}
  },
  serializer
};

const addJournalEntryOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Journal/POST/AddJournalEntry",
  requestBody: {
    parameterPath: "journalEntry",
    mapper: {
      ...Mappers.CyberjusticeLabKernelSharedJournalModelsCreateJournalModel,
      required: true
    }
  },
  responses: {
    204: {},
    default: {}
  },
  serializer
};
