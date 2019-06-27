import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a JudicialFile. */
export declare class JudicialFile {
    private readonly client;
    /**
     * Create a JudicialFile.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Delete a party.
     * @param partyId Party Guid.
     * @param lastModified Last time the party was modified
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteParty(partyId: string, lastModified: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyId Party Guid.
     * @param lastModified Last time the party was modified
     * @param callback The callback
     */
    deleteParty(partyId: string, lastModified: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyId Party Guid.
     * @param lastModified Last time the party was modified
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteParty(partyId: string, lastModified: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Detach Representative From Party.
     * @param detachRepresentativeFromPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.DetachRepresentativeFromPartyModel}Object
     * that contains a party Id
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    detachRepresentativeFromParty(detachRepresentativeFromPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param detachRepresentativeFromPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.DetachRepresentativeFromPartyModel}Object
     * that contains a party Id
     * @param callback The callback
     */
    detachRepresentativeFromParty(detachRepresentativeFromPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param detachRepresentativeFromPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.DetachRepresentativeFromPartyModel}Object
     * that contains a party Id
     * @param options The optional parameters
     * @param callback The callback
     */
    detachRepresentativeFromParty(detachRepresentativeFromPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a party invitation.
     * @param partyInvitationId Party invitation Guid.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<msRest.RestResponse>
     */
    deletePartyInvitation(partyInvitationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyInvitationId Party invitation Guid.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    deletePartyInvitation(partyInvitationId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyInvitationId Party invitation Guid.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    deletePartyInvitation(partyInvitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a file invitation.
     * @param fileInvitationId File invitation Guid.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteFileInvitation(fileInvitationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileInvitationId File invitation Guid.
     * @param callback The callback
     */
    deleteFileInvitation(fileInvitationId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileInvitationId File invitation Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteFileInvitation(fileInvitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a file tag link.
     * @param fileId The file id.
     * @param tagCode The tag code linked to the file.
     * @param modifiedTicks The modified date in ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteFileTagLink(fileId: string, tagCode: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileId The file id.
     * @param tagCode The tag code linked to the file.
     * @param modifiedTicks The modified date in ticks.
     * @param callback The callback
     */
    deleteFileTagLink(fileId: string, tagCode: string, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileId The file id.
     * @param tagCode The tag code linked to the file.
     * @param modifiedTicks The modified date in ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteFileTagLink(fileId: string, tagCode: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a notification.
     * @param notificationId The notification identifier to delete.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteNotification(notificationId: number, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param notificationId The notification identifier to delete.
     * @param callback The callback
     */
    deleteNotification(notificationId: number, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param notificationId The notification identifier to delete.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteNotification(notificationId: number, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a charge (used for both penal charges and criminal charges).
     * @param chargeId The Guid of the charge to be deleted.
     * @param modifiedTicks The modified date in ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteCharge(chargeId: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param chargeId The Guid of the charge to be deleted.
     * @param modifiedTicks The modified date in ticks.
     * @param callback The callback
     */
    deleteCharge(chargeId: string, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param chargeId The Guid of the charge to be deleted.
     * @param modifiedTicks The modified date in ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteCharge(chargeId: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * Instead use POST/Files.
     * @summary Get the available files according to the authenticated person role.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetFilesResponse>
     */
    getFiles(options?: Models.JudicialFileGetFilesOptionalParams): Promise<Models.JudicialFileGetFilesResponse>;
    /**
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFiles(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFiles(options: Models.JudicialFileGetFilesOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[]>): void;
    /**
     * @summary Get the list of judicial files.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFiles1Response>
     */
    getFiles1(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResquestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFiles1Response>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getFiles1(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResquestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFiles1(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResquestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResponseData>): void;
    /**
     * This API is obsolete, there is no need using it now, instead use POST/Files.
     * @summary Get the count of available files according to the authenticated person role.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetFilesCountResponse>
     */
    getFilesCount(options?: Models.JudicialFileGetFilesCountOptionalParams): Promise<Models.JudicialFileGetFilesCountResponse>;
    /**
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFilesCount(callback: msRest.ServiceCallback<number>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFilesCount(options: Models.JudicialFileGetFilesCountOptionalParams, callback: msRest.ServiceCallback<number>): void;
    /**
     * @summary Get a Judicial File.
     * @param fileId Identification of the requested file..
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetFileResponse>
     */
    getFile(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileResponse>;
    /**
     * @param fileId Identification of the requested file..
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFile(fileId: string, callback: msRest.ServiceCallback<number>): void;
    /**
     * @param fileId Identification of the requested file..
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFile(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
    /**
     * @summary Get a narrow set of the requested file's properties.
     * This method returns as little information as possible to stay efficient even with many results.
     * It is preferable to create another method and DTO than expand this specific DTO.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetFilesSet1Response>
     */
    getFilesSet1(options?: Models.JudicialFileGetFilesSet1OptionalParams): Promise<Models.JudicialFileGetFilesSet1Response>;
    /**
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFilesSet1(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet1Data>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFilesSet1(options: Models.JudicialFileGetFilesSet1OptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet1Data>): void;
    /**
     * @summary Get a narrow set of the requested file's properties.
     * This method returns as little information as possible to stay efficient even with many results.
     * It is preferable to create another method and DTO than expand this specific DTO.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetFilesSet2Response>
     */
    getFilesSet2(options?: Models.JudicialFileGetFilesSet2OptionalParams): Promise<Models.JudicialFileGetFilesSet2Response>;
    /**
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFilesSet2(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet2Data>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFilesSet2(options: Models.JudicialFileGetFilesSet2OptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet2Data>): void;
    /**
     * The search parameters should contains only one element. A new version of this service should be
     * created.
     * @summary Get the available party entities according to the authenticated role.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetPartyEntitiesResponse>
     */
    getPartyEntities(options?: Models.JudicialFileGetPartyEntitiesOptionalParams): Promise<Models.JudicialFileGetPartyEntitiesResponse>;
    /**
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getPartyEntities(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFilePartyEntityData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getPartyEntities(options: Models.JudicialFileGetPartyEntitiesOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFilePartyEntityData[]>): void;
    /**
     * @summary Get the files of a label (the label from the Tag service).
     * @param labelId Label Guid from the Tag service.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFilesOfLabelResponse>
     */
    getFilesOfLabel(labelId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFilesOfLabelResponse>;
    /**
     * @param labelId Label Guid from the Tag service.
     * @param callback The callback
     */
    getFilesOfLabel(labelId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[]>): void;
    /**
     * @param labelId Label Guid from the Tag service.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFilesOfLabel(labelId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[]>): void;
    /**
     * @summary Get the files of a tag code (the tag code from the Tag service).
     * @param tagCode Tag code from the Tag service.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFilesOfTagCodeResponse>
     */
    getFilesOfTagCode(tagCode: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFilesOfTagCodeResponse>;
    /**
     * @param tagCode Tag code from the Tag service.
     * @param callback The callback
     */
    getFilesOfTagCode(tagCode: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[]>): void;
    /**
     * @param tagCode Tag code from the Tag service.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFilesOfTagCode(tagCode: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[]>): void;
    /**
     * @summary Get all business rules with related entities.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetBusinessRulesResponse>
     */
    getBusinessRules(options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetBusinessRulesResponse>;
    /**
     * @param callback The callback
     */
    getBusinessRules(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getBusinessRules(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleData[]>): void;
    /**
     * Administrators only.
     * @summary Get all the representatives.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetRepresentativeUsersResponse>
     */
    getRepresentativeUsers(options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetRepresentativeUsersResponse>;
    /**
     * @param callback The callback
     */
    getRepresentativeUsers(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getRepresentativeUsers(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[]>): void;
    /**
     * @summary Get the profile of the current representative.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetRepresentativeProfileResponse>
     */
    getRepresentativeProfile(options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetRepresentativeProfileResponse>;
    /**
     * @param callback The callback
     */
    getRepresentativeProfile(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getRepresentativeProfile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData>): void;
    /**
     * @summary Get the specified representative profile.
     * @param representativeId Representative Guid.
     * @param username Representative username.
     * @param partyId Any party Id that the target representative is linked to, for security purposes.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetTargetRepresentativeProfileResponse>
     */
    getTargetRepresentativeProfile(representativeId: string, username: string, partyId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetTargetRepresentativeProfileResponse>;
    /**
     * @param representativeId Representative Guid.
     * @param username Representative username.
     * @param partyId Any party Id that the target representative is linked to, for security purposes.
     * @param callback The callback
     */
    getTargetRepresentativeProfile(representativeId: string, username: string, partyId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData>): void;
    /**
     * @param representativeId Representative Guid.
     * @param username Representative username.
     * @param partyId Any party Id that the target representative is linked to, for security purposes.
     * @param options The optional parameters
     * @param callback The callback
     */
    getTargetRepresentativeProfile(representativeId: string, username: string, partyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData>): void;
    /**
     * @summary Get the list of neutrals for a given judicial entity.
     * @param urn the URN code of the judicial entity.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetRepresentativeNeutralListResponse>
     */
    getRepresentativeNeutralList(urn: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetRepresentativeNeutralListResponse>;
    /**
     * @param urn the URN code of the judicial entity.
     * @param callback The callback
     */
    getRepresentativeNeutralList(urn: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[]>): void;
    /**
     * @param urn the URN code of the judicial entity.
     * @param options The optional parameters
     * @param callback The callback
     */
    getRepresentativeNeutralList(urn: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[]>): void;
    /**
     * @summary Checks if a date would trigger an optimistic concurrency exception on a file.
     * @param fileId The file to verify.
     * @param modifiedTicks The last known modified date of the file.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCheckForFileOptimisticConcurrencyResponse>
     */
    checkForFileOptimisticConcurrency(fileId: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCheckForFileOptimisticConcurrencyResponse>;
    /**
     * @param fileId The file to verify.
     * @param modifiedTicks The last known modified date of the file.
     * @param callback The callback
     */
    checkForFileOptimisticConcurrency(fileId: string, modifiedTicks: string, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * @param fileId The file to verify.
     * @param modifiedTicks The last known modified date of the file.
     * @param options The optional parameters
     * @param callback The callback
     */
    checkForFileOptimisticConcurrency(fileId: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
    /**
     * @summary Get the list of neutrals and their zip codes in the given judicial entity.
     * @param urn The URN code of the judicial entity.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNeutralZipCodeDataListResponse>
     */
    getNeutralZipCodeDataList(urn: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNeutralZipCodeDataListResponse>;
    /**
     * @param urn The URN code of the judicial entity.
     * @param callback The callback
     */
    getNeutralZipCodeDataList(urn: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileNeutralZipCodeData[]>): void;
    /**
     * @param urn The URN code of the judicial entity.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNeutralZipCodeDataList(urn: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileNeutralZipCodeData[]>): void;
    /**
     * @summary Verify the existence of a file from a judicial file Id in a judicial entity Id.
     * All users have access to this function.
     * @param judicialFileId The file identifier.
     * @param judicialEntityId The judicial entity.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFileVerifyDataResponse>
     */
    getFileVerifyData(judicialFileId: string, judicialEntityId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileVerifyDataResponse>;
    /**
     * @param judicialFileId The file identifier.
     * @param judicialEntityId The judicial entity.
     * @param callback The callback
     */
    getFileVerifyData(judicialFileId: string, judicialEntityId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileVerifyData>): void;
    /**
     * @param judicialFileId The file identifier.
     * @param judicialEntityId The judicial entity.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileVerifyData(judicialFileId: string, judicialEntityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileVerifyData>): void;
    /**
     * @summary Get a party invitation.
     * @param partyInvitationId The party invitation Guid.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetPartyInvitationResponse>
     */
    getPartyInvitation(partyInvitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetPartyInvitationResponse>;
    /**
     * @param partyInvitationId The party invitation Guid.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getPartyInvitation(partyInvitationId: string, callback: msRest.ServiceCallback<any>): void;
    /**
     * @param partyInvitationId The party invitation Guid.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getPartyInvitation(partyInvitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
    /**
     * @summary Get the party invitations from a specific party Id.
     * @param partyId The party Guid.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetPartyInvitationsOfPartyResponse>
     */
    getPartyInvitationsOfParty(partyId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetPartyInvitationsOfPartyResponse>;
    /**
     * @param partyId The party Guid.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getPartyInvitationsOfParty(partyId: string, callback: msRest.ServiceCallback<any>): void;
    /**
     * @param partyId The party Guid.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getPartyInvitationsOfParty(partyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
    /**
     * @summary Get the file invitations from a specific party Id.
     * @param partyId The party Guid.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFileInvitationsOfPartyResponse>
     */
    getFileInvitationsOfParty(partyId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileInvitationsOfPartyResponse>;
    /**
     * @param partyId The party Guid.
     * @param callback The callback
     */
    getFileInvitationsOfParty(partyId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel[]>): void;
    /**
     * @param partyId The party Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileInvitationsOfParty(partyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel[]>): void;
    /**
     * @summary Get the file invitation information.
     * @param code The Invitation Code.
     * @param judicialFileId The JudicialFileId.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFileInvitationInformationResponse>
     */
    getFileInvitationInformation(code: string, judicialFileId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileInvitationInformationResponse>;
    /**
     * @param code The Invitation Code.
     * @param judicialFileId The JudicialFileId.
     * @param callback The callback
     */
    getFileInvitationInformation(code: string, judicialFileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel>): void;
    /**
     * @param code The Invitation Code.
     * @param judicialFileId The JudicialFileId.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileInvitationInformation(code: string, judicialFileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel>): void;
    /**
     * @summary Use the invitationId to get some basic information about the file.
     * @param invitationId The party invitation Guid.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFileInformationFromPartyInvitationResponse>
     */
    getFileInformationFromPartyInvitation(invitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileInformationFromPartyInvitationResponse>;
    /**
     * @param invitationId The party invitation Guid.
     * @param callback The callback
     */
    getFileInformationFromPartyInvitation(invitationId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel>): void;
    /**
     * @param invitationId The party invitation Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileInformationFromPartyInvitation(invitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel>): void;
    /**
     * @summary Get the new notifications count for the current user.
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNewNotificationsCountResponse>
     */
    getNewNotificationsCount(judicialEntityId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNewNotificationsCountResponse>;
    /**
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param callback The callback
     */
    getNewNotificationsCount(judicialEntityId: string, callback: msRest.ServiceCallback<number>): void;
    /**
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNewNotificationsCount(judicialEntityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
    /**
     * @summary Get the notifications count by file for the current user.
     * @param take Number of files to return.
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNotificationsCountByFileResponse>
     */
    getNotificationsCountByFile(take: number, judicialEntityId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNotificationsCountByFileResponse>;
    /**
     * @param take Number of files to return.
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param callback The callback
     */
    getNotificationsCountByFile(take: number, judicialEntityId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel[]>): void;
    /**
     * @param take Number of files to return.
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNotificationsCountByFile(take: number, judicialEntityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel[]>): void;
    /**
     * @summary Get the notifications count by aggregator code for the current user.
     * @param aggregatorsCodes List of aggregator codes by file id.
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param aggregatorCodeIsSubstring True if the given aggregator code is a substring. Can be null.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNotificationsCountAggregatorCodeResponse>
     */
    getNotificationsCountAggregatorCode(aggregatorsCodes: string[], judicialEntityId: string, aggregatorCodeIsSubstring: boolean, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNotificationsCountAggregatorCodeResponse>;
    /**
     * @param aggregatorsCodes List of aggregator codes by file id.
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param aggregatorCodeIsSubstring True if the given aggregator code is a substring. Can be null.
     * @param callback The callback
     */
    getNotificationsCountAggregatorCode(aggregatorsCodes: string[], judicialEntityId: string, aggregatorCodeIsSubstring: boolean, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByAggregatorCodeModel[]>): void;
    /**
     * @param aggregatorsCodes List of aggregator codes by file id.
     * @param judicialEntityId Id of the judicial entity the notifications belongs to.
     * @param aggregatorCodeIsSubstring True if the given aggregator code is a substring. Can be null.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNotificationsCountAggregatorCode(aggregatorsCodes: string[], judicialEntityId: string, aggregatorCodeIsSubstring: boolean, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByAggregatorCodeModel[]>): void;
    /**
     * @summary Get a notification type by code.
     * @param notificationCode Code of the notification type.
     * @param businessRuleName Business rule name.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNotificationTypeResponse>
     */
    getNotificationType(notificationCode: string, businessRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNotificationTypeResponse>;
    /**
     * @param notificationCode Code of the notification type.
     * @param businessRuleName Business rule name.
     * @param callback The callback
     */
    getNotificationType(notificationCode: string, businessRuleName: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel>): void;
    /**
     * @param notificationCode Code of the notification type.
     * @param businessRuleName Business rule name.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNotificationType(notificationCode: string, businessRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel>): void;
    /**
     * @summary Get the list of distinct log entry codes that happened in a file.
     * @param fileId Requested file.
     * @param currentRole The current user role to access the log entries.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetLogEntryDistinctCodesResponse>
     */
    getLogEntryDistinctCodes(fileId: string, currentRole: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetLogEntryDistinctCodesResponse>;
    /**
     * @param fileId Requested file.
     * @param currentRole The current user role to access the log entries.
     * @param callback The callback
     */
    getLogEntryDistinctCodes(fileId: string, currentRole: string, callback: msRest.ServiceCallback<string[]>): void;
    /**
     * @param fileId Requested file.
     * @param currentRole The current user role to access the log entries.
     * @param options The optional parameters
     * @param callback The callback
     */
    getLogEntryDistinctCodes(fileId: string, currentRole: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
    /**
     * @summary Dismiss the file notifications according to the parameters used.
     * The dismissed notifications must correspond to the notification and/or aggregator code.
     * All notifications in the file are dismissed if both codes are null.
     * This can only be used by a representative for its own notifications.
     * @param fileId File Guid.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    dismissNotifications(fileId: string, options?: Models.JudicialFileDismissNotificationsOptionalParams): Promise<msRest.RestResponse>;
    /**
     * @param fileId File Guid.
     * @param callback The callback
     */
    dismissNotifications(fileId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileId File Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    dismissNotifications(fileId: string, options: Models.JudicialFileDismissNotificationsOptionalParams, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the status of a representative.
     * @param representativeId The representative to update.
     * @param status The new representative status.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateRepresentativeStatus(representativeId: string, status: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param representativeId The representative to update.
     * @param status The new representative status.
     * @param callback The callback
     */
    updateRepresentativeStatus(representativeId: string, status: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param representativeId The representative to update.
     * @param status The new representative status.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateRepresentativeStatus(representativeId: string, status: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the type of a party.
     * @param partyId Identification of the party.
     * @param partyType Type of the party.
     * @param lastModified Last modified time of the party.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePartyType(partyId: string, partyType: string, lastModified: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyId Identification of the party.
     * @param partyType Type of the party.
     * @param lastModified Last modified time of the party.
     * @param callback The callback
     */
    updatePartyType(partyId: string, partyType: string, lastModified: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyId Identification of the party.
     * @param partyType Type of the party.
     * @param lastModified Last modified time of the party.
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePartyType(partyId: string, partyType: string, lastModified: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the Dispute Description of a party.
     * @param partyId Identification of the party.
     * @param disputeDescription Dispute description of the party.
     * @param lastModified Last modified time of the party.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePartyDisputeDescription(partyId: string, disputeDescription: string, lastModified: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyId Identification of the party.
     * @param disputeDescription Dispute description of the party.
     * @param lastModified Last modified time of the party.
     * @param callback The callback
     */
    updatePartyDisputeDescription(partyId: string, disputeDescription: string, lastModified: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyId Identification of the party.
     * @param disputeDescription Dispute description of the party.
     * @param lastModified Last modified time of the party.
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePartyDisputeDescription(partyId: string, disputeDescription: string, lastModified: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the Expiration date of a file invitation.
     * @param fileInvitationId Identification of the file invitation.
     * @param expiryDate New expiration date of the file invitation.
     * @param lastModified For optimistic concurrency check.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateFileInvitationExpirationDate(fileInvitationId: string, expiryDate: Date | string, lastModified: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileInvitationId Identification of the file invitation.
     * @param expiryDate New expiration date of the file invitation.
     * @param lastModified For optimistic concurrency check.
     * @param callback The callback
     */
    updateFileInvitationExpirationDate(fileInvitationId: string, expiryDate: Date | string, lastModified: Date | string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileInvitationId Identification of the file invitation.
     * @param expiryDate New expiration date of the file invitation.
     * @param lastModified For optimistic concurrency check.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateFileInvitationExpirationDate(fileInvitationId: string, expiryDate: Date | string, lastModified: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the Expiration date of a party invitation.
     * @param partyInvitationId Identification of the party invitation.
     * @param expiryDate New expiration date of the party invitation.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<msRest.RestResponse>
     */
    updatePartyInvitationExpirationDate(partyInvitationId: string, expiryDate: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyInvitationId Identification of the party invitation.
     * @param expiryDate New expiration date of the party invitation.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    updatePartyInvitationExpirationDate(partyInvitationId: string, expiryDate: Date | string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyInvitationId Identification of the party invitation.
     * @param expiryDate New expiration date of the party invitation.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    updatePartyInvitationExpirationDate(partyInvitationId: string, expiryDate: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the status of a file.
     * @param fileId Id of the file.
     * @param fileStatus New judicial file status.
     * @param lastModifiedDate Time stamp of the last modification of the file.  Used for optimistic
     * concurrency check.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateFileStatus(fileId: string, fileStatus: string, lastModifiedDate: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileId Id of the file.
     * @param fileStatus New judicial file status.
     * @param lastModifiedDate Time stamp of the last modification of the file.  Used for optimistic
     * concurrency check.
     * @param callback The callback
     */
    updateFileStatus(fileId: string, fileStatus: string, lastModifiedDate: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileId Id of the file.
     * @param fileStatus New judicial file status.
     * @param lastModifiedDate Time stamp of the last modification of the file.  Used for optimistic
     * concurrency check.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateFileStatus(fileId: string, fileStatus: string, lastModifiedDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a party invitation.
     * @param createModel The party invitation create model.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileCreatePartyInvitationResponse>
     */
    createPartyInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreatePartyInvitationResponse>;
    /**
     * @param createModel The party invitation create model.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    createPartyInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param createModel The party invitation create model.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    createPartyInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Create an invitation to a file.
     * @param createModel The file invitation create model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateFileInvitationResponse>
     */
    createFileInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateFileInvitationResponse>;
    /**
     * @param createModel The file invitation create model.
     * @param callback The callback
     */
    createFileInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param createModel The file invitation create model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createFileInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Accept a party invitation.
     * @param partyInvitationId The party invitation Guid.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileAcceptPartyInvitationResponse>
     */
    acceptPartyInvitation(partyInvitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileAcceptPartyInvitationResponse>;
    /**
     * @param partyInvitationId The party invitation Guid.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    acceptPartyInvitation(partyInvitationId: string, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param partyInvitationId The party invitation Guid.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    acceptPartyInvitation(partyInvitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Refuse a party invitation. Update a tag with a complement.
     * @param refuseModel Data to refuse an invite.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<msRest.RestResponse>
     */
    refusePartyInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationRefuseModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param refuseModel Data to refuse an invite.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    refusePartyInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationRefuseModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param refuseModel Data to refuse an invite.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    refusePartyInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationRefuseModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Refuse a file invitation. Update a tag with a complement.
     * @param refuseModel Data to refuse an invite.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    refuseFileInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param refuseModel Data to refuse an invite.
     * @param callback The callback
     */
    refuseFileInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param refuseModel Data to refuse an invite.
     * @param options The optional parameters
     * @param callback The callback
     */
    refuseFileInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a file tag link with its complements.
     * @param tagModel The new tag link model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateFileTagLinkResponse>
     */
    createFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateFileTagLinkResponse>;
    /**
     * @param tagModel The new tag link model.
     * @param callback The callback
     */
    createFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param tagModel The new tag link model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Attach representatives to a
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.PartyModel}.
     * @param model The model.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<msRest.RestResponse>
     */
    attachRepresentativesToParty(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The model.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    attachRepresentativesToParty(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The model.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    attachRepresentativesToParty(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Link representatives to a
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.PartyModel}.
     * @param linkRepresentativesToPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.LinkRepresentativesToPartyModel} object that
     * contains a party Id and a dictionnary of {System.Collections.Generic.KeyValuePair`2}.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    linkRepresentativesToParty(linkRepresentativesToPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLinkRepresentativesToPartyModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param linkRepresentativesToPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.LinkRepresentativesToPartyModel} object that
     * contains a party Id and a dictionnary of {System.Collections.Generic.KeyValuePair`2}.
     * @param callback The callback
     */
    linkRepresentativesToParty(linkRepresentativesToPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLinkRepresentativesToPartyModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param linkRepresentativesToPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.LinkRepresentativesToPartyModel} object that
     * contains a party Id and a dictionnary of {System.Collections.Generic.KeyValuePair`2}.
     * @param options The optional parameters
     * @param callback The callback
     */
    linkRepresentativesToParty(linkRepresentativesToPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLinkRepresentativesToPartyModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Accept an invitation to act as a representative in a file.
     * <remarks>The representative will be assigned the viewer role by default.</remarks>
     * @param invitationId The invitation id.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileAcceptRepresentativeInvitationResponse>
     */
    acceptRepresentativeInvitation(invitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileAcceptRepresentativeInvitationResponse>;
    /**
     * @param invitationId The invitation id.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    acceptRepresentativeInvitation(invitationId: string, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param invitationId The invitation id.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    acceptRepresentativeInvitation(invitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Accept an invitation to a file.
     * @param acceptModel The accept invitaton Model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileAcceptFileInvitationResponse>
     */
    acceptFileInvitation(acceptModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileAcceptFileInvitationResponse>;
    /**
     * @param acceptModel The accept invitaton Model.
     * @param callback The callback
     */
    acceptFileInvitation(acceptModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param acceptModel The accept invitaton Model.
     * @param options The optional parameters
     * @param callback The callback
     */
    acceptFileInvitation(acceptModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Get the list of notification types.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNotificationTypesResponse>
     */
    getNotificationTypes(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNotificationTypesResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getNotificationTypes(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNotificationTypes(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiResponseData>): void;
    /**
     * @summary Get the list of notifications.
     * @param requestModel Notification filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNotificationsResponse>
     */
    getNotifications(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNotificationsResponse>;
    /**
     * @param requestModel Notification filter model.
     * @param callback The callback
     */
    getNotifications(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiResponseData>): void;
    /**
     * @param requestModel Notification filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNotifications(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiResponseData>): void;
    /**
     * @summary Notifications count by file for the current user.
     * @param requestModel Notification by file filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNotificationsSummaryByFileResponse>
     */
    getNotificationsSummaryByFile(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNotificationsSummaryByFileResponse>;
    /**
     * @param requestModel Notification by file filter model.
     * @param callback The callback
     */
    getNotificationsSummaryByFile(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData>): void;
    /**
     * @param requestModel Notification by file filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNotificationsSummaryByFile(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData>): void;
    /**
     * @summary Create a new notification and representatives links.
     * @param model The new model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createNotification(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreateModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The new model.
     * @param callback The callback
     */
    createNotification(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreateModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The new model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createNotification(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a new file.
     * @param model The new file model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateJudicialFileResponse>
     */
    createJudicialFile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateJudicialFileResponse>;
    /**
     * @param model The new file model.
     * @param callback The callback
     */
    createJudicialFile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param model The new file model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createJudicialFile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Get the representative who made the last action on the file.
     * @param requestModel
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    getLastActor(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLastActorRequestData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param requestModel
     * @param callback The callback
     */
    getLastActor(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLastActorRequestData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param requestModel
     * @param options The optional parameters
     * @param callback The callback
     */
    getLastActor(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLastActorRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Get the list of log templates.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetLogTemplatesResponse>
     */
    getLogTemplates(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetLogTemplatesResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getLogTemplates(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getLogTemplates(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiResponseData>): void;
    /**
     * @summary Get the list of log entries.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetLogEntriesResponse>
     */
    getLogEntries(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetLogEntriesResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getLogEntries(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getLogEntries(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData>): void;
    /**
     * @summary Create a log template.
     * @param model The create model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateLogTemplateResponse>
     */
    createLogTemplate(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateLogTemplateResponse>;
    /**
     * @param model The create model.
     * @param callback The callback
     */
    createLogTemplate(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param model The create model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createLogTemplate(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Create a log entry.
     * @param model The create model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateLogEntryResponse>
     */
    createLogEntry(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateLogEntryResponse>;
    /**
     * @param model The create model.
     * @param callback The callback
     */
    createLogEntry(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryCreateModel, callback: msRest.ServiceCallback<string[]>): void;
    /**
     * @param model The create model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createLogEntry(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
    /**
     * @summary Create a penal charge.
     * @param charge The penal charge create model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateChargeResponse>
     */
    createCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateChargeResponse>;
    /**
     * @param charge The penal charge create model.
     * @param callback The callback
     */
    createCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param charge The penal charge create model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Creates a representative profile
     * @param model The create representative profile model
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createRepresentativeProfile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The create representative profile model
     * @param callback The callback
     */
    createRepresentativeProfile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The create representative profile model
     * @param options The optional parameters
     * @param callback The callback
     */
    createRepresentativeProfile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Close a file.
     * @param closeFileModel Model used to close a file.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    closeFile(closeFileModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsCloseFileModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param closeFileModel Model used to close a file.
     * @param callback The callback
     */
    closeFile(closeFileModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsCloseFileModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param closeFileModel Model used to close a file.
     * @param options The optional parameters
     * @param callback The callback
     */
    closeFile(closeFileModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsCloseFileModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the file attributes of a file.
     * @param fileAttributesModel A list of file attribute model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileUpdateFileAttributeResponse>
     */
    updateFileAttribute(fileAttributesModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileAttributesUpdateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileUpdateFileAttributeResponse>;
    /**
     * @param fileAttributesModel A list of file attribute model.
     * @param callback The callback
     */
    updateFileAttribute(fileAttributesModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileAttributesUpdateModel, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel>): void;
    /**
     * @param fileAttributesModel A list of file attribute model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateFileAttribute(fileAttributesModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileAttributesUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel>): void;
    /**
     * @summary Upsert a party.
     * @param upsertModel The party upsert model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileUpsertPartyResponse>
     */
    upsertParty(upsertModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileUpsertPartyResponse>;
    /**
     * @param upsertModel The party upsert model.
     * @param callback The callback
     */
    upsertParty(upsertModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param upsertModel The party upsert model.
     * @param options The optional parameters
     * @param callback The callback
     */
    upsertParty(upsertModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Updates party status.
     * @param partyId Id of the party.
     * @param status The new status of the party.
     * @param lastModifiedDate Lat date when the party was modified in ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    changePartyStatus(partyId: string, status: string, lastModifiedDate: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyId Id of the party.
     * @param status The new status of the party.
     * @param lastModifiedDate Lat date when the party was modified in ticks.
     * @param callback The callback
     */
    changePartyStatus(partyId: string, status: string, lastModifiedDate: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyId Id of the party.
     * @param status The new status of the party.
     * @param lastModifiedDate Lat date when the party was modified in ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    changePartyStatus(partyId: string, status: string, lastModifiedDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Upsert a party contact.
     * @param upsertModel The party contact model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileUpsertPartyContactResponse>
     */
    upsertPartyContact(upsertModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyContactUpsertModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileUpsertPartyContactResponse>;
    /**
     * @param upsertModel The party contact model.
     * @param callback The callback
     */
    upsertPartyContact(upsertModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyContactUpsertModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param upsertModel The party contact model.
     * @param options The optional parameters
     * @param callback The callback
     */
    upsertPartyContact(upsertModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyContactUpsertModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Updates the internal reference number and the attributes of a party representative.
     * @param model The model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePartyRepresentativesAttributes(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The model.
     * @param callback The callback
     */
    updatePartyRepresentativesAttributes(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePartyRepresentativesAttributes(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a file tag link.
     * @param tagModel The updated tag link model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param tagModel The updated tag link model.
     * @param callback The callback
     */
    updateFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param tagModel The updated tag link model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a file tag link with its complements.
     * New complements are created, found complements are updated, missing complements are removed.
     * @param tagModel The updated tag link model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateFileTagLinkAndComplements(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateWithComplementModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param tagModel The updated tag link model.
     * @param callback The callback
     */
    updateFileTagLinkAndComplements(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateWithComplementModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param tagModel The updated tag link model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateFileTagLinkAndComplements(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateWithComplementModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a notification type resource.
     * @param model The updated notification type resource model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateNotificationTypeResource(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeResourceUpdateModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The updated notification type resource model.
     * @param callback The callback
     */
    updateNotificationTypeResource(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeResourceUpdateModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The updated notification type resource model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateNotificationTypeResource(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeResourceUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a notification.
     * @param model The updated model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateNotification(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationUpdateModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The updated model.
     * @param callback The callback
     */
    updateNotification(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationUpdateModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The updated model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateNotification(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a notification representative link.
     * This can only be used by a representative for its own notifications.
     * @param model The updated model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateNotificationRepresentative(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationRepresentativeUpdateModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The updated model.
     * @param callback The callback
     */
    updateNotificationRepresentative(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationRepresentativeUpdateModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The updated model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateNotificationRepresentative(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationRepresentativeUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a log template.
     * @param model The update model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateLogTemplate(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The update model.
     * @param callback The callback
     */
    updateLogTemplate(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The update model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateLogTemplate(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update log templates.
     * @param model The update model.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateLogTemplates(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The update model.
     * @param callback The callback
     */
    updateLogTemplates(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The update model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateLogTemplates(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a penal charge.
     * @param charge The penal charge update model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileUpdateChargeResponse>
     */
    updateCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileUpdateChargeResponse>;
    /**
     * @param charge The penal charge update model.
     * @param callback The callback
     */
    updateCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param charge The penal charge update model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
}
//# sourceMappingURL=judicialFile.d.ts.map