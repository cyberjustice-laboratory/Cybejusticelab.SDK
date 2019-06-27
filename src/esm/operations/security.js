/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/securityMappers";
import * as Parameters from "../models/parameters";
/** Class representing a Security. */
var Security = /** @class */ (function () {
    /**
     * Create a Security.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    function Security(client) {
        this.client = client;
    }
    Security.prototype.getPredicate = function (id, options, callback) {
        return this.client.sendOperationRequest({
            id: id,
            options: options
        }, getPredicateOperationSpec, callback);
    };
    Security.prototype.getPredicateIdByName = function (name, options, callback) {
        return this.client.sendOperationRequest({
            name: name,
            options: options
        }, getPredicateIdByNameOperationSpec, callback);
    };
    return Security;
}());
export { Security };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var getPredicateOperationSpec = {
    httpMethod: "GET",
    path: "Security/GET/Predicate",
    queryParameters: [
        Parameters.id1
    ],
    responses: {
        200: {
            bodyMapper: Mappers.CyberjusticeLabKernelServiceContractsSecurityPredicateData
        },
        default: {}
    },
    serializer: serializer
};
var getPredicateIdByNameOperationSpec = {
    httpMethod: "GET",
    path: "Security/GET/PredicateIdByName",
    queryParameters: [
        Parameters.name
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Uuid"
                }
            }
        },
        default: {}
    },
    serializer: serializer
};
//# sourceMappingURL=security.js.map