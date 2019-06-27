import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventApiRequestModel.
 * Represents an api filter model when getting a list of timely events.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventApiRequestModel {
    /**
     * @member {string[]} [timeEventIds] List of identifiers.
     */
    timeEventIds?: string[];
    /**
     * @member {string[]} [fileIds] List of related files.
     */
    fileIds?: string[];
    /**
     * @member {string[]} [timerCodes] List of timer codes.
     */
    timerCodes?: string[];
    /**
     * @member {string[]} [timerStatuses] List of timer statuses.
     */
    timerStatuses?: string[];
    /**
     * @member {Date} [minDate] The minimum date of the queried timer events.
     */
    minDate?: Date;
    /**
     * @member {Date} [maxDate] The maximum date of the queried timer events.
     */
    maxDate?: Date;
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {OrderBy} [orderBy] Order by columns. Possible values include:
     * 'Status', 'Date'
     */
    orderBy?: OrderBy;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationResourceModel.
 * Resources for the time event notification model.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationResourceModel {
    /**
     * @member {string} [culture] Language of the message.
     */
    culture?: string;
    /**
     * @member {string} [message] Message of the notification.
     */
    message?: string;
    /**
     * @member {string} [parameters] Dynamic parameters that were used to create
     * this message.
     */
    parameters?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationModel.
 * Notification for a time event model.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationModel {
    /**
     * @member {string} [notificationCode] Code of the notification to trigger.
     */
    notificationCode?: string;
    /**
     * @member {string} [partyType] The party type that the notification will be
     * sent to. Every representative in a party with this type will receive it.
     */
    partyType?: string;
    /**
     * @member {string} [link] Link for the notification that will be created.
     */
    link?: string;
    /**
     * @member {string} [aggregatorCode] Aggregator code for the notification
     * that will be created.
     */
    aggregatorCode?: string;
    /**
     * @member {string} [emailCode] Email to be sent for this notification. In
     * case of instant emails.
     */
    emailCode?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationResourceModel[]}
     * [timeEventNotificationResourceModels] Resources.
     */
    timeEventNotificationResourceModels?: CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationResourceModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventLogResourceModel.
 * Resources for the time event log model.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventLogResourceModel {
    /**
     * @member {string} [culture] Language of the log entry.
     */
    culture?: string;
    /**
     * @member {string} [message] Message of the log entry.
     */
    message?: string;
    /**
     * @member {string} [parameters] Dynamic parameters that were used to create
     * this message.
     */
    parameters?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventLogModel.
 * Log entry / log template for a time event model.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventLogModel {
    /**
     * @member {string} [eventCode] Log event code that this time event will
     * triggers.
     */
    eventCode?: string;
    /**
     * @member {string} [authorName] Author of the log entry.
     */
    authorName?: string;
    /**
     * @member {string} [authorRole] Role of the author.
     */
    authorRole?: string;
    /**
     * @member {string} [authorUID] Unique ID to identify the author.
     */
    authorUID?: string;
    /**
     * @member {string} [fileStep] File step when the entry happened.
     */
    fileStep?: string;
    /**
     * @member {Date} [entryDate] Date and time of this entry.
     */
    entryDate?: Date;
    /**
     * @member
     * {CyberjusticeLabKernelSharedAsyncModelsTimeEventLogResourceModel[]}
     * [timeEventLogResourceModels] Resources.
     */
    timeEventLogResourceModels?: CyberjusticeLabKernelSharedAsyncModelsTimeEventLogResourceModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventEmailModel.
 * Email for a time event model.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventEmailModel {
    /**
     * @member {string} [emailCode] Email to be sent when this event occurs.
     */
    emailCode?: string;
    /**
     * @member {string} [culture] Language of the email.
     */
    culture?: string;
    /**
     * @member {string} [parameters] Dynamic parameters that were used to create
     * this message.
     */
    parameters?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventModel.
 * Time entry model.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventModel {
    /**
     * @member {string} [timeEventId] Guid primary key.
     */
    timeEventId?: string;
    /**
     * @member {string} [fileId] File Id.
     */
    fileId?: string;
    /**
     * @member {string} [timerCode] Time code for the application.
     */
    timerCode?: string;
    /**
     * @member {Date} [timerDate] Timer's date. The event occurs at that time.
     */
    timerDate?: Date;
    /**
     * @member {string} [timerStatus] The status of the timer.
     */
    timerStatus?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationModel[]}
     * [notificationLinks] Notifications that will be sent if the event happens.
     */
    notificationLinks?: CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationModel[];
    /**
     * @member {CyberjusticeLabKernelSharedAsyncModelsTimeEventLogModel[]}
     * [logLinks] Logs that will be triggered if the event happens.
     */
    logLinks?: CyberjusticeLabKernelSharedAsyncModelsTimeEventLogModel[];
    /**
     * @member {CyberjusticeLabKernelSharedAsyncModelsTimeEventEmailModel[]}
     * [emailLinks] Emails that will be sent if the event happens.
     */
    emailLinks?: CyberjusticeLabKernelSharedAsyncModelsTimeEventEmailModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventApiResponseModel.
 * Represents an API response when getting a list of time events.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventApiResponseModel {
    /**
     * @member {number} [count] Count of time events.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered time events.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedAsyncModelsTimeEventModel[]}
     * [timeEvents] List of time events.
     */
    timeEvents?: CyberjusticeLabKernelSharedAsyncModelsTimeEventModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedAsyncModelsTimeEventCreateModel.
 * Time entry create model.
 *
 */
export interface CyberjusticeLabKernelSharedAsyncModelsTimeEventCreateModel {
    /**
     * @member {string} [fileId] File Id.
     */
    fileId?: string;
    /**
     * @member {string} [timerCode] Time code for the application.
     */
    timerCode?: string;
    /**
     * @member {Date} [timerDate] Timer's date. The event occurs at that time.
     */
    timerDate?: Date;
    /**
     * @member {string} [timerStatus] The status of the timer.
     */
    timerStatus?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationModel[]}
     * [notificationLinks] Notifications that will be sent if the event happens.
     */
    notificationLinks?: CyberjusticeLabKernelSharedAsyncModelsTimeEventNotificationModel[];
    /**
     * @member {CyberjusticeLabKernelSharedAsyncModelsTimeEventLogModel[]}
     * [logLinks] Logs that will be triggered if the event happens.
     */
    logLinks?: CyberjusticeLabKernelSharedAsyncModelsTimeEventLogModel[];
    /**
     * @member {CyberjusticeLabKernelSharedAsyncModelsTimeEventEmailModel[]}
     * [emailLinks] Emails that will be sent if the event happens.
     */
    emailLinks?: CyberjusticeLabKernelSharedAsyncModelsTimeEventEmailModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount.
 */
export interface CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount {
    /**
     * @member {string} [fileId]
     */
    fileId?: string;
    /**
     * @member {string} [judicialFileId]
     */
    judicialFileId?: string;
    /**
     * @member {string} [judicialEntityId]
     */
    judicialEntityId?: string;
    /**
     * @member {string} [businessRuleName]
     */
    businessRuleName?: string;
    /**
     * @member {string} [status]
     */
    status?: string;
    /**
     * @member {string} [closingReason]
     */
    closingReason?: string;
    /**
     * @member {number} [allProposalsCount]
     */
    allProposalsCount?: number;
    /**
     * @member {number} [negotiationProposalsCount]
     */
    negotiationProposalsCount?: number;
    /**
     * @member {number} [mediationProposalsCount]
     */
    mediationProposalsCount?: number;
    /**
     * @member {Date} [createdDate]
     */
    createdDate?: Date;
    /**
     * @member {Date} [modifiedDate]
     */
    modifiedDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarBaseCalendarUpdateData.
 * Class used to update a BaseCalendar.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarBaseCalendarUpdateData {
    /**
     * @member {string} [id] The internal Guid of the base calendar.
     * Required. Verified existence.
     */
    id?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {Date} [beginDate] The begin date of the base calendar.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date of the base calendar.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [name] The name of the base calendar.
     * Required.
     */
    name?: string;
    /**
     * @member {Status} [status] The status of the base calendar.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData.
 * Class used to update a period availability.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData {
    /**
     * @member {string} [id] The internal ID of the availability period.
     * Required. Verified existence.
     */
    id?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {Date} [beginDate] The begin date of the availability period.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date of the availability period.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {Status1} [status] The availability period status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status1;
    /**
     * @member {string} [periodGroupId] The recurrence group identifier.
     */
    periodGroupId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarClosedDayUpdateData.
 * Class used to update a closed time between BeginDate and EndDate in a
 * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarData} object.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarClosedDayUpdateData {
    /**
     * @member {string} [id] The ID of the closed day.
     * Required. Verified existance.
     */
    id?: string;
    /**
     * @member {Date} [beginDate] The begin date where it is taking place.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date where it is taking place.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [name] The name of the scheduled day off. The null value
     * is accepted.
     */
    name?: string;
    /**
     * @member {string} [rule] The rule for the closed day.
     * Defines how the system should go beyond the off day to add more
     * availabilities.
     * Required.
     */
    rule?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkData.
 * Class used to represent an assignment-week-room-user link.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkData {
    /**
     * @member {string} [id] The assignment week room user link data Id.
     */
    id?: string;
    /**
     * @member {string} [assignmentCycleId] The linked assignment cycle's Id.
     */
    assignmentCycleId?: string;
    /**
     * @member {string} [roomId] The linked room's Id.
     * Required. Verified existence.
     */
    roomId?: string;
    /**
     * @member {string} [realm] The linked user's Realm.
     * Required.
     */
    realm?: string;
    /**
     * @member {string} [userId] The linked user's Id.
     * Required.
     */
    userId?: string;
    /**
     * @member {number} [year] The year of the week.
     * Required.
     */
    year?: number;
    /**
     * @member {number} [month] The month of the week.
     * Required.
     */
    month?: number;
    /**
     * @member {number} [week] The position of the week in the month.
     * Required
     */
    week?: number;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleUpdateData.
 * Class used to update an assignment cycle.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleUpdateData {
    /**
     * @member {string} [id] The assignment cycle's internal Id.
     */
    id?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkData[]}
     * [assignmentWeekRoomUserLinks] The cycle's list of week-room-user links.
     */
    assignmentWeekRoomUserLinks?: CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkData[];
    /**
     * @member {Date} [beginDate] The cycle's begin date.
     * Required. Validated as less than the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The cycle's end date.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [resourceType] The cycle's resource type.
     * Required.
     */
    resourceType?: string;
    /**
     * @member {string} [judicialEntityId] The cycle's judicial entity.
     * Required. Existence validated.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarSchedulePatternUpdateData.
 * Class used to update a schedule pattern.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarSchedulePatternUpdateData {
    /**
     * @member {string} [schedulePatternId] The internal ID of the schedule
     * pattern.
     * Required. Verified existence.
     */
    schedulePatternId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [name] The pattern's name.
     * Required.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarScheduleEntryUpdateData.
 * Class used to update a schedule pattern.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarScheduleEntryUpdateData {
    /**
     * @member {string} [scheduleEntryId] The internal Id of the schedule entry.
     * Required. Verified existence.
     */
    scheduleEntryId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {EntryType} [entryType] The pattern entry type (Weekly or
     * Monthly).
     * Required. Possible values include: 'Weekly', 'Monthly'
     */
    entryType?: EntryType;
    /**
     * @member {string} [weekday] The weekday of the entry.
     * Required. Must be one of the {System.DayOfWeek} string values (capitalized
     * English day of weeks).
     */
    weekday?: string;
    /**
     * @member {number} [weekPosition] The position of the week in the month (If
     * entry type is weekly, ignore this parameter and leave it to 1).
     */
    weekPosition?: number;
    /**
     * @member {number} [recurrence] The recurrence of the entry (2 means each
     * two weeks or months, for instance). Required.
     */
    recurrence?: number;
    /**
     * @member {number} [recurrenceAlternateStart] An alternated recurrence start
     * (for a biweekly recurrence, 1 means start at the first week, 2 means start
     * at the second week. This number should always be less or equal to
     * Recurrence). Required.
     */
    recurrenceAlternateStart?: number;
    /**
     * @member {string} [startTime] The start time of the entry.
     * Required. Must be before the end time.
     */
    startTime?: string;
    /**
     * @member {string} [endTime] The end time of the entry.
     * Required.
     */
    endTime?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData.
 * Class used to represent a link between a period availability and a judicial
 * file.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData {
    /**
     * @member {string} [periodAvailabilityId] Guid of the period availability.
     */
    periodAvailabilityId?: string;
    /**
     * @member {string} [judicialFileId] Guid of the judicial file.
     * Required. Verified existence.
     */
    judicialFileId?: string;
    /**
     * @member {string} [partyEntityId] Guid of the defendant party entity in the
     * file.
     */
    partyEntityId?: string;
    /**
     * @member {string} [timeAllocation] The amount of time allocated to this
     * judicial file in the period availability.
     */
    timeAllocation?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel.
 * Represents an event party link.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel {
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel.
 * Creates an attribute.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel {
    /**
     * @member {string} [key] Key of the attribute.
     */
    key?: string;
    /**
     * @member {string} [value] Value of the attribute.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsUpdateEventModel.
 * Updates an event.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsUpdateEventModel {
    /**
     * @member {string} [eventId] Id of the event.
     */
    eventId?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {Date} [beginDate] Begin date of the event.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] End date of the event.
     */
    endDate?: Date;
    /**
     * @member {string} [fileStatus] Status which matches to the event.
     */
    fileStatus?: string;
    /**
     * @member {string} [title] Title of the event.
     */
    title?: string;
    /**
     * @member {string} [description] Description of the event.
     */
    description?: string;
    /**
     * @member {string} [place] Location where the event is to be held.
     */
    place?: string;
    /**
     * @member {number} [rank] Rank of the event.
     */
    rank?: number;
    /**
     * @member {string} [category] Category of the event.
     */
    category?: string;
    /**
     * @member {string} [subCategory] SubCategory of the event.
     */
    subCategory?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     */
    modifiedDate?: Date;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[]}
     * [partiesLinks] List of identifiers of the file parties who have access to
     * the event. If the list is empty no restriction is applied.
     */
    partiesLinks?: CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[];
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel[]}
     * [eventAttributes] Attributes of the event.
     */
    eventAttributes?: CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsUpdateAttributeModel.
 * Updates an attribute.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsUpdateAttributeModel {
    /**
     * @member {string} [key] Key of the attribute.
     */
    key?: string;
    /**
     * @member {string} [value] Value of the attribute.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsUpdateEventAttributesModel.
 * Updates event's attributes.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsUpdateEventAttributesModel {
    /**
     * @member {string} [eventId] Id of the event.
     */
    eventId?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     */
    modifiedDate?: Date;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsUpdateAttributeModel[]}
     * [eventAttributes] Attributes of the event.
     */
    eventAttributes?: CyberjusticeLabKernelSharedCalendarModelsUpdateAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventBehaviourPartyLinkModel.
 * Represents an event behaviour party link.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventBehaviourPartyLinkModel {
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehaviourModel.
 * Updates event's behaviour.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehaviourModel {
    /**
     * @member {string} [behaviourCode] Code of the behaviour.
     */
    behaviourCode?: string;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsUpdateAttributeModel[]}
     * [behaviourAttributes] Attributes of the behaviour.
     */
    behaviourAttributes?: CyberjusticeLabKernelSharedCalendarModelsUpdateAttributeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedCalendarModelsEventBehaviourPartyLinkModel[]}
     * [partiesLinks] Parties links of the behaviour.
     */
    partiesLinks?: CyberjusticeLabKernelSharedCalendarModelsEventBehaviourPartyLinkModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehavioursModel.
 * Updates event's behaviours.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehavioursModel {
    /**
     * @member {string} [eventId] Id of the event.
     */
    eventId?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     */
    modifiedDate?: Date;
    /**
     * @member
     * {CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehaviourModel[]}
     * [eventBehaviours] Behaviours of the event.
     */
    eventBehaviours?: CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehaviourModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsUpdateEventRankModel.
 * Update Event Rank Model.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsUpdateEventRankModel {
    /**
     * @member {string} [fileId] File Identification.
     */
    fileId?: string;
    /**
     * @member {string} [eventId] Event Identification.
     */
    eventId?: string;
    /**
     * @member {number} [targetRank] Desired rank for the event.
     */
    targetRank?: number;
    /**
     * @member {Date} [modifiedDate] The modified date of an object. Required for
     * optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [removeDependency] Flag that indicates whether the
     * Startafter attribute OR BeginDate must be removed or not.
     */
    removeDependency?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsUpdateEventStartDateModel.
 * Update Event Sart Date Model.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsUpdateEventStartDateModel {
    /**
     * @member {string} [fileId] File Identification.
     */
    fileId?: string;
    /**
     * @member {string} [eventId] Event identification.
     */
    eventId?: string;
    /**
     * @member {Date} [modifiedDate] Date of modification of the event.
     */
    modifiedDate?: Date;
    /**
     * @member {Date} [startDate] New start date of the event.
     */
    startDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventApiResquestData.
 * Represents an api filter model when getting a list of events.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventApiResquestData {
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [eventId] Id of the event.
     */
    eventId?: string;
    /**
     * @member {FileStatus} [fileStatus] Status of the file. Possible values
     * include: 'Empty', 'Draft', 'InPreparation', 'Planned',
     * 'PartiesIdentification', 'ProblemDescription', 'InitialProposal',
     * 'InitialDocumentFiling', 'FilingCompletion', 'Submitted', 'Initiate',
     * 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
     * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval',
     * 'MinuteApprovalRecall', 'Complete', 'Adjudication', 'Reject', 'Close',
     * 'Refuse', 'Invalid'
     */
    fileStatus?: FileStatus;
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {string[]} [eventBehaviourPartyLinks] Filter by event behaviour
     * party links.
     */
    eventBehaviourPartyLinks?: string[];
    /**
     * @member {string} [searchText] Search text.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] List of search by columns.
     */
    searchBy?: string[];
    /**
     * @member {{ [propertyName: string]: string }} [attributes] List of
     * attributes for query.
     */
    attributes?: {
        [propertyName: string]: string;
    };
    /**
     * @member {OrderBy1} [orderBy] Order by columns. Possible values include:
     * 'Title', 'BeginDate', 'Rank'
     */
    orderBy?: OrderBy1;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventAttributeModel.
 * Represents an event attribute.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventAttributeModel {
    /**
     * @member {number} [id] Id of the attribute.
     */
    id?: number;
    /**
     * @member {string} [key] Key of the attribute.
     */
    key?: string;
    /**
     * @member {string} [value] Value of the attribute.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventPartyResponseModel.
 * Represents an event party response.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventPartyResponseModel {
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {boolean} [response] Response of the event attempt.
     */
    response?: boolean;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventAttemptModel.
 * Represents an event attempt.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventAttemptModel {
    /**
     * @member {string} [id] Id of the event attempt.
     */
    id?: string;
    /**
     * @member {Date} [beginDate] Begin date of the event attempt.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] End date of the event attempt.
     */
    endDate?: Date;
    /**
     * @member
     * {CyberjusticeLabKernelSharedCalendarModelsEventPartyResponseModel[]}
     * [partyResponses] Parties responses of the attempt.
     */
    partyResponses?: CyberjusticeLabKernelSharedCalendarModelsEventPartyResponseModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventBehaviourAttributeModel.
 * Represents an event behaviour attribute.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventBehaviourAttributeModel {
    /**
     * @member {number} [id] Id of the attribute.
     */
    id?: number;
    /**
     * @member {string} [key] Key of the attribute.
     */
    key?: string;
    /**
     * @member {string} [value] Value of the attribute.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventBehaviourModel.
 * Represents an event behaviour.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventBehaviourModel {
    /**
     * @member {number} [id] Id of the behaviour.
     */
    id?: number;
    /**
     * @member {string} [behaviourCode] Code of the behaviour.
     */
    behaviourCode?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedCalendarModelsEventBehaviourAttributeModel[]}
     * [behaviourAttributes] Attributes of the behaviour.
     */
    behaviourAttributes?: CyberjusticeLabKernelSharedCalendarModelsEventBehaviourAttributeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedCalendarModelsEventBehaviourPartyLinkModel[]}
     * [behaviourPartyLinks] Parties links of the behaviour.
     */
    behaviourPartyLinks?: CyberjusticeLabKernelSharedCalendarModelsEventBehaviourPartyLinkModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventModel.
 * Represents an event.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventModel {
    /**
     * @member {string} [id] Id of the event.
     */
    id?: string;
    /**
     * @member {string} [calendarId] Id of the calendar which the event belongs
     * to.
     */
    calendarId?: string;
    /**
     * @member {Date} [beginDate] Begin date of the event.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] End date of the event.
     */
    endDate?: Date;
    /**
     * @member {string} [fileStatus] Status which matches to the event.
     */
    fileStatus?: string;
    /**
     * @member {string} [partyId] Id of the party who create the event. If empty,
     * the event was created by the clerk.
     */
    partyId?: string;
    /**
     * @member {string} [title] Title of the event.
     */
    title?: string;
    /**
     * @member {string} [description] Description of the event.
     */
    description?: string;
    /**
     * @member {string} [place] Location where the event is to be held.
     */
    place?: string;
    /**
     * @member {number} [rank] Rank of the event.
     */
    rank?: number;
    /**
     * @member {string} [category] Category of the event.
     */
    category?: string;
    /**
     * @member {string} [subCategory] SubCategory of the event.
     */
    subCategory?: string;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventAttributeModel[]}
     * [eventAttributes] Attributes of the event.
     */
    eventAttributes?: CyberjusticeLabKernelSharedCalendarModelsEventAttributeModel[];
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[]}
     * [eventPartyLinks] List of ids of the file parties who have access to the
     * event. If the list is empty no restriction is applied.
     */
    eventPartyLinks?: CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[];
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventAttemptModel[]}
     * [eventAttempts] Attempts of the event.
     */
    eventAttempts?: CyberjusticeLabKernelSharedCalendarModelsEventAttemptModel[];
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventBehaviourModel[]}
     * [eventBehaviours] Behaviours of the event.
     */
    eventBehaviours?: CyberjusticeLabKernelSharedCalendarModelsEventBehaviourModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsEventApiResponseData.
 * Represents an API response when getting a list of events.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsEventApiResponseData {
    /**
     * @member {number} [count] Count of events.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered events.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventModel[]} [events]
     * List of events.
     */
    events?: CyberjusticeLabKernelSharedCalendarModelsEventModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiRequestData.
 * Full calendar api request.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiRequestData {
    /**
     * @member {Date} [beginDate] The begin date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date.
     */
    endDate?: Date;
    /**
     * @member {boolean} [isHoliday] If the date is an holiday.
     */
    isHoliday?: boolean;
    /**
     * @member {boolean} [isWeekend] If the date is a weekend.
     */
    isWeekend?: boolean;
    /**
     * @member {number} [take] Take.
     */
    take?: number;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsDayModel.
 * A day with attributes.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsDayModel {
    /**
     * @member {number} [dateKey]
     */
    dateKey?: number;
    /**
     * @member {Date} [date]
     */
    date?: Date;
    /**
     * @member {number} [day] Day in the month.
     * <example>1,2...28,30,31</example>
     */
    day?: number;
    /**
     * @member {number} [weekday] Day in the week.
     * <example>First, second... seventh.</example>
     */
    weekday?: number;
    /**
     * @member {string} [weekDayName]
     */
    weekDayName?: string;
    /**
     * @member {boolean} [isWeekend]
     */
    isWeekend?: boolean;
    /**
     * @member {boolean} [isHoliday]
     */
    isHoliday?: boolean;
    /**
     * @member {string} [holidayText]
     */
    holidayText?: string;
    /**
     * @member {number} [dowInMonth] Occurance of this day in this month.
     * <example>Second monday of the month.</example>
     */
    dowInMonth?: number;
    /**
     * @member {number} [dayOfYear] Day in the year.
     * <example>First, second... three hundred sixty fith/sixty.</example>
     */
    dayOfYear?: number;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiResponseData.
 * Full Calendar response.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiResponseData {
    /**
     * @member {number} [count] Count of Days.
     */
    count?: number;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsDayModel[]} [days] A
     * calendar day.///
     */
    days?: CyberjusticeLabKernelSharedCalendarModelsDayModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateRoleData.
 * Class used to create a human resource linked to a newly created calendar.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateRoleData {
    /**
     * @member {string} [role] The role of the resource.
     * Required.
     */
    role?: string;
    /**
     * @member {string} [realm] The realm of the user.
     * Required.
     */
    realm?: string;
    /**
     * @member {string} [userId] The identifier of the user.
     * Required.
     */
    userId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateData.
 * Class used to create a BaseCalendar.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateData {
    /**
     * @member {string[]} [locationRoomIds] The base calendar's location room
     * list.
     */
    locationRoomIds?: string[];
    /**
     * @member {string[]} [judicialEntityIds] The base calendar's judicial entity
     * list.
     */
    judicialEntityIds?: string[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateRoleData[]}
     * [roles] The base calendar's resources.
     */
    roles?: CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateRoleData[];
    /**
     * @member {Date} [beginDate] The begin date of the base calendar.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date of the base calendar.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [name] The name of the base calendar.
     * Required.
     */
    name?: string;
    /**
     * @member {Status2} [status] The status of the base calendar.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status2;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleBaseData.
 * Class used to create a resource with a specific role corresponding to a
 * period availability.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleBaseData {
    /**
     * @member {string} [role] The specific and explicitly stated role of the
     * resource.
     * Required.
     */
    role?: string;
    /**
     * @member {Status3} [status] The availability period status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status3;
    /**
     * @member {string} [realm] The realm of the user.
     * Required.
     */
    realm?: string;
    /**
     * @member {string} [userId] The identifier of the user.
     * Required.
     */
    userId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileBaseData.
 * Class used to create a link between a period availability and a judicial
 * file.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileBaseData {
    /**
     * @member {string} [judicialFileId] Guid of the judicial file.
     * Required. Verified existence.
     */
    judicialFileId?: string;
    /**
     * @member {string} [partyEntityId] Guid of the defendant party entity in the
     * file.
     */
    partyEntityId?: string;
    /**
     * @member {string} [timeAllocation] The amount of time allocated to this
     * judicial file in the period availability.
     */
    timeAllocation?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData.
 * Class used to create a period availability.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData {
    /**
     * @member {string} [baseCalendarId] The ID of the base calendar.
     * Required. Verified existence.
     */
    baseCalendarId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleBaseData[]}
     * [roles] The role resource list.
     */
    roles?: CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleBaseData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileBaseData[]}
     * [fileLinks] The links to judicial files.
     */
    fileLinks?: CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileBaseData[];
    /**
     * @member {Date} [beginDate] The begin date of the availability period.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date of the availability period.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {Status4} [status] The availability period status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status4;
    /**
     * @member {string} [periodGroupId] The recurrence group identifier.
     */
    periodGroupId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarClosedWeekdayData.
 * Class used to represent a ClosedWeekday.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarClosedWeekdayData {
    /**
     * @member {string} [baseCalendarId] The ID of the base calendar who have a
     * scheduled weekday closing time.
     * Required. Verified existence.
     */
    baseCalendarId?: string;
    /**
     * @member {string} [weekday] The name of the scheduled weekday closing time.
     * Required. Must be one of the {System.DayOfWeek} string values (capitalized
     * english day of weeks).
     */
    weekday?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarClosedDayCreateData.
 * Class used to create a closed time between BeginDate and EndDate in a
 * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarData} object.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarClosedDayCreateData {
    /**
     * @member {string} [baseCalendarId] The ID of the base calendar who have a
     * scheduled day off.
     * Required. Verified existance.
     */
    baseCalendarId?: string;
    /**
     * @member {Date} [beginDate] The begin date where it is taking place.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date where it is taking place.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [name] The name of the scheduled day off. The null value
     * is accepted.
     */
    name?: string;
    /**
     * @member {string} [rule] The rule for the closed day.
     * Defines how the system should go beyond the off day to add more
     * availabilities.
     * Required.
     */
    rule?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkCreateData.
 * Class used to create an assignment-week-room-user link.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkCreateData {
    /**
     * @member {string} [roomId] The linked room's Id.
     * Required. Verified existence.
     */
    roomId?: string;
    /**
     * @member {string} [realm] The linked user's Realm.
     * Required.
     */
    realm?: string;
    /**
     * @member {string} [userId] The linked user's Id.
     * Required.
     */
    userId?: string;
    /**
     * @member {number} [year] The year of the week.
     * Required.
     */
    year?: number;
    /**
     * @member {number} [month] The month of the week.
     * Required.
     */
    month?: number;
    /**
     * @member {number} [week] The position of the week in the month.
     * Required
     */
    week?: number;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleCreateData.
 * Class used to create an assignment cycle.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleCreateData {
    /**
     * @member {Status5} [status] The cycle's status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status5;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkCreateData[]}
     * [assignmentWeekRoomUserLinks] The cycle's list of week-room-user links.
     */
    assignmentWeekRoomUserLinks?: CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkCreateData[];
    /**
     * @member {Date} [beginDate] The cycle's begin date.
     * Required. Validated as less than the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The cycle's end date.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [resourceType] The cycle's resource type.
     * Required.
     */
    resourceType?: string;
    /**
     * @member {string} [judicialEntityId] The cycle's judicial entity.
     * Required. Existence validated.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleCreateData.
 * Class used to create a resource with a specific role corresponding to a
 * period availability.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleCreateData {
    /**
     * @member {string} [periodAvailabilityId] The ID of the availability period.
     * Required. Verified existence.
     */
    periodAvailabilityId?: string;
    /**
     * @member {string} [role] The specific and explicitly stated role of the
     * resource.
     * Required.
     */
    role?: string;
    /**
     * @member {Status6} [status] The availability period status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status6;
    /**
     * @member {string} [realm] The realm of the user.
     * Required.
     */
    realm?: string;
    /**
     * @member {string} [userId] The identifier of the user.
     * Required.
     */
    userId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCopyRequestData.
 * Class used as a wrapper to request a copy from a schedule pattern into a
 * base calendar.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCopyRequestData {
    /**
     * @member {string} [schedulePatternId] The Id of the pattern.
     * Required. Verified existence.
     */
    schedulePatternId?: string;
    /**
     * @member {string} [baseCalendarId] The Id of the base calendar in which the
     * new period availabilities copied from the pattern will be created.
     * Required. Verified existance.
     */
    baseCalendarId?: string;
    /**
     * @member {Date} [startDate] The start date for the copy.
     * Required. Must be before the end date.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] The end time for the copy.
     * Required.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarScheduleEntryBaseData.
 * Class used to represent a schedule pattern.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarScheduleEntryBaseData {
    /**
     * @member {EntryType1} [entryType] The pattern entry type (Weekly or
     * Monthly).
     * Required. Possible values include: 'Weekly', 'Monthly'
     */
    entryType?: EntryType1;
    /**
     * @member {string} [weekday] The weekday of the entry.
     * Required. Must be one of the {System.DayOfWeek} string values (capitalized
     * English day of weeks).
     */
    weekday?: string;
    /**
     * @member {number} [weekPosition] The position of the week in the month (If
     * entry type is weekly, ignore this parameter and leave it to 1).
     */
    weekPosition?: number;
    /**
     * @member {number} [recurrence] The recurrence of the entry (2 means each
     * two weeks or months, for instance). Required.
     */
    recurrence?: number;
    /**
     * @member {number} [recurrenceAlternateStart] An alternated recurrence start
     * (for a biweekly recurrence, 1 means start at the first week, 2 means start
     * at the second week. This number should always be less or equal to
     * Recurrence). Required.
     */
    recurrenceAlternateStart?: number;
    /**
     * @member {string} [startTime] The start time of the entry.
     * Required. Must be before the end time.
     */
    startTime?: string;
    /**
     * @member {string} [endTime] The end time of the entry.
     * Required.
     */
    endTime?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCreateData.
 * Class used to create a schedule pattern.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCreateData {
    /**
     * @member {string} [judicialEntityId] The ID of the judicial entity.
     * Required. Verified existence.
     */
    judicialEntityId?: string;
    /**
     * @member {string[]} [locationRoomIds] The IDs of the location rooms linked
     * to this pattern.
     */
    locationRoomIds?: string[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarScheduleEntryBaseData[]}
     * [scheduleEntries] The schedule entry list.
     */
    scheduleEntries?: CyberjusticeLabKernelServiceContractsCalendarScheduleEntryBaseData[];
    /**
     * @member {string} [name] The pattern's name.
     * Required.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarScheduleEntryCreateData.
 * Class used to create a schedule pattern.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarScheduleEntryCreateData {
    /**
     * @member {string} [schedulePatternId] The Id of the pattern that this entry
     * is part of.
     * Required. Verified existence.
     */
    schedulePatternId?: string;
    /**
     * @member {EntryType2} [entryType] The pattern entry type (Weekly or
     * Monthly).
     * Required. Possible values include: 'Weekly', 'Monthly'
     */
    entryType?: EntryType2;
    /**
     * @member {string} [weekday] The weekday of the entry.
     * Required. Must be one of the {System.DayOfWeek} string values (capitalized
     * English day of weeks).
     */
    weekday?: string;
    /**
     * @member {number} [weekPosition] The position of the week in the month (If
     * entry type is weekly, ignore this parameter and leave it to 1).
     */
    weekPosition?: number;
    /**
     * @member {number} [recurrence] The recurrence of the entry (2 means each
     * two weeks or months, for instance). Required.
     */
    recurrence?: number;
    /**
     * @member {number} [recurrenceAlternateStart] An alternated recurrence start
     * (for a biweekly recurrence, 1 means start at the first week, 2 means start
     * at the second week. This number should always be less or equal to
     * Recurrence). Required.
     */
    recurrenceAlternateStart?: number;
    /**
     * @member {string} [startTime] The start time of the entry.
     * Required. Must be before the end time.
     */
    startTime?: string;
    /**
     * @member {string} [endTime] The end time of the entry.
     * Required.
     */
    endTime?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsCreateCalendarModel.
 * Creates a calendar.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsCreateCalendarModel {
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [name] Name of the calendar.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsCreateEventAttemptModel.
 * Creates an event attempt.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsCreateEventAttemptModel {
    /**
     * @member {Date} [beginDate] Begin date of the event attempt.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] End date of the event attempt.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsCreateEventBehaviourModel.
 * Creates an event behaviour.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsCreateEventBehaviourModel {
    /**
     * @member {string} [behaviourCode] Code of the behaviour.
     */
    behaviourCode?: string;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel[]}
     * [behaviourAttributes] Attributes of the behaviour.
     */
    behaviourAttributes?: CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel[];
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[]}
     * [partiesLinks] Parties links of the behaviour.
     */
    partiesLinks?: CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsCreateEventModel.
 * Creates an event.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsCreateEventModel {
    /**
     * @member {string} [calendarId] Id of the calendar.
     */
    calendarId?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {Date} [beginDate] Begin date of the event.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] End date of the event.
     */
    endDate?: Date;
    /**
     * @member {string} [fileStatus] Status which matches to the event.
     */
    fileStatus?: string;
    /**
     * @member {string} [partyId] Id of the party who create the event. If empty,
     * the event was created by the clerk.
     */
    partyId?: string;
    /**
     * @member {string} [title] Title of the event.
     */
    title?: string;
    /**
     * @member {string} [description] Description of the event.
     */
    description?: string;
    /**
     * @member {string} [place] Location where the event is to be held.
     */
    place?: string;
    /**
     * @member {number} [rank] Rank of the event.
     */
    rank?: number;
    /**
     * @member {string} [category] Category of the event.
     */
    category?: string;
    /**
     * @member {string} [subCategory] SubCategory of the event.
     */
    subCategory?: string;
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel[]}
     * [eventAttributes] Attributes of the event.
     */
    eventAttributes?: CyberjusticeLabKernelSharedCalendarModelsCreateAttributeModel[];
    /**
     * @member {CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[]}
     * [partiesLinks] List of identifiers of the file parties who have access to
     * the event. If the list is empty no restriction is applied.
     */
    partiesLinks?: CyberjusticeLabKernelSharedCalendarModelsEventPartyLinkModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedCalendarModelsCreateEventAttemptModel[]}
     * [eventAttempts] Attempts of the event.
     */
    eventAttempts?: CyberjusticeLabKernelSharedCalendarModelsCreateEventAttemptModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedCalendarModelsCreateEventBehaviourModel[]}
     * [eventBehaviours] Behaviours of the event.
     */
    eventBehaviours?: CyberjusticeLabKernelSharedCalendarModelsCreateEventBehaviourModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarClosedDayData.
 * Class used to represent a closed time between BeginDate and EndDate in a
 * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarData} object.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarClosedDayData {
    /**
     * @member {string} [id] The ID of the closed day.
     */
    id?: string;
    /**
     * @member {string} [baseCalendarId] The ID of the base calendar who have a
     * scheduled day off.
     */
    baseCalendarId?: string;
    /**
     * @member {Date} [beginDate] The begin date where it is taking place.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date where it is taking place.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [name] The name of the scheduled day off. The null value
     * is accepted.
     */
    name?: string;
    /**
     * @member {string} [rule] The rule for the closed day.
     * Defines how the system should go beyond the off day to add more
     * availabilities.
     * Required.
     */
    rule?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleData.
 * Class used to represent a resource with a specific role corresponding to a
 * period availability.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleData {
    /**
     * @member {string} [id] The internal ID of the role period.
     */
    id?: string;
    /**
     * @member {string} [periodAvailabilityId] The ID of the availability period.
     * Required. Verified existence.
     */
    periodAvailabilityId?: string;
    /**
     * @member {string} [role] The specific and explicitly stated role of the
     * resource.
     * Required.
     */
    role?: string;
    /**
     * @member {Status7} [status] The availability period status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status7;
    /**
     * @member {string} [realm] The realm of the user.
     * Required.
     */
    realm?: string;
    /**
     * @member {string} [userId] The identifier of the user.
     * Required.
     */
    userId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData.
 * Class used to represent a period availability.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData {
    /**
     * @member {string} [id] The internal ID of the availability period.
     */
    id?: string;
    /**
     * @member {string} [baseCalendarId] The ID of the base calendar.
     */
    baseCalendarId?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleData[]}
     * [roles] The role resource list.
     */
    roles?: CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData[]}
     * [fileLinks] The links to judicial files.
     */
    fileLinks?: CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData[];
    /**
     * @member {Date} [beginDate] The begin date of the availability period.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date of the availability period.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {Status8} [status] The availability period status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status8;
    /**
     * @member {string} [periodGroupId] The recurrence group identifier.
     */
    periodGroupId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarBaseCalendarRoleData.
 * Class used to represent a human resource corresponding to a base calendar.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarBaseCalendarRoleData {
    /**
     * @member {string} [baseCalendarId] The ID of the base calendar.
     */
    baseCalendarId?: string;
    /**
     * @member {string} [role] The role of the resource.
     */
    role?: string;
    /**
     * @member {string} [realm] The realm of the user.
     */
    realm?: string;
    /**
     * @member {string} [userId] The identifier of the user.
     */
    userId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarBaseCalendarData.
 * Class used to represent a BaseCalendar.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarBaseCalendarData {
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsCalendarClosedDayData[]}
     * [closedDays] The base calendar's closed days list.
     */
    closedDays?: CyberjusticeLabKernelServiceContractsCalendarClosedDayData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsCalendarClosedWeekdayData[]}
     * [closedWeekdays] The base calendar's closing weekdays list.
     */
    closedWeekdays?: CyberjusticeLabKernelServiceContractsCalendarClosedWeekdayData[];
    /**
     * @member {string[]} [locationRoomIds] The base calendar's location room
     * list.
     */
    locationRoomIds?: string[];
    /**
     * @member {string[]} [judicialEntityIds] The base calendar's judicial entity
     * list.
     */
    judicialEntityIds?: string[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[]}
     * [periodAvailabilities] The base calendar's period availabilities.
     */
    periodAvailabilities?: CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarBaseCalendarRoleData[]}
     * [roles] The base calendar's resources.
     */
    roles?: CyberjusticeLabKernelServiceContractsCalendarBaseCalendarRoleData[];
    /**
     * @member {string} [id] The internal Guid of the base calendar.
     * Required. Verified existence.
     */
    id?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {Date} [beginDate] The begin date of the base calendar.
     * Required. Must be before the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The end date of the base calendar.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [name] The name of the base calendar.
     * Required.
     */
    name?: string;
    /**
     * @member {Status9} [status] The status of the base calendar.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status9;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleData.
 * Class used to represent an assignment cycle.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleData {
    /**
     * @member {string} [id] The assignment cycle's internal Id.
     */
    id?: string;
    /**
     * @member {Status10} [status] The cycle's status.
     * Required. Possible values include: 'Draft', 'Active'
     */
    status?: Status10;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkData[]}
     * [assignmentWeekRoomUserLinks] The cycle's list of week-room-user links.
     */
    assignmentWeekRoomUserLinks?: CyberjusticeLabKernelServiceContractsCalendarAssignmentWeekRoomUserLinkData[];
    /**
     * @member {Date} [beginDate] The cycle's begin date.
     * Required. Validated as less than the end date.
     */
    beginDate?: Date;
    /**
     * @member {Date} [endDate] The cycle's end date.
     * Required.
     */
    endDate?: Date;
    /**
     * @member {string} [resourceType] The cycle's resource type.
     * Required.
     */
    resourceType?: string;
    /**
     * @member {string} [judicialEntityId] The cycle's judicial entity.
     * Required. Existence validated.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarScheduleEntryData.
 * Class used to represent a schedule pattern.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarScheduleEntryData {
    /**
     * @member {string} [scheduleEntryId] The internal Id of the schedule entry.
     */
    scheduleEntryId?: string;
    /**
     * @member {string} [schedulePatternId] The Id of the pattern that this entry
     * is part of.
     */
    schedulePatternId?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {EntryType3} [entryType] The pattern entry type (Weekly or
     * Monthly).
     * Required. Possible values include: 'Weekly', 'Monthly'
     */
    entryType?: EntryType3;
    /**
     * @member {string} [weekday] The weekday of the entry.
     * Required. Must be one of the {System.DayOfWeek} string values (capitalized
     * English day of weeks).
     */
    weekday?: string;
    /**
     * @member {number} [weekPosition] The position of the week in the month (If
     * entry type is weekly, ignore this parameter and leave it to 1).
     */
    weekPosition?: number;
    /**
     * @member {number} [recurrence] The recurrence of the entry (2 means each
     * two weeks or months, for instance). Required.
     */
    recurrence?: number;
    /**
     * @member {number} [recurrenceAlternateStart] An alternated recurrence start
     * (for a biweekly recurrence, 1 means start at the first week, 2 means start
     * at the second week. This number should always be less or equal to
     * Recurrence). Required.
     */
    recurrenceAlternateStart?: number;
    /**
     * @member {string} [startTime] The start time of the entry.
     * Required. Must be before the end time.
     */
    startTime?: string;
    /**
     * @member {string} [endTime] The end time of the entry.
     * Required.
     */
    endTime?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData.
 * Class used to represent a schedule pattern.
 *
 */
export interface CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData {
    /**
     * @member {string} [schedulePatternId] The internal ID of the schedule
     * pattern.
     */
    schedulePatternId?: string;
    /**
     * @member {string} [judicialEntityId] The ID of the judicial entity.
     */
    judicialEntityId?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string[]} [locationRoomIds] The IDs of the location rooms linked
     * to this pattern.
     */
    locationRoomIds?: string[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsCalendarScheduleEntryData[]}
     * [scheduleEntries] The schedule entry list.
     */
    scheduleEntries?: CyberjusticeLabKernelServiceContractsCalendarScheduleEntryData[];
    /**
     * @member {string} [name] The pattern's name.
     * Required.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedCalendarModelsCalendarModel.
 * Represents an event.
 *
 */
export interface CyberjusticeLabKernelSharedCalendarModelsCalendarModel {
    /**
     * @member {string} [id] Id of the calendar.
     */
    id?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [name] Name of the calendar.
     */
    name?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsDocumentDocumentData.
 * Class used to represent a judicial document.
 *
 */
export interface CyberjusticeLabKernelServiceContractsDocumentDocumentData {
    /**
     * @member {string} [id] Internal ID of the document.
     */
    id?: string;
    /**
     * @member {string} [fileID] ID of the judicial file the document belongs to.
     */
    fileID?: string;
    /**
     * @member {string} [name] Name of the judicial document.
     */
    name?: string;
    /**
     * @member {string} [title] Title of the document.
     */
    title?: string;
    /**
     * @member {number} [version] Version of the document.
     */
    version?: number;
    /**
     * @member {string} [description] Description of the document.
     */
    description?: string;
    /**
     * @member {string} [format] Format of the document file. Note : the format
     * string contains the dot in ".png".
     */
    format?: string;
    /**
     * @member {FormatEnum} [formatEnum] Enum format of the document. Use this to
     * assign the property with a correct enum. Note : The format enum does not
     * contain the dot in "png". Possible values include: 'pdf', 'jpeg', 'mp3',
     * 'mp4', 'jpg', 'png', 'doc', 'docx', 'txt', 'tiff', 'gif', 'noformat'
     */
    formatEnum?: FormatEnum;
    /**
     * @member {string} [type] Type of the document.
     */
    type?: string;
    /**
     * @member {TypeEnum} [typeEnum] Enum type of the document. Use this to
     * assign the property with a correct enum. Possible values include:
     * 'Motion', 'PresentationNotice', 'BailiffNotice', 'Audience', 'Evidence',
     * 'Decisions', 'Schedule', 'Proceedings', 'CourtRecordings', 'Testimonies',
     * 'Pleadings', 'NegotiationAgreementMinute', 'MediationAgreementMinute',
     * 'NegotiationFailMinute', 'MediationFailMinute',
     * 'MediationProceduralOrder', 'ClaimLetter', 'AdjudicationInstructions',
     * 'AdjudicationOrder', 'FinalDecision', 'ConsentOrder', 'MediationOrder',
     * 'WithdrawalNotice', 'Hearing', 'RecordOfProceeding'
     */
    typeEnum?: TypeEnum;
    /**
     * @member {string} [status] Status of the document.
     */
    status?: string;
    /**
     * @member {StatusEnum} [statusEnum] Enum status of the document. Use this to
     * assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum;
    /**
     * @member {string} [permission] Permission of the document.
     */
    permission?: string;
    /**
     * @member {PermissionEnum} [permissionEnum] Enum permission of the document.
     * Use this to assign the property with a correct enum. Possible values
     * include: 'Public', 'Private'
     */
    permissionEnum?: PermissionEnum;
    /**
     * @member {string} [documentation] Documentation of the document.
     */
    documentation?: string;
    /**
     * @member {DocumentationEnum} [documentationEnum] Enum documentation of the
     * document. Use this to assign the property with a correct enum. Possible
     * values include: 'Digital', 'External', 'Oral'
     */
    documentationEnum?: DocumentationEnum;
    /**
     * @member {string} [reference] Reference of the document.
     */
    reference?: string;
    /**
     * @member {string} [partyID] ID of the party who add the document.
     */
    partyID?: string;
    /**
     * @member {string[]} [parties] The list of ID of the file parties who have
     * access to the document. If the list is empty no restriction is applied.
     */
    parties?: string[];
    /**
     * @member {string} [forumId] Forum Message ID.
     */
    forumId?: string;
    /**
     * @member {string} [parentForumId] Conversation ID (parent of the forum
     * messages conversation).
     */
    parentForumId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing SystemCollectionsGenericKeyValuePairSystemStringSystemString.
 */
export interface SystemCollectionsGenericKeyValuePairSystemStringSystemString {
    /**
     * @member {string} [key] **NOTE: This property will not be serialized. It
     * can only be populated by the server.**
     */
    readonly key?: string;
    /**
     * @member {string} [value] **NOTE: This property will not be serialized. It
     * can only be populated by the server.**
     */
    readonly value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsAttributesFilters.
 * Attributes filters.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsAttributesFilters {
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [notAndAttributes] Attributes linked with an "And" binary operation. All
     * of these attributes must not exist in the target object.
     */
    notAndAttributes?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [andAttributes] Attributes linked with an "And" binary operation. All of
     * these attributes must exist in the target object.
     */
    andAttributes?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [orAttributes] Attributes linked with an "Or" binary operation. Any of
     * these attributes must exist in the target object.
     */
    orAttributes?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsActionsFilters.
 * Actions filters.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsActionsFilters {
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [restrictedCodesAndComplements] Objects that have one of these codes (key)
     * and complements (value, optional) are filtered out.
     */
    restrictedCodesAndComplements?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
    /**
     * @member {string[]} [allowedPartyIds] The restricted codes don't apply to
     * an action made by one of these parties.
     */
    allowedPartyIds?: string[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsDocumentApiRequestData.
 * Represents an api filter model when getting a list of judicial files.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsDocumentApiRequestData {
    /**
     * @member {string[]} [documentIds] List of documents identifiers.
     */
    documentIds?: string[];
    /**
     * @member {string[]} [fileIds] List of files identifiers.
     */
    fileIds?: string[];
    /**
     * @member {string[]} [partyIds] List of parties identifiers.
     */
    partyIds?: string[];
    /**
     * @member {{ [propertyName: string]: string }} [attributes] List of
     * attributes for query.
     */
    attributes?: {
        [propertyName: string]: string;
    };
    /**
     * @member {boolean} [hasForumId] Test if document has a Forum identifier.
     */
    hasForumId?: boolean;
    /**
     * @member {string} [documentType] Type of the document.
     */
    documentType?: string;
    /**
     * @member {string} [searchText] Search text.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] List of search by columns.
     */
    searchBy?: string[];
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {OrderBy2} [orderBy] Order by columns. Possible values include:
     * 'Title', 'Description', 'Format', 'ModifiedDate', 'CreatedDate',
     * 'PartyActionAdjudicationAddedIdentificationFr',
     * 'PartyActionAdjudicationAddedIdentificationEn'
     */
    orderBy?: OrderBy2;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsAttributesFilters[]}
     * [documentsAttributesFilters] Attributes filters.
     */
    documentsAttributesFilters?: CyberjusticeLabKernelSharedDocumentModelsAttributesFilters[];
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsActionsFilters[]}
     * [documentsActionsFilters] Actions filters.
     */
    documentsActionsFilters?: CyberjusticeLabKernelSharedDocumentModelsActionsFilters[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsAttributeModel.
 * Represents a document attribute.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsDocumentPartyActionModel.
 * Class used for special actions parties. Actions and dates are significant
 * only to the application.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsDocumentPartyActionModel {
    /**
     * @member {number} [id] Unique ID of this action.
     */
    id?: number;
    /**
     * @member {string} [partyId] Party Id.
     */
    partyId?: string;
    /**
     * @member {string} [representativeId] Representative Id (optional).
     */
    representativeId?: string;
    /**
     * @member {string} [actionCode] Any code that the application needs about
     * this document.
     */
    actionCode?: string;
    /**
     * @member {Date} [actionDate] Any date related to the code that the
     * application needs.
     */
    actionDate?: Date;
    /**
     * @member {string} [actionComplement] Any code complement that the
     * application needs about this action.
     */
    actionComplement?: string;
    /**
     * @member {{ [propertyName: string]: string }} [actionAttributes] List of
     * attributes for this action.
     */
    actionAttributes?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsDocumentModel.
 * Class used to represent a judicial document.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsDocumentModel {
    /**
     * @member {string} [id] Internal ID of the document.
     */
    id?: string;
    /**
     * @member {string} [fileId] ID of the judicial file the document belongs to.
     */
    fileId?: string;
    /**
     * @member {string} [name] Name of the judicial document.
     */
    name?: string;
    /**
     * @member {string} [title] Title of the document.
     */
    title?: string;
    /**
     * @member {number} [version] Version of the document.
     */
    version?: number;
    /**
     * @member {string} [description] Description of the document.
     */
    description?: string;
    /**
     * @member {string} [format] Format of the document file. Note : the format
     * string contains the dot in ".png".
     */
    format?: string;
    /**
     * @member {FormatEnum1} [formatEnum] Enum format of the document. Use this
     * to assign the property with a correct enum. Note : The format enum does
     * not contain the dot in "png". Possible values include: 'pdf', 'jpeg',
     * 'mp3', 'mp4', 'jpg', 'png', 'doc', 'docx', 'txt', 'tiff', 'gif',
     * 'noformat'
     */
    formatEnum?: FormatEnum1;
    /**
     * @member {string} [type] Type of the document.
     */
    type?: string;
    /**
     * @member {TypeEnum1} [typeEnum] Enum type of the document. Use this to
     * assign the property with a correct enum. Possible values include:
     * 'Motion', 'PresentationNotice', 'BailiffNotice', 'Audience', 'Evidence',
     * 'Decisions', 'Schedule', 'Proceedings', 'CourtRecordings', 'Testimonies',
     * 'Pleadings', 'NegotiationAgreementMinute', 'MediationAgreementMinute',
     * 'NegotiationFailMinute', 'MediationFailMinute',
     * 'MediationProceduralOrder', 'ClaimLetter', 'AdjudicationInstructions',
     * 'AdjudicationOrder', 'FinalDecision', 'ConsentOrder', 'MediationOrder',
     * 'WithdrawalNotice', 'Hearing', 'RecordOfProceeding'
     */
    typeEnum?: TypeEnum1;
    /**
     * @member {string} [status] Status of the document.
     */
    status?: string;
    /**
     * @member {StatusEnum1} [statusEnum] Enum status of the document. Use this
     * to assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum1;
    /**
     * @member {string} [permission] Permission of the document.
     */
    permission?: string;
    /**
     * @member {PermissionEnum1} [permissionEnum] Enum permission of the
     * document. Use this to assign the property with a correct enum. Possible
     * values include: 'Public', 'Private'
     */
    permissionEnum?: PermissionEnum1;
    /**
     * @member {string} [documentation] Documentation of the document.
     */
    documentation?: string;
    /**
     * @member {DocumentationEnum1} [documentationEnum] Enum documentation of the
     * document. Use this to assign the property with a correct enum. Possible
     * values include: 'Digital', 'External', 'Oral'
     */
    documentationEnum?: DocumentationEnum1;
    /**
     * @member {string} [reference] Reference of the document.
     */
    reference?: string;
    /**
     * @member {string} [partyId] ID of the party that created the document.
     */
    partyId?: string;
    /**
     * @member {string} [partyName] Name of the party that created the document.
     */
    partyName?: string;
    /**
     * @member {string[]} [parties] The list of ID of the file parties who have
     * access to the document. If the list is empty no restriction is applied.
     */
    parties?: string[];
    /**
     * @member {string} [forumId] Forum Message ID.
     */
    forumId?: string;
    /**
     * @member {string} [parentForumId] Conversation ID (parent of the forum
     * messages conversation).
     */
    parentForumId?: string;
    /**
     * @member {boolean} [hasRestriction] Indicate if the document access is
     * restricted to a subset of the file parties.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly hasRestriction?: boolean;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsAttributeModel[]}
     * [attributes] Judicial document attributes
     */
    attributes?: CyberjusticeLabKernelSharedDocumentModelsAttributeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedDocumentModelsDocumentPartyActionModel[]}
     * [partyActions] List of party actions.
     */
    partyActions?: CyberjusticeLabKernelSharedDocumentModelsDocumentPartyActionModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsDocumentApiResponseData.
 * Represents an API response when getting a list of judicial files.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsDocumentApiResponseData {
    /**
     * @member {number} [count] Count of judicial files.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered judicial files.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsDocumentModel[]}
     * [documents] List of judicial files.
     */
    documents?: CyberjusticeLabKernelSharedDocumentModelsDocumentModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsCreateDocumentPartyActionModel.
 * Class used for special actions parties. Actions and dates are significant
 * only to the application.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsCreateDocumentPartyActionModel {
    /**
     * @member {string} [partyId] Party Id.
     */
    partyId?: string;
    /**
     * @member {string} [representativeId] Representative Id (optional).
     */
    representativeId?: string;
    /**
     * @member {string} [actionCode] Any code that the application needs about
     * this document.
     */
    actionCode?: string;
    /**
     * @member {Date} [actionDate] Any date related to the code that the
     * application needs.
     */
    actionDate?: Date;
    /**
     * @member {string} [actionComplement] Any code complement that the
     * application needs about this action.
     */
    actionComplement?: string;
    /**
     * @member {{ [propertyName: string]: string }} [actionAttributes] List of
     * attributes for this action.
     */
    actionAttributes?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel.
 * Used to add a new document.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel {
    /**
     * @member {string} [fileId] ID of the judicial file the document belongs to.
     */
    fileId?: string;
    /**
     * @member {string} [name] Name of the judicial document.
     */
    name?: string;
    /**
     * @member {string} [title] Title of the document.
     */
    title?: string;
    /**
     * @member {number} [version] Version of the document.
     */
    version?: number;
    /**
     * @member {string} [description] Description of the document.
     */
    description?: string;
    /**
     * @member {any} [content] Binary content of the document.
     */
    content?: any;
    /**
     * @member {string} [format] Format of the document file.
     */
    format?: string;
    /**
     * @member {TypeEnum2} [typeEnum] Enum type of the document. Use this to
     * assign the property with a correct enum. Possible values include:
     * 'Motion', 'PresentationNotice', 'BailiffNotice', 'Audience', 'Evidence',
     * 'Decisions', 'Schedule', 'Proceedings', 'CourtRecordings', 'Testimonies',
     * 'Pleadings', 'NegotiationAgreementMinute', 'MediationAgreementMinute',
     * 'NegotiationFailMinute', 'MediationFailMinute',
     * 'MediationProceduralOrder', 'ClaimLetter', 'AdjudicationInstructions',
     * 'AdjudicationOrder', 'FinalDecision', 'ConsentOrder', 'MediationOrder',
     * 'WithdrawalNotice', 'Hearing', 'RecordOfProceeding'
     */
    typeEnum?: TypeEnum2;
    /**
     * @member {StatusEnum2} [statusEnum] Enum status of the document. Use this
     * to assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum2;
    /**
     * @member {PermissionEnum2} [permissionEnum] Enum permission of the
     * document. Use this to assign the property with a correct enum. Possible
     * values include: 'Public', 'Private'
     */
    permissionEnum?: PermissionEnum2;
    /**
     * @member {DocumentationEnum2} [documentationEnum] Enum documentation of the
     * document. Use this to assign the property with a correct enum. Possible
     * values include: 'Digital', 'External', 'Oral'
     */
    documentationEnum?: DocumentationEnum2;
    /**
     * @member {string} [reference] Reference of the document.
     */
    reference?: string;
    /**
     * @member {string} [partyId] ID of the party that created the document.
     */
    partyId?: string;
    /**
     * @member {string} [forumId] Forum Message ID.
     */
    forumId?: string;
    /**
     * @member {string} [parentForumId] Conversation ID (parent of the forum
     * messages conversation).
     */
    parentForumId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsAttributeModel[]}
     * [attributes] Judicial document attributes.
     */
    attributes?: CyberjusticeLabKernelSharedDocumentModelsAttributeModel[];
    /**
     * @member {string[]} [partiesIds] The list of ID of the file parties who
     * have access to the document. If the list is empty no restriction is
     * applied.
     */
    partiesIds?: string[];
    /**
     * @member {boolean} [hasRestriction] Indicate if the document access is
     * restricted to a subset of the parties.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly hasRestriction?: boolean;
    /**
     * @member
     * {CyberjusticeLabKernelSharedDocumentModelsCreateDocumentPartyActionModel[]}
     * [partyActions] List of party actions for this document.
     */
    partyActions?: CyberjusticeLabKernelSharedDocumentModelsCreateDocumentPartyActionModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsModel.
 * Contains a list of document models.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsModel {
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel[]}
     * [documentModels] List of document models.
     */
    documentModels?: CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsDocumentErrorModel.
 * Model used when a document couldn't be created.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsDocumentErrorModel {
    /**
     * @member {string} [title] Title of the document
     */
    title?: string;
    /**
     * @member {string} [errorMessage] Error message.
     */
    errorMessage?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsDocumentResponseModel.
 * Represent an API response of a particular document when creating multiple
 * documents at the same time
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsDocumentResponseModel {
    /**
     * @member {string} [documentId] Document ID
     */
    documentId?: string;
    /**
     * @member {string} [title] Document Title
     */
    title?: string;
    /**
     * @member {string} [name] Document Name
     */
    name?: string;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsDocumentErrorModel}
     * [error] Document Name
     */
    error?: CyberjusticeLabKernelSharedDocumentModelsDocumentErrorModel;
    /**
     * @member {StatusEnum3} [statusEnum] The document status insertion enum.
     * Can be either Success or Error. Possible values include: 'Success',
     * 'Error'
     */
    statusEnum?: StatusEnum3;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsResponseModel.
 * Contains the Ids of the successfully created documents
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsResponseModel {
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsDocumentResponseModel[]}
     * [documents] List of Ids of successfully created documents.
     */
    documents?: CyberjusticeLabKernelSharedDocumentModelsDocumentResponseModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentContentModel.
 * Class used to represent a judicial document.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentContentModel {
    /**
     * @member {string} [documentId] Internal ID of the document.
     */
    documentId?: string;
    /**
     * @member {string} [fileId] ID of the judicial file the document belongs to.
     */
    fileId?: string;
    /**
     * @member {string} [name] Name of the judicial document.
     */
    name?: string;
    /**
     * @member {number} [version] Version of the document.
     */
    version?: number;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [format] Format of the document file. Note : the format
     * string contains the dot in ".png".
     */
    format?: string;
    /**
     * @member {FormatEnum2} [formatEnum] Enum format of the document. Use this
     * to assign the property with a correct enum. Note : The format enum does
     * not contain the dot in "png". Possible values include: 'pdf', 'jpeg',
     * 'mp3', 'mp4', 'jpg', 'png', 'doc', 'docx', 'txt', 'tiff', 'gif',
     * 'noformat'
     */
    formatEnum?: FormatEnum2;
    /**
     * @member {any} [binaryData] Document content as binary.
     */
    binaryData?: any;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentMetadatasModel.
 * Represents the metadatas for the update of a document.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentMetadatasModel {
    /**
     * @member {string} [documentId] Id of the document.
     */
    documentId?: string;
    /**
     * @member {string} [documentTitle] Document title.
     */
    documentTitle?: string;
    /**
     * @member {string} [description] Document description.
     */
    description?: string;
    /**
     * @member {string} [type] Document type.
     */
    type?: string;
    /**
     * @member {string} [status] Document status.
     * Required only when Clerk is making the update.
     */
    status?: string;
    /**
     * @member {string} [permission] Document permission.
     * Required only when Clerk is making the update.
     */
    permission?: string;
    /**
     * @member {number} [currentVersion] Current version of the document.
     */
    currentVersion?: number;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsAttributeModel[]}
     * [attributes] List of document attributes.
     * the document attributes in DB will be replaced by the list passed in this
     * property, even it the list is empty.
     * To not replace the attributes, the value NULL must be passed to this
     * property.
     */
    attributes?: CyberjusticeLabKernelSharedDocumentModelsAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsEditDocumentAttributeModel.
 * Represents a list of attributes for a document.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsEditDocumentAttributeModel {
    /**
     * @member {string} [documentId] Id of the document.
     */
    documentId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsAttributeModel[]}
     * [attributes] List of document attributes.
     */
    attributes?: CyberjusticeLabKernelSharedDocumentModelsAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentPartyActionsModel.
 * Class used for special actions parties. Actions and dates are significant
 * only to the application.
 *
 */
export interface CyberjusticeLabKernelSharedDocumentModelsUpdateDocumentPartyActionsModel {
    /**
     * @member {string} [documentId] The current document ID for the actions.
     */
    documentId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedDocumentModelsDocumentPartyActionModel[]}
     * [updatedPartyActions] List of party actions to update. The IDs must be
     * linked to the documentId.
     */
    updatedPartyActions?: CyberjusticeLabKernelSharedDocumentModelsDocumentPartyActionModel[];
    /**
     * @member {number[]} [deletedPartyActions] List of party actions to delete.
     * The IDs must be linked to the documentId.
     */
    deletedPartyActions?: number[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedDocumentModelsCreateDocumentPartyActionModel[]}
     * [createdPartyActions] List of party actions to create.
     */
    createdPartyActions?: CyberjusticeLabKernelSharedDocumentModelsCreateDocumentPartyActionModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsExchangeForumPartyLinkData.
 * Represents forum party link data.
 *
 */
export interface CyberjusticeLabKernelServiceContractsExchangeForumPartyLinkData {
    /**
     * @member {string} [partyId] Party ID.
     */
    partyId?: string;
    /**
     * @member {string} [name] Party name.
     */
    name?: string;
    /**
     * @member {string} [role] Party role.
     */
    role?: string;
    /**
     * @member {RoleEnum} [roleEnum] Enum party role. Use this to assign the
     * property with a correct enum. Possible values include: 'Empty', 'Sender',
     * 'Recipient'
     */
    roleEnum?: RoleEnum;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsExchangeForumData.
 * Represents forum data.
 *
 */
export interface CyberjusticeLabKernelServiceContractsExchangeForumData {
    /**
     * @member {string} [forumId] Forum ID.
     */
    forumId?: string;
    /**
     * @member {string} [parentForumId] ID of the parent of the forum message.
     */
    parentForumId?: string;
    /**
     * @member {string} [subject] Forum subject.
     */
    subject?: string;
    /**
     * @member {string} [content] Forum content.
     */
    content?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsExchangeForumPartyLinkData}
     * [sender] Sender information.
     */
    sender?: CyberjusticeLabKernelServiceContractsExchangeForumPartyLinkData;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsExchangeForumPartyLinkData[]}
     * [receivers] Receivers information.
     */
    receivers?: CyberjusticeLabKernelServiceContractsExchangeForumPartyLinkData[];
    /**
     * @member {string} [fileId] File ID.
     */
    fileId?: string;
    /**
     * @member {string} [fileName] File name.
     */
    fileName?: string;
    /**
     * @member {boolean} [hasDocument] Flag to indicate if the forum message is
     * linked to some documents.
     */
    hasDocument?: boolean;
    /**
     * @member {string} [status] The Status of the message. An «inactive» message
     * is a message deleted and accessible only to the clerks.
     */
    status?: string;
    /**
     * @member {StatusEnum4} [statusEnum] Enum status of the message. Use this to
     * assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum4;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsForumMessageApiRequestData.
 * Represents an api filter model when getting a list of forum message.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsForumMessageApiRequestData {
    /**
     * @member {string[]} [forumIds] List of forum identifiers.
     */
    forumIds?: string[];
    /**
     * @member {string[]} [parentForumIds] List of parent forum identifiers.
     */
    parentForumIds?: string[];
    /**
     * @member {boolean} [includeParentForumIds] Include the parent forum Ids.
     */
    includeParentForumIds?: boolean;
    /**
     * @member {string[]} [fileIds] List of files identifiers.
     */
    fileIds?: string[];
    /**
     * @member {{ [propertyName: string]: string }} [attributes] List of
     * attributes for query.
     */
    attributes?: {
        [propertyName: string]: string;
    };
    /**
     * @member {boolean} [noParentsOnly] If true, only forum messages with no
     * parents are returned.
     */
    noParentsOnly?: boolean;
    /**
     * @member {string} [searchText] Search text.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] List of search by columns.
     */
    searchBy?: string[];
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {OrderBy3} [orderBy] Order by columns. Possible values include:
     * 'Subject', 'Sender', 'CreatedDate'
     */
    orderBy?: OrderBy3;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
    /**
     * @member {Date} [lastRefresh] Date of the last get forum messages.
     */
    lastRefresh?: Date;
    /**
     * @member {boolean} [isRefresh] Flag that indicate if it's only the refresh
     * of the data.
     */
    isRefresh?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel.
 * Forum message party link model.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel {
    /**
     * @member {string} [partyId] Party ID.
     */
    partyId?: string;
    /**
     * @member {string} [name] Party name.
     */
    name?: string;
    /**
     * @member {string} [role] Party role.
     */
    role?: string;
    /**
     * @member {RoleEnum1} [roleEnum] Enum party role. Use this to assign the
     * property with a correct enum. Possible values include: 'Empty', 'Sender',
     * 'Recipient'
     */
    roleEnum?: RoleEnum1;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsAttributeModel.
 * Represents a document attribute.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsForumMessageModel.
 * Forum message model.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsForumMessageModel {
    /**
     * @member {string} [forumId] Forum ID.
     */
    forumId?: string;
    /**
     * @member {string} [parentForumId] ID of the parent of the forum message.
     */
    parentForumId?: string;
    /**
     * @member {string} [subject] Forum subject.
     */
    subject?: string;
    /**
     * @member {string} [content] Forum content.
     */
    content?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel}
     * [sender] Sender information.
     */
    sender?: CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel;
    /**
     * @member
     * {CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel[]}
     * [receivers] Receivers information.
     */
    receivers?: CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel[];
    /**
     * @member {boolean} [hasDocument] Flag to indicate if the forum message is
     * linked to some documents.
     */
    hasDocument?: boolean;
    /**
     * @member {string} [status] The Status of the message. An «inactive» message
     * is a message deleted and accessible only to the clerks.
     */
    status?: string;
    /**
     * @member {StatusEnum5} [statusEnum] Enum status of the message. Use this to
     * assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum5;
    /**
     * @member {CyberjusticeLabKernelSharedExchangeModelsAttributeModel[]}
     * [attributes] Forum attributes
     */
    attributes?: CyberjusticeLabKernelSharedExchangeModelsAttributeModel[];
    /**
     * @member {Date} [lastMessageForum] Last message in the forum topic.
     */
    lastMessageForum?: Date;
    /**
     * @member {number} [childCount] Number of child message in the topic.
     */
    childCount?: number;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsForumMessageApiResponseData.
 * Represents an API response when getting a list of forum messages.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsForumMessageApiResponseData {
    /**
     * @member {number} [count] Count of objects.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered objects.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedExchangeModelsForumMessageModel[]}
     * [messages] List of messages.
     */
    messages?: CyberjusticeLabKernelSharedExchangeModelsForumMessageModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsAddForumMessageModel.
 * Forum message model.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsAddForumMessageModel {
    /**
     * @member {string} [fileId] File Id.
     */
    fileId?: string;
    /**
     * @member {string} [parentForumId] ID of the parent of the forum message.
     */
    parentForumId?: string;
    /**
     * @member {string} [subject] Forum subject.
     */
    subject?: string;
    /**
     * @member {string} [content] Forum content.
     */
    content?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel}
     * [sender] Sender information.
     */
    sender?: CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel;
    /**
     * @member
     * {CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel[]}
     * [receivers] Receivers information.
     */
    receivers?: CyberjusticeLabKernelSharedExchangeModelsForumMessagePartyLinkModel[];
    /**
     * @member {string} [status] The Status of the message. An «inactive» message
     * is a message deleted and accessible only to the clerks.
     */
    status?: string;
    /**
     * @member {StatusEnum6} [statusEnum] Enum status of the message. Use this to
     * assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum6;
    /**
     * @member {CyberjusticeLabKernelSharedExchangeModelsAttributeModel[]}
     * [attributes] Forum attributes
     */
    attributes?: CyberjusticeLabKernelSharedExchangeModelsAttributeModel[];
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsAddPartyToForumMessagesModel.
 * Represent a party, a file and the attributes filter of the list of forum
 * messages where the party will be added.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsAddPartyToForumMessagesModel {
    /**
     * @member {string} [party] Party Id.
     */
    party?: string;
    /**
     * @member {string} [partyName] Party name.
     */
    partyName?: string;
    /**
     * @member {Role} [role] Rol of the party in the messages. Possible values
     * include: 'Empty', 'Sender', 'Recipient'
     */
    role?: Role;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedExchangeModelsAttributeModel[]}
     * [attributes] The attributes filter.
     */
    attributes?: CyberjusticeLabKernelSharedExchangeModelsAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedExchangeModelsAddForumMessageAttributesModel.
 * Add Forum message attribute.
 *
 */
export interface CyberjusticeLabKernelSharedExchangeModelsAddForumMessageAttributesModel {
    /**
     * @member {string} [fileId] File Id.
     */
    fileId?: string;
    /**
     * @member {string} [forumId] ID of the parent of the forum message.
     */
    forumId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedExchangeModelsAttributeModel[]}
     * [attributes] Forum attributes.
     */
    attributes?: CyberjusticeLabKernelSharedExchangeModelsAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormResourceOptionData.
 * Class used to represent the information by culture.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormResourceOptionData {
    /**
     * @member {string} [optionId] Id of the form.
     */
    optionId?: string;
    /**
     * @member {string} [culture] TwoLetterISOLanguageName culture of the form.
     */
    culture?: string;
    /**
     * @member {string} [optionCaption] Name of the form.
     */
    optionCaption?: string;
    /**
     * @member {string} [optionComplementCaption] Name of the complement option.
     */
    optionComplementCaption?: string;
    /**
     * @member {string} [optionHelp] Information about the form.
     */
    optionHelp?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormSectionOptionData.
 * Class that represents the DescriptionSectionOption for one section.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormSectionOptionData {
    /**
     * @member {string} [culture] TwoLetterISOLanguageName culture of the option.
     */
    culture?: string;
    /**
     * @member {number} [optionVersion] Version of the option.
     */
    optionVersion?: number;
    /**
     * @member {string} [complementValue] Saves the answer of the complement
     * caption.
     */
    complementValue?: string;
    /**
     * @member {string} [partyType] Type of the party.
     */
    partyType?: string;
    /**
     * @member {string} [optionId] Id of the option.
     */
    optionId?: string;
    /**
     * @member {string} [sectionId] Id of the section.
     */
    sectionId?: string;
    /**
     * @member {string} [optionCaption] Name of the option.
     */
    optionCaption?: string;
    /**
     * @member {string} [optionComplementCaption] Name of the complement.
     */
    optionComplementCaption?: string;
    /**
     * @member {number} [optionComplementType] Type of the complement.
     */
    optionComplementType?: number;
    /**
     * @member {number} [optionComplementLength] Length of the Complement.
     */
    optionComplementLength?: number;
    /**
     * @member {string} [optionHelp] Information about the Option.
     */
    optionHelp?: string;
    /**
     * @member {number} [optionRank] Rank of the Option.
     */
    optionRank?: number;
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormResourceOptionData[]}
     * [optionResources] Option caption information by culture.
     */
    optionResources?: CyberjusticeLabKernelServiceContractsFormResourceOptionData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormResourceData.
 * Class used to represent the information by culture.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormResourceData {
    /**
     * @member {string} [id] Id of the form or the Section.
     */
    id?: string;
    /**
     * @member {string} [culture] TwoLetterISOLanguageName culture of the form or
     * section.
     */
    culture?: string;
    /**
     * @member {string} [caption] Name of the form or Section.
     */
    caption?: string;
    /**
     * @member {string} [help] Information about the form or section.
     */
    help?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormSectionData.
 * Class that represents the description section.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormSectionData {
    /**
     * @member {string} [culture] TwoLetterISOLanguageName culture of the
     * section.
     */
    culture?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormFormSectionOptionData[]}
     * [sectionOptions] List all options in a section.
     */
    sectionOptions?: CyberjusticeLabKernelServiceContractsFormFormSectionOptionData[];
    /**
     * @member {string} [sectionId] Id of the section.
     */
    sectionId?: string;
    /**
     * @member {string} [formId] Id of the form.
     */
    formId?: string;
    /**
     * @member {string} [sectionCaption] Name of the section.
     */
    sectionCaption?: string;
    /**
     * @member {string} [sectionHelp] Information about the section.
     */
    sectionHelp?: string;
    /**
     * @member {number} [sectionRank] Rank of the Section in the form.
     */
    sectionRank?: number;
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormResourceData[]}
     * [sectionResources] Section caption information by culture.
     */
    sectionResources?: CyberjusticeLabKernelServiceContractsFormResourceData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormQuestionData.
 * Class used to represent a form with Question.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormQuestionData {
    /**
     * @member {string} [culture] TwoLetterISOLanguageName culture of the form.
     */
    culture?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormFormSectionData[]}
     * [formSections] A list of sections that will be display depending of the
     * form chosen.
     */
    formSections?: CyberjusticeLabKernelServiceContractsFormFormSectionData[];
    /**
     * @member {string} [formId] Id of the form.
     */
    formId?: string;
    /**
     * @member {string} [judicialEntityId] Foreign Key, Primary Key of the
     * JudicialEntity related.
     */
    judicialEntityId?: string;
    /**
     * @member {string} [formCaption] Name of the form.
     */
    formCaption?: string;
    /**
     * @member {string} [formHelp] Information about the form.
     */
    formHelp?: string;
    /**
     * @member {number} [formRank] Rank of the form.
     */
    formRank?: number;
    /**
     * @member {number} [formVersion] Version of the form.
     */
    formVersion?: number;
    /**
     * @member {string} [formCode] Form code.
     */
    formCode?: string;
    /**
     * @member {string} [formStatus] Status of the form.
     */
    formStatus?: string;
    /**
     * @member {FormStatusEnum} [formStatusEnum] Enum status of the form. Use
     * this to assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    formStatusEnum?: FormStatusEnum;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormData.
 * Class used to represent a form with problem description and solution
 * proposal.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormData {
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormResourceData[]}
     * [formResources] Form caption information by culture.
     */
    formResources?: CyberjusticeLabKernelServiceContractsFormResourceData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormFormSectionData[]}
     * [problemDescriptionSections] List of problem description sections of the
     * form.
     */
    problemDescriptionSections?: CyberjusticeLabKernelServiceContractsFormFormSectionData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormFormSectionData[]}
     * [solutionProposalSections] List of solution proposal sections of the form.
     */
    solutionProposalSections?: CyberjusticeLabKernelServiceContractsFormFormSectionData[];
    /**
     * @member {string} [formId] Id of the form.
     */
    formId?: string;
    /**
     * @member {string} [judicialEntityId] Foreign Key, Primary Key of the
     * JudicialEntity related.
     */
    judicialEntityId?: string;
    /**
     * @member {string} [formCaption] Name of the form.
     */
    formCaption?: string;
    /**
     * @member {string} [formHelp] Information about the form.
     */
    formHelp?: string;
    /**
     * @member {number} [formRank] Rank of the form.
     */
    formRank?: number;
    /**
     * @member {number} [formVersion] Version of the form.
     */
    formVersion?: number;
    /**
     * @member {string} [formCode] Form code.
     */
    formCode?: string;
    /**
     * @member {string} [formStatus] Status of the form.
     */
    formStatus?: string;
    /**
     * @member {FormStatusEnum1} [formStatusEnum] Enum status of the form. Use
     * this to assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    formStatusEnum?: FormStatusEnum1;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionOptionData.
 * Represents the options chosen in the form description section option.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionOptionData {
    /**
     * @member {string} [formDescriptionOptionId] Id of the form description
     * party option entity.
     */
    formDescriptionOptionId?: string;
    /**
     * @member {string} [formDescriptionPartyId] Id of the form description party
     * entity.
     */
    formDescriptionPartyId?: string;
    /**
     * @member {string} [descriptionOptionId] Id of the other section in the form
     * problem.
     */
    descriptionOptionId?: string;
    /**
     * @member {string} [caseDescriptionOptionComplement] Text in the other
     * section in the form problem.
     */
    caseDescriptionOptionComplement?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData.
 * Represents the form description entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData {
    /**
     * @member {string} [formDescriptionPartyId] Id of the Form description.
     */
    formDescriptionPartyId?: string;
    /**
     * @member {string} [fileId] Id of the Judicial file.
     */
    fileId?: string;
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {string} [formId] Id of the form.
     */
    formId?: string;
    /**
     * @member {string} [descriptionOther] Other description.
     */
    descriptionOther?: string;
    /**
     * @member {string} [descriptionProblem] Problem description.
     */
    descriptionProblem?: string;
    /**
     * @member {Date} [descriptionDate] Date of the description.
     */
    descriptionDate?: Date;
    /**
     * @member {number} [descriptionSectionVersion] Description section version.
     */
    descriptionSectionVersion?: number;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionOptionData[]}
     * [optionList] The list of the chosen options.
     */
    optionList?: CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionOptionData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormApprovalPartyData.
 * Represents the approval data for one party.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormApprovalPartyData {
    /**
     * @member {Date} [replyDate] Date of the reply.
     */
    replyDate?: Date;
    /**
     * @member {number} [replyState] State of the reply.
     */
    replyState?: number;
    /**
     * @member {string} [approvalJournalId] Id of the journal for the first
     * approval.
     */
    approvalJournalId?: string;
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {string} [partyType] Type of the party.
     */
    partyType?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormProposalPartyOptionData.
 * Represents the options chosen in the form proposal section option.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormProposalPartyOptionData {
    /**
     * @member {string} [formProposalOptionId] Id of the form proposal party
     * option entity.
     */
    formProposalOptionId?: string;
    /**
     * @member {string} [formProposalPartyId] Id of the form proposal party
     * entity.
     */
    formProposalPartyId?: string;
    /**
     * @member {string} [proposalOptionId] Id of the other section in the form
     * problem.
     */
    proposalOptionId?: string;
    /**
     * @member {string} [caseProposalOptionComplement] Text in the other section
     * in the form problem.
     */
    caseProposalOptionComplement?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormFormPartyProposalData.
 * Represents proposal information.
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormFormPartyProposalData {
    /**
     * @member {string} [formProposalPartyId] Id of the form proposal.
     */
    formProposalPartyId?: string;
    /**
     * @member {string} [fileId] Id of the judicial file.
     */
    fileId?: string;
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {string} [formId] Id of the form.
     */
    formId?: string;
    /**
     * @member {string} [proposalOther] Other proposal.
     */
    proposalOther?: string;
    /**
     * @member {number} [proposalState] State of the proposal.
     */
    proposalState?: number;
    /**
     * @member {Date} [proposalDate] Date of the proposal.
     */
    proposalDate?: Date;
    /**
     * @member {string} [proposalWhy] Proposal why.
     */
    proposalWhy?: string;
    /**
     * @member {number} [proposalSectionVersion] Proposal section version.
     */
    proposalSectionVersion?: number;
    /**
     * @member {CyberjusticeLabKernelServiceContractsFormApprovalPartyData[]}
     * [approvalPartyList] approval data for all parties.
     */
    approvalPartyList?: CyberjusticeLabKernelServiceContractsFormApprovalPartyData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsFormFormProposalPartyOptionData[]}
     * [optionList] The list of the chosen options.
     */
    optionList?: CyberjusticeLabKernelServiceContractsFormFormProposalPartyOptionData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsFormPartyQuestionProposalCountData.
 * Structure used to keep information on the number of solution proposal made
 * by the party in a file
 *
 */
export interface CyberjusticeLabKernelServiceContractsFormPartyQuestionProposalCountData {
    /**
     * @member {string} [partyId] The ID of the party
     */
    partyId?: string;
    /**
     * @member {number} [proposalNb] The number of proposal for the party
     */
    proposalNb?: number;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedFormModelsQuestionFormApiRequestData.
 * &gt;Represents an api filter model when getting a list of question forms
 *
 */
export interface CyberjusticeLabKernelSharedFormModelsQuestionFormApiRequestData {
    /**
     * @member {string} [judicialEntityId] Jusdicial entity Id
     */
    judicialEntityId?: string;
    /**
     * @member {string[]} [formIds] list of form Ids
     */
    formIds?: string[];
    /**
     * @member {string[]} [formCodes] List of form codes
     */
    formCodes?: string[];
    /**
     * @member {string[]} [formCaptions] List of form captions
     */
    formCaptions?: string[];
    /**
     * @member {Date} [modifiedDate] Modified date
     */
    modifiedDate?: Date;
    /**
     * @member {Date} [createdDate] Created date.
     */
    createdDate?: Date;
    /**
     * @member {string} [searchText] Search text.
     */
    searchText?: string;
    /**
     * @member {string} [culture] Culture.
     */
    culture?: string;
    /**
     * @member {string[]} [searchBy] List of search by columns.
     */
    searchBy?: string[];
    /**
     * @member {OrderBy4} [orderBy] Order by columns. Possible values include:
     * 'Rank', 'Code', 'Caption', 'CreatedDate', 'ModifiedDate'
     */
    orderBy?: OrderBy4;
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {boolean} [isOrderByDescending] Order by ascending or descending.
     */
    isOrderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedFormModelsQuestionFormModel.
 * Represent a question form
 *
 */
export interface CyberjusticeLabKernelSharedFormModelsQuestionFormModel {
    /**
     * @member {string} [formId] the form Id
     */
    formId?: string;
    /**
     * @member {string} [formCode] the form code
     */
    formCode?: string;
    /**
     * @member {string} [judicialEntityId] the judicial entity Id linked to the
     * form
     */
    judicialEntityId?: string;
    /**
     * @member {string} [formCaption] the form caption
     */
    formCaption?: string;
    /**
     * @member {string} [formHelp] the form help
     */
    formHelp?: string;
    /**
     * @member {string} [culture] the form culture
     */
    culture?: string;
    /**
     * @member {number} [formRank] the form rank
     */
    formRank?: number;
    /**
     * @member {number} [formVersion] the form version
     */
    formVersion?: number;
    /**
     * @member {string} [formStatus] the form status
     */
    formStatus?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedFormModelsQuestionFormApiResponseData.
 * Represents an api response model when requesting a list of question forms
 *
 */
export interface CyberjusticeLabKernelSharedFormModelsQuestionFormApiResponseData {
    /**
     * @member {number} [count] Count of Question Forms.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered Question Forms.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedFormModelsQuestionFormModel[]}
     * [questionForms] List of Question Forms.
     */
    questionForms?: CyberjusticeLabKernelSharedFormModelsQuestionFormModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsHearingMenuData.
 * Represents a menu.
 *
 */
export interface CyberjusticeLabKernelServiceContractsHearingMenuData {
    /**
     * @member {string} [menuId] Internal ID of the menu.
     */
    menuId?: string;
    /**
     * @member {string} [hearingId] ID of the associated hearing.
     */
    hearingId?: string;
    /**
     * @member {string} [fileId] ID of the associated file.
     */
    fileId?: string;
    /**
     * @member {string} [name] Name of the menu.
     */
    name?: string;
    /**
     * @member {number} [position] Position of the menu.
     */
    position?: number;
    /**
     * @member {string} [parentId] ID of the parent menu.
     */
    parentId?: string;
    /**
     * @member {string} [rootId] ID of the root menu.
     */
    rootId?: string;
    /**
     * @member {string[]} [listDocumentId] List of associated document ids.
     */
    listDocumentId?: string[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsHearingMenuData[]}
     * [listSubMenus] List of associated menus.
     */
    listSubMenus?: CyberjusticeLabKernelServiceContractsHearingMenuData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJournalJournalData.
 * Represents the journal.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJournalJournalData {
    /**
     * @member {string} [journalId] Internal ID of the journal entry.
     */
    journalId?: string;
    /**
     * @member {string} [fileId] The identifier of the file.
     */
    fileId?: string;
    /**
     * @member {number} [isSystemEntry] The number that will determinate if the
     * entry is from the forum message or from the system.
     */
    isSystemEntry?: number;
    /**
     * @member {Date} [journalDate] The date of the entry into the journal.
     */
    journalDate?: Date;
    /**
     * @member {string} [journalTitle] The title of the journal entry.
     */
    journalTitle?: string;
    /**
     * @member {string} [journalFrom] The sender of the message (mediation
     * forum).
     */
    journalFrom?: string;
    /**
     * @member {string} [journalTo] The receiver of the message (mediation
     * forum).
     */
    journalTo?: string;
    /**
     * @member {string} [journalCc] The carbon copy of the message (mediation
     * forum).
     */
    journalCc?: string;
    /**
     * @member {string} [journalDescription] The description of the journal
     * entry.
     */
    journalDescription?: string;
    /**
     * @member {string} [journalKey] The code of the journal entry.
     */
    journalKey?: string;
    /**
     * @member {string} [journalParameters] The string containing the parameters
     * of the journal entry. The parameters that are use to replace the
     * placeholder in a journal message.
     */
    journalParameters?: string;
    /**
     * @member {string[]} [journalParametersArray] The string containing the
     * parameters of the journal entry. The parameters that are use to replace
     * the placeholder in a journal message.
     */
    journalParametersArray?: string[];
    /**
     * @member {string} [culture] The current culture.
     */
    culture?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJournalModelsJournalModel.
 * Represents a Model for the file history.
 *
 */
export interface CyberjusticeLabKernelSharedJournalModelsJournalModel {
    /**
     * @member {string} [fileId] The file identifier.
     */
    fileId?: string;
    /**
     * @member {string} [journalCode] The code of the journal.
     */
    journalCode?: string;
    /**
     * @member {Date} [journalDate] The date when the entry occurred.
     */
    journalDate?: Date;
    /**
     * @member {string} [journalSubject] The subject of the journal entry.
     */
    journalSubject?: string;
    /**
     * @member {string} [journalFrom] The user who performed the action.
     */
    journalFrom?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData.
 * Represents an API response when getting a list of file history.
 *
 */
export interface CyberjusticeLabKernelSharedJournalModelsJournalApiResquestData {
    /**
     * @member {string} [fileId] The file identifier.
     */
    fileId?: string;
    /**
     * @member {string} [currentLanguage] The current language.
     */
    currentLanguage?: string;
    /**
     * @member {string} [searchText] The search Text.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] The searching criteria (columns).
     */
    searchBy?: string[];
    /**
     * @member {number} [take] The number of elements.
     */
    take?: number;
    /**
     * @member {number} [skip] The number of elements to skip.
     */
    skip?: number;
    /**
     * @member {OrderBy5} [orderBy] The ordering criteria (column). Possible
     * values include: 'JournalDate', 'JournalSubject', 'JournalFrom'
     */
    orderBy?: OrderBy5;
    /**
     * @member {boolean} [orderByDescending] The ordering direction.
     */
    orderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData.
 * Represents an API response when getting a list of journals.
 *
 */
export interface CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData {
    /**
     * @member {number} [count] Count of journals.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered journals.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedJournalModelsJournalModel[]}
     * [journals] List of journals.
     */
    journals?: CyberjusticeLabKernelSharedJournalModelsJournalModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData.
 * Represents an API request when getting a list of last events for a list of
 * files.
 *
 */
export interface CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResquestData {
    /**
     * @member {string} [language] The two letters code for the requested
     * culture.
     */
    language?: string;
    /**
     * @member {string[]} [fileIds] The files requested.
     */
    fileIds?: string[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJournalModelsFileLatestJournalModel.
 * File latest journal entries.
 * This model contains the localized message.
 *
 */
export interface CyberjusticeLabKernelSharedJournalModelsFileLatestJournalModel {
    /**
     * @member {string} [fileId] File Guid.
     */
    fileId?: string;
    /**
     * @member {Date} [journalDate] Journal date.
     */
    journalDate?: Date;
    /**
     * @member {string} [journalMessage] The journal localized message.
     */
    journalMessage?: string;
    /**
     * @member {string} [journalId] Journal Guid.
     */
    journalId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData.
 * Represents an API response when getting a list of file history.
 *
 */
export interface CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData {
    /**
     * @member {CyberjusticeLabKernelSharedJournalModelsFileLatestJournalModel[]}
     * [journals] List of journal entries.
     */
    journals?: CyberjusticeLabKernelSharedJournalModelsFileLatestJournalModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJournalModelsCreateJournalModel.
 * Add new entry journal data.
 *
 */
export interface CyberjusticeLabKernelSharedJournalModelsCreateJournalModel {
    /**
     * @member {string} [fileId] The identifier of the file.
     */
    fileId?: string;
    /**
     * @member {string} [journalKey] The code of the journal entry.
     */
    journalKey?: string;
    /**
     * @member {string} [journalParameters] The string containing the
     * arrayparameters of the journal entry. The parameters that are use to
     * replace the placeholder in a journal message.
     */
    journalParameters?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialEntityNeutralPredicateData.
 * Class used to represent neutral predicates.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialEntityNeutralPredicateData {
    /**
     * @member {string} [neutralPredicateId] Neutral predicate id of the judicial
     * entity.
     */
    neutralPredicateId?: string;
    /**
     * @member {string} [neutralPredicateName] Neutral predicate name of the
     * judicial entity.
     */
    neutralPredicateName?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialEntityProsecutingAgentPredicateData.
 * Class used to represent neutral predicates.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialEntityProsecutingAgentPredicateData {
    /**
     * @member {string} [prosecutingAgentPredicateId] Prosecuting agent predicate
     * id of the judicial entity.
     */
    prosecutingAgentPredicateId?: string;
    /**
     * @member {string} [prosecutingAgentPredicateName] Prosecuting agent
     * predicate name of the judicial entity.
     */
    prosecutingAgentPredicateName?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialEntityJudicialEntityData.
 * Class used to represent a judicial entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialEntityJudicialEntityData {
    /**
     * @member {string} [id] Internal ID of the judicial entity.
     */
    id?: string;
    /**
     * @member {string} [name] Name of the judicial entity.
     */
    name?: string;
    /**
     * @member {string} [uRN] The URN of the judicial entity.
     */
    uRN?: string;
    /**
     * @member {string} [clerkPredicateId] Clerk predicate id of the judicial
     * entity.
     */
    clerkPredicateId?: string;
    /**
     * @member {string} [clerkPredicateName] Clerk predicate name of the judicial
     * entity.
     */
    clerkPredicateName?: string;
    /**
     * @member {string} [judgePredicateId] Judge predicate id of the judicial
     * entity.
     */
    judgePredicateId?: string;
    /**
     * @member {string} [judgePredicateName] Judge predicate name of the judicial
     * entity.
     */
    judgePredicateName?: string;
    /**
     * @member {string} [tenantPredicateId] Tenant predicate id of the judicial
     * entity.
     */
    tenantPredicateId?: string;
    /**
     * @member {string} [tenantPredicateName] Tenant predicate name of the
     * judicial entity.
     */
    tenantPredicateName?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialEntityNeutralPredicateData[]}
     * [neutralPredicates] Neutral predicate id and name list of the judicial
     * entity.
     */
    neutralPredicates?: CyberjusticeLabKernelServiceContractsJudicialEntityNeutralPredicateData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialEntityProsecutingAgentPredicateData[]}
     * [prosecutingAgentPredicates] Prosecuting agent predicate id and name list
     * of the judicial entity.
     */
    prosecutingAgentPredicates?: CyberjusticeLabKernelServiceContractsJudicialEntityProsecutingAgentPredicateData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiRequestData.
 * Represents an api filter model when getting a list of matters.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiRequestData {
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsMatterModel.
 * Represents a matter.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsMatterModel {
    /**
     * @member {string} [matterId] Identification of the matter.
     */
    matterId?: string;
    /**
     * @member {string} [code] Code.
     */
    code?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiResponseData.
 * Represents an API response when getting a list of matters.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiResponseData {
    /**
     * @member {number} [count] Count of matters.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered matters.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialEntityModelsMatterModel[]}
     * [matters] List of matters.
     */
    matters?: CyberjusticeLabKernelSharedJudicialEntityModelsMatterModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiRequestData.
 * Represents an api filter model when getting a list of judicial entities.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiRequestData {
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
    /**
     * @member {string} [filterByMatter] Filter by Matter Id
     */
    filterByMatter?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsEntityNeutralPredicateLinkModel.
 * Entity neutral predicate link Model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsEntityNeutralPredicateLinkModel {
    /**
     * @member {string} [neutralPredicateId] Neutral predicate fake foreign key.
     * Guid composite primary key.
     */
    neutralPredicateId?: string;
    /**
     * @member {string} [neutralPredicateName] Neutral predicate name.
     */
    neutralPredicateName?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsEntityProsecutingAgentPredicateLinkModel.
 * Entity prosecuting agent predicate link Model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsEntityProsecutingAgentPredicateLinkModel {
    /**
     * @member {string} [predicateId] Prosecuting agent predicate fake foreign
     * key. String composite primary key.
     */
    predicateId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsMatterJudicialEntityLinkModel.
 * Judicial Entity and Matter Link Model
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsMatterJudicialEntityLinkModel {
    /**
     * @member {CyberjusticeLabKernelSharedJudicialEntityModelsMatterModel}
     * [matter] Matter
     */
    matter?: CyberjusticeLabKernelSharedJudicialEntityModelsMatterModel;
    /**
     * @member {string} [businessRuleId] BusinessRule foreign key.
     */
    businessRuleId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityModel.
 * Represents a judicial entity.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityModel {
    /**
     * @member {string} [judicialEntityId] Guid primary key.
     */
    judicialEntityId?: string;
    /**
     * @member {string} [uRN] Unified resource name.
     */
    uRN?: string;
    /**
     * @member {string} [name] Name.
     */
    name?: string;
    /**
     * @member {string} [clerkPredicateId] Optional clerk predicate fake foreign
     * key.
     */
    clerkPredicateId?: string;
    /**
     * @member {string} [clerkPredicateName] Clerk predicate name.
     */
    clerkPredicateName?: string;
    /**
     * @member {string} [judgePredicateId] Optional judge predicate fake foreign
     * key.
     */
    judgePredicateId?: string;
    /**
     * @member {string} [judgePredicateName] Judge predicate name.
     */
    judgePredicateName?: string;
    /**
     * @member {string} [tenantPredicateId] Optional tenant predicate fake
     * foreign key.
     */
    tenantPredicateId?: string;
    /**
     * @member {string} [tenantPredicateName] Tenant predicate name.
     */
    tenantPredicateName?: string;
    /**
     * @member {Date} [createdDate] Created date.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] Created by.
     */
    createdBy?: string;
    /**
     * @member {Date} [modifiedDate] Modified date.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] Modified by.
     */
    modifiedBy?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialEntityModelsEntityNeutralPredicateLinkModel[]}
     * [entityNeutralPredicateLinks] One to many neutral predicate links.
     */
    entityNeutralPredicateLinks?: CyberjusticeLabKernelSharedJudicialEntityModelsEntityNeutralPredicateLinkModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialEntityModelsEntityProsecutingAgentPredicateLinkModel[]}
     * [entityProsecutingAgentPredicateLinks] List agent predicate links.
     */
    entityProsecutingAgentPredicateLinks?: CyberjusticeLabKernelSharedJudicialEntityModelsEntityProsecutingAgentPredicateLinkModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialEntityModelsMatterJudicialEntityLinkModel[]}
     * [judicialEntityMatterLinks] Judicial Entity and Matter Links
     */
    judicialEntityMatterLinks?: CyberjusticeLabKernelSharedJudicialEntityModelsMatterJudicialEntityLinkModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiResponseData.
 * Represents an API response when getting a list of judicial entities.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiResponseData {
    /**
     * @member {number} [count] Count of matters.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered matters.
     */
    countFiltered?: number;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityModel[]}
     * [judicialEntities] The list of judicial entities
     */
    judicialEntities?: CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel.
 * Model used to Detach Representative From Party.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel {
    /**
     * @member {string} [partyId] Party Id.
     */
    partyId?: string;
    /**
     * @member {string} [representativeId] Representative Id.
     */
    representativeId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileContactPhoneNumberData.
 * Represents a contact phone number.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileContactPhoneNumberData {
    /**
     * @member {string} [id] Id of the type.
     */
    id?: string;
    /**
     * @member {string} [phoneNumber] Phone number of the contact.
     */
    phoneNumber?: string;
    /**
     * @member {string} [phoneTypeID] Type of the phone number.
     */
    phoneTypeID?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileContactAttributeData.
 * Represents a contact attribute information for a party or a representative.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileContactAttributeData {
    /**
     * @member {string} [contactAttributeKey] Key.
     */
    contactAttributeKey?: string;
    /**
     * @member {string} [contactAttributeValue] Value.
     */
    contactAttributeValue?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileContactData.
 * Represents a contact information for a party or a representative.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileContactData {
    /**
     * @member {string} [id] Id of the contact.
     */
    id?: string;
    /**
     * @member {boolean} [isCompany] True if is a company or false.
     */
    isCompany?: boolean;
    /**
     * @member {string} [companyName] Name of the company.
     */
    companyName?: string;
    /**
     * @member {string} [firstName] First name of the contact.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the contact.
     */
    lastName?: string;
    /**
     * @member {string} [adresse] Address of the contact.
     */
    adresse?: string;
    /**
     * @member {string} [adresse2] Second address of the contact.
     */
    adresse2?: string;
    /**
     * @member {string} [city] City of the contact.
     */
    city?: string;
    /**
     * @member {string} [state] State of the contact.
     */
    state?: string;
    /**
     * @member {string} [country] Country of the contact.
     */
    country?: string;
    /**
     * @member {string} [zipCode] Zip code of the contact.
     */
    zipCode?: string;
    /**
     * @member {string} [email] Email of the contact.
     */
    email?: string;
    /**
     * @member {string} [website] Website of the contact.
     */
    website?: string;
    /**
     * @member {string} [latitude] The Gps latitude in degree for the City and
     * Postal Code of the model.
     */
    latitude?: string;
    /**
     * @member {string} [longitude] The Gps latitude in degree for the City and
     * Postal Code of the model.
     */
    longitude?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileContactPhoneNumberData[]}
     * [phoneNumbers] List of the phone numbers of the contact.
     */
    phoneNumbers?: CyberjusticeLabKernelServiceContractsJudicialFileContactPhoneNumberData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileContactAttributeData[]}
     * [contactAttributes] List of the attributes of the contact.
     */
    contactAttributes?: CyberjusticeLabKernelServiceContractsJudicialFileContactAttributeData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeData.
 * Represents a representative of a party with contact information. This is
 * used in relation with the file information (JudicialFileData and PArtyData).
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeData {
    /**
     * @member {string} [id] Id of the representative.
     */
    id?: string;
    /**
     * @member {string} [name] Name of the representative.
     */
    name?: string;
    /**
     * @member {string} [status] Status of the representative (active or
     * inactive).
     */
    status?: string;
    /**
     * @member {StatusEnum7} [statusEnum] Enum status of the representative. Use
     * this to assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum7;
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFileContactData}
     * [contact] Contact of the representative, this the general profile
     * information for the representative. For auto-representative and neutral,
     * this should be the same information that we find in RepresentativeProfile
     * table. But since regular representative can have many profiles one for
     * each users link to the representative predicate, the contact information
     * of the representative contains the information on the organization to
     * which belongs the representative.
     */
    contact?: CyberjusticeLabKernelServiceContractsJudicialFileContactData;
    /**
     * @member {string} [fileInternalReferenceNumber] File internal reference
     * number for the representative.
     */
    fileInternalReferenceNumber?: string;
    /**
     * @member {string} [predicateID] Id of the representative predicate.
     */
    predicateID?: string;
    /**
     * @member {string} [predicateName] Name of the representative predicate.
     */
    predicateName?: string;
    /**
     * @member {string} [authorityId] Id of the prosecuting authority of the
     * representative.
     */
    authorityId?: string;
    /**
     * @member {string[]} [competenceCategories] List of competence categories.
     */
    competenceCategories?: string[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileChargeAttributeData.
 * Represents a charge attribute.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileChargeAttributeData {
    /**
     * @member {string} [key] Key of the attribute.
     */
    key?: string;
    /**
     * @member {string} [value] Value of the attribute.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFilePleaData.
 * Represents a charge.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFilePleaData {
    /**
     * @member {string} [pleaId] Guid of the plea.
     */
    pleaId?: string;
    /**
     * @member {string} [chargeId] Guid of the charge parent of the plea.
     */
    chargeId?: string;
    /**
     * @member {string} [type] Plea type.
     */
    type?: string;
    /**
     * @member {TypeEnum3} [typeEnum] Enum type of the plea. Use this to assign
     * the property with a correct enum. Possible values include:
     * 'NotGuiltyWithPay', 'NotGuilty', 'Guilty', 'GuiltyWithDisputedSentence',
     * 'GuiltyWithDisputedFine'
     */
    typeEnum?: TypeEnum3;
    /**
     * @member {string} [status] Plea status.
     */
    status?: string;
    /**
     * @member {StatusEnum8} [statusEnum] Enum status of the plea. Use this to
     * assign the property with a correct enum. Possible values include: 'Empty',
     * 'Invalid', 'Investigation'
     */
    statusEnum?: StatusEnum8;
    /**
     * @member {string} [statusReason] Plea status reason.
     */
    statusReason?: string;
    /**
     * @member {string} [documentId] Document of the plea.
     */
    documentId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileChargePenalOffenceStatementData.
 * Represents a penal offense statement.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileChargePenalOffenceStatementData {
    /**
     * @member {Date} [offenceStatementDate] The offence statement date.
     */
    offenceStatementDate?: Date;
    /**
     * @member {string} [offenceStatementDescription] The offence statement
     * description.
     */
    offenceStatementDescription?: string;
    /**
     * @member {string} [offenceStatementNumber] The offence statement number.
     */
    offenceStatementNumber?: string;
    /**
     * @member {string} [documentId] Optional document fake foreign key.
     */
    documentId?: string;
    /**
     * @member {string} [chargeId] Guid of the charge.
     */
    chargeId?: string;
    /**
     * @member {string} [partyId] Party Guid for this charge.
     */
    partyId?: string;
    /**
     * @member {string} [ruleType] Charge rule type.
     */
    ruleType?: string;
    /**
     * @member {string} [ruleCode] Charge rule code. External Identifier.
     */
    ruleCode?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileChargeAttributeData[]}
     * [attributes] Attributes dictionary.
     */
    attributes?: CyberjusticeLabKernelServiceContractsJudicialFileChargeAttributeData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFilePleaData} [plea]
     * Plea of the charge.
     */
    plea?: CyberjusticeLabKernelServiceContractsJudicialFilePleaData;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFilePartyAttributeData.
 * Represents a party attribute.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFilePartyAttributeData {
    /**
     * @member {string} [key] Key of the attribute.
     */
    key?: string;
    /**
     * @member {string} [value] Value of the attribute.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFilePartyHearingPreferenceTimeData.
 * Represents a party hearing preference time.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFilePartyHearingPreferenceTimeData {
    /**
     * @member {string} [startTime] Start time of the day.
     */
    startTime?: string;
    /**
     * @member {string} [endTime] End time of the day.
     */
    endTime?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFilePartyData.
 * Represents a party.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFilePartyData {
    /**
     * @member {string} [id] Id of the party.
     */
    id?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyType] Type of the party.
     */
    partyType?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFileContactData}
     * [contact] Contact of the party.
     */
    contact?: CyberjusticeLabKernelServiceContractsJudicialFileContactData;
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFileContactData}
     * [mainRepresentativeContact] Representative's contact of the party.
     */
    mainRepresentativeContact?: CyberjusticeLabKernelServiceContractsJudicialFileContactData;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeData[]}
     * [representatives] Representatives of the party.
     */
    representatives?: CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeData[];
    /**
     * @member {string} [disputeDescription] Dispute description made by the
     * party.
     */
    disputeDescription?: string;
    /**
     * @member {string} [authorityId] The party's authority Guid.
     */
    authorityId?: string;
    /**
     * @member {string} [partyEntityId] The party's linked party entity.
     */
    partyEntityId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileChargePenalOffenceStatementData[]}
     * [penalCharges] The penal charges of the party.
     */
    penalCharges?: CyberjusticeLabKernelServiceContractsJudicialFileChargePenalOffenceStatementData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFilePartyAttributeData[]}
     * [partyAttributes] The attributes of the party.
     */
    partyAttributes?: CyberjusticeLabKernelServiceContractsJudicialFilePartyAttributeData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFilePartyHearingPreferenceTimeData[]}
     * [hearingPreferenceTimes] The party's times preferences for hearings.
     */
    hearingPreferenceTimes?: CyberjusticeLabKernelServiceContractsJudicialFilePartyHearingPreferenceTimeData[];
    /**
     * @member {string[]} [hearingPreferenceLocations] The party's locations
     * preferences for hearings.
     */
    hearingPreferenceLocations?: string[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileTrackingStatusData.
 * Represents a tracking status.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileTrackingStatusData {
    /**
     * @member {string} [judicialFileStatus] Status of the judicial file.
     */
    judicialFileStatus?: string;
    /**
     * @member {JudicialFileStatusEnum} [judicialFileStatusEnum] Enum for the
     * tracked judicial file status. Use this to assign the property with a
     * correct enum. Possible values include: 'Empty', 'Draft', 'InPreparation',
     * 'Planned', 'PartiesIdentification', 'ProblemDescription',
     * 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
     * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation',
     * 'MediationRequest', 'MediatorAssign', 'NegoMed', 'Mediation',
     * 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
     * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
     */
    judicialFileStatusEnum?: JudicialFileStatusEnum;
    /**
     * @member {Date} [date] Date of the tracking status.
     */
    date?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileAttributeData.
 * Represents an attribute.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileAttributeData {
    /**
     * @member {string} [key] Key code of the attribute.
     */
    key?: string;
    /**
     * @member {string} [value] Value of the attribute.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileTagData.
 * Represents a tag of a file.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileTagData {
    /**
     * @member {string} [tagId] Guid primary key.
     */
    tagId?: string;
    /**
     * @member {string} [tagCode] Tag string identifier.
     */
    tagCode?: string;
    /**
     * @member {string} [taskStatus] Tag optional task status.
     */
    taskStatus?: string;
    /**
     * @member {string} [taskActor] Tag optional task actor.
     */
    taskActor?: string;
    /**
     * @member {Date} [createdDate] Created date.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] Created by.
     */
    createdBy?: string;
    /**
     * @member {Date} [modifiedDate] Modified date.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] Modified by.
     */
    modifiedBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData.
 * Represents a judicial file.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData {
    /**
     * @member {string} [id] Internal Guid of the file.
     */
    id?: string;
    /**
     * @member {string} [judicialFileID] Friendly Id of the file.
     */
    judicialFileID?: string;
    /**
     * @member {string} [judicialEntityID] Guid of the judicial entity.
     */
    judicialEntityID?: string;
    /**
     * @member {string} [judicialEntityName] Name of the judicial entity.
     */
    judicialEntityName?: string;
    /**
     * @member {string} [name] Name of the file.
     */
    name?: string;
    /**
     * @member {string} [status] String status of the file.
     */
    status?: string;
    /**
     * @member {StatusEnum9} [statusEnum] Enum status of the file. Use this to
     * assign the property with a correct enum. Possible values include: 'Empty',
     * 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
     * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling',
     * 'FilingCompletion', 'Submitted', 'Initiate', 'Pending', 'Open',
     * 'Negotiation', 'MediationRequest', 'MediatorAssign', 'NegoMed',
     * 'Mediation', 'MediationCompleted', 'MinuteApproval',
     * 'MinuteApprovalRecall', 'Complete', 'Adjudication', 'Reject', 'Close',
     * 'Refuse', 'Invalid'
     */
    statusEnum?: StatusEnum9;
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFilePartyData[]}
     * [parties] Parties of the file.
     */
    parties?: CyberjusticeLabKernelServiceContractsJudicialFilePartyData[];
    /**
     * @member {string} [permission] Permission of the file.
     */
    permission?: string;
    /**
     * @member {PermissionEnum3} [permissionEnum] Enum permission of the file.
     * Use this to assign the property with a correct enum. Possible values
     * include: 'Initial', 'Private', 'Public'
     */
    permissionEnum?: PermissionEnum3;
    /**
     * @member {string} [formId] Nullable guid of the form.
     */
    formId?: string;
    /**
     * @member {string} [businessRuleId] Guid of the business rule.
     */
    businessRuleId?: string;
    /**
     * @member {string} [businessRuleName] Name of the business rule.
     */
    businessRuleName?: string;
    /**
     * @member {string} [closingReason] Reason why a file is closed.
     */
    closingReason?: string;
    /**
     * @member {ClosingReasonEnum} [closingReasonEnum] Enum closing reason of the
     * file. Use this to assign the property with a correct enum. Possible values
     * include: 'Agreement', 'MediationFails', 'NoEnrollment', 'Abandon',
     * 'NotValid', 'NoAnswer', 'Other', 'FeesNotPaid', 'NotSpecified',
     * 'AbandonParty1', 'AbandonParty2', 'AgreementMediationManual',
     * 'InactiveNegotiation', 'AbandonParty1IncompleteFile',
     * 'AbandonParty1WithHelp', 'AbandonParty1WithoutHelp'
     */
    closingReasonEnum?: ClosingReasonEnum;
    /**
     * @member {string} [statusBeforeClosing] Status of the file before it was
     * closed if it is the case.
     */
    statusBeforeClosing?: string;
    /**
     * @member {StatusBeforeClosingEnum} [statusBeforeClosingEnum] Enum status
     * before closing of the file. Use this to assign the property with a correct
     * enum. Possible values include: 'Empty', 'Draft', 'InPreparation',
     * 'Planned', 'PartiesIdentification', 'ProblemDescription',
     * 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
     * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation',
     * 'MediationRequest', 'MediatorAssign', 'NegoMed', 'Mediation',
     * 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
     * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
     */
    statusBeforeClosingEnum?: StatusBeforeClosingEnum;
    /**
     * @member {string} [procedureCategory] Procedure category of the file.
     */
    procedureCategory?: string;
    /**
     * @member {ProcedureCategoryEnum} [procedureCategoryEnum] Enum for the
     * procedure category of the file. Use this to assign the property with a
     * correct enum. Possible values include: 'Penal', 'Criminal', 'Civil'
     */
    procedureCategoryEnum?: ProcedureCategoryEnum;
    /**
     * @member {string} [agentAuthorityId] Optional fake foreign key with a
     * prosecuting authority. Identify the prosecuting agent authority.
     */
    agentAuthorityId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileTrackingStatusData[]}
     * [trackingStatuses] Tracked statuses of the judicial file.
     */
    trackingStatuses?: CyberjusticeLabKernelServiceContractsJudicialFileTrackingStatusData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFileAttributeData[]}
     * [attributes] Other attributes of the judicial file.
     */
    attributes?: CyberjusticeLabKernelServiceContractsJudicialFileAttributeData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileTagData[]}
     * [fileTags] Tags linked to this file.
     */
    fileTags?: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileTagData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResquestData.
 * Represents an api filter model when getting a list of judicial files.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResquestData {
    /**
     * @member {string[]} [fileIds] List of files identifiers.
     */
    fileIds?: string[];
    /**
     * @member {string[]} [judicialFileIds] List of judicial files identifiers.
     */
    judicialFileIds?: string[];
    /**
     * @member {string[]} [judicialEntityIds] List of judicial entities
     * identifiers.
     */
    judicialEntityIds?: string[];
    /**
     * @member {string[]} [businessRuleNames] List of business rules names.
     */
    businessRuleNames?: string[];
    /**
     * @member {string[]} [representativeIds] List of representatives
     * identifiers.
     */
    representativeIds?: string[];
    /**
     * @member {string[]} [excludedFormCodes] List of excluded formCodes.
     */
    excludedFormCodes?: string[];
    /**
     * @member {string[]} [includedFormIds] List of included formIds.
     */
    includedFormIds?: string[];
    /**
     * @member {string[]} [excludedStatuses] List of excluded statuses.
     */
    excludedStatuses?: string[];
    /**
     * @member {{ [propertyName: string]: string }} [fileAttributesQuery] List of
     * file attributes for query.
     */
    fileAttributesQuery?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string[]} [statuses] List of statuses.
     */
    statuses?: string[];
    /**
     * @member {string[]} [closingReasons] List of closing reasons.
     */
    closingReasons?: string[];
    /**
     * @member {Date} [minCreatedDate] Min created date.
     */
    minCreatedDate?: Date;
    /**
     * @member {Date} [maxCreatedDate] Max created date.
     */
    maxCreatedDate?: Date;
    /**
     * @member {string[]} [searchStatuses] List of statuses by search.
     */
    searchStatuses?: string[];
    /**
     * @member {string} [searchText] Search text.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] List of search by columns.
     */
    searchBy?: string[];
    /**
     * @member {string[]} [searchActions] List of file actions to filter.
     */
    searchActions?: string[];
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {OrderBy6} [orderBy] Order by columns. Possible values include:
     * 'Name', 'JudicialFileId', 'CreatedDate', 'ModifiedDate', 'Status', 'Key'
     */
    orderBy?: OrderBy6;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel.
 * Represents a contact phone number.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel {
    /**
     * @member {string} [id] Id of the phone number.
     */
    id?: string;
    /**
     * @member {string} [phoneNumber] Phone number of the contact.
     */
    phoneNumber?: string;
    /**
     * @member {string} [phoneTypeId] Type of the phone number.
     */
    phoneTypeId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel.
 * Represents a contact attribute information for a party or a representative.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsContactModel.
 * Represents a contact information for a party or a representative.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsContactModel {
    /**
     * @member {string} [id] Identification of the contact.
     */
    id?: string;
    /**
     * @member {boolean} [isCompany] True if is a company or false.
     */
    isCompany?: boolean;
    /**
     * @member {string} [companyName] Name of the company.
     */
    companyName?: string;
    /**
     * @member {string} [firstName] First name of the contact.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the contact.
     */
    lastName?: string;
    /**
     * @member {string} [address] Address of the contact.
     */
    address?: string;
    /**
     * @member {string} [address2] Second address of the contact.
     */
    address2?: string;
    /**
     * @member {string} [city] City of the contact.
     */
    city?: string;
    /**
     * @member {string} [state] State of the contact.
     */
    state?: string;
    /**
     * @member {string} [country] Country of the contact.
     */
    country?: string;
    /**
     * @member {string} [zipCode] Zip code of the contact.
     */
    zipCode?: string;
    /**
     * @member {string} [email] Email of the contact.
     */
    email?: string;
    /**
     * @member {string} [website] Website of the contact.
     */
    website?: string;
    /**
     * @member {string} [latitude] The Gps latitude in degree for the City and
     * Postal Code of the model.
     */
    latitude?: string;
    /**
     * @member {string} [longitude] The Gps longitude in degree for the City and
     * Postal Code of the model.
     */
    longitude?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel[]}
     * [phoneNumbers] List of the phone numbers of the contact.
     */
    phoneNumbers?: CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel[]}
     * [contactAttributes] List of the attributes of the contact.
     */
    contactAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel.
 * List of attributes of a party representative link.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeModel.
 * Represents a representative with contact information. This is used in
 * relation with the file information (JudicialFileModel and PartyModel).
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeModel {
    /**
     * @member {string} [id] Id of the representative.
     */
    id?: string;
    /**
     * @member {string} [name] Name of the representative.
     */
    name?: string;
    /**
     * @member {string} [status] Status of the representative (active or
     * inactive).
     */
    status?: string;
    /**
     * @member {StatusEnum10} [statusEnum] Enum status of the representative. Use
     * this to assign the property with a correct enum. Possible values include:
     * 'Active', 'Inactive'
     */
    statusEnum?: StatusEnum10;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsContactModel}
     * [contact] Contact of the representative, this the general profile
     * information for the representative.
     * For auto-representative and neutral, this should be the same information
     * that we find in RepresentativeProfile table. But since regular
     * representative can have many profiles one for each users link to the
     * representative predicate, the contact information of the representative
     * contains the information on the organization to which belongs the
     * representative.
     */
    contact?: CyberjusticeLabKernelSharedJudicialFileModelsContactModel;
    /**
     * @member {string} [fileInternalReferenceNumber] File internal reference
     * number for the representative.
     */
    fileInternalReferenceNumber?: string;
    /**
     * @member {string} [predicateId] Id of the representative predicate.
     */
    predicateId?: string;
    /**
     * @member {string} [predicateName] Name of the representative predicate.
     */
    predicateName?: string;
    /**
     * @member {string} [authorityId] Id of the prosecuting authority of the
     * representative.
     */
    authorityId?: string;
    /**
     * @member {string[]} [competenceCategories] List of competence categories.
     */
    competenceCategories?: string[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel[]}
     * [partyRepresentativeLinkAttributes] List of attributes linked to a
     * representative attached with a party.
     */
    partyRepresentativeLinkAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel.
 * Represents a charge attribute.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPleaModel.
 * Represents a charge.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPleaModel {
    /**
     * @member {string} [pleaId] Guid of the plea.
     */
    pleaId?: string;
    /**
     * @member {string} [chargeId] Guid of the charge parent of the plea.
     */
    chargeId?: string;
    /**
     * @member {string} [type] Plea type.
     */
    type?: string;
    /**
     * @member {TypeEnum4} [typeEnum] Enum type of the plea. Use this to assign
     * the property with a correct enum. Possible values include:
     * 'NotGuiltyWithPay', 'NotGuilty', 'Guilty', 'GuiltyWithDisputedSentence',
     * 'GuiltyWithDisputedFine'
     */
    typeEnum?: TypeEnum4;
    /**
     * @member {string} [status] Plea status.
     */
    status?: string;
    /**
     * @member {StatusEnum11} [statusEnum] Enum status of the plea. Use this to
     * assign the property with a correct enum. Possible values include: 'Empty',
     * 'Invalid', 'Investigation'
     */
    statusEnum?: StatusEnum11;
    /**
     * @member {string} [statusReason] Plea status reason.
     */
    statusReason?: string;
    /**
     * @member {string} [documentId] Document of the plea.
     */
    documentId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsChargePenalOffenceStatementModel.
 * Represents a penal offense statement.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsChargePenalOffenceStatementModel {
    /**
     * @member {Date} [offenceStatementDate] The offence statement date.
     */
    offenceStatementDate?: Date;
    /**
     * @member {string} [offenceStatementDescription] The offence statement
     * description.
     */
    offenceStatementDescription?: string;
    /**
     * @member {string} [offenceStatementNumber] The offence statement number.
     */
    offenceStatementNumber?: string;
    /**
     * @member {string} [documentId] Optional document Id.
     */
    documentId?: string;
    /**
     * @member {string} [chargeId] Guid of the charge.
     */
    chargeId?: string;
    /**
     * @member {string} [partyId] Party Guid for this charge.
     */
    partyId?: string;
    /**
     * @member {string} [ruleType] Charge rule type.
     */
    ruleType?: string;
    /**
     * @member {string} [ruleCode] Charge rule code. External Identifier.
     */
    ruleCode?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel[]}
     * [attributes] Attributes dictionary.
     */
    attributes?: CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel[];
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsPleaModel} [plea]
     * Plea of the charge.
     */
    plea?: CyberjusticeLabKernelSharedJudicialFileModelsPleaModel;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyAttributeModel.
 * Represents a party attribute.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyHearingPreferenceTimeModel.
 * Represents a party hearing preference time.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyHearingPreferenceTimeModel {
    /**
     * @member {string} [startTime] Start time of the day.
     */
    startTime?: string;
    /**
     * @member {string} [endTime] End time of the day.
     */
    endTime?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyModel.
 * Represents a party.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyModel {
    /**
     * @member {string} [id] Identification of the party.
     */
    id?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyType] Type of the party.
     */
    partyType?: string;
    /**
     * @member {string} [status] Status of the party.
     */
    status?: string;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsContactModel}
     * [contact] Contact of the party.
     */
    contact?: CyberjusticeLabKernelSharedJudicialFileModelsContactModel;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsContactModel}
     * [mainRepresentativeContact] Representative's contact of the party.
     */
    mainRepresentativeContact?: CyberjusticeLabKernelSharedJudicialFileModelsContactModel;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeModel[]}
     * [representatives] Representatives of the party.
     */
    representatives?: CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeModel[];
    /**
     * @member {string} [disputeDescription] Dispute description made by the
     * party.
     */
    disputeDescription?: string;
    /**
     * @member {string} [authorityId] The party's authority Guid.
     */
    authorityId?: string;
    /**
     * @member {string} [partyEntityId] The party's linked party entity.
     */
    partyEntityId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsChargePenalOffenceStatementModel[]}
     * [penalCharges] The penal charges of the party.
     */
    penalCharges?: CyberjusticeLabKernelSharedJudicialFileModelsChargePenalOffenceStatementModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsPartyAttributeModel[]}
     * [partyAttributes] The attributes of the party.
     */
    partyAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsPartyAttributeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsPartyHearingPreferenceTimeModel[]}
     * [hearingPreferenceTimes] The party's times preferences for hearings.
     */
    hearingPreferenceTimes?: CyberjusticeLabKernelSharedJudicialFileModelsPartyHearingPreferenceTimeModel[];
    /**
     * @member {string[]} [hearingPreferenceLocations] The party's locations
     * preferences for hearings.
     */
    hearingPreferenceLocations?: string[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsTrackingStatusModel.
 * Represents a tracking status.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsTrackingStatusModel {
    /**
     * @member {string} [judicialFileStatus] Status of the judicial file.
     */
    judicialFileStatus?: string;
    /**
     * @member {JudicialFileStatusEnum1} [judicialFileStatusEnum] Enum for the
     * tracked judicial file status. Use this to assign the property with a
     * correct enum. Possible values include: 'Empty', 'Draft', 'InPreparation',
     * 'Planned', 'PartiesIdentification', 'ProblemDescription',
     * 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
     * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation',
     * 'MediationRequest', 'MediatorAssign', 'NegoMed', 'Mediation',
     * 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
     * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
     */
    judicialFileStatusEnum?: JudicialFileStatusEnum1;
    /**
     * @member {Date} [date] Date of the tracking status.
     */
    date?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsFileAttributeModel.
 * Represents a file attribute.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsFileAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel.
 * Represents a piece of information complement of a file's tag.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel {
    /**
     * @member {string} [complementId] Id of the complement.
     */
    complementId?: string;
    /**
     * @member {string} [code] Any complement string.
     */
    code?: string;
    /**
     * @member {string} [actor] The complement actor.
     */
    actor?: string;
    /**
     * @member {Date} [date] The complement date.
     */
    date?: Date;
    /**
     * @member {string} [additionalText] Any additional text. Optional.
     */
    additionalText?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagModel.
 * Represents a tag of a file.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagModel {
    /**
     * @member {string} [tagId] Id of the tag.
     */
    tagId?: string;
    /**
     * @member {string} [tagCode] Tag string identifier.
     */
    tagCode?: string;
    /**
     * @member {string} [taskStatus] Tag optional task status.
     */
    taskStatus?: string;
    /**
     * @member {string} [taskActor] Tag optional task actor.
     */
    taskActor?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel[]}
     * [complements] One to many tag link complements.
     */
    complements?: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileModel.
 * Represents a judicial file.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileModel {
    /**
     * @member {string} [businessRuleId] Guid of the business rule.
     */
    businessRuleId?: string;
    /**
     * @member {string} [businessRuleName] Name of the business rule.
     */
    businessRuleName?: string;
    /**
     * @member {string} [judicialEntityId] Guid of the judicial entity.
     */
    judicialEntityId?: string;
    /**
     * @member {string} [judicialEntityName] Name of the judicial entity.
     */
    judicialEntityName?: string;
    /**
     * @member {string} [id] Internal Guid of the file.
     */
    id?: string;
    /**
     * @member {string} [judicialFileId] Friendly Id of the file.
     */
    judicialFileId?: string;
    /**
     * @member {string} [name] Name of the file.
     */
    name?: string;
    /**
     * @member {string} [status] String status of the file.
     */
    status?: string;
    /**
     * @member {StatusEnum12} [statusEnum] Enum status of the file. Use this to
     * assign the property with a correct enum. Possible values include: 'Empty',
     * 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
     * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling',
     * 'FilingCompletion', 'Submitted', 'Initiate', 'Pending', 'Open',
     * 'Negotiation', 'MediationRequest', 'MediatorAssign', 'NegoMed',
     * 'Mediation', 'MediationCompleted', 'MinuteApproval',
     * 'MinuteApprovalRecall', 'Complete', 'Adjudication', 'Reject', 'Close',
     * 'Refuse', 'Invalid'
     */
    statusEnum?: StatusEnum12;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsPartyModel[]}
     * [parties] Parties of the file.
     */
    parties?: CyberjusticeLabKernelSharedJudicialFileModelsPartyModel[];
    /**
     * @member {string} [permission] Permission of the file.
     */
    permission?: string;
    /**
     * @member {PermissionEnum4} [permissionEnum] Enum permission of the file.
     * Use this to assign the property with a correct enum. Possible values
     * include: 'Initial', 'Private', 'Public'
     */
    permissionEnum?: PermissionEnum4;
    /**
     * @member {string} [formId] Guid of the form.
     */
    formId?: string;
    /**
     * @member {string} [closingReason] Reason why a file is closed.
     */
    closingReason?: string;
    /**
     * @member {string} [statusBeforeClosing] Status of the file before it was
     * closed if it is the case.
     */
    statusBeforeClosing?: string;
    /**
     * @member {StatusBeforeClosingEnum1} [statusBeforeClosingEnum] Enum status
     * before closing of the file. Use this to assign the property with a correct
     * enum. Possible values include: 'Empty', 'Draft', 'InPreparation',
     * 'Planned', 'PartiesIdentification', 'ProblemDescription',
     * 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
     * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation',
     * 'MediationRequest', 'MediatorAssign', 'NegoMed', 'Mediation',
     * 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
     * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
     */
    statusBeforeClosingEnum?: StatusBeforeClosingEnum1;
    /**
     * @member {string} [procedureCategory] Procedure category of the file.
     */
    procedureCategory?: string;
    /**
     * @member {ProcedureCategoryEnum1} [procedureCategoryEnum] Enum for the
     * procedure category of the file. Use this to assign the property with a
     * correct enum. Possible values include: 'Penal', 'Criminal', 'Civil'
     */
    procedureCategoryEnum?: ProcedureCategoryEnum1;
    /**
     * @member {string} [agentAuthorityId] Optional fake foreign key with a
     * prosecuting authority. Identify the prosecuting agent authority.
     */
    agentAuthorityId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsTrackingStatusModel[]}
     * [trackingStatuses] Tracked statuses of the judicial file.
     */
    trackingStatuses?: CyberjusticeLabKernelSharedJudicialFileModelsTrackingStatusModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsFileAttributeModel[]}
     * [fileAttributes] Other attributes of the judicial file.
     */
    fileAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsFileAttributeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagModel[]}
     * [fileTags] Tags linked to this file.
     */
    fileTags?: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagModel[];
    /**
     * @member {string} [matterId] The Matter Id
     */
    matterId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResponseData.
 * Represents an API response when getting a list of judicial files.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResponseData {
    /**
     * @member {number} [count] Count of judicial files.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered judicial files.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileModel[]}
     * [files] List of judicial files.
     */
    files?: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet1Data.
 * Represents a judicial file.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet1Data {
    /**
     * @member {StatusEnum13} [statusEnum] Enum status of the file. Use this to
     * assign the property with a correct enum. Possible values include: 'Empty',
     * 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
     * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling',
     * 'FilingCompletion', 'Submitted', 'Initiate', 'Pending', 'Open',
     * 'Negotiation', 'MediationRequest', 'MediatorAssign', 'NegoMed',
     * 'Mediation', 'MediationCompleted', 'MinuteApproval',
     * 'MinuteApprovalRecall', 'Complete', 'Adjudication', 'Reject', 'Close',
     * 'Refuse', 'Invalid'
     */
    statusEnum?: StatusEnum13;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet2Data.
 * Represents a judicial file.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet2Data {
    /**
     * @member {StatusEnum14} [statusEnum] Enum status of the file. Use this to
     * assign the property with a correct enum. Possible values include: 'Empty',
     * 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
     * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling',
     * 'FilingCompletion', 'Submitted', 'Initiate', 'Pending', 'Open',
     * 'Negotiation', 'MediationRequest', 'MediatorAssign', 'NegoMed',
     * 'Mediation', 'MediationCompleted', 'MinuteApproval',
     * 'MinuteApprovalRecall', 'Complete', 'Adjudication', 'Reject', 'Close',
     * 'Refuse', 'Invalid'
     */
    statusEnum?: StatusEnum14;
    /**
     * @member {ClosingReasonEnum1} [closingReasonEnum] Enum closing reason of
     * the file. Use this to assign the property with a correct enum. Possible
     * values include: 'Agreement', 'MediationFails', 'NoEnrollment', 'Abandon',
     * 'NotValid', 'NoAnswer', 'Other', 'FeesNotPaid', 'NotSpecified',
     * 'AbandonParty1', 'AbandonParty2', 'AgreementMediationManual',
     * 'InactiveNegotiation', 'AbandonParty1IncompleteFile',
     * 'AbandonParty1WithHelp', 'AbandonParty1WithoutHelp'
     */
    closingReasonEnum?: ClosingReasonEnum1;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData.
 * Represents a representative profile.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData {
    /**
     * @member {string} [id] Id of the representative.
     */
    id?: string;
    /**
     * @member {string} [userName] Name of the representative.
     */
    userName?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFileContactData}
     * [contactInfo] Contact of the representative.
     */
    contactInfo?: CyberjusticeLabKernelServiceContractsJudicialFileContactData;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData.
 * Represents a representative entity, including all users profiles. A
 * representative entity can have the role of representative (including
 * auto-representative) and neutral.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData {
    /**
     * @member {string} [id] Id of the representative.
     */
    id?: string;
    /**
     * @member {string} [name] Name of the representative.
     */
    name?: string;
    /**
     * @member {string} [status] Status of the representative (active or
     * inactive).
     */
    status?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData[]}
     * [representativeProfiles] List of user profiles. Auto-representative and
     * neutral can have only one profile link to the representative entity.
     * Regular representative can have many profiles one for each users link to
     * the representative predicate (this is normally the case when working with
     * lawyer firm).
     */
    representativeProfiles?: CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData[];
    /**
     * @member {string} [predicateID] Id of the predicate.
     */
    predicateID?: string;
    /**
     * @member {string} [predicateName] Name of the predicate.
     */
    predicateName?: string;
    /**
     * @member {string} [authorityId] Id of the authority.
     */
    authorityId?: string;
    /**
     * @member {string[]} [competenceCategories] List of competence categories.
     */
    competenceCategories?: string[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileOfPartyEntityData.
 * Represents a flat judicial file, for the party entity data.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileOfPartyEntityData {
    /**
     * @member {string} [fileId] Internal Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [judicialFileId] Friendly Id of the file.
     */
    judicialFileId?: string;
    /**
     * @member {string} [partyId] Id of the party between the file and the party
     * entity.
     */
    partyId?: string;
    /**
     * @member {string} [name] Name of the file.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFilePartyEntityData.
 * Represents a party entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFilePartyEntityData {
    /**
     * @member {string} [partyEntityId] Guid of the party entity.
     */
    partyEntityId?: string;
    /**
     * @member {string} [partyEntityCode] Party entity code.
     */
    partyEntityCode?: string;
    /**
     * @member {string} [partyEntityStatus] Party entity status.
     */
    partyEntityStatus?: string;
    /**
     * @member {string} [judicialEntityId] Judicial entity of the party entity.
     */
    judicialEntityId?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsJudicialFileContactData}
     * [contact] Contact of the party entity.
     */
    contact?: CyberjusticeLabKernelServiceContractsJudicialFileContactData;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[]}
     * [representatives] Representatives of the party entity.
     */
    representatives?: CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileOfPartyEntityData[]}
     * [judicialFiles] Judicial files of the party entity.
     */
    judicialFiles?: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileOfPartyEntityData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleEntityData.
 * Represents the business rule with related entities data.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleEntityData {
    /**
     * @member {string} [id] Id of the entity.
     */
    id?: string;
    /**
     * @member {string} [judicialEntityId] Id of the associated judicial entity.
     */
    judicialEntityId?: string;
    /**
     * @member {string} [businessRuleId] Id of the business rule.
     */
    businessRuleId?: string;
    /**
     * @member {string} [applicationName] Name of the application.
     */
    applicationName?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleData.
 * Represents the business rule data.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleData {
    /**
     * @member {string} [businessRuleId] Id of the business rule.
     */
    businessRuleId?: string;
    /**
     * @member {string} [businessRuleName] Name of the business rule.
     */
    businessRuleName?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleEntityData[]}
     * [businessRuleEntities] Related business rule entities data.
     */
    businessRuleEntities?: CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleEntityData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileNeutralZipCodeData.
 * Subset of neutral representatives data. The zip code is used to link the
 * neutral to geography tables.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileNeutralZipCodeData {
    /**
     * @member {string} [representativeId] The Guid of the neutral
     * representative.
     */
    representativeId?: string;
    /**
     * @member {string} [zipCode] The zip code from the neutral contact data.
     */
    zipCode?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileVerifyData.
 * Data class used to verify the existence of a judicial file.
 *
 */
export interface CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileVerifyData {
    /**
     * @member {string} [fileId] The file Id.
     */
    fileId?: string;
    /**
     * @member {string} [judicialFileId] The judicial file Id.
     */
    judicialFileId?: string;
    /**
     * @member {boolean} [currentUserIsRepresentative] True if the current user
     * is a representative in the file.
     */
    currentUserIsRepresentative?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel.
 * A File Invitation model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel {
    /**
     * @member {string} [fileInvitationId] The Guid of the invitation.
     */
    fileInvitationId?: string;
    /**
     * @member {string} [partyId] The Guid of the party that the invited
     * representative will join.
     */
    partyId?: string;
    /**
     * @member {string} [representativeId] The Guid of the representative invited
     * to join the file.
     */
    representativeId?: string;
    /**
     * @member {string} [applicationName] Name of the application. Used to
     * retrieve pending file.
     */
    applicationName?: string;
    /**
     * @member {string} [fileId] The Guid of the file that the invited
     * representative will join.
     */
    fileId?: string;
    /**
     * @member {Date} [expiryDate] The expiry date of the invitation.
     */
    expiryDate?: Date;
    /**
     * @member {string} [invitationType] Type of the invitation
     */
    invitationType?: string;
    /**
     * @member {string} [validationCode] Friendly validation code.
     */
    validationCode?: string;
    /**
     * @member {string} [judicialFileId] JudicialFileId of the file, to decrease
     * the possibility of brute forcing a simple validation code.
     */
    judicialFileId?: string;
    /**
     * @member {string} [representativeAttributes] Permissions that will be given
     * when responding to the invitation.
     */
    representativeAttributes?: string;
    /**
     * @member {string} [additionalAttributes] Additional attributes for the file
     * invitation.
     */
    additionalAttributes?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileFileInvitationPartyInformationModel.
 * Party information when reviewing an invitation.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileFileInvitationPartyInformationModel {
    /**
     * @member {string} [partyName] Name of the party
     */
    partyName?: string;
    /**
     * @member {string} [partyId] The Guid of the party
     */
    partyId?: string;
    /**
     * @member {string} [partyType] The type of the party
     */
    partyType?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel.
 * A File Invitation information model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel {
    /**
     * @member {string} [fileInvitationId] The Guid of the invitation.
     */
    fileInvitationId?: string;
    /**
     * @member {string} [judicialFileId]
     */
    judicialFileId?: string;
    /**
     * @member {string} [partyId] The Guid of the party that the invited
     * representative will join.
     */
    partyId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileFileInvitationPartyInformationModel[]}
     * [parties] List of parties in file.
     */
    parties?: CyberjusticeLabKernelSharedJudicialFileFileInvitationPartyInformationModel[];
    /**
     * @member {string} [additionalAttributes] Additional attributes for the file
     * invitation.
     */
    additionalAttributes?: string;
    /**
     * @member {string} [invitationType] The type of the invitation
     */
    invitationType?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPhoneNumber.
 * Phone number
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPhoneNumber {
    /**
     * @member {string} [number] Phone number
     */
    number?: string;
    /**
     * @member {string} [type] Type of the phone number.
     */
    type?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsAtribute.
 * List of attributes of the party.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsAtribute {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyInformation.
 * Represents the information about the party that was invited.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyInformation {
    /**
     * @member {string} [partyType] The type of the party.
     */
    partyType?: string;
    /**
     * @member {boolean} [isCompany] True if the party was invited as a company.
     */
    isCompany?: boolean;
    /**
     * @member {string} [companyName] Name of the company if the party
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.PartyInformation.IsCompany}
     * is true.
     */
    companyName?: string;
    /**
     * @member {string} [firstName] First name of the party if the party
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.PartyInformation.IsCompany}
     * is false.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the party if  the party
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.PartyInformation.IsCompany}
     * is false.
     */
    lastName?: string;
    /**
     * @member {string} [address] Address of the party.
     */
    address?: string;
    /**
     * @member {string} [address2] Second address of the party.
     */
    address2?: string;
    /**
     * @member {string} [city] City of the party.
     */
    city?: string;
    /**
     * @member {string} [state] State of the party.
     */
    state?: string;
    /**
     * @member {string} [country] Country of the party.
     */
    country?: string;
    /**
     * @member {string} [zipCode] Zip code of the party.
     */
    zipCode?: string;
    /**
     * @member {string} [email] Email of the party.
     */
    email?: string;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsPhoneNumber[]}
     * [phoneNumbers] List of the phone numbers of the party.
     */
    phoneNumbers?: CyberjusticeLabKernelSharedJudicialFileModelsPhoneNumber[];
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsAtribute[]}
     * [partyAttributes] List of attributes of a party.
     */
    partyAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsAtribute[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel.
 * Models that returns the information about the party that was invited to join
 * a file.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel {
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [fileName] File name.
     */
    fileName?: string;
    /**
     * @member {string} [judicialFileId] File identifier.
     */
    judicialFileId?: string;
    /**
     * @member {string} [invitationId] Id of the invitation.
     */
    invitationId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsPartyInformation}
     * [partyInvited] Information about the invited party.
     */
    partyInvited?: CyberjusticeLabKernelSharedJudicialFileModelsPartyInformation;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsPartyModel[]}
     * [parties] Information about parties.
     */
    parties?: CyberjusticeLabKernelSharedJudicialFileModelsPartyModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel.
 * Notification count by file data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel {
    /**
     * @member {string} [fileId] File Guid.
     */
    fileId?: string;
    /**
     * @member {string} [judicialFileId] Judicial file identifier.
     */
    judicialFileId?: string;
    /**
     * @member {number} [newNotificationsCount] Count of new notifications.
     */
    newNotificationsCount?: number;
    /**
     * @member {Date} [mostRecentNotification] Date of the most recent
     * notification.
     */
    mostRecentNotification?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByAggregatorCodeModel.
 * Notification count by aggregator code data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByAggregatorCodeModel {
    /**
     * @member {string} [aggregatorCode] Judicial file identifier.
     */
    aggregatorCode?: string;
    /**
     * @member {number} [newNotificationsCount] Count of new notifications.
     */
    newNotificationsCount?: number;
    /**
     * @member {Date} [mostRecentNotification] Date of the most recent
     * notification.
     */
    mostRecentNotification?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel.
 * Notification type data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel {
    /**
     * @member {string} [notificationCode] Notification code.
     */
    notificationCode?: string;
    /**
     * @member {string} [businessRuleName] Business rule of the notification
     * type.
     */
    businessRuleName?: string;
    /**
     * @member {string} [description] Description of the notification type.
     */
    description?: string;
    /**
     * @member {{ [propertyName: string]: string }} [cultureContentDictionary]
     * Dictionary with the 2 letters language as key and the notification content
     * as value.
     */
    cultureContentDictionary?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel.
 * Model used to create a new party invitation.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel {
    /**
     * @member {string} [partyId] The Guid of the party that the invited
     * representative will join.
     */
    partyId?: string;
    /**
     * @member {Date} [expiryDate] The expiry date of the invitation.
     */
    expiryDate?: Date;
    /**
     * @member {string} [validationParameter] Parameters for the validation of an
     * invitation.
     */
    validationParameter?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel.
 * Model used to create a new file invitation.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel {
    /**
     * @member {string} [partyId] The Guid of the party that the invited
     * representative will join.
     */
    partyId?: string;
    /**
     * @member {string} [invitationType] Type of the invitation
     */
    invitationType?: string;
    /**
     * @member {{ [propertyName: string]: string }} [substitutionParameter]
     * Substitution parameter
     */
    substitutionParameter?: {
        [propertyName: string]: string;
    };
    /**
     * @member {Date} [expiryDate] The expiry date of the invitation.
     */
    expiryDate?: Date;
    /**
     * @member {string} [representativeAttributes] Permissions that will be given
     * when responding to the nvitation.
     */
    representativeAttributes?: string;
    /**
     * @member {string} [representativeId] The Guid of the representative invited
     * to join the file.
     */
    representativeId?: string;
    /**
     * @member {string} [applicationName] Name of the application. Used to
     * retrieve pending file.
     */
    applicationName?: string;
    /**
     * @member {string} [additionalAttributes] Aditional attributes for the file
     * invitation.
     */
    additionalAttributes?: string;
    /**
     * @member {string} [mailCode] Email code.
     */
    mailCode?: string;
    /**
     * @member {string} [culture] 2-character code fo the culture for the email
     * invitation.
     */
    culture?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationRefuseModel.
 * Webapi model to refuse a party invitation and update a tag code.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationRefuseModel {
    /**
     * @member {string} [partyInvitationId] Party invitation Guid.
     */
    partyInvitationId?: string;
    /**
     * @member {string} [tagCode] Tag code to update.
     */
    tagCode?: string;
    /**
     * @member {string} [taskStatus] Task status of the updated tag link.
     */
    taskStatus?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel}
     * [complement] Complement to add to the tag link.
     */
    complement?: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel.
 * Webapi model to refuse a file invitation and update a tag code.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel {
    /**
     * @member {string} [invitationCode] Invitation Code
     */
    invitationCode?: string;
    /**
     * @member {string} [judicialFileId] JudicialFileId
     */
    judicialFileId?: string;
    /**
     * @member {string} [tagCode] Tag code to update.
     */
    tagCode?: string;
    /**
     * @member {string} [taskStatus] Task status of the updated tag link.
     */
    taskStatus?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel}
     * [complement] Complement to add to the tag link.
     */
    complement?: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel.
 * Class used to create a judicial file tag.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel {
    /**
     * @member {string} [fileId] Guid primary key.
     */
    fileId?: string;
    /**
     * @member {string} [tagCode] Tag string identifier.
     */
    tagCode?: string;
    /**
     * @member {string} [taskStatus] Tag optional task status.
     */
    taskStatus?: string;
    /**
     * @member {string} [taskActor] Tag optional task actor.
     */
    taskActor?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel[]}
     * [complements] One to many tag link complements.
     */
    complements?: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel.
 * Model used to attach a
 * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.RepresentativesToPartyModel.PartyId}
 * to his representatives.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsRepresentativesToPartyModel {
    /**
     * @member {string} [partyId] Party Id.
     */
    partyId?: string;
    /**
     * @member {{ [propertyName: string]:
     * CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel[]
     * }} [representativesWithAttributes] The key is a representative Id an the
     * value is the list of all the attributes that are assigned to him.
     */
    representativesWithAttributes?: {
        [propertyName: string]: CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel[];
    };
    /**
     * @member {string} [fileInternalReferenceNumber] Internal Reference.
     */
    fileInternalReferenceNumber?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLinkRepresentativesToPartyModel.
 * Model used to link representatives to a party
 * ({CyberjusticeLab.Kernel.Shared.JudicialFile.Models.LinkRepresentativesToPartyModel.PartyId}).
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLinkRepresentativesToPartyModel {
    /**
     * @member {string} [partyId] Party Id.
     */
    partyId?: string;
    /**
     * @member {{ [propertyName: string]:
     * CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel[]
     * }} [representativesWithAttributes] The key is a representative Id and the
     * value is the list of all the attributes that are assigned to it.
     */
    representativesWithAttributes?: {
        [propertyName: string]: CyberjusticeLabKernelSharedJudicialFileModelsPartyRepresentativeLinkAttributeModel[];
    };
    /**
     * @member {string} [fileInternalReferenceNumber] Internal Reference.
     */
    fileInternalReferenceNumber?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel.
 * Webapi model to accept a file invitation.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel {
    /**
     * @member {string} [invitationCode] Invitation Code
     */
    invitationCode?: string;
    /**
     * @member {string} [judicialFileId] JudicialFileId
     */
    judicialFileId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiRequestData.
 * Represents an api filter model when getting a list of notification types.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiRequestData {
    /**
     * @member {string} [searchText] Search text.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] List of search by columns.
     */
    searchBy?: string[];
    /**
     * @member {string[]} [businessRuleNames] Get only the notification type of
     * the given business rules.
     */
    businessRuleNames?: string[];
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {boolean} [orderByDescending] The notification types are, by
     * default, ordered by notification code. Order by ascending or descending.
     */
    orderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiResponseData.
 * Represents an API response when getting a list of notifications.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiResponseData {
    /**
     * @member {number} [count] Count of notifications.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered notifications.
     */
    countFiltered?: number;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel[]}
     * [notifications] List of notifications.
     */
    notifications?: CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiRequestData.
 * Notification request data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiRequestData {
    /**
     * @member {string[]} [fileIds] File Guids filter.
     */
    fileIds?: string[];
    /**
     * @member {string[]} [businessRuleNames] Get only the notification type of
     * the given business rules.
     */
    businessRuleNames?: string[];
    /**
     * @member {boolean} [prioritizeNewNotifications] Order by notifications that
     * are not dismissed before ordering by created date.
     */
    prioritizeNewNotifications?: boolean;
    /**
     * @member {boolean} [filterOnlyNewNotifications] Get the latest
     * notificacion.
     */
    filterOnlyNewNotifications?: boolean;
    /**
     * @member {string[]} [filterNotificationsCodes] Filter notifications by code
     * of notification.
     */
    filterNotificationsCodes?: string[];
    /**
     * @member {string[]} [filterAttributeKeys] Filter notifications by attribute
     * keys. Return only notifications that have one of these attributes.
     */
    filterAttributeKeys?: string[];
    /**
     * @member {number} [take] Take. The notifications are ordered by created
     * date.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {string} [judicialEntityId] Id of the judicial entity the
     * notifications belongs to.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel.
 * Notification resource model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel {
    /**
     * @member {string} [culture] The language of this message.
     */
    culture?: string;
    /**
     * @member {string} [message] Message of the notification.
     */
    message?: string;
    /**
     * @member {string} [substitutionParameters] Substitution parameters that
     * were used to create this message.
     */
    substitutionParameters?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationModel.
 * Notification data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationModel {
    /**
     * @member {number} [notificationId] Notification Id.
     */
    notificationId?: number;
    /**
     * @member {string} [notificationCode] Notification code.
     */
    notificationCode?: string;
    /**
     * @member {string} [businessRuleName] Business rule of the notification.
     */
    businessRuleName?: string;
    /**
     * @member {string} [fileId] File Guid of the notification.
     */
    fileId?: string;
    /**
     * @member {string} [aggregatorCode] Aggregator code. This code is used to
     * group some notifications by another mean than simply the notification
     * code. This is used by applications.
     */
    aggregatorCode?: string;
    /**
     * @member {string} [message] Content of the notification itself. If a
     * language specific message can be found in the localized resources, use
     * that one instead.
     */
    message?: string;
    /**
     * @member {{ [propertyName: string]: string }} [cultureContentDictionary]
     * Dictionary with the 2 letters language as key and the notification content
     * as value.
     */
    cultureContentDictionary?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string} [notificationSubstitutionParameters] Substituted
     * parameters that are used to replace the content of the message. If
     * language specific substitution parameters can be found in the localized
     * resources, use those instead.
     */
    notificationSubstitutionParameters?: string;
    /**
     * @member {string} [link] Link to the related file view. This is specific to
     * an application.
     */
    link?: string;
    /**
     * @member {Date} [accessDate] Date when the representative accessed the
     * notification.
     */
    accessDate?: Date;
    /**
     * @member {Date} [sentDate] Date that the system sent the notification.
     */
    sentDate?: Date;
    /**
     * @member {boolean} [notificationDismissed] True if the notification has
     * been dismissed by the user.
     */
    notificationDismissed?: boolean;
    /**
     * @member {Date} [createdDate] Created date.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] Created by.
     */
    createdBy?: string;
    /**
     * @member {{ [propertyName: string]: string }} [attributes] Notification
     * attributes.
     */
    attributes?: {
        [propertyName: string]: string;
    };
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel[]}
     * [notificationResources] Notification message and parameters in localized
     * languages.
     */
    notificationResources?: CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiResponseData.
 * Notification response data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiResponseData {
    /**
     * @member {number} [count] Count of notifications.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered notifications.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsNotificationModel[]}
     * [notifications] List of notifications.
     */
    notifications?: CyberjusticeLabKernelSharedJudicialFileModelsNotificationModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData.
 * Notification by file request data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData {
    /**
     * @member {number} [take] Take. The notifications are ordered by created
     * date.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {string} [judicialEntityId] Id of the judicial entity the
     * notifications belongs to.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData.
 * Notification summary count by file data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData {
    /**
     * @member {number} [totalNotificationsCount] Total of notifications.
     */
    totalNotificationsCount?: number;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel[]}
     * [notificationsByFile] Notifications count by file.
     */
    notificationsByFile?: CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreatePartyRepresentativeModel.
 * Notification party and representative create data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreatePartyRepresentativeModel {
    /**
     * @member {string} [representativeId] Representative Guid.
     */
    representativeId?: string;
    /**
     * @member {string} [partyId] Party Guid.
     */
    partyId?: string;
    /**
     * @member {boolean} [notificationDismissed] True if the notification is
     * dismissed at creation. This should be false most of the time.
     */
    notificationDismissed?: boolean;
    /**
     * @member {Date} [accessDate] Access date at creation. This should be null
     * most of the time.
     */
    accessDate?: Date;
    /**
     * @member {Date} [sentDate] Sent date of the email. This should be set only
     * if a corresponding email was sent to this representative.
     */
    sentDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreateModel.
 * Notification create data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreateModel {
    /**
     * @member {string} [notificationCode] Notification code.
     */
    notificationCode?: string;
    /**
     * @member {string} [businessRuleName] Business rule of the notification.
     */
    businessRuleName?: string;
    /**
     * @member {string} [fileId] File Guid of the notification.
     */
    fileId?: string;
    /**
     * @member {string} [aggregatorCode] Aggregator code. This code is used to
     * group some notifications by another mean than simply the notification
     * code. This is used by applications.
     */
    aggregatorCode?: string;
    /**
     * @member {string} [message] Content of the notification itself.
     */
    message?: string;
    /**
     * @member {string} [notificationSubstitutionParameters] Substituted
     * parameters that are used to replace the content of the message.
     */
    notificationSubstitutionParameters?: string;
    /**
     * @member {string} [link] Link to the related file view. This is specific to
     * an application.
     */
    link?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreatePartyRepresentativeModel[]}
     * [partyAndRepresentatives] List of parties and representatives this
     * notification is sent to.
     */
    partyAndRepresentatives?: CyberjusticeLabKernelSharedJudicialFileModelsNotificationCreatePartyRepresentativeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel[]}
     * [notificationResources] Notification message and parameters in localized
     * languages.
     */
    notificationResources?: CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileCreateModel.
 * Model used when creating a new judicial file.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileCreateModel {
    /**
     * @member {string} [name] Name of the file. Required.
     */
    name?: string;
    /**
     * @member {string} [judicialEntityId] Identification of the judicial entity.
     * Required.
     */
    judicialEntityId?: string;
    /**
     * @member {string} [businessRuleName] Name of the business rule. Required.
     */
    businessRuleName?: string;
    /**
     * @member {string} [permission] Permission of the file. Required.
     */
    permission?: string;
    /**
     * @member {{ [propertyName: string]: string }} [attributes] Attributes of
     * the file. Optional.
     */
    attributes?: {
        [propertyName: string]: string;
    };
    /**
     * @member {string} [judicialFileId] Judicial file Id. Optional : Service
     * will create one if none is passed.
     */
    judicialFileId?: string;
    /**
     * @member {string} [formId] Form Id. Optional.
     */
    formId?: string;
    /**
     * @member {string} [status] Status of the file. Optional. Draft by default.
     */
    status?: string;
    /**
     * @member {string} [currentWorkflow] Current workflow of the file. Optional.
     */
    currentWorkflow?: string;
    /**
     * @member {string} [matterId] MatterId - Optional
     */
    matterId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLastActorRequestData.
 * Last actor request data.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLastActorRequestData {
    /**
     * @member {string} [fileId] Identification of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyName] Identification of the party.
     */
    partyName?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiRequestData.
 * Request data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiRequestData {
    /**
     * @member {string[]} [logTemplateIds] Filter by log template Ids.
     */
    logTemplateIds?: string[];
    /**
     * @member {string[]} [eventCodes] Filter by event codes.
     */
    eventCodes?: string[];
    /**
     * @member {string} [entryCodeSearchText] Search by entry code.
     */
    entryCodeSearchText?: string;
    /**
     * @member {string} [searchInMessages] String to search in the messages.
     */
    searchInMessages?: string;
    /**
     * @member {string[]} [searchInMessagesLanguages] Search only in specific
     * languages (it's necessary for make a search in message "SearchInMessages
     * parameter").
     */
    searchInMessagesLanguages?: string[];
    /**
     * @member {string} [searchStatus] Filter templates by status. Ignore this
     * value (null) to get any template status.
     */
    searchStatus?: string;
    /**
     * @member {string} [specificStatus] Filter templates by one specific status.
     * Ignore this value (null) to get any template status.
     */
    specificStatus?: string;
    /**
     * @member {OrderBy7} [orderBy] Order by columns. Possible values include:
     * 'EventCode', 'Status', 'CultureMessage'
     */
    orderBy?: OrderBy7;
    /**
     * @member {string} [orderByCulture] Culture for the order by columns (Only
     * for the case when the order by message template).
     */
    orderByCulture?: string;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel.
 * Log permission model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel {
    /**
     * @member {string} [logPermissionId] Log permission identifier. During a
     * create/update operation, if it is null, a new log permission object will
     * be created.
     */
    logPermissionId?: string;
    /**
     * @member {boolean} [visibleByDefault] True if the log entry is visible by
     * default.
     */
    visibleByDefault?: boolean;
    /**
     * @member {string[]} [permissionExceptions] The roles that are exceptions to
     * the default visibility.
     */
    permissionExceptions?: string[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateModel.
 * Log template model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateModel {
    /**
     * @member {string} [logTemplateId] Log template Guid.
     */
    logTemplateId?: string;
    /**
     * @member {string} [eventCode] The event code of the template.
     */
    eventCode?: string;
    /**
     * @member {string} [status] The status of the template.
     */
    status?: string;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel}
     * [permissionModel] Link between the template and a permission object.
     */
    permissionModel?: CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel;
    /**
     * @member {{ [propertyName: string]: string }} [templateMessages] Localized
     * template messages. The key is the language, the value is the message.
     */
    templateMessages?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiResponseData.
 * Response data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiResponseData {
    /**
     * @member {number} [count] Objects count.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Filtered objects count.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateModel[]}
     * [logTemplates] List of log templates.
     */
    logTemplates?: CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestDataDedicatedSearch.
 * Search text for particular
 * columns.{CyberjusticeLab.Kernel.Shared.JudicialFile.LogEntrySearchColumns}
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestDataDedicatedSearch {
    /**
     * @member {string} [entryDate]
     */
    entryDate?: string;
    /**
     * @member {string} [authorName]
     */
    authorName?: string;
    /**
     * @member {string} [authorRole]
     */
    authorRole?: string;
    /**
     * @member {string} [fileStep]
     */
    fileStep?: string;
    /**
     * @member {string} [message]
     */
    message?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData.
 * Request data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData {
    /**
     * @member {string} [fileId] File Guid filter.
     */
    fileId?: string;
    /**
     * @member {string} [currentRole] Current role of the user.
     */
    currentRole?: string;
    /**
     * @member {Date} [minEntryDate] Min date.
     */
    minEntryDate?: Date;
    /**
     * @member {Date} [maxEntryDate] Max date.
     */
    maxEntryDate?: Date;
    /**
     * @member {string} [globalSearchText] Global search text.
     */
    globalSearchText?: string;
    /**
     * @member {string} [searchMessageLanguage] Search and order by in a specific
     * language (it's necessary for make a search with "GlobalSearchText,
     * DedicatedSearch and OrderBy parameters").
     */
    searchMessageLanguage?: string;
    /**
     * @member {string[]} [globalSearchBy] List of global search by columns.
     */
    globalSearchBy?: string[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestDataDedicatedSearch}
     * [dedicatedSearch] Search text for particular
     * columns.{CyberjusticeLab.Kernel.Shared.JudicialFile.LogEntrySearchColumns}
     */
    dedicatedSearch?: CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestDataDedicatedSearch;
    /**
     * @member {OrderBy8} [orderBy] Order by columns. Possible values include:
     * 'AuthorName', 'AuthorRole', 'FileStep', 'EntryDate', 'Message'
     */
    orderBy?: OrderBy8;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogEntryResourceModel.
 * Log entry resource model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogEntryResourceModel {
    /**
     * @member {string} [culture] The language of this message.
     */
    culture?: string;
    /**
     * @member {string} [message] Message of the log entry.
     */
    message?: string;
    /**
     * @member {string} [dynamicParameters] Dynamic parameters that were used to
     * create this message. This is a JSON strings that can be decoded into a
     * list of
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.LogEntryDynamicParameterModel}.
     */
    dynamicParameters?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogEntryModel.
 * Log entry model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogEntryModel {
    /**
     * @member {string} [logEntryId] Log entry Guid.
     */
    logEntryId?: string;
    /**
     * @member {string} [fileId] File of this log.
     */
    fileId?: string;
    /**
     * @member {string} [logTemplateId] Template of this log.
     */
    logTemplateId?: string;
    /**
     * @member {string} [authorName] Author of the log entry.
     */
    authorName?: string;
    /**
     * @member {string} [authorRole] Role of the author.
     */
    authorRole?: string;
    /**
     * @member {string} [authorUID] Unique ID to identify the author.
     */
    authorUID?: string;
    /**
     * @member {string} [fileStep] File step when this entry happened (this file
     * step depends of how work the flow and sub flow in the client application).
     */
    fileStep?: string;
    /**
     * @member {Date} [entryDate] The date the entry was made.
     */
    entryDate?: Date;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsLogEntryResourceModel[]}
     * [logEntryResources] Resource models.
     */
    logEntryResources?: CyberjusticeLabKernelSharedJudicialFileModelsLogEntryResourceModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData.
 * Response data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData {
    /**
     * @member {number} [count] Objects count.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Filtered objects count.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsLogEntryModel[]}
     * [logEntries] List of log entries.
     */
    logEntries?: CyberjusticeLabKernelSharedJudicialFileModelsLogEntryModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateCreateModel.
 * Log template create model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateCreateModel {
    /**
     * @member {string} [eventCode] The event code of the new template.
     */
    eventCode?: string;
    /**
     * @member {string} [status] The status of the new template.
     */
    status?: string;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel}
     * [permissionModel] Link between the new template and a permission object.
     */
    permissionModel?: CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel;
    /**
     * @member {{ [propertyName: string]: string }} [templateMessages] Localized
     * template messages. The key is the language, the value is the message.
     */
    templateMessages?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogEntryCreateModel.
 * Log entry create model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogEntryCreateModel {
    /**
     * @member {string} [fileId] File of this log.
     */
    fileId?: string;
    /**
     * @member {string} [eventCode] Event code to find a corresponding template.
     */
    eventCode?: string;
    /**
     * @member {string} [authorName] Author of the log entry.
     */
    authorName?: string;
    /**
     * @member {string} [authorRole] Role of the author.
     */
    authorRole?: string;
    /**
     * @member {string} [authorUID] Unique ID to identify the author.
     */
    authorUID?: string;
    /**
     * @member {string} [fileStep] File step when this entry happened (this file
     * step depends of how work the flow and sub flow in the client application).
     */
    fileStep?: string;
    /**
     * @member {Date} [entryDate] The date the entry was made.
     */
    entryDate?: Date;
    /**
     * @member {{ [propertyName: string]: string }}
     * [cultureDynamicParametersDictionary] Resource models. The dynamic
     * parameters are JSON strings that can be decoded into a list of
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.LogEntryDynamicParameterModel}.
     */
    cultureDynamicParametersDictionary?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel.
 * Represents a penal çharge statement to be created.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel {
    /**
     * @member {string} [partyId] Party Guid for this charge.
     */
    partyId?: string;
    /**
     * @member {string} [ruleType] Charge rule type.
     */
    ruleType?: string;
    /**
     * @member {string} [ruleCode] Charge rule code. External Identifier.
     */
    ruleCode?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel[]}
     * [attributes] Attributes dictionary.
     */
    attributes?: CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel[];
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsPleaModel} [plea]
     * Plea of the charge.
     */
    plea?: CyberjusticeLabKernelSharedJudicialFileModelsPleaModel;
    /**
     * @member {Date} [offenceStatementDate] The offence statement date.
     */
    offenceStatementDate?: Date;
    /**
     * @member {string} [offenceStatementDescription] The offence statement
     * description.
     */
    offenceStatementDescription?: string;
    /**
     * @member {string} [offenceStatementNumber] The offence statement number.
     */
    offenceStatementNumber?: string;
    /**
     * @member {string} [documentId] Optional document Id.
     */
    documentId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeContactModel.
 * The representative contact model
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeContactModel {
    /**
     * @member {string} [firstName] First name of the contact.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the contact.
     */
    lastName?: string;
    /**
     * @member {string} [adresse] Address of the contact.
     */
    adresse?: string;
    /**
     * @member {string} [adresse2] Second address of the contact.
     */
    adresse2?: string;
    /**
     * @member {string} [city] City of the contact.
     */
    city?: string;
    /**
     * @member {string} [state] State of the contact.
     */
    state?: string;
    /**
     * @member {string} [country] Country of the contact.
     */
    country?: string;
    /**
     * @member {string} [zipCode] Zip code of the contact.
     */
    zipCode?: string;
    /**
     * @member {string} [email] Email of the contact.
     */
    email?: string;
    /**
     * @member {string} [website] Website of the contact.
     */
    website?: string;
    /**
     * @member {string} [latitude] The Gps latitude in degree for the City and
     * Postal Code of the model.
     */
    latitude?: string;
    /**
     * @member {string} [longitude] The Gps latitude in degree for the City and
     * Postal Code of the model.
     */
    longitude?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel[]}
     * [phoneNumbers] List of the phone numbers of the contact.
     */
    phoneNumbers?: CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel[]}
     * [contactAttributes] List of the attributes of the contact.
     */
    contactAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel.
 * The representative create contact model
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel {
    /**
     * @member {string} [representativeId] The representative ID
     */
    representativeId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeContactModel}
     * [contact] The contact information
     */
    contact?: CyberjusticeLabKernelSharedJudicialFileModelsRepresentativeContactModel;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsCloseFileModel.
 * Model used to close a file
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsCloseFileModel {
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [reason] The reason provided to close the file.
     */
    reason?: string;
    /**
     * @member {Date} [lastModified] Time stamp of the last modification of the
     * file.  Used for optimistic concurrency check.
     */
    lastModified?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileAttributesUpdateModel.
 * Model to update the file attributes of a file.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileAttributesUpdateModel {
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsFileAttributeModel[]}
     * [attributes] Attributes of the file.
     */
    attributes?: CyberjusticeLabKernelSharedJudicialFileModelsFileAttributeModel[];
    /**
     * @member {string} [fileId] Identification of the file.
     */
    fileId?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     */
    modifiedDateTicks?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel.
 * Model used to upsert a party.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel {
    /**
     * @member {string} [partyId] Identification of the party.
     */
    partyId?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyType] Type of the party.
     */
    partyType?: string;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsContactModel}
     * [contact] Contact of the party.
     */
    contact?: CyberjusticeLabKernelSharedJudicialFileModelsContactModel;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsContactModel}
     * [mainRepresentativeContact] Representative's contact of the party.
     */
    mainRepresentativeContact?: CyberjusticeLabKernelSharedJudicialFileModelsContactModel;
    /**
     * @member {string} [disputeDescription] Dispute description made by the
     * party.
     */
    disputeDescription?: string;
    /**
     * @member {string} [authorityId] The party's authority Guid.
     */
    authorityId?: string;
    /**
     * @member {string} [partyEntityId] The party's linked party entity.
     */
    partyEntityId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsPartyAttributeModel[]}
     * [partyAttributes] The attributes of the party.
     */
    partyAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsPartyAttributeModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPartyContactUpsertModel.
 * Model used to upsert a contact into a party.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPartyContactUpsertModel {
    /**
     * @member {string} [partyId] Identification of the Party.
     */
    partyId?: string;
    /**
     * @member {boolean} [isMainPartyContact] Flag that indicate if we're
     * updating the partyContact or the main Party contact.
     */
    isMainPartyContact?: boolean;
    /**
     * @member {string} [id] Identification of the contact.
     */
    id?: string;
    /**
     * @member {boolean} [isCompany] True if is a company or false.
     */
    isCompany?: boolean;
    /**
     * @member {string} [companyName] Name of the company.
     */
    companyName?: string;
    /**
     * @member {string} [firstName] First name of the contact.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the contact.
     */
    lastName?: string;
    /**
     * @member {string} [address] Address of the contact.
     */
    address?: string;
    /**
     * @member {string} [address2] Second address of the contact.
     */
    address2?: string;
    /**
     * @member {string} [city] City of the contact.
     */
    city?: string;
    /**
     * @member {string} [state] State of the contact.
     */
    state?: string;
    /**
     * @member {string} [country] Country of the contact.
     */
    country?: string;
    /**
     * @member {string} [zipCode] Zip code of the contact.
     */
    zipCode?: string;
    /**
     * @member {string} [email] Email of the contact.
     */
    email?: string;
    /**
     * @member {string} [website] Website of the contact.
     */
    website?: string;
    /**
     * @member {string} [latitude] The Gps latitude in degree for the City and
     * Postal Code of the model.
     */
    latitude?: string;
    /**
     * @member {string} [longitude] The Gps longitude in degree for the City and
     * Postal Code of the model.
     */
    longitude?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel[]}
     * [phoneNumbers] List of the phone numbers of the contact.
     */
    phoneNumbers?: CyberjusticeLabKernelSharedJudicialFileModelsContactPhoneNumberModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel[]}
     * [contactAttributes] List of the attributes of the contact.
     */
    contactAttributes?: CyberjusticeLabKernelSharedJudicialFileModelsContactAttributeModel[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateModel.
 * Class used to create a judicial file tag.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateModel {
    /**
     * @member {string} [fileId] Guid primary key.
     */
    fileId?: string;
    /**
     * @member {string} [tagCode] Tag string identifier.
     */
    tagCode?: string;
    /**
     * @member {string} [taskStatus] Tag optional task status.
     */
    taskStatus?: string;
    /**
     * @member {string} [taskActor] Tag optional task actor.
     */
    taskActor?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object. Required for
     * optimistic concurrency.
     */
    modifiedDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateWithComplementModel.
 * Class used to create an information complement for a file's tag.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagUpdateWithComplementModel {
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel[]}
     * [complements] One to many tag link complements.
     */
    complements?: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagComplementModel[];
    /**
     * @member {string} [fileId] Guid primary key.
     */
    fileId?: string;
    /**
     * @member {string} [tagCode] Tag string identifier.
     */
    tagCode?: string;
    /**
     * @member {string} [taskStatus] Tag optional task status.
     */
    taskStatus?: string;
    /**
     * @member {string} [taskActor] Tag optional task actor.
     */
    taskActor?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object. Required for
     * optimistic concurrency.
     */
    modifiedDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeResourceUpdateModel.
 * Notification type resource update class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeResourceUpdateModel {
    /**
     * @member {string} [notificationCode] Notification code.
     */
    notificationCode?: string;
    /**
     * @member {string} [businessRuleName] Business rule of the notification
     * type.
     */
    businessRuleName?: string;
    /**
     * @member {string} [culture] Specific culture to modify.
     */
    culture?: string;
    /**
     * @member {string} [content] Content to modify.
     */
    content?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationUpdateModel.
 * Notification update data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationUpdateModel {
    /**
     * @member {number} [notificationId] Notification Id.
     */
    notificationId?: number;
    /**
     * @member {string} [aggregatorCode] Aggregator code. This code is used to
     * group some notifications by another mean than simply the notification
     * code. This is used by applications.
     */
    aggregatorCode?: string;
    /**
     * @member {string} [message] Content of the notification itself.
     */
    message?: string;
    /**
     * @member {string} [notificationSubstitutionParameters] Substituted
     * parameters that are used to replace the content of the message.
     */
    notificationSubstitutionParameters?: string;
    /**
     * @member {string} [link] Link to the related file view. This is specific to
     * an application.
     */
    link?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel[]}
     * [notificationResources] Notification message and parameters in localized
     * languages.
     */
    notificationResources?: CyberjusticeLabKernelSharedJudicialFileModelsNotificationResourceModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsNotificationRepresentativeUpdateModel.
 * Notification representative update data class.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsNotificationRepresentativeUpdateModel {
    /**
     * @member {number} [notificationId] Notification Id.
     */
    notificationId?: number;
    /**
     * @member {Date} [accessDate] Date when the representative accessed the
     * notification.
     */
    accessDate?: Date;
    /**
     * @member {Date} [sentDate] Date that the system sent the notification.
     */
    sentDate?: Date;
    /**
     * @member {boolean} [notificationDismissed] True if the notification has
     * been dismissed by the user.
     */
    notificationDismissed?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel.
 * Log template update model.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateUpdateModel {
    /**
     * @member {string} [logTemplateId] Log template Guid.
     */
    logTemplateId?: string;
    /**
     * @member {string} [eventCode] The event code of the template.
     */
    eventCode?: string;
    /**
     * @member {string} [status] The status of the template.
     */
    status?: string;
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel}
     * [permissionModel] Link between the template and a permission object. If
     * null, the permission will not be updated.
     */
    permissionModel?: CyberjusticeLabKernelSharedJudicialFileModelsLogPermissionModel;
    /**
     * @member {{ [propertyName: string]: string }} [templateMessages] Localized
     * template messages. The key is the language, the value is the message.
     */
    templateMessages?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel.
 * Represents a penal çharge statement to be updated.
 *
 */
export interface CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel {
    /**
     * @member {string} [chargeId] Guid of the charge.
     */
    chargeId?: string;
    /**
     * @member {string} [partyId] Party Guid for this charge.
     */
    partyId?: string;
    /**
     * @member {string} [ruleType] Charge rule type.
     */
    ruleType?: string;
    /**
     * @member {string} [ruleCode] Charge rule code. External Identifier.
     */
    ruleCode?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel[]}
     * [attributes] Attributes dictionary.
     */
    attributes?: CyberjusticeLabKernelSharedJudicialFileModelsChargeAttributeModel[];
    /**
     * @member {CyberjusticeLabKernelSharedJudicialFileModelsPleaModel} [plea]
     * Plea of the charge.
     */
    plea?: CyberjusticeLabKernelSharedJudicialFileModelsPleaModel;
    /**
     * @member {Date} [offenceStatementDate] The offence statement date.
     */
    offenceStatementDate?: Date;
    /**
     * @member {string} [offenceStatementDescription] The offence statement
     * description.
     */
    offenceStatementDescription?: string;
    /**
     * @member {string} [offenceStatementNumber] The offence statement number.
     */
    offenceStatementNumber?: string;
    /**
     * @member {string} [documentId] Optional document Id.
     */
    documentId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [modifiedDateTicks] The modified date of an object,
     * expressed in ticks.
     * Required for optimistic concurrency.
     * Prevent loss of precision when converting to JS object.
     * **NOTE: This property will not be serialized. It can only be populated by
     * the server.**
     */
    readonly modifiedDateTicks?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLocationLocationRoomData.
 * Class used to represent a LocationRoom.
 *
 */
export interface CyberjusticeLabKernelSharedLocationLocationRoomData {
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {string} [locationRoomId] The Internal ID of the locationRoom.
     * Ignored on creation, verified existence otherwise.
     */
    locationRoomId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [locationBuildingId] The ID of the
     * {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingData} which this
     * room belongs to.
     * Verified existence.
     */
    locationBuildingId?: string;
    /**
     * @member {string} [name] Name of the Room.
     * Required (empty string not allowed). Validated as unique amongst other
     * active rooms of the building.
     */
    name?: string;
    /**
     * @member {string} [code] Code of the Room.
     * Required (empty string not allowed). Validated as unique amongst other
     * active rooms of the building.
     */
    code?: string;
    /**
     * @member {string} [roomNumber] Number of the Room.
     * Optional.
     */
    roomNumber?: string;
    /**
     * @member {number} [capacity] Capacity of the Room.
     * Optional. No negative values.
     */
    capacity?: number;
    /**
     * @member {LocationStatus} [locationStatus] The Status of the locationRoom.
     * An inactive room is deleted and accessible only to clerks.
     * Required. Possible values include: 'Active', 'Inactive'
     */
    locationStatus?: LocationStatus;
    /**
     * @member {Date} [startDate] The first available day for the room.
     * Required. Can not be set before today's date.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] The last available day for the room.
     * Required. Can not be set before the start date.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLocationLocationBuildingData.
 * Class used to represent a LocationBuilding.
 *
 */
export interface CyberjusticeLabKernelSharedLocationLocationBuildingData {
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {CyberjusticeLabKernelSharedLocationLocationRoomData[]}
     * [locationRooms] The locationBuilding's Room list.
     * Optional.
     */
    locationRooms?: CyberjusticeLabKernelSharedLocationLocationRoomData[];
    /**
     * @member {string} [locationBuildingId] The internal ID of the
     * locationBuilding.
     * Ignored on creation, verified existence otherwise.
     */
    locationBuildingId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [name] The name of the locationBuilding.
     * Required (empty string not allowed). Validated as unique amongst other
     * active buildings of the judicial entity.
     */
    name?: string;
    /**
     * @member {string} [address] The address of the locationBuilding.
     * Required (empty string not allowed).
     */
    address?: string;
    /**
     * @member {string} [city] The City of the locationBuilding.
     * Required (empty string not allowed).
     */
    city?: string;
    /**
     * @member {string} [state] The State of the locationBuilding.
     * Required (empty string not allowed).
     */
    state?: string;
    /**
     * @member {string} [postalCode] The Postal Code of the locationBuilding.
     * Required (empty string not allowed).
     */
    postalCode?: string;
    /**
     * @member {string} [country] The Country of the locationBuilding.
     * Required (empty string not allowed).
     */
    country?: string;
    /**
     * @member {LocationStatus1} [locationStatus] The Status of the
     * locationBuilding. An inactive building is a deleted and accessible only to
     * clerks.
     * Required. Possible values include: 'Active', 'Inactive'
     */
    locationStatus?: LocationStatus1;
    /**
     * @member {string} [judicialEntityId] The locationBuilding's owner judicial
     * entity.
     * Verified existence.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLocationLocationBuildingUpdateData.
 * DTO Class used to transfer the required information needed to update a
 * LocationBuilding. Used when calling PUT action
 * CyberjusticeLab.Services.WebAPI.Controllers.LocationController.UpdateBuilding.
 *
 */
export interface CyberjusticeLabKernelSharedLocationLocationBuildingUpdateData {
    /**
     * @member {string} [locationBuildingId] The internal ID of the
     * locationBuilding.
     * Ignored on creation, verified existence otherwise.
     */
    locationBuildingId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [name] The name of the locationBuilding.
     * Required (empty string not allowed). Validated as unique amongst other
     * active buildings of the judicial entity.
     */
    name?: string;
    /**
     * @member {string} [address] The address of the locationBuilding.
     * Required (empty string not allowed).
     */
    address?: string;
    /**
     * @member {string} [city] The City of the locationBuilding.
     * Required (empty string not allowed).
     */
    city?: string;
    /**
     * @member {string} [state] The State of the locationBuilding.
     * Required (empty string not allowed).
     */
    state?: string;
    /**
     * @member {string} [postalCode] The Postal Code of the locationBuilding.
     * Required (empty string not allowed).
     */
    postalCode?: string;
    /**
     * @member {string} [country] The Country of the locationBuilding.
     * Required (empty string not allowed).
     */
    country?: string;
    /**
     * @member {LocationStatus2} [locationStatus] The Status of the
     * locationBuilding. An inactive building is a deleted and accessible only to
     * clerks.
     * Required. Possible values include: 'Active', 'Inactive'
     */
    locationStatus?: LocationStatus2;
    /**
     * @member {string} [judicialEntityId] The locationBuilding's owner judicial
     * entity.
     * Verified existence.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLocationLocationRoomUpdateData.
 * DTO Class used to transfer the required information needed to update a
 * LocationRoom. Used when calling PUT action
 * CyberjusticeLab.Services.WebAPI.Controllers.LocationController.UpdateRoom.
 *
 */
export interface CyberjusticeLabKernelSharedLocationLocationRoomUpdateData {
    /**
     * @member {string} [locationRoomId] The Internal ID of the locationRoom.
     * Ignored on creation, verified existence otherwise.
     */
    locationRoomId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [locationBuildingId] The ID of the
     * {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingData} which this
     * room belongs to.
     * Verified existence.
     */
    locationBuildingId?: string;
    /**
     * @member {string} [name] Name of the Room.
     * Required (empty string not allowed). Validated as unique amongst other
     * active rooms of the building.
     */
    name?: string;
    /**
     * @member {string} [code] Code of the Room.
     * Required (empty string not allowed). Validated as unique amongst other
     * active rooms of the building.
     */
    code?: string;
    /**
     * @member {string} [roomNumber] Number of the Room.
     * Optional.
     */
    roomNumber?: string;
    /**
     * @member {number} [capacity] Capacity of the Room.
     * Optional. No negative values.
     */
    capacity?: number;
    /**
     * @member {LocationStatus3} [locationStatus] The Status of the locationRoom.
     * An inactive room is deleted and accessible only to clerks.
     * Required. Possible values include: 'Active', 'Inactive'
     */
    locationStatus?: LocationStatus3;
    /**
     * @member {Date} [startDate] The first available day for the room.
     * Required. Can not be set before today's date.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] The last available day for the room.
     * Required. Can not be set before the start date.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLocationLocationBuildingCreateData.
 * DTO Class used to transfer the required information needed to create a
 * LocationBuilding. Used when calling POST action
 * CyberjusticeLab.Services.WebAPI.Controllers.LocationController.CreateBuilding.
 *
 */
export interface CyberjusticeLabKernelSharedLocationLocationBuildingCreateData {
    /**
     * @member {string} [name] The name of the locationBuilding.
     * Required (empty string not allowed). Validated as unique amongst other
     * active buildings of the judicial entity.
     */
    name?: string;
    /**
     * @member {string} [address] The address of the locationBuilding.
     * Required (empty string not allowed).
     */
    address?: string;
    /**
     * @member {string} [city] The City of the locationBuilding.
     * Required (empty string not allowed).
     */
    city?: string;
    /**
     * @member {string} [state] The State of the locationBuilding.
     * Required (empty string not allowed).
     */
    state?: string;
    /**
     * @member {string} [postalCode] The Postal Code of the locationBuilding.
     * Required (empty string not allowed).
     */
    postalCode?: string;
    /**
     * @member {string} [country] The Country of the locationBuilding.
     * Required (empty string not allowed).
     */
    country?: string;
    /**
     * @member {LocationStatus4} [locationStatus] The Status of the
     * locationBuilding. An inactive building is a deleted and accessible only to
     * clerks.
     * Required. Possible values include: 'Active', 'Inactive'
     */
    locationStatus?: LocationStatus4;
    /**
     * @member {string} [judicialEntityId] The locationBuilding's owner judicial
     * entity.
     * Verified existence.
     */
    judicialEntityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLocationLocationRoomCreateData.
 * DTO Class used to transfer the required information needed to create a
 * LocationRoom. Used when calling POST action
 * CyberjusticeLab.Services.WebAPI.Controllers.LocationController.CreateRoom.
 *
 */
export interface CyberjusticeLabKernelSharedLocationLocationRoomCreateData {
    /**
     * @member {string} [locationBuildingId] The ID of the
     * {CyberjusticeLab.Kernel.Shared.Location.LocationBuildingData} which this
     * room belongs to.
     * Verified existence.
     */
    locationBuildingId?: string;
    /**
     * @member {string} [name] Name of the Room.
     * Required (empty string not allowed). Validated as unique amongst other
     * active rooms of the building.
     */
    name?: string;
    /**
     * @member {string} [code] Code of the Room.
     * Required (empty string not allowed). Validated as unique amongst other
     * active rooms of the building.
     */
    code?: string;
    /**
     * @member {string} [roomNumber] Number of the Room.
     * Optional.
     */
    roomNumber?: string;
    /**
     * @member {number} [capacity] Capacity of the Room.
     * Optional. No negative values.
     */
    capacity?: number;
    /**
     * @member {LocationStatus5} [locationStatus] The Status of the locationRoom.
     * An inactive room is deleted and accessible only to clerks.
     * Required. Possible values include: 'Active', 'Inactive'
     */
    locationStatus?: LocationStatus5;
    /**
     * @member {Date} [startDate] The first available day for the room.
     * Required. Can not be set before today's date.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] The last available day for the room.
     * Required. Can not be set before the start date.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLookupModelsLookupValueModel.
 * Class to store lookup localized value for a specific culture.
 *
 */
export interface CyberjusticeLabKernelSharedLookupModelsLookupValueModel {
    /**
     * @member {string} [cultureName] The name of a specific culture.
     */
    cultureName?: string;
    /**
     * @member {string} [localizedValue] The localized value of a lookup.
     */
    localizedValue?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLookupModelsLookupModel.
 * Class used to represents a lookup.
 *
 */
export interface CyberjusticeLabKernelSharedLookupModelsLookupModel {
    /**
     * @member {string} [name] The name of the lookup.
     */
    name?: string;
    /**
     * @member {CyberjusticeLabKernelSharedLookupModelsLookupValueModel[]}
     * [lookupValues] The lookup values for existent cultures.
     */
    lookupValues?: CyberjusticeLabKernelSharedLookupModelsLookupValueModel[];
    /**
     * @member {string} [description] The description of the lookup.
     */
    description?: string;
    /**
     * @member {CyberjusticeLabKernelSharedLookupModelsLookupModel[]} [children]
     * The children of the lookup
     */
    children?: CyberjusticeLabKernelSharedLookupModelsLookupModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedLookupModelsLookupApiRequestData.
 * Model used to get lookups.
 *
 */
export interface CyberjusticeLabKernelSharedLookupModelsLookupApiRequestData {
    /**
     * @member {string[]} [lookupNames] List of names of the requested lookups.
     * If Empty : Request all the lookups.
     */
    lookupNames?: string[];
    /**
     * @member {string[]} [cultures] List of codes of requested cultures
     * If empty : Request all cultures
     */
    cultures?: string[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationDeleteData.
 * Class used to delete a prosecuting authority delegation.
 *
 */
export interface CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationDeleteData {
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [delegatingAuthorityId] Delegating authority id.
     */
    delegatingAuthorityId?: string;
    /**
     * @member {string} [procedureCategory] Procedure category.
     */
    procedureCategory?: string;
    /**
     * @member {string} [delegateAuthorityId] Delegate authority id.
     */
    delegateAuthorityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedProsecutingAuthorityBaseProsecutingAuthorityData.
 * Class used to represent a prosecuting authority without the delegation data.
 *
 */
export interface CyberjusticeLabKernelSharedProsecutingAuthorityBaseProsecutingAuthorityData {
    /**
     * @member {string} [id] Authority id.
     */
    id?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [code] Authority code.
     */
    code?: string;
    /**
     * @member {string} [name] Authority name.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationData.
 * Class used to represent a prosecuting authority delegation with the
 * prosecuting authority data.
 *
 */
export interface CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationData {
    /**
     * @member
     * {CyberjusticeLabKernelSharedProsecutingAuthorityBaseProsecutingAuthorityData}
     * [delegateAuthority] Delegate authority code.
     */
    delegateAuthority?: CyberjusticeLabKernelSharedProsecutingAuthorityBaseProsecutingAuthorityData;
    /**
     * @member {string} [delegatingAuthorityId] Delegating authority id.
     */
    delegatingAuthorityId?: string;
    /**
     * @member {string} [procedureCategory] Procedure category.
     */
    procedureCategory?: string;
    /**
     * @member {string} [delegateAuthorityId] Delegate authority id.
     */
    delegateAuthorityId?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityData.
 * Class used to represent a prosecuting authority with the delegation data.
 *
 */
export interface CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityData {
    /**
     * @member
     * {CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationData[]}
     * [delegateAuthorities] Delegate prosecuting authorities.
     */
    delegateAuthorities?: CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationData[];
    /**
     * @member {string} [id] Authority id.
     */
    id?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [code] Authority code.
     */
    code?: string;
    /**
     * @member {string} [name] Authority name.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityUpdateData.
 * Class used to update a prosecuting authority.
 *
 */
export interface CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityUpdateData {
    /**
     * @member {string} [id] Authority id.
     */
    id?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [code] Authority code.
     */
    code?: string;
    /**
     * @member {string} [name] Authority name.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityCreateData.
 * Class used to create a prosecuting authority.
 *
 */
export interface CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityCreateData {
    /**
     * @member {string} [code] Authority code.
     */
    code?: string;
    /**
     * @member {string} [name] Authority name.
     */
    name?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationCreateData.
 * Class used to create a prosecuting authority delegation.
 *
 */
export interface CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityDelegationCreateData {
    /**
     * @member {string} [delegatingAuthorityId] Delegating authority id.
     */
    delegatingAuthorityId?: string;
    /**
     * @member {string} [procedureCategory] Procedure category.
     */
    procedureCategory?: string;
    /**
     * @member {string} [delegateAuthorityId] Delegate authority id.
     */
    delegateAuthorityId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedRequestRequestAttributeData.
 * Class used to represent a Request Attribute.
 *
 */
export interface CyberjusticeLabKernelSharedRequestRequestAttributeData {
    /**
     * @member {string} [key] Dictionary key.
     */
    key?: string;
    /**
     * @member {string} [value] Dictionary value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedRequestRequestData.
 * Class used to represent a Request.
 *
 */
export interface CyberjusticeLabKernelSharedRequestRequestData {
    /**
     * @member {string} [requestId] Internal Id.
     */
    requestId?: string;
    /**
     * @member {string} [requestCode] Request friendly identification.
     */
    requestCode?: string;
    /**
     * @member {Date} [requestDate] Request date.
     */
    requestDate?: Date;
    /**
     * @member {string} [partyId] The party that made the request.
     */
    partyId?: string;
    /**
     * @member {string} [fileId] The file linked to this request.
     */
    fileId?: string;
    /**
     * @member {string} [description] Request description.
     */
    description?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {CyberjusticeLabKernelSharedRequestRequestAttributeData[]}
     * [requestAttributes] Request attributes.
     */
    requestAttributes?: CyberjusticeLabKernelSharedRequestRequestAttributeData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedRequestRequestCreateData.
 * Class used to create a Request.
 *
 */
export interface CyberjusticeLabKernelSharedRequestRequestCreateData {
    /**
     * @member {Date} [requestDate] Request date.
     */
    requestDate?: Date;
    /**
     * @member {CyberjusticeLabKernelSharedRequestRequestAttributeData[]}
     * [requestAttributes] Request attributes.
     */
    requestAttributes?: CyberjusticeLabKernelSharedRequestRequestAttributeData[];
    /**
     * @member {string} [requestCode] Request friendly identification.
     */
    requestCode?: string;
    /**
     * @member {string} [partyId] The party that made the request.
     */
    partyId?: string;
    /**
     * @member {string} [fileId] The file linked to this request.
     */
    fileId?: string;
    /**
     * @member {string} [description] Request description.
     */
    description?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedRequestRequestUpdateData.
 * Class used to update a Request.
 *
 */
export interface CyberjusticeLabKernelSharedRequestRequestUpdateData {
    /**
     * @member {string} [requestId] Internal Id.
     */
    requestId?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [requestCode] Request friendly identification.
     */
    requestCode?: string;
    /**
     * @member {string} [partyId] The party that made the request.
     */
    partyId?: string;
    /**
     * @member {string} [fileId] The file linked to this request.
     */
    fileId?: string;
    /**
     * @member {string} [description] Request description.
     */
    description?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedRequestRequestUpdateAttributeData.
 * Class used to update the request attributes.
 *
 */
export interface CyberjusticeLabKernelSharedRequestRequestUpdateAttributeData {
    /**
     * @member {string} [requestId] Internal Id.
     */
    requestId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedRequestRequestAttributeData[]}
     * [requestAttributes] Request attributes.
     */
    requestAttributes?: CyberjusticeLabKernelSharedRequestRequestAttributeData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsSecureMailEmailData.
 * Class used to represent an email with all information.
 *
 */
export interface CyberjusticeLabKernelServiceContractsSecureMailEmailData {
    /**
     * @member {number} [emailId] Id of the email.
     */
    emailId?: number;
    /**
     * @member {string} [judicialEntityId] JudicialEntityId of the email's owner.
     */
    judicialEntityId?: string;
    /**
     * @member {string} [culture] Culture of the email.
     */
    culture?: string;
    /**
     * @member {string} [type] Type of the email.
     */
    type?: string;
    /**
     * @member {string} [subject] Subject of the email.
     */
    subject?: string;
    /**
     * @member {string} [message] Message in the email.
     */
    message?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsSecurityClaimValueData.
 * Data model for a claim.
 *
 */
export interface CyberjusticeLabKernelServiceContractsSecurityClaimValueData {
    /**
     * @member {string} [id] Id of a claim.
     */
    id?: string;
    /**
     * @member {string} [issuer] Issuer of a claim.
     */
    issuer?: string;
    /**
     * @member {string} [claimType] Type of a claim.
     */
    claimType?: string;
    /**
     * @member {string} [value] Value of a claim.
     */
    value?: string;
    /**
     * @member {boolean} [isAction] Is action claim value.
     */
    isAction?: boolean;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsSecurityPredicateData.
 * Data model for a predicate.
 *
 */
export interface CyberjusticeLabKernelServiceContractsSecurityPredicateData {
    /**
     * @member {string} [id] Id of a predicate.
     */
    id?: string;
    /**
     * @member {string} [name] Name of a predicate.
     */
    name?: string;
    /**
     * @member {string} [status] Status of a predicate.
     */
    status?: string;
    /**
     * @member {string} [description] Description of a predicate.
     */
    description?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsSecurityPredicateData[]}
     * [referredPredicates] Predicates contained in this predicate.
     */
    referredPredicates?: CyberjusticeLabKernelServiceContractsSecurityPredicateData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsSecurityClaimValueData[]}
     * [claims] Claims contained in this predicate.
     */
    claims?: CyberjusticeLabKernelServiceContractsSecurityClaimValueData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagLocalizedLabelData.
 * Class used to represent a localized label.
 *
 */
export interface CyberjusticeLabKernelSharedTagLocalizedLabelData {
    /**
     * @member {string} [labelId] Label identifier.
     */
    labelId?: string;
    /**
     * @member {string} [text] Localized text.
     */
    text?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagTagData.
 * Class used to represent a Tag.
 *
 */
export interface CyberjusticeLabKernelSharedTagTagData {
    /**
     * @member {string} [tagId] Internal Id.
     */
    tagId?: string;
    /**
     * @member {string} [tagCode] Tag friendly identification.
     */
    tagCode?: string;
    /**
     * @member {string} [targetCode] Tag target object code. For instance,
     * "JudicialFile".
     */
    targetCode?: string;
    /**
     * @member {string} [judicialEntityId] Judicial entity fake foreign key.
     */
    judicialEntityId?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagTagLinkData.
 * Class used to represent a tag link.
 *
 */
export interface CyberjusticeLabKernelSharedTagTagLinkData {
    /**
     * @member {string} [tagId] Tag identifier.
     */
    tagId?: string;
    /**
     * @member {string} [code] Object identifier.
     */
    code?: string;
    /**
     * @member {string} [tagTaskStatus] Tag task status, if applicable.
     */
    tagTaskStatus?: string;
    /**
     * @member {CyberjusticeLabKernelSharedTagTagData} [tag] Tag of this link.
     */
    tag?: CyberjusticeLabKernelSharedTagTagData;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagLabelLocalizationData.
 * Class used to represent a label localization.
 *
 */
export interface CyberjusticeLabKernelSharedTagLabelLocalizationData {
    /**
     * @member {string} [labelId] Label identifier.
     */
    labelId?: string;
    /**
     * @member {string} [cultureCode] Language's culture code for the property
     * LabelText.
     */
    cultureCode?: string;
    /**
     * @member {string} [labelText] Label's localized text.
     */
    labelText?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagLabelData.
 * Class used to represent a Label.
 *
 */
export interface CyberjusticeLabKernelSharedTagLabelData {
    /**
     * @member {string} [labelId] Label identifier.
     */
    labelId?: string;
    /**
     * @member {string} [section] Label's section.
     */
    section?: string;
    /**
     * @member {number} [rank] Rank of the label. If not applicable, leave this
     * at 0.
     */
    rank?: number;
    /**
     * @member {boolean} [default] Indicates if the label is active by default.
     * If not applicable, leave this at false.
     */
    default?: boolean;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {CyberjusticeLabKernelSharedTagLabelLocalizationData[]}
     * [labelLocalizations] The label localizations.
     */
    labelLocalizations?: CyberjusticeLabKernelSharedTagLabelLocalizationData[];
    /**
     * @member {CyberjusticeLabKernelSharedTagTagData[]} [tags] Linked tags.
     */
    tags?: CyberjusticeLabKernelSharedTagTagData[];
    /**
     * @member {string[]} [roleCodes] Roles associated with this label.
     */
    roleCodes?: string[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagTagLinkUpdateData.
 * Class used to update a tag link.
 *
 */
export interface CyberjusticeLabKernelSharedTagTagLinkUpdateData {
    /**
     * @member {string} [tagId] Tag identifier.
     */
    tagId?: string;
    /**
     * @member {string} [tagTaskStatus] Tag task status, if applicable.
     */
    tagTaskStatus?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagLabelLocalizationBaseData.
 * Class used to represent a base label localization.
 *
 */
export interface CyberjusticeLabKernelSharedTagLabelLocalizationBaseData {
    /**
     * @member {string} [cultureCode] Language's culture code for the property
     * LabelText.
     */
    cultureCode?: string;
    /**
     * @member {string} [labelText] Label's localized text.
     */
    labelText?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagLabelUpdateData.
 * Class used to update a Label.
 *
 */
export interface CyberjusticeLabKernelSharedTagLabelUpdateData {
    /**
     * @member {string} [labelId] Label identifier.
     */
    labelId?: string;
    /**
     * @member {string} [section] Label's section.
     */
    section?: string;
    /**
     * @member {number} [rank] Rank of the label. If not applicable, leave this
     * at 0.
     */
    rank?: number;
    /**
     * @member {boolean} [default] Indicates if the label is active by default.
     * If not applicable, leave this at false.
     */
    default?: boolean;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {CyberjusticeLabKernelSharedTagLabelLocalizationBaseData[]}
     * [labelLocalizations] The label localizations.
     */
    labelLocalizations?: CyberjusticeLabKernelSharedTagLabelLocalizationBaseData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagTagLinkCreateData.
 * Class used to create a tag link.
 *
 */
export interface CyberjusticeLabKernelSharedTagTagLinkCreateData {
    /**
     * @member {string} [tagId] Tag identifier.
     */
    tagId?: string;
    /**
     * @member {string} [code] Object identifier.
     */
    code?: string;
    /**
     * @member {string} [tagTaskStatus] Tag task status, if applicable.
     */
    tagTaskStatus?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedTagLabelCreateData.
 * Class used to create a Label.
 *
 */
export interface CyberjusticeLabKernelSharedTagLabelCreateData {
    /**
     * @member {string} [section] Label's section.
     */
    section?: string;
    /**
     * @member {number} [rank] Rank of the label. If not applicable, leave this
     * at 0.
     */
    rank?: number;
    /**
     * @member {boolean} [default] Indicates if the label is active by default.
     * If not applicable, leave this at false.
     */
    default?: boolean;
    /**
     * @member {CyberjusticeLabKernelSharedTagLabelLocalizationBaseData[]}
     * [labelLocalizations] The label localizations.
     */
    labelLocalizations?: CyberjusticeLabKernelSharedTagLabelLocalizationBaseData[];
    /**
     * @member {string[]} [tags] Linked tags.
     */
    tags?: string[];
    /**
     * @member {string[]} [roleCodes] Roles associated with this label.
     */
    roleCodes?: string[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsUProfileUserPhoneNumberData.
 * Represents an user phone number.
 *
 */
export interface CyberjusticeLabKernelServiceContractsUProfileUserPhoneNumberData {
    /**
     * @member {string} [userPhoneNumberId] Id of the user's phone number.
     */
    userPhoneNumberId?: string;
    /**
     * @member {string} [phoneNumber] Phone number of the user.
     */
    phoneNumber?: string;
    /**
     * @member {string} [phoneType] Type of the phone number.
     */
    phoneType?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsUProfileUserAttributeData.
 * Represents a user profile attribute.
 *
 */
export interface CyberjusticeLabKernelServiceContractsUProfileUserAttributeData {
    /**
     * @member {string} [userAttributeKey] Dictionary key for the attribute.
     */
    userAttributeKey?: string;
    /**
     * @member {string} [userAttributeValue] Dictionary value for the attribute.
     */
    userAttributeValue?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsUProfileUserData.
 * Class used to represent a User Profile entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsUProfileUserData {
    /**
     * @member {string} [userId] Id of the user.
     */
    userId?: string;
    /**
     * @member {string} [username] User name.
     */
    username?: string;
    /**
     * @member {string} [realm] Realm.
     */
    realm?: string;
    /**
     * @member {string} [predicateId] Id of the predicate.
     */
    predicateId?: string;
    /**
     * @member {string} [firstname] First name of the user.
     */
    firstname?: string;
    /**
     * @member {string} [lastname] Last name of the user.
     */
    lastname?: string;
    /**
     * @member {string} [address] Address of the user.
     */
    address?: string;
    /**
     * @member {string} [complementAddress] Complement of the user's address.
     */
    complementAddress?: string;
    /**
     * @member {string} [city] City of the user.
     */
    city?: string;
    /**
     * @member {string} [state] State of the user.
     */
    state?: string;
    /**
     * @member {string} [zipCode] Zip code of the user.
     */
    zipCode?: string;
    /**
     * @member {string} [country] Country of the user.
     */
    country?: string;
    /**
     * @member {string} [email] Email of the user.
     */
    email?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsUProfileUserPhoneNumberData[]}
     * [userPhoneNumbers] List of the phone numbers of the user.
     */
    userPhoneNumbers?: CyberjusticeLabKernelServiceContractsUProfileUserPhoneNumberData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsUProfileUserAttributeData[]}
     * [userAttributes] List of attributes for the user.
     */
    userAttributes?: CyberjusticeLabKernelServiceContractsUProfileUserAttributeData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsUserUserData.
 * Class used to represent a User entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsUserUserData {
    /**
     * @member {number} [id] Id of the new auto-rep user.
     */
    id?: number;
    /**
     * @member {number} [organizationID] Id of the organization.
     */
    organizationID?: number;
    /**
     * @member {string} [userName] User name of the auto-rep.
     */
    userName?: string;
    /**
     * @member {string} [city] City of the auto-rep.
     */
    city?: string;
    /**
     * @member {string} [country] Country of the auto-rep.
     */
    country?: string;
    /**
     * @member {string} [province] Province of the auto-rep.
     */
    province?: string;
    /**
     * @member {string} [zipcode] Zip code of the auto-rep.
     */
    zipcode?: string;
    /**
     * @member {string} [phone] Phone number of the auto-rep.
     */
    phone?: string;
    /**
     * @member {string} [phone2] Second phone number of the auto-rep.
     */
    phone2?: string;
    /**
     * @member {string} [address] Address of the auto-rep.
     */
    address?: string;
    /**
     * @member {string} [address2] Second address of the auto-rep.
     */
    address2?: string;
    /**
     * @member {string} [password] Password of the auto-rep.
     */
    password?: string;
    /**
     * @member {string} [email] Email of the auto-rep.
     */
    email?: string;
    /**
     * @member {string} [firstName] First name of the auto-rep.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the auto-rep.
     */
    lastName?: string;
    /**
     * @member {boolean} [isActive] Status of the user's account.
     */
    isActive?: boolean;
    /**
     * @member {string[]} [groups] Name of the Groups.
     */
    groups?: string[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsUserGroupData.
 * Represents a group in an organization.
 *
 */
export interface CyberjusticeLabKernelServiceContractsUserGroupData {
    /**
     * @member {number} [groupId] Id of the group.
     */
    groupId?: number;
    /**
     * @member {string} [groupName] Name of the group.
     */
    groupName?: string;
    /**
     * @member {number} [organizationId] Organization Id of the group.
     */
    organizationId?: number;
    /**
     * @member {string} [description] Description of the group.
     */
    description?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsUserUserData[]} [users] Id
     * of the user.
     */
    users?: CyberjusticeLabKernelServiceContractsUserUserData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsUserClaimTransformationRuleData.
 * Represents a claim transformation rule.
 *
 */
export interface CyberjusticeLabKernelServiceContractsUserClaimTransformationRuleData {
    /**
     * @member {number} [claimRuleId] Id of the claim transformation rule.
     */
    claimRuleId?: number;
    /**
     * @member {number} [organizationId] Organization Id of the claim
     * transformation rule.
     */
    organizationId?: number;
    /**
     * @member {number} [groupId] Set this property to send the current user
     * group Id.
     */
    groupId?: number;
    /**
     * @member {string} [claimTypeURI] Claim type URI of the claim transformation
     * rule.
     */
    claimTypeURI?: string;
    /**
     * @member {string} [claimType] Claim type of the claim transformation rule.
     */
    claimType?: string;
    /**
     * @member {boolean} [isUserName] Set this property to send the current user
     * user name.
     */
    isUserName?: boolean;
    /**
     * @member {boolean} [isFirstName] Set this property to send the current user
     * first name.
     */
    isFirstName?: boolean;
    /**
     * @member {boolean} [isLastName] Set this property to send the current user
     * last name.
     */
    isLastName?: boolean;
    /**
     * @member {boolean} [isEmail] Set this property to send the current user
     * email.
     */
    isEmail?: boolean;
    /**
     * @member {boolean} [isTenant] Set this property to send the current user
     * tenant.
     */
    isTenant?: boolean;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsUserOrganizationData.
 * Represents an organization.
 *
 */
export interface CyberjusticeLabKernelServiceContractsUserOrganizationData {
    /**
     * @member {number} [organizationId] Id of the organization.
     */
    organizationId?: number;
    /**
     * @member {string} [organizationName] Name of the organization.
     */
    organizationName?: string;
    /**
     * @member {string} [organizationDomain] Domain of the organization.
     */
    organizationDomain?: string;
    /**
     * @member {string} [organizationGuid] GUID of the organization.
     */
    organizationGuid?: string;
    /**
     * @member {string} [tenantId] GUID of identifying the application tenant
     * linked to the organization.
     */
    tenantId?: string;
    /**
     * @member {CyberjusticeLabKernelServiceContractsUserGroupData[]} [groups]
     * Groups of the organization.
     */
    groups?: CyberjusticeLabKernelServiceContractsUserGroupData[];
    /**
     * @member {CyberjusticeLabKernelServiceContractsUserUserData[]} [users]
     * Users of the organization.
     */
    users?: CyberjusticeLabKernelServiceContractsUserUserData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsUserClaimTransformationRuleData[]}
     * [claimTransformationRules] Claim transformation rules of the organization.
     */
    claimTransformationRules?: CyberjusticeLabKernelServiceContractsUserClaimTransformationRuleData[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedUserModelsOrganizationSummaryModel.
 * Summarize the information of an organization.
 *
 */
export interface CyberjusticeLabKernelSharedUserModelsOrganizationSummaryModel {
    /**
     * @member {number} [id] Id of the organization.
     */
    id?: number;
    /**
     * @member {string} [name] Name of the organization.
     */
    name?: string;
    /**
     * @member {string} [domain] Domain of the organization.
     */
    domain?: string;
    /**
     * @member {string} [publicId] Public id of the organization.
     */
    publicId?: string;
    /**
     * @member {string} [tenantId] Id identifying the application tenant linked
     * to the organization.
     */
    tenantId?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsWitnessWitnessPhoneNumberData.
 * Class use to represent a witness phone numbers.
 *
 */
export interface CyberjusticeLabKernelServiceContractsWitnessWitnessPhoneNumberData {
    /**
     * @member {string} [witnessPhoneNumberId] Guid primary key.
     */
    witnessPhoneNumberId?: string;
    /**
     * @member {string} [witnessId] Witness foreign key.
     */
    witnessId?: string;
    /**
     * @member {string} [phone] Phone number.
     */
    phone?: string;
    /**
     * @member {string} [phoneTypeId] Phone type.
     */
    phoneTypeId?: string;
    /**
     * @member {string} [phoneExtention] Phone extention.
     */
    phoneExtention?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsWitnessWitnessExpertiseData.
 * Class used to represent a Witness Expertise entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsWitnessWitnessExpertiseData {
    /**
     * @member {string} [witnessId] Id of the witness.
     */
    witnessId?: string;
    /**
     * @member {string} [expertiseCode] Code of the witness expertise.
     */
    expertiseCode?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsWitnessWitnessDocumentData.
 * Class used to represent a Witness Document entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsWitnessWitnessDocumentData {
    /**
     * @member {string} [witnessId] Id of the witness.
     */
    witnessId?: string;
    /**
     * @member {string} [documentId] Id of the document.
     */
    documentId?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsWitnessWitnessData.
 * Class used to represent a Witness entity.
 *
 */
export interface CyberjusticeLabKernelServiceContractsWitnessWitnessData {
    /**
     * @member {string} [id] Id of the witness.
     */
    id?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {string} [menuId] Id of the menu.
     */
    menuId?: string;
    /**
     * @member {boolean} [isExpert] Is an expert.
     */
    isExpert?: boolean;
    /**
     * @member {string} [userCode] User code of the witness.
     */
    userCode?: string;
    /**
     * @member {string} [password] Password of the witness.
     */
    password?: string;
    /**
     * @member {string} [firstname] First name of the witness.
     */
    firstname?: string;
    /**
     * @member {string} [lastname] Last name of the witness.
     */
    lastname?: string;
    /**
     * @member {boolean} [isActive] Is active.
     */
    isActive?: boolean;
    /**
     * @member {string} [gender] Gender.
     */
    gender?: string;
    /**
     * @member {string} [address] Address line 1.
     */
    address?: string;
    /**
     * @member {string} [address2] Address line 2.
     */
    address2?: string;
    /**
     * @member {string} [city] City.
     */
    city?: string;
    /**
     * @member {string} [province] Province.
     */
    province?: string;
    /**
     * @member {string} [postalCode] Postal Code.
     */
    postalCode?: string;
    /**
     * @member {string} [email] Email.
     */
    email?: string;
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsWitnessWitnessPhoneNumberData[]}
     * [witnessPhoneNumbers] Phone numbers of the witness.
     */
    witnessPhoneNumbers?: CyberjusticeLabKernelServiceContractsWitnessWitnessPhoneNumberData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsWitnessWitnessExpertiseData[]}
     * [witnessExpertises] Expertises of the witness.
     */
    witnessExpertises?: CyberjusticeLabKernelServiceContractsWitnessWitnessExpertiseData[];
    /**
     * @member
     * {CyberjusticeLabKernelServiceContractsWitnessWitnessDocumentData[]}
     * [witnessDocuments] Documents of the witness.
     */
    witnessDocuments?: CyberjusticeLabKernelServiceContractsWitnessWitnessDocumentData[];
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     * Required for optimistic concurrency.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [modifiedBy] The modified by of an object.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [createdDate] The created date of an object.
     */
    createdDate?: Date;
    /**
     * @member {string} [createdBy] The created by of an object.
     */
    createdBy?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessAttributesFilters.
 * Attributes filters.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessAttributesFilters {
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [notAndAttributes] Attributes linked with an "And" binary operation. All
     * of these attributes must not exist in the target object.
     */
    notAndAttributes?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [andAttributes] Attributes linked with an "And" binary operation. All of
     * these attributes must exist in the target object.
     */
    andAttributes?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [orAttributes] Attributes linked with an "Or" binary operation. Any of
     * these attributes must exist in the target object.
     */
    orAttributes?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsActionsFilters.
 * Actions filters.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsActionsFilters {
    /**
     * @member {SystemCollectionsGenericKeyValuePairSystemStringSystemString[]}
     * [restrictedCodesAndComplements] Objects that have one of these codes (key)
     * and complements (value, optional) are filtered out.
     */
    restrictedCodesAndComplements?: SystemCollectionsGenericKeyValuePairSystemStringSystemString[];
    /**
     * @member {string[]} [allowedPartyIds] The restricted codes don't apply to
     * an action made by one of these parties.
     */
    allowedPartyIds?: string[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsWitnessApiRequestData.
 * <summary>Represents an api filter model when getting a list of
 * witnesses.</summary>
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsWitnessApiRequestData {
    /**
     * @member {string} [fileId] File ID.
     */
    fileId?: string;
    /**
     * @member {string[]} [partyIds] Id of parties.
     */
    partyIds?: string[];
    /**
     * @member {string[]} [witnessIds] Id of witnesses.
     */
    witnessIds?: string[];
    /**
     * @member {string} [searchText] Search text.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] List of search by columns.
     */
    searchBy?: string[];
    /**
     * @member {number} [take] Take.
     */
    take?: number;
    /**
     * @member {number} [skip] Skip.
     */
    skip?: number;
    /**
     * @member {OrderBy9} [orderBy] Order by columns. Possible values include:
     * 'FirstName', 'LastName', 'AttributeTestimonyMethod',
     * 'PartyActionAdjudicationAddedIdentificationFr',
     * 'PartyActionAdjudicationAddedIdentificationEn'
     */
    orderBy?: OrderBy9;
    /**
     * @member {boolean} [orderByDescending] Order by ascending or descending.
     */
    orderByDescending?: boolean;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessAttributesFilters[]}
     * [attributesFilters] Attributes filters.
     */
    attributesFilters?: CyberjusticeLabKernelSharedWitnessAttributesFilters[];
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsActionsFilters[]}
     * [actionsFilters] Actions filters.
     */
    actionsFilters?: CyberjusticeLabKernelSharedWitnessModelsActionsFilters[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel.
 * Phone number of a witness
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel {
    /**
     * @member {string} [phoneNumberId] Guid primary key.
     */
    phoneNumberId?: string;
    /**
     * @member {string} [phone] Phone number.
     */
    phone?: string;
    /**
     * @member {string} [phoneTypeId] Phone type.
     */
    phoneTypeId?: string;
    /**
     * @member {string} [phoneExtension] Phone extention.
     */
    phoneExtension?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsAttributeModel.
 * Represents a witness attribute.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsAttributeModel {
    /**
     * @member {string} [key] Attribute key.
     */
    key?: string;
    /**
     * @member {string} [value] Attribute value.
     */
    value?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsWitnessPartyActionModel.
 * Class used for special actions parties. Actions and dates are significant
 * only to the application.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsWitnessPartyActionModel {
    /**
     * @member {number} [id] Unique ID of this action.
     */
    id?: number;
    /**
     * @member {string} [partyId] Party Id.
     */
    partyId?: string;
    /**
     * @member {string} [representativeId] Representative Id (optional).
     */
    representativeId?: string;
    /**
     * @member {string} [actionCode] Any code that the application needs about
     * this witness.
     */
    actionCode?: string;
    /**
     * @member {Date} [actionDate] Any date related to the code that the
     * application needs.
     */
    actionDate?: Date;
    /**
     * @member {string} [actionComplement] Any code complement that the
     * application needs about this action.
     */
    actionComplement?: string;
    /**
     * @member {{ [propertyName: string]: string }} [actionAttributes] List of
     * attributes for this action.
     */
    actionAttributes?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsWitnessModel.
 * A witness.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsWitnessModel {
    /**
     * @member {string} [id] Id of the witness.
     */
    id?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {string} [menuId] Id of the menu.
     */
    menuId?: string;
    /**
     * @member {boolean} [isExpert] Is an expert.
     */
    isExpert?: boolean;
    /**
     * @member {string} [userCode] User code of the witness.
     */
    userCode?: string;
    /**
     * @member {string} [firstName] First name of the witness.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the witness.
     */
    lastName?: string;
    /**
     * @member {boolean} [isActive] Is active.
     */
    isActive?: boolean;
    /**
     * @member {string} [gender] Gender.
     */
    gender?: string;
    /**
     * @member {string} [address] Address line 1.
     */
    address?: string;
    /**
     * @member {string} [address2] Address line 2.
     */
    address2?: string;
    /**
     * @member {string} [city] City.
     */
    city?: string;
    /**
     * @member {string} [province] Province.
     */
    province?: string;
    /**
     * @member {string} [postalCode] Postal Code.
     */
    postalCode?: string;
    /**
     * @member {string} [addedBy] Added by applicant or respondent.
     */
    addedBy?: string;
    /**
     * @member {string} [email] Email.
     */
    email?: string;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel[]}
     * [phoneNumbers] Phone numbers of the witness.
     */
    phoneNumbers?: CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel[];
    /**
     * @member {string[]} [expertises] Expertises of a witness.
     */
    expertises?: string[];
    /**
     * @member {string[]} [documents] Documents of the witness.
     */
    documents?: string[];
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsAttributeModel[]}
     * [attributes] Attributes.
     */
    attributes?: CyberjusticeLabKernelSharedWitnessModelsAttributeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedWitnessModelsWitnessPartyActionModel[]}
     * [partyActions] List of party actions.
     */
    partyActions?: CyberjusticeLabKernelSharedWitnessModelsWitnessPartyActionModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsWitnessApiResponseData.
 * Used when returning witnesses.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsWitnessApiResponseData {
    /**
     * @member {number} [count] Count of Witnesses.
     */
    count?: number;
    /**
     * @member {number} [countFiltered] Count of filtered Witnesses.
     */
    countFiltered?: number;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsWitnessModel[]}
     * [witnesses] List of Witnesses.
     */
    witnesses?: CyberjusticeLabKernelSharedWitnessModelsWitnessModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData.
 * Link between a judicial file and an external witness code.
 *
 */
export interface CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData {
    /**
     * @member {string} [fileId] File identifier.
     */
    fileId?: string;
    /**
     * @member {string} [witnessCode] External witness code.
     */
    witnessCode?: string;
    /**
     * @member {string} [partyId] Guid of the party who called the witness.
     */
    partyId?: string;
    /**
     * @member {string} [witnessType] The type of witness for the file.
     */
    witnessType?: string;
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsCreateWitnessPartyActionModel.
 * Class used for special actions parties. Actions and dates are significant
 * only to the application.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsCreateWitnessPartyActionModel {
    /**
     * @member {string} [partyId] Party Id.
     */
    partyId?: string;
    /**
     * @member {string} [representativeId] Representative Id (optional).
     */
    representativeId?: string;
    /**
     * @member {string} [actionCode] Any code that the application needs about
     * this witness.
     */
    actionCode?: string;
    /**
     * @member {Date} [actionDate] Any date related to the code that the
     * application needs.
     */
    actionDate?: Date;
    /**
     * @member {string} [actionComplement] Any code complement that the
     * application needs about this action.
     */
    actionComplement?: string;
    /**
     * @member {{ [propertyName: string]: string }} [actionAttributes] List of
     * attributes for this action.
     */
    actionAttributes?: {
        [propertyName: string]: string;
    };
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsCreateWitnessModel.
 * Class used when creating a witness.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsCreateWitnessModel {
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {string} [menuId] Id of the menu.
     */
    menuId?: string;
    /**
     * @member {boolean} [isExpert] Is an expert.
     */
    isExpert?: boolean;
    /**
     * @member {string} [userCode] User code of the witness.
     */
    userCode?: string;
    /**
     * @member {string} [password] Password of the witness.
     */
    password?: string;
    /**
     * @member {string} [firstname] First name of the witness.
     */
    firstname?: string;
    /**
     * @member {string} [lastname] Last name of the witness.
     */
    lastname?: string;
    /**
     * @member {boolean} [isActive] Is active.
     */
    isActive?: boolean;
    /**
     * @member {string} [gender] Gender.
     */
    gender?: string;
    /**
     * @member {string} [address] Address line 1.
     */
    address?: string;
    /**
     * @member {string} [address2] Address line 2.
     */
    address2?: string;
    /**
     * @member {string} [city] City.
     */
    city?: string;
    /**
     * @member {string} [province] Province.
     */
    province?: string;
    /**
     * @member {string} [postalCode] Postal Code.
     */
    postalCode?: string;
    /**
     * @member {string} [email] Email.
     */
    email?: string;
    /**
     * @member {string} [addedBy] Added by applicant or respondent.
     */
    addedBy?: string;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel[]}
     * [phoneNumbers] Phone numbers of the witness.
     */
    phoneNumbers?: CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel[];
    /**
     * @member {string[]} [expertises] Expertises of a witness.
     */
    expertises?: string[];
    /**
     * @member {string} [documentId] Document Id of the newly created witness.
     */
    documentId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel}
     * [document] Document attached to a witness.
     */
    document?: CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsAttributeModel[]}
     * [attributes] Attributes.
     */
    attributes?: CyberjusticeLabKernelSharedWitnessModelsAttributeModel[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedWitnessModelsCreateWitnessPartyActionModel[]}
     * [partyActions] List of party actions for this witness.
     */
    partyActions?: CyberjusticeLabKernelSharedWitnessModelsCreateWitnessPartyActionModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessAttributes.
 * Used to update witness attributes.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessAttributes {
    /**
     * @member {string} [witnessId] Witness Id.
     */
    witnessId?: string;
    /**
     * @member {string} [fileId] File Id.
     */
    fileId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsAttributeModel[]}
     * [attributes] Attributes.
     */
    attributes?: CyberjusticeLabKernelSharedWitnessModelsAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessModel.
 * Update witness.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessModel {
    /**
     * @member {string} [id] Id of the witness.
     */
    id?: string;
    /**
     * @member {string} [fileId] Id of the file.
     */
    fileId?: string;
    /**
     * @member {string} [partyId] Id of the party.
     */
    partyId?: string;
    /**
     * @member {string} [menuId] Id of the menu.
     */
    menuId?: string;
    /**
     * @member {boolean} [isExpert] Is an expert.
     */
    isExpert?: boolean;
    /**
     * @member {string} [userCode] User code of the witness.
     */
    userCode?: string;
    /**
     * @member {string} [password] Password of the witness.
     */
    password?: string;
    /**
     * @member {string} [firstName] First name of the witness.
     */
    firstName?: string;
    /**
     * @member {string} [lastName] Last name of the witness.
     */
    lastName?: string;
    /**
     * @member {boolean} [isActive] Is active.
     */
    isActive?: boolean;
    /**
     * @member {string} [gender] Gender.
     */
    gender?: string;
    /**
     * @member {string} [address] Address line 1.
     */
    address?: string;
    /**
     * @member {string} [address2] Address line 2.
     */
    address2?: string;
    /**
     * @member {string} [city] City.
     */
    city?: string;
    /**
     * @member {string} [province] Province.
     */
    province?: string;
    /**
     * @member {string} [postalCode] Postal Code.
     */
    postalCode?: string;
    /**
     * @member {string} [modifiedBy] Added by applicant or respondent.
     */
    modifiedBy?: string;
    /**
     * @member {Date} [modifiedDate] The modified date of an object.
     */
    modifiedDate?: Date;
    /**
     * @member {string} [email] Email.
     */
    email?: string;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel[]}
     * [phoneNumbers] Phone numbers of the witness.
     */
    phoneNumbers?: CyberjusticeLabKernelSharedWitnessModelsPhoneNumberModel[];
    /**
     * @member {string[]} [expertises] Expertises of a witness.
     */
    expertises?: string[];
    /**
     * @member {CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel}
     * [document] Document attached to a witness.
     */
    document?: CyberjusticeLabKernelSharedDocumentModelsCreateDocumentModel;
    /**
     * @member {string} [documentId] Document Id of the witness.
     */
    documentId?: string;
    /**
     * @member {CyberjusticeLabKernelSharedWitnessModelsAttributeModel[]}
     * [attributes] Attributes.
     */
    attributes?: CyberjusticeLabKernelSharedWitnessModelsAttributeModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessPartyActionsModel.
 * Class used for special actions parties. Actions and dates are significant
 * only to the application.
 *
 */
export interface CyberjusticeLabKernelSharedWitnessModelsUpdateWitnessPartyActionsModel {
    /**
     * @member {string} [witnessId] The current witness ID for the actions.
     */
    witnessId?: string;
    /**
     * @member
     * {CyberjusticeLabKernelSharedWitnessModelsWitnessPartyActionModel[]}
     * [updatedPartyActions] List of party actions to update. The IDs must be
     * linked to the WitnessId.
     */
    updatedPartyActions?: CyberjusticeLabKernelSharedWitnessModelsWitnessPartyActionModel[];
    /**
     * @member {number[]} [deletedPartyActions] List of party actions to delete.
     * The IDs must be linked to the WitnessId.
     */
    deletedPartyActions?: number[];
    /**
     * @member
     * {CyberjusticeLabKernelSharedWitnessModelsCreateWitnessPartyActionModel[]}
     * [createdPartyActions] List of party actions to create.
     */
    createdPartyActions?: CyberjusticeLabKernelSharedWitnessModelsCreateWitnessPartyActionModel[];
}
/**
 * @interface
 * An interface representing CyberjusticeAPIsOptions.
 * @extends ServiceClientOptions
 */
export interface CyberjusticeAPIsOptions extends ServiceClientOptions {
    /**
     * @member {string} [baseUri]
     */
    baseUri?: string;
}
/**
 * @interface
 * An interface representing CalendarGetBaseCalendarsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CalendarGetBaseCalendarsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [baseCalendarIds] Exclude a calendar if its Guid isn't
     * in this list.
     */
    baseCalendarIds?: string[];
    /**
     * @member {string[]} [judicialEntityIds] Exclude calendars from other
     * judicial entities.
     */
    judicialEntityIds?: string[];
    /**
     * @member {string[]} [roomIds] Only return calendars linked to one of these
     * rooms.
     */
    roomIds?: string[];
    /**
     * @member {string[]} [periodAvailabilityIds] Only return calendars that
     * contains one of these period availabilities.
     */
    periodAvailabilityIds?: string[];
    /**
     * @member {string[]} [closedDayIds] Only return calendars that contains one
     * of these closed days.
     */
    closedDayIds?: string[];
    /**
     * @member {string[]} [userCodes] Only return calendars linked to one of
     * these users.
     */
    userCodes?: string[];
    /**
     * @member {string[]} [userRoles] Only return calendars linked with a user
     * whose role is contained in this list.
     */
    userRoles?: string[];
    /**
     * @member {string[]} [statuses] Only return calendars with one of these
     * statuses.
     */
    statuses?: string[];
    /**
     * @member {Date} [startDate] Start of the date interval filter. Only objects
     * with an EndDate later than this date will be returned.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] End of the date interval filter. Only objects
     * with a StartDate before this date will be returned.
     */
    endDate?: Date;
    /**
     * @member {CalendarTypes} [calendarTypes] Only return calendars of the given
     * type. Possible values include: 'JudicialEntity', 'User', 'Room'
     */
    calendarTypes?: CalendarTypes;
}
/**
 * @interface
 * An interface representing CalendarGetPeriodAvailabilitiesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CalendarGetPeriodAvailabilitiesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [periodAvailabilityIds] Exclude a PA if its Guid isn't
     * in this list.
     */
    periodAvailabilityIds?: string[];
    /**
     * @member {string[]} [baseCalendarIds] Only return PAs linked to one of
     * these calendars.
     */
    baseCalendarIds?: string[];
    /**
     * @member {string[]} [partyEntityIds] Only return PAs linked to a file with
     * one of these party entities.
     */
    partyEntityIds?: string[];
    /**
     * @member {string[]} [fileIds] Only return PAs linked to a file in this
     * list.
     */
    fileIds?: string[];
    /**
     * @member {Date} [startDate] Start of the date interval filter. Only objects
     * with an EndDate later than this date will be returned.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] End of the date interval filter. Only objects
     * with a StartDate before this date will be returned.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CalendarGetClosedDaysOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CalendarGetClosedDaysOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [closedDayIds] Only returns closed days with the given
     * Guids.
     */
    closedDayIds?: string[];
    /**
     * @member {Date} [startDate] Start of the date interval filter. Only objects
     * with an EndDate later than this date will be returned.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] End of the date interval filter. Only objects
     * with a StartDate before this date will be returned.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CalendarGetAssignmentCyclesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CalendarGetAssignmentCyclesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [cycleIds] Exclude a cycle if its Guid isn't in this
     * list.
     */
    cycleIds?: string[];
    /**
     * @member {string[]} [resourceTypes] Only return cycles linked to one of
     * these resource types.
     */
    resourceTypes?: string[];
    /**
     * @member {string[]} [statuses] Only return cycles with one of these
     * statuses.
     */
    statuses?: string[];
    /**
     * @member {Date} [startDate] Start of the date interval filter. Only objects
     * with an EndDate later than this date will be returned.
     */
    startDate?: Date;
    /**
     * @member {Date} [endDate] End of the date interval filter. Only objects
     * with a StartDate before this date will be returned.
     */
    endDate?: Date;
}
/**
 * @interface
 * An interface representing CalendarGetSchedulePatternsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface CalendarGetSchedulePatternsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [schedulePatternIds] Exclude a schedule pattern if its
     * Guid isn't in this list.
     */
    schedulePatternIds?: string[];
    /**
     * @member {string[]} [roomIds] Only include schedule patterns linked to one
     * of these rooms.
     */
    roomIds?: string[];
}
/**
 * @interface
 * An interface representing DocumentGetDocumentsMetadataOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface DocumentGetDocumentsMetadataOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [titles] Only returns documents with the given titles.
     */
    titles?: string[];
}
/**
 * @interface
 * An interface representing JudicialFileGetFilesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JudicialFileGetFilesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [fileIds] Exclude a file if its FileId isn't in this
     * list.
     */
    fileIds?: string[];
    /**
     * @member {string[]} [judicialFileIds] Exclude a file if its JudicialFileId
     * isn't in this list.
     */
    judicialFileIds?: string[];
    /**
     * @member {string[]} [judicialEntityIds] Exclude files from other judicial
     * entities.
     */
    judicialEntityIds?: string[];
    /**
     * @member {string[]} [businessRuleNames] Exclude a file if its
     * BusinessRuleName isn't in the list.
     */
    businessRuleNames?: string[];
    /**
     * @member {string[]} [representativeIds] Include a file if its parties
     * doesn't have a party with the id in the list.
     */
    representativeIds?: string[];
    /**
     * @member {string[]} [excludedStatuses] Exclude a file if its status is in
     * this list.
     */
    excludedStatuses?: string[];
    /**
     * @member {string[]} [statuses] Include a file if its status is in this
     * list.
     */
    statuses?: string[];
    /**
     * @member {string[]} [closingReasons] Include a file if its closing reason
     * is in this list.
     */
    closingReasons?: string[];
    /**
     * @member {Date} [minCreatedDate] Include a file if its created date is
     * after this date.
     */
    minCreatedDate?: Date;
    /**
     * @member {Date} [maxCreatedDate] Include a file if its created date is
     * before this date.
     */
    maxCreatedDate?: Date;
    /**
     * @member {string[]} [searchStatuses] File statuses to be included in the
     * searchBy "OR" query.
     */
    searchStatuses?: string[];
    /**
     * @member {string} [searchText] Search string for files.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] Search parameters. If more than one is
     * given, an "OR" search is done on the parameters.
     */
    searchBy?: string[];
    /**
     * @member {number} [take] Takes at most this amount of entries from the top
     * of the list. Better used with the orderBy parameter.
     */
    take?: number;
    /**
     * @member {number} [skip] Skips this amount of entries from the top of the
     * list. Makes no sense without the take parameter, ignored without the
     * orderBy parameter.
     */
    skip?: number;
    /**
     * @member {OrderBy10} [orderBy] Orders the list before the take and skip
     * operations. Possible values include: 'Name', 'JudicialFileId',
     * 'CreatedDate', 'ModifiedDate', 'Status', 'Key'
     */
    orderBy?: OrderBy10;
    /**
     * @member {boolean} [orderByDescending] Orders by descending instead of the
     * default ascending.
     */
    orderByDescending?: boolean;
}
/**
 * @interface
 * An interface representing JudicialFileGetFilesCountOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JudicialFileGetFilesCountOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [fileIds] Exclude a file if its FileId isn't in this
     * list.
     */
    fileIds?: string[];
    /**
     * @member {string[]} [judicialFileIds] Exclude a file if its JudicialFileId
     * isn't in this list.
     */
    judicialFileIds?: string[];
    /**
     * @member {string[]} [judicialEntityIds] Exclude files from other judicial
     * entities.
     */
    judicialEntityIds?: string[];
    /**
     * @member {string[]} [businessRuleNames] Exclude a file if its
     * BusinessRuleName isn't in the list.
     */
    businessRuleNames?: string[];
    /**
     * @member {string[]} [representativeIds] Include a file if its parties
     * doesn't have a party with the id in the list.
     */
    representativeIds?: string[];
    /**
     * @member {string[]} [excludedStatuses] Exclude a file if its status is in
     * this list.
     */
    excludedStatuses?: string[];
    /**
     * @member {string[]} [statuses] Include a file if its status is in this
     * list.
     */
    statuses?: string[];
    /**
     * @member {string[]} [closingReasons] Include a file if its closing reason
     * is in this list.
     */
    closingReasons?: string[];
    /**
     * @member {Date} [minCreatedDate] Include a file if its created date is
     * after this date.
     */
    minCreatedDate?: Date;
    /**
     * @member {Date} [maxCreatedDate] Include a file if its created date is
     * before this date.
     */
    maxCreatedDate?: Date;
    /**
     * @member {string[]} [searchStatuses] File statuses to be included in the
     * searchBy "OR" query.
     */
    searchStatuses?: string[];
    /**
     * @member {string} [searchText] Search string for files.
     */
    searchText?: string;
    /**
     * @member {string[]} [searchBy] Search parameters. If more than one is
     * given, an "OR" search is done on the parameters.
     */
    searchBy?: string[];
}
/**
 * @interface
 * An interface representing JudicialFileGetFilesSet1OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JudicialFileGetFilesSet1OptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [judicialEntityIds] Exclude files from other judicial
     * entities.
     */
    judicialEntityIds?: string[];
    /**
     * @member {string[]} [businessRuleNames] Exclude a file if its
     * BusinessRuleName isn't in the list.
     */
    businessRuleNames?: string[];
    /**
     * @member {string[]} [excludedStatuses] Exclude a file if its status is in
     * the list.
     */
    excludedStatuses?: string[];
}
/**
 * @interface
 * An interface representing JudicialFileGetFilesSet2OptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JudicialFileGetFilesSet2OptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [judicialEntityIds] Exclude files from other judicial
     * entities.
     */
    judicialEntityIds?: string[];
    /**
     * @member {string[]} [businessRuleNames] Exclude a file if its
     * BusinessRuleName isn't in the list.
     */
    businessRuleNames?: string[];
    /**
     * @member {string[]} [statuses] Include a file if its status is in the list.
     */
    statuses?: string[];
}
/**
 * @interface
 * An interface representing JudicialFileGetPartyEntitiesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JudicialFileGetPartyEntitiesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [partyEntityIds] Exclude a party entity if its
     * PartyEntityId isn't in this list.
     */
    partyEntityIds?: string[];
    /**
     * @member {string[]} [partyEntityCodes] Exclude a party entity if its Code
     * isn't in this list.
     */
    partyEntityCodes?: string[];
    /**
     * @member {number} [take] Takes at most this amount of entries from the top
     * of the list. Better used with the orderBy parameter.
     */
    take?: number;
    /**
     * @member {number} [skip] Skips this amount of entries from the top of the
     * list. Makes no sense without the take parameter, ignored without the
     * orderBy parameter.
     */
    skip?: number;
    /**
     * @member {OrderBy11} [orderBy] Orders the list before the take and skip
     * operations. Possible values include: 'Code', 'CreatedDate'
     */
    orderBy?: OrderBy11;
}
/**
 * @interface
 * An interface representing JudicialFileDismissNotificationsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface JudicialFileDismissNotificationsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string} [notificationCode] Notification code. Can be null.
     */
    notificationCode?: string;
    /**
     * @member {string} [aggregatorCode] Aggregator code. Can be null.
     */
    aggregatorCode?: string;
    /**
     * @member {boolean} [aggregatorCodeIsSubstring] True if the given aggregator
     * code is a substring. Can be null.
     */
    aggregatorCodeIsSubstring?: boolean;
}
/**
 * @interface
 * An interface representing LocationGetBuildingsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface LocationGetBuildingsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [locationBuildingIds] Exclude a building if it's
     * LocationBuildingId isn't in this list.
     */
    locationBuildingIds?: string[];
    /**
     * @member {string[]} [locationRoomIds] Only returns buildings that contains
     * the requested room Ids.
     */
    locationRoomIds?: string[];
    /**
     * @member {string[]} [judicialEntityIds] Exclude buildings from other
     * judicial entities.
     */
    judicialEntityIds?: string[];
    /**
     * @member {string[]} [names] Only returns buildings with the given names.
     */
    names?: string[];
    /**
     * @member {boolean} [activeOnly] Only returns buildings with an active
     * status.
     */
    activeOnly?: boolean;
    /**
     * @member {number} [take] Takes at most this amount of entries from the top
     * of the list. Better used with the orderBy parameter.
     */
    take?: number;
    /**
     * @member {number} [skip] Skips this amount of entries from the top of the
     * list. Makes no sense without the take parameter.
     */
    skip?: number;
    /**
     * @member {OrderBy12} [orderBy] Orders the list before the take and skip
     * operations. Possible values include: 'Name', 'CreatedDate'
     */
    orderBy?: OrderBy12;
}
/**
 * @interface
 * An interface representing ProsecutingAuthorityGetProsecutingAuthoritiesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ProsecutingAuthorityGetProsecutingAuthoritiesOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [prosecutingAuthorityIds] Include only prosecuting
     * authority if their Ids are in this list.
     */
    prosecutingAuthorityIds?: string[];
    /**
     * @member {string[]} [excludedProsecutingAuthorityIds] Exclude a prosecuting
     * authority if their Ids are in this list.
     */
    excludedProsecutingAuthorityIds?: string[];
    /**
     * @member {string[]} [prosecutingAuthorityNames] Include only prosecuting
     * authority if their names are in this list.
     */
    prosecutingAuthorityNames?: string[];
}
/**
 * @interface
 * An interface representing TagGetTagsOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TagGetTagsOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [tagCodes] Only returns tag with the given tag code.
     */
    tagCodes?: string[];
}
/**
 * @interface
 * An interface representing TagGetTagLinksOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface TagGetTagLinksOptionalParams extends msRest.RequestOptionsBase {
    /**
     * @member {string[]} [codes] Only returns tag with the given  objects codes.
     */
    codes?: string[];
}
/**
 * Defines values for OrderBy.
 * Possible values include: 'Status', 'Date'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy = 'Status' | 'Date';
/**
 * Defines values for Status.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status = 'Draft' | 'Active';
/**
 * Defines values for Status1.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status1 = 'Draft' | 'Active';
/**
 * Defines values for EntryType.
 * Possible values include: 'Weekly', 'Monthly'
 * @readonly
 * @enum {string}
 */
export declare type EntryType = 'Weekly' | 'Monthly';
/**
 * Defines values for FileStatus.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type FileStatus = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for OrderBy1.
 * Possible values include: 'Title', 'BeginDate', 'Rank'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy1 = 'Title' | 'BeginDate' | 'Rank';
/**
 * Defines values for Status2.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status2 = 'Draft' | 'Active';
/**
 * Defines values for Status3.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status3 = 'Draft' | 'Active';
/**
 * Defines values for Status4.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status4 = 'Draft' | 'Active';
/**
 * Defines values for Status5.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status5 = 'Draft' | 'Active';
/**
 * Defines values for Status6.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status6 = 'Draft' | 'Active';
/**
 * Defines values for EntryType1.
 * Possible values include: 'Weekly', 'Monthly'
 * @readonly
 * @enum {string}
 */
export declare type EntryType1 = 'Weekly' | 'Monthly';
/**
 * Defines values for EntryType2.
 * Possible values include: 'Weekly', 'Monthly'
 * @readonly
 * @enum {string}
 */
export declare type EntryType2 = 'Weekly' | 'Monthly';
/**
 * Defines values for Status7.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status7 = 'Draft' | 'Active';
/**
 * Defines values for Status8.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status8 = 'Draft' | 'Active';
/**
 * Defines values for Status9.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status9 = 'Draft' | 'Active';
/**
 * Defines values for Status10.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status10 = 'Draft' | 'Active';
/**
 * Defines values for EntryType3.
 * Possible values include: 'Weekly', 'Monthly'
 * @readonly
 * @enum {string}
 */
export declare type EntryType3 = 'Weekly' | 'Monthly';
/**
 * Defines values for FormatEnum.
 * Possible values include: 'pdf', 'jpeg', 'mp3', 'mp4', 'jpg', 'png', 'doc', 'docx', 'txt',
 * 'tiff', 'gif', 'noformat'
 * @readonly
 * @enum {string}
 */
export declare type FormatEnum = 'pdf' | 'jpeg' | 'mp3' | 'mp4' | 'jpg' | 'png' | 'doc' | 'docx' | 'txt' | 'tiff' | 'gif' | 'noformat';
/**
 * Defines values for TypeEnum.
 * Possible values include: 'Motion', 'PresentationNotice', 'BailiffNotice', 'Audience',
 * 'Evidence', 'Decisions', 'Schedule', 'Proceedings', 'CourtRecordings', 'Testimonies',
 * 'Pleadings', 'NegotiationAgreementMinute', 'MediationAgreementMinute', 'NegotiationFailMinute',
 * 'MediationFailMinute', 'MediationProceduralOrder', 'ClaimLetter', 'AdjudicationInstructions',
 * 'AdjudicationOrder', 'FinalDecision', 'ConsentOrder', 'MediationOrder', 'WithdrawalNotice',
 * 'Hearing', 'RecordOfProceeding'
 * @readonly
 * @enum {string}
 */
export declare type TypeEnum = 'Motion' | 'PresentationNotice' | 'BailiffNotice' | 'Audience' | 'Evidence' | 'Decisions' | 'Schedule' | 'Proceedings' | 'CourtRecordings' | 'Testimonies' | 'Pleadings' | 'NegotiationAgreementMinute' | 'MediationAgreementMinute' | 'NegotiationFailMinute' | 'MediationFailMinute' | 'MediationProceduralOrder' | 'ClaimLetter' | 'AdjudicationInstructions' | 'AdjudicationOrder' | 'FinalDecision' | 'ConsentOrder' | 'MediationOrder' | 'WithdrawalNotice' | 'Hearing' | 'RecordOfProceeding';
/**
 * Defines values for StatusEnum.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum = 'Active' | 'Inactive';
/**
 * Defines values for PermissionEnum.
 * Possible values include: 'Public', 'Private'
 * @readonly
 * @enum {string}
 */
export declare type PermissionEnum = 'Public' | 'Private';
/**
 * Defines values for DocumentationEnum.
 * Possible values include: 'Digital', 'External', 'Oral'
 * @readonly
 * @enum {string}
 */
export declare type DocumentationEnum = 'Digital' | 'External' | 'Oral';
/**
 * Defines values for OrderBy2.
 * Possible values include: 'Title', 'Description', 'Format', 'ModifiedDate', 'CreatedDate',
 * 'PartyActionAdjudicationAddedIdentificationFr', 'PartyActionAdjudicationAddedIdentificationEn'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy2 = 'Title' | 'Description' | 'Format' | 'ModifiedDate' | 'CreatedDate' | 'PartyActionAdjudicationAddedIdentificationFr' | 'PartyActionAdjudicationAddedIdentificationEn';
/**
 * Defines values for FormatEnum1.
 * Possible values include: 'pdf', 'jpeg', 'mp3', 'mp4', 'jpg', 'png', 'doc', 'docx', 'txt',
 * 'tiff', 'gif', 'noformat'
 * @readonly
 * @enum {string}
 */
export declare type FormatEnum1 = 'pdf' | 'jpeg' | 'mp3' | 'mp4' | 'jpg' | 'png' | 'doc' | 'docx' | 'txt' | 'tiff' | 'gif' | 'noformat';
/**
 * Defines values for TypeEnum1.
 * Possible values include: 'Motion', 'PresentationNotice', 'BailiffNotice', 'Audience',
 * 'Evidence', 'Decisions', 'Schedule', 'Proceedings', 'CourtRecordings', 'Testimonies',
 * 'Pleadings', 'NegotiationAgreementMinute', 'MediationAgreementMinute', 'NegotiationFailMinute',
 * 'MediationFailMinute', 'MediationProceduralOrder', 'ClaimLetter', 'AdjudicationInstructions',
 * 'AdjudicationOrder', 'FinalDecision', 'ConsentOrder', 'MediationOrder', 'WithdrawalNotice',
 * 'Hearing', 'RecordOfProceeding'
 * @readonly
 * @enum {string}
 */
export declare type TypeEnum1 = 'Motion' | 'PresentationNotice' | 'BailiffNotice' | 'Audience' | 'Evidence' | 'Decisions' | 'Schedule' | 'Proceedings' | 'CourtRecordings' | 'Testimonies' | 'Pleadings' | 'NegotiationAgreementMinute' | 'MediationAgreementMinute' | 'NegotiationFailMinute' | 'MediationFailMinute' | 'MediationProceduralOrder' | 'ClaimLetter' | 'AdjudicationInstructions' | 'AdjudicationOrder' | 'FinalDecision' | 'ConsentOrder' | 'MediationOrder' | 'WithdrawalNotice' | 'Hearing' | 'RecordOfProceeding';
/**
 * Defines values for StatusEnum1.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum1 = 'Active' | 'Inactive';
/**
 * Defines values for PermissionEnum1.
 * Possible values include: 'Public', 'Private'
 * @readonly
 * @enum {string}
 */
export declare type PermissionEnum1 = 'Public' | 'Private';
/**
 * Defines values for DocumentationEnum1.
 * Possible values include: 'Digital', 'External', 'Oral'
 * @readonly
 * @enum {string}
 */
export declare type DocumentationEnum1 = 'Digital' | 'External' | 'Oral';
/**
 * Defines values for TypeEnum2.
 * Possible values include: 'Motion', 'PresentationNotice', 'BailiffNotice', 'Audience',
 * 'Evidence', 'Decisions', 'Schedule', 'Proceedings', 'CourtRecordings', 'Testimonies',
 * 'Pleadings', 'NegotiationAgreementMinute', 'MediationAgreementMinute', 'NegotiationFailMinute',
 * 'MediationFailMinute', 'MediationProceduralOrder', 'ClaimLetter', 'AdjudicationInstructions',
 * 'AdjudicationOrder', 'FinalDecision', 'ConsentOrder', 'MediationOrder', 'WithdrawalNotice',
 * 'Hearing', 'RecordOfProceeding'
 * @readonly
 * @enum {string}
 */
export declare type TypeEnum2 = 'Motion' | 'PresentationNotice' | 'BailiffNotice' | 'Audience' | 'Evidence' | 'Decisions' | 'Schedule' | 'Proceedings' | 'CourtRecordings' | 'Testimonies' | 'Pleadings' | 'NegotiationAgreementMinute' | 'MediationAgreementMinute' | 'NegotiationFailMinute' | 'MediationFailMinute' | 'MediationProceduralOrder' | 'ClaimLetter' | 'AdjudicationInstructions' | 'AdjudicationOrder' | 'FinalDecision' | 'ConsentOrder' | 'MediationOrder' | 'WithdrawalNotice' | 'Hearing' | 'RecordOfProceeding';
/**
 * Defines values for StatusEnum2.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum2 = 'Active' | 'Inactive';
/**
 * Defines values for PermissionEnum2.
 * Possible values include: 'Public', 'Private'
 * @readonly
 * @enum {string}
 */
export declare type PermissionEnum2 = 'Public' | 'Private';
/**
 * Defines values for DocumentationEnum2.
 * Possible values include: 'Digital', 'External', 'Oral'
 * @readonly
 * @enum {string}
 */
export declare type DocumentationEnum2 = 'Digital' | 'External' | 'Oral';
/**
 * Defines values for StatusEnum3.
 * Possible values include: 'Success', 'Error'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum3 = 'Success' | 'Error';
/**
 * Defines values for FormatEnum2.
 * Possible values include: 'pdf', 'jpeg', 'mp3', 'mp4', 'jpg', 'png', 'doc', 'docx', 'txt',
 * 'tiff', 'gif', 'noformat'
 * @readonly
 * @enum {string}
 */
export declare type FormatEnum2 = 'pdf' | 'jpeg' | 'mp3' | 'mp4' | 'jpg' | 'png' | 'doc' | 'docx' | 'txt' | 'tiff' | 'gif' | 'noformat';
/**
 * Defines values for RoleEnum.
 * Possible values include: 'Empty', 'Sender', 'Recipient'
 * @readonly
 * @enum {string}
 */
export declare type RoleEnum = 'Empty' | 'Sender' | 'Recipient';
/**
 * Defines values for StatusEnum4.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum4 = 'Active' | 'Inactive';
/**
 * Defines values for OrderBy3.
 * Possible values include: 'Subject', 'Sender', 'CreatedDate'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy3 = 'Subject' | 'Sender' | 'CreatedDate';
/**
 * Defines values for RoleEnum1.
 * Possible values include: 'Empty', 'Sender', 'Recipient'
 * @readonly
 * @enum {string}
 */
export declare type RoleEnum1 = 'Empty' | 'Sender' | 'Recipient';
/**
 * Defines values for StatusEnum5.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum5 = 'Active' | 'Inactive';
/**
 * Defines values for StatusEnum6.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum6 = 'Active' | 'Inactive';
/**
 * Defines values for Role.
 * Possible values include: 'Empty', 'Sender', 'Recipient'
 * @readonly
 * @enum {string}
 */
export declare type Role = 'Empty' | 'Sender' | 'Recipient';
/**
 * Defines values for FormStatusEnum.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type FormStatusEnum = 'Active' | 'Inactive';
/**
 * Defines values for FormStatusEnum1.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type FormStatusEnum1 = 'Active' | 'Inactive';
/**
 * Defines values for OrderBy4.
 * Possible values include: 'Rank', 'Code', 'Caption', 'CreatedDate', 'ModifiedDate'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy4 = 'Rank' | 'Code' | 'Caption' | 'CreatedDate' | 'ModifiedDate';
/**
 * Defines values for OrderBy5.
 * Possible values include: 'JournalDate', 'JournalSubject', 'JournalFrom'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy5 = 'JournalDate' | 'JournalSubject' | 'JournalFrom';
/**
 * Defines values for StatusEnum7.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum7 = 'Active' | 'Inactive';
/**
 * Defines values for TypeEnum3.
 * Possible values include: 'NotGuiltyWithPay', 'NotGuilty', 'Guilty',
 * 'GuiltyWithDisputedSentence', 'GuiltyWithDisputedFine'
 * @readonly
 * @enum {string}
 */
export declare type TypeEnum3 = 'NotGuiltyWithPay' | 'NotGuilty' | 'Guilty' | 'GuiltyWithDisputedSentence' | 'GuiltyWithDisputedFine';
/**
 * Defines values for StatusEnum8.
 * Possible values include: 'Empty', 'Invalid', 'Investigation'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum8 = 'Empty' | 'Invalid' | 'Investigation';
/**
 * Defines values for JudicialFileStatusEnum.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type JudicialFileStatusEnum = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for StatusEnum9.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum9 = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for PermissionEnum3.
 * Possible values include: 'Initial', 'Private', 'Public'
 * @readonly
 * @enum {string}
 */
export declare type PermissionEnum3 = 'Initial' | 'Private' | 'Public';
/**
 * Defines values for ClosingReasonEnum.
 * Possible values include: 'Agreement', 'MediationFails', 'NoEnrollment', 'Abandon', 'NotValid',
 * 'NoAnswer', 'Other', 'FeesNotPaid', 'NotSpecified', 'AbandonParty1', 'AbandonParty2',
 * 'AgreementMediationManual', 'InactiveNegotiation', 'AbandonParty1IncompleteFile',
 * 'AbandonParty1WithHelp', 'AbandonParty1WithoutHelp'
 * @readonly
 * @enum {string}
 */
export declare type ClosingReasonEnum = 'Agreement' | 'MediationFails' | 'NoEnrollment' | 'Abandon' | 'NotValid' | 'NoAnswer' | 'Other' | 'FeesNotPaid' | 'NotSpecified' | 'AbandonParty1' | 'AbandonParty2' | 'AgreementMediationManual' | 'InactiveNegotiation' | 'AbandonParty1IncompleteFile' | 'AbandonParty1WithHelp' | 'AbandonParty1WithoutHelp';
/**
 * Defines values for StatusBeforeClosingEnum.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type StatusBeforeClosingEnum = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for ProcedureCategoryEnum.
 * Possible values include: 'Penal', 'Criminal', 'Civil'
 * @readonly
 * @enum {string}
 */
export declare type ProcedureCategoryEnum = 'Penal' | 'Criminal' | 'Civil';
/**
 * Defines values for OrderBy6.
 * Possible values include: 'Name', 'JudicialFileId', 'CreatedDate', 'ModifiedDate', 'Status',
 * 'Key'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy6 = 'Name' | 'JudicialFileId' | 'CreatedDate' | 'ModifiedDate' | 'Status' | 'Key';
/**
 * Defines values for StatusEnum10.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum10 = 'Active' | 'Inactive';
/**
 * Defines values for TypeEnum4.
 * Possible values include: 'NotGuiltyWithPay', 'NotGuilty', 'Guilty',
 * 'GuiltyWithDisputedSentence', 'GuiltyWithDisputedFine'
 * @readonly
 * @enum {string}
 */
export declare type TypeEnum4 = 'NotGuiltyWithPay' | 'NotGuilty' | 'Guilty' | 'GuiltyWithDisputedSentence' | 'GuiltyWithDisputedFine';
/**
 * Defines values for StatusEnum11.
 * Possible values include: 'Empty', 'Invalid', 'Investigation'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum11 = 'Empty' | 'Invalid' | 'Investigation';
/**
 * Defines values for JudicialFileStatusEnum1.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type JudicialFileStatusEnum1 = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for StatusEnum12.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum12 = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for PermissionEnum4.
 * Possible values include: 'Initial', 'Private', 'Public'
 * @readonly
 * @enum {string}
 */
export declare type PermissionEnum4 = 'Initial' | 'Private' | 'Public';
/**
 * Defines values for StatusBeforeClosingEnum1.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type StatusBeforeClosingEnum1 = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for ProcedureCategoryEnum1.
 * Possible values include: 'Penal', 'Criminal', 'Civil'
 * @readonly
 * @enum {string}
 */
export declare type ProcedureCategoryEnum1 = 'Penal' | 'Criminal' | 'Civil';
/**
 * Defines values for StatusEnum13.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum13 = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for StatusEnum14.
 * Possible values include: 'Empty', 'Draft', 'InPreparation', 'Planned', 'PartiesIdentification',
 * 'ProblemDescription', 'InitialProposal', 'InitialDocumentFiling', 'FilingCompletion',
 * 'Submitted', 'Initiate', 'Pending', 'Open', 'Negotiation', 'MediationRequest', 'MediatorAssign',
 * 'NegoMed', 'Mediation', 'MediationCompleted', 'MinuteApproval', 'MinuteApprovalRecall',
 * 'Complete', 'Adjudication', 'Reject', 'Close', 'Refuse', 'Invalid'
 * @readonly
 * @enum {string}
 */
export declare type StatusEnum14 = 'Empty' | 'Draft' | 'InPreparation' | 'Planned' | 'PartiesIdentification' | 'ProblemDescription' | 'InitialProposal' | 'InitialDocumentFiling' | 'FilingCompletion' | 'Submitted' | 'Initiate' | 'Pending' | 'Open' | 'Negotiation' | 'MediationRequest' | 'MediatorAssign' | 'NegoMed' | 'Mediation' | 'MediationCompleted' | 'MinuteApproval' | 'MinuteApprovalRecall' | 'Complete' | 'Adjudication' | 'Reject' | 'Close' | 'Refuse' | 'Invalid';
/**
 * Defines values for ClosingReasonEnum1.
 * Possible values include: 'Agreement', 'MediationFails', 'NoEnrollment', 'Abandon', 'NotValid',
 * 'NoAnswer', 'Other', 'FeesNotPaid', 'NotSpecified', 'AbandonParty1', 'AbandonParty2',
 * 'AgreementMediationManual', 'InactiveNegotiation', 'AbandonParty1IncompleteFile',
 * 'AbandonParty1WithHelp', 'AbandonParty1WithoutHelp'
 * @readonly
 * @enum {string}
 */
export declare type ClosingReasonEnum1 = 'Agreement' | 'MediationFails' | 'NoEnrollment' | 'Abandon' | 'NotValid' | 'NoAnswer' | 'Other' | 'FeesNotPaid' | 'NotSpecified' | 'AbandonParty1' | 'AbandonParty2' | 'AgreementMediationManual' | 'InactiveNegotiation' | 'AbandonParty1IncompleteFile' | 'AbandonParty1WithHelp' | 'AbandonParty1WithoutHelp';
/**
 * Defines values for OrderBy7.
 * Possible values include: 'EventCode', 'Status', 'CultureMessage'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy7 = 'EventCode' | 'Status' | 'CultureMessage';
/**
 * Defines values for OrderBy8.
 * Possible values include: 'AuthorName', 'AuthorRole', 'FileStep', 'EntryDate', 'Message'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy8 = 'AuthorName' | 'AuthorRole' | 'FileStep' | 'EntryDate' | 'Message';
/**
 * Defines values for LocationStatus.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type LocationStatus = 'Active' | 'Inactive';
/**
 * Defines values for LocationStatus1.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type LocationStatus1 = 'Active' | 'Inactive';
/**
 * Defines values for LocationStatus2.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type LocationStatus2 = 'Active' | 'Inactive';
/**
 * Defines values for LocationStatus3.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type LocationStatus3 = 'Active' | 'Inactive';
/**
 * Defines values for LocationStatus4.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type LocationStatus4 = 'Active' | 'Inactive';
/**
 * Defines values for LocationStatus5.
 * Possible values include: 'Active', 'Inactive'
 * @readonly
 * @enum {string}
 */
export declare type LocationStatus5 = 'Active' | 'Inactive';
/**
 * Defines values for OrderBy9.
 * Possible values include: 'FirstName', 'LastName', 'AttributeTestimonyMethod',
 * 'PartyActionAdjudicationAddedIdentificationFr', 'PartyActionAdjudicationAddedIdentificationEn'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy9 = 'FirstName' | 'LastName' | 'AttributeTestimonyMethod' | 'PartyActionAdjudicationAddedIdentificationFr' | 'PartyActionAdjudicationAddedIdentificationEn';
/**
 * Defines values for CalendarTypes.
 * Possible values include: 'JudicialEntity', 'User', 'Room'
 * @readonly
 * @enum {string}
 */
export declare type CalendarTypes = 'JudicialEntity' | 'User' | 'Room';
/**
 * Defines values for OrderBy10.
 * Possible values include: 'Name', 'JudicialFileId', 'CreatedDate', 'ModifiedDate', 'Status',
 * 'Key'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy10 = 'Name' | 'JudicialFileId' | 'CreatedDate' | 'ModifiedDate' | 'Status' | 'Key';
/**
 * Defines values for OrderBy11.
 * Possible values include: 'Code', 'CreatedDate'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy11 = 'Code' | 'CreatedDate';
/**
 * Defines values for OrderBy12.
 * Possible values include: 'Name', 'CreatedDate'
 * @readonly
 * @enum {string}
 */
export declare type OrderBy12 = 'Name' | 'CreatedDate';
/**
 * Defines values for Status11.
 * Possible values include: 'Draft', 'Active'
 * @readonly
 * @enum {string}
 */
export declare type Status11 = 'Draft' | 'Active';
/**
 * Contains response data for the getTimeEvents operation.
 */
export declare type AsyncGetTimeEventsResponse = CyberjusticeLabKernelSharedAsyncModelsTimeEventApiResponseModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedAsyncModelsTimeEventApiResponseModel;
    };
};
/**
 * Contains response data for the createTimeEvent operation.
 */
export declare type AsyncCreateTimeEventResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the validateTransitionStatus operation.
 */
export declare type BusinessInformationValidateTransitionStatusResponse = {
    /**
     * The parsed response body.
     */
    body: any;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: any;
    };
};
/**
 * Contains response data for the judicialFileWithFormProposalsCount operation.
 */
export declare type BusinessInformationJudicialFileWithFormProposalsCountResponse = Array<CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelDataAccessBusinessInformationJudicialFileWithFormProposalsCount[];
    };
};
/**
 * Contains response data for the getEvents operation.
 */
export declare type CalendarGetEventsResponse = CyberjusticeLabKernelSharedCalendarModelsEventApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedCalendarModelsEventApiResponseData;
    };
};
/**
 * Contains response data for the getFullCalendar operation.
 */
export declare type CalendarGetFullCalendarResponse = CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiResponseData;
    };
};
/**
 * Contains response data for the getBaseCalendars operation.
 */
export declare type CalendarGetBaseCalendarsResponse = Array<CyberjusticeLabKernelServiceContractsCalendarBaseCalendarData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsCalendarBaseCalendarData[];
    };
};
/**
 * Contains response data for the getPeriodAvailabilities operation.
 */
export declare type CalendarGetPeriodAvailabilitiesResponse = Array<CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[];
    };
};
/**
 * Contains response data for the getPeriodAvailabilitiesOfUser operation.
 */
export declare type CalendarGetPeriodAvailabilitiesOfUserResponse = Array<CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[];
    };
};
/**
 * Contains response data for the getClosedDays operation.
 */
export declare type CalendarGetClosedDaysResponse = Array<CyberjusticeLabKernelServiceContractsCalendarClosedDayData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsCalendarClosedDayData[];
    };
};
/**
 * Contains response data for the getAssignmentCycles operation.
 */
export declare type CalendarGetAssignmentCyclesResponse = Array<CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleData[];
    };
};
/**
 * Contains response data for the getSchedulePatterns operation.
 */
export declare type CalendarGetSchedulePatternsResponse = Array<CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData[];
    };
};
/**
 * Contains response data for the getScheduleEntry operation.
 */
export declare type CalendarGetScheduleEntryResponse = CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData;
    };
};
/**
 * Contains response data for the getFileCalendars operation.
 */
export declare type CalendarGetFileCalendarsResponse = Array<CyberjusticeLabKernelSharedCalendarModelsCalendarModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedCalendarModelsCalendarModel[];
    };
};
/**
 * Contains response data for the getFilesWithCurrentEvents operation.
 */
export declare type CalendarGetFilesWithCurrentEventsResponse = Array<string> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string[];
    };
};
/**
 * Contains response data for the getDocumentsMetadata operation.
 */
export declare type DocumentGetDocumentsMetadataResponse = Array<CyberjusticeLabKernelServiceContractsDocumentDocumentData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsDocumentDocumentData[];
    };
};
/**
 * Contains response data for the getDocumentMetadata operation.
 */
export declare type DocumentGetDocumentMetadataResponse = CyberjusticeLabKernelServiceContractsDocumentDocumentData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsDocumentDocumentData;
    };
};
/**
 * Contains response data for the getDocumentContentById operation.
 */
export declare type DocumentGetDocumentContentByIdResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getDocuments operation.
 */
export declare type DocumentGetDocumentsResponse = CyberjusticeLabKernelSharedDocumentModelsDocumentApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedDocumentModelsDocumentApiResponseData;
    };
};
/**
 * Contains response data for the createDocument operation.
 */
export declare type DocumentCreateDocumentResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the createDocuments operation.
 */
export declare type DocumentCreateDocumentsResponse = CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsResponseModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedDocumentModelsCreateDocumentsResponseModel;
    };
};
/**
 * Contains response data for the getForumMessages operation.
 */
export declare type ExchangeGetForumMessagesResponse = Array<CyberjusticeLabKernelServiceContractsExchangeForumData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsExchangeForumData[];
    };
};
/**
 * Contains response data for the getForumMessages1 operation.
 */
export declare type ExchangeGetForumMessages1Response = CyberjusticeLabKernelSharedExchangeModelsForumMessageApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedExchangeModelsForumMessageApiResponseData;
    };
};
/**
 * Contains response data for the getForumMessage operation.
 */
export declare type ExchangeGetForumMessageResponse = CyberjusticeLabKernelServiceContractsExchangeForumData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsExchangeForumData;
    };
};
/**
 * Contains response data for the addForumMessage operation.
 */
export declare type ExchangeAddForumMessageResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getFormQuestionProposal operation.
 */
export declare type FormGetFormQuestionProposalResponse = Array<CyberjusticeLabKernelServiceContractsFormFormQuestionData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormQuestionData[];
    };
};
/**
 * Contains response data for the getFormQuestionProposalByCode operation.
 */
export declare type FormGetFormQuestionProposalByCodeResponse = Array<CyberjusticeLabKernelServiceContractsFormFormQuestionData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormQuestionData[];
    };
};
/**
 * Contains response data for the getFormQuestionDescription operation.
 */
export declare type FormGetFormQuestionDescriptionResponse = Array<CyberjusticeLabKernelServiceContractsFormFormQuestionData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormQuestionData[];
    };
};
/**
 * Contains response data for the getFormQuestionDescriptionByCode operation.
 */
export declare type FormGetFormQuestionDescriptionByCodeResponse = Array<CyberjusticeLabKernelServiceContractsFormFormQuestionData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormQuestionData[];
    };
};
/**
 * Contains response data for the getDraftQuestionForm operation.
 */
export declare type FormGetDraftQuestionFormResponse = Array<CyberjusticeLabKernelServiceContractsFormFormData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormData[];
    };
};
/**
 * Contains response data for the getDraftQuestionDescriptionForm operation.
 */
export declare type FormGetDraftQuestionDescriptionFormResponse = Array<CyberjusticeLabKernelServiceContractsFormFormQuestionData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormQuestionData[];
    };
};
/**
 * Contains response data for the getDraftQuestionProposalForm operation.
 */
export declare type FormGetDraftQuestionProposalFormResponse = Array<CyberjusticeLabKernelServiceContractsFormFormQuestionData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormQuestionData[];
    };
};
/**
 * Contains response data for the getPartyQuestionDescription operation.
 */
export declare type FormGetPartyQuestionDescriptionResponse = CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData;
    };
};
/**
 * Contains response data for the getPartyQuestionDescriptions operation.
 */
export declare type FormGetPartyQuestionDescriptionsResponse = Array<CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormPartyDescriptionData[];
    };
};
/**
 * Contains response data for the getPartyQuestionProposal operation.
 */
export declare type FormGetPartyQuestionProposalResponse = CyberjusticeLabKernelServiceContractsFormFormPartyProposalData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormPartyProposalData;
    };
};
/**
 * Contains response data for the getPartyQuestionProposals operation.
 */
export declare type FormGetPartyQuestionProposalsResponse = Array<CyberjusticeLabKernelServiceContractsFormFormPartyProposalData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormPartyProposalData[];
    };
};
/**
 * Contains response data for the getPartyQuestionProposalCount operation.
 */
export declare type FormGetPartyQuestionProposalCountResponse = Array<CyberjusticeLabKernelServiceContractsFormPartyQuestionProposalCountData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormPartyQuestionProposalCountData[];
    };
};
/**
 * Contains response data for the getPartyArchiveQuestionProposals operation.
 */
export declare type FormGetPartyArchiveQuestionProposalsResponse = Array<CyberjusticeLabKernelServiceContractsFormFormPartyProposalData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsFormFormPartyProposalData[];
    };
};
/**
 * Contains response data for the getDraftQuestionForms operation.
 */
export declare type FormGetDraftQuestionFormsResponse = CyberjusticeLabKernelSharedFormModelsQuestionFormApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedFormModelsQuestionFormApiResponseData;
    };
};
/**
 * Contains response data for the getMenuData operation.
 */
export declare type HearingGetMenuDataResponse = CyberjusticeLabKernelServiceContractsHearingMenuData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsHearingMenuData;
    };
};
/**
 * Contains response data for the getAllJudgesMenuData operation.
 */
export declare type HearingGetAllJudgesMenuDataResponse = Array<CyberjusticeLabKernelServiceContractsHearingMenuData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsHearingMenuData[];
    };
};
/**
 * Contains response data for the getJournalEntryById operation.
 */
export declare type JournalGetJournalEntryByIdResponse = Array<CyberjusticeLabKernelServiceContractsJournalJournalData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJournalJournalData[];
    };
};
/**
 * Contains response data for the getLatestJournalsByCodes operation.
 */
export declare type JournalGetLatestJournalsByCodesResponse = Array<CyberjusticeLabKernelSharedJournalModelsJournalModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJournalModelsJournalModel[];
    };
};
/**
 * Contains response data for the getFileHistory operation.
 */
export declare type JournalGetFileHistoryResponse = CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJournalModelsJournalApiResponseData;
    };
};
/**
 * Contains response data for the getFileLatestJournals operation.
 */
export declare type JournalGetFileLatestJournalsResponse = CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJournalModelsJournalLatestApiResponseData;
    };
};
/**
 * Contains response data for the getJudicialEntityCompleteInfos operation.
 */
export declare type JudicialEntityGetJudicialEntityCompleteInfosResponse = CyberjusticeLabKernelServiceContractsJudicialEntityJudicialEntityData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialEntityJudicialEntityData;
    };
};
/**
 * Contains response data for the getJudicialEntity operation.
 */
export declare type JudicialEntityGetJudicialEntityResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getMatters operation.
 */
export declare type JudicialEntityGetMattersResponse = CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialEntityModelsMatterApiResponseData;
    };
};
/**
 * Contains response data for the getJudicialEntities operation.
 */
export declare type JudicialEntityGetJudicialEntitiesResponse = CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialEntityModelsJudicialEntityApiResponseData;
    };
};
/**
 * Contains response data for the getFiles operation.
 */
export declare type JudicialFileGetFilesResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[];
    };
};
/**
 * Contains response data for the getFiles1 operation.
 */
export declare type JudicialFileGetFiles1Response = CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileApiResponseData;
    };
};
/**
 * Contains response data for the getFilesCount operation.
 */
export declare type JudicialFileGetFilesCountResponse = {
    /**
     * The parsed response body.
     */
    body: number;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: number;
    };
};
/**
 * Contains response data for the getFile operation.
 */
export declare type JudicialFileGetFileResponse = {
    /**
     * The parsed response body.
     */
    body: number;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: number;
    };
};
/**
 * Contains response data for the getFilesSet1 operation.
 */
export declare type JudicialFileGetFilesSet1Response = CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet1Data & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet1Data;
    };
};
/**
 * Contains response data for the getFilesSet2 operation.
 */
export declare type JudicialFileGetFilesSet2Response = CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet2Data & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileSet2Data;
    };
};
/**
 * Contains response data for the getPartyEntities operation.
 */
export declare type JudicialFileGetPartyEntitiesResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFilePartyEntityData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFilePartyEntityData[];
    };
};
/**
 * Contains response data for the getFilesOfLabel operation.
 */
export declare type JudicialFileGetFilesOfLabelResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[];
    };
};
/**
 * Contains response data for the getFilesOfTagCode operation.
 */
export declare type JudicialFileGetFilesOfTagCodeResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileData[];
    };
};
/**
 * Contains response data for the getBusinessRules operation.
 */
export declare type JudicialFileGetBusinessRulesResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileBusinessRuleData[];
    };
};
/**
 * Contains response data for the getRepresentativeUsers operation.
 */
export declare type JudicialFileGetRepresentativeUsersResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[];
    };
};
/**
 * Contains response data for the getRepresentativeProfile operation.
 */
export declare type JudicialFileGetRepresentativeProfileResponse = CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData;
    };
};
/**
 * Contains response data for the getTargetRepresentativeProfile operation.
 */
export declare type JudicialFileGetTargetRepresentativeProfileResponse = CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeProfileData;
    };
};
/**
 * Contains response data for the getRepresentativeNeutralList operation.
 */
export declare type JudicialFileGetRepresentativeNeutralListResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileRepresentativeUserData[];
    };
};
/**
 * Contains response data for the checkForFileOptimisticConcurrency operation.
 */
export declare type JudicialFileCheckForFileOptimisticConcurrencyResponse = {
    /**
     * The parsed response body.
     */
    body: boolean;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: boolean;
    };
};
/**
 * Contains response data for the getNeutralZipCodeDataList operation.
 */
export declare type JudicialFileGetNeutralZipCodeDataListResponse = Array<CyberjusticeLabKernelServiceContractsJudicialFileNeutralZipCodeData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileNeutralZipCodeData[];
    };
};
/**
 * Contains response data for the getFileVerifyData operation.
 */
export declare type JudicialFileGetFileVerifyDataResponse = CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileVerifyData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsJudicialFileJudicialFileVerifyData;
    };
};
/**
 * Contains response data for the getPartyInvitation operation.
 */
export declare type JudicialFileGetPartyInvitationResponse = {
    /**
     * The parsed response body.
     */
    body: any;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: any;
    };
};
/**
 * Contains response data for the getPartyInvitationsOfParty operation.
 */
export declare type JudicialFileGetPartyInvitationsOfPartyResponse = {
    /**
     * The parsed response body.
     */
    body: any;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: any;
    };
};
/**
 * Contains response data for the getFileInvitationsOfParty operation.
 */
export declare type JudicialFileGetFileInvitationsOfPartyResponse = Array<CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel[];
    };
};
/**
 * Contains response data for the getFileInvitationInformation operation.
 */
export declare type JudicialFileGetFileInvitationInformationResponse = CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel;
    };
};
/**
 * Contains response data for the getFileInformationFromPartyInvitation operation.
 */
export declare type JudicialFileGetFileInformationFromPartyInvitationResponse = CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel;
    };
};
/**
 * Contains response data for the getNewNotificationsCount operation.
 */
export declare type JudicialFileGetNewNotificationsCountResponse = {
    /**
     * The parsed response body.
     */
    body: number;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: number;
    };
};
/**
 * Contains response data for the getNotificationsCountByFile operation.
 */
export declare type JudicialFileGetNotificationsCountByFileResponse = Array<CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByFileModel[];
    };
};
/**
 * Contains response data for the getNotificationsCountAggregatorCode operation.
 */
export declare type JudicialFileGetNotificationsCountAggregatorCodeResponse = Array<CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByAggregatorCodeModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsNotificationCountByAggregatorCodeModel[];
    };
};
/**
 * Contains response data for the getNotificationType operation.
 */
export declare type JudicialFileGetNotificationTypeResponse = CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeModel;
    };
};
/**
 * Contains response data for the getLogEntryDistinctCodes operation.
 */
export declare type JudicialFileGetLogEntryDistinctCodesResponse = Array<string> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string[];
    };
};
/**
 * Contains response data for the createPartyInvitation operation.
 */
export declare type JudicialFileCreatePartyInvitationResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the createFileInvitation operation.
 */
export declare type JudicialFileCreateFileInvitationResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the acceptPartyInvitation operation.
 */
export declare type JudicialFileAcceptPartyInvitationResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the createFileTagLink operation.
 */
export declare type JudicialFileCreateFileTagLinkResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the acceptRepresentativeInvitation operation.
 */
export declare type JudicialFileAcceptRepresentativeInvitationResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the acceptFileInvitation operation.
 */
export declare type JudicialFileAcceptFileInvitationResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getNotificationTypes operation.
 */
export declare type JudicialFileGetNotificationTypesResponse = CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsNotificationTypeApiResponseData;
    };
};
/**
 * Contains response data for the getNotifications operation.
 */
export declare type JudicialFileGetNotificationsResponse = CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsNotificationApiResponseData;
    };
};
/**
 * Contains response data for the getNotificationsSummaryByFile operation.
 */
export declare type JudicialFileGetNotificationsSummaryByFileResponse = CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData;
    };
};
/**
 * Contains response data for the createJudicialFile operation.
 */
export declare type JudicialFileCreateJudicialFileResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getLogTemplates operation.
 */
export declare type JudicialFileGetLogTemplatesResponse = CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsLogTemplateApiResponseData;
    };
};
/**
 * Contains response data for the getLogEntries operation.
 */
export declare type JudicialFileGetLogEntriesResponse = CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData;
    };
};
/**
 * Contains response data for the createLogTemplate operation.
 */
export declare type JudicialFileCreateLogTemplateResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the createLogEntry operation.
 */
export declare type JudicialFileCreateLogEntryResponse = Array<string> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string[];
    };
};
/**
 * Contains response data for the createCharge operation.
 */
export declare type JudicialFileCreateChargeResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the updateFileAttribute operation.
 */
export declare type JudicialFileUpdateFileAttributeResponse = CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedJudicialFileModelsPartyUpsertModel;
    };
};
/**
 * Contains response data for the upsertParty operation.
 */
export declare type JudicialFileUpsertPartyResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the upsertPartyContact operation.
 */
export declare type JudicialFileUpsertPartyContactResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the updateCharge operation.
 */
export declare type JudicialFileUpdateChargeResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getBuildings operation.
 */
export declare type LocationGetBuildingsResponse = Array<CyberjusticeLabKernelSharedLocationLocationBuildingData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLocationLocationBuildingData[];
    };
};
/**
 * Contains response data for the getBuilding operation.
 */
export declare type LocationGetBuildingResponse = CyberjusticeLabKernelSharedLocationLocationBuildingData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLocationLocationBuildingData;
    };
};
/**
 * Contains response data for the getBuildingWithRoom operation.
 */
export declare type LocationGetBuildingWithRoomResponse = CyberjusticeLabKernelSharedLocationLocationBuildingData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLocationLocationBuildingData;
    };
};
/**
 * Contains response data for the getLocalizedLookup operation.
 */
export declare type LookupGetLocalizedLookupResponse = CyberjusticeLabKernelSharedLookupModelsLookupModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLookupModelsLookupModel;
    };
};
/**
 * Contains response data for the getLookup operation.
 */
export declare type LookupGetLookupResponse = CyberjusticeLabKernelSharedLookupModelsLookupModel & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLookupModelsLookupModel;
    };
};
/**
 * Contains response data for the getLocalizedLookups operation.
 */
export declare type LookupGetLocalizedLookupsResponse = Array<CyberjusticeLabKernelSharedLookupModelsLookupModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLookupModelsLookupModel[];
    };
};
/**
 * Contains response data for the getLookups operation.
 */
export declare type LookupGetLookupsResponse = Array<CyberjusticeLabKernelSharedLookupModelsLookupModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLookupModelsLookupModel[];
    };
};
/**
 * Contains response data for the getLookups1 operation.
 */
export declare type LookupGetLookups1Response = Array<CyberjusticeLabKernelSharedLookupModelsLookupModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedLookupModelsLookupModel[];
    };
};
/**
 * Contains response data for the getProsecutingAuthorities operation.
 */
export declare type ProsecutingAuthorityGetProsecutingAuthoritiesResponse = Array<CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedProsecutingAuthorityProsecutingAuthorityData[];
    };
};
/**
 * Contains response data for the getProsecutingAuthoritiesCount operation.
 */
export declare type ProsecutingAuthorityGetProsecutingAuthoritiesCountResponse = {
    /**
     * The parsed response body.
     */
    body: number;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: number;
    };
};
/**
 * Contains response data for the getRequests operation.
 */
export declare type RequestGetRequestsResponse = Array<CyberjusticeLabKernelSharedRequestRequestData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedRequestRequestData[];
    };
};
/**
 * Contains response data for the getRequest operation.
 */
export declare type RequestGetRequestResponse = CyberjusticeLabKernelSharedRequestRequestData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedRequestRequestData;
    };
};
/**
 * Contains response data for the getMailList operation.
 */
export declare type SecureMailGetMailListResponse = Array<CyberjusticeLabKernelServiceContractsSecureMailEmailData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsSecureMailEmailData[];
    };
};
/**
 * Contains response data for the getMail operation.
 */
export declare type SecureMailGetMailResponse = CyberjusticeLabKernelServiceContractsSecureMailEmailData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsSecureMailEmailData;
    };
};
/**
 * Contains response data for the getPredicate operation.
 */
export declare type SecurityGetPredicateResponse = CyberjusticeLabKernelServiceContractsSecurityPredicateData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsSecurityPredicateData;
    };
};
/**
 * Contains response data for the getPredicateIdByName operation.
 */
export declare type SecurityGetPredicateIdByNameResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getLabelsOfCurrentUser operation.
 */
export declare type TagGetLabelsOfCurrentUserResponse = Array<CyberjusticeLabKernelSharedTagLocalizedLabelData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagLocalizedLabelData[];
    };
};
/**
 * Contains response data for the getTagsOfCodes operation.
 */
export declare type TagGetTagsOfCodesResponse = Array<CyberjusticeLabKernelSharedTagTagLinkData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagTagLinkData[];
    };
};
/**
 * Contains response data for the getTags operation.
 */
export declare type TagGetTagsResponse = Array<CyberjusticeLabKernelSharedTagTagData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagTagData[];
    };
};
/**
 * Contains response data for the getTag operation.
 */
export declare type TagGetTagResponse = CyberjusticeLabKernelSharedTagTagData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagTagData;
    };
};
/**
 * Contains response data for the getTagLinks operation.
 */
export declare type TagGetTagLinksResponse = Array<CyberjusticeLabKernelSharedTagTagLinkData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagTagLinkData[];
    };
};
/**
 * Contains response data for the getTagLink operation.
 */
export declare type TagGetTagLinkResponse = CyberjusticeLabKernelSharedTagTagLinkData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagTagLinkData;
    };
};
/**
 * Contains response data for the getLabels operation.
 */
export declare type TagGetLabelsResponse = Array<CyberjusticeLabKernelSharedTagLabelData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagLabelData[];
    };
};
/**
 * Contains response data for the getLabel operation.
 */
export declare type TagGetLabelResponse = CyberjusticeLabKernelSharedTagLabelData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedTagLabelData;
    };
};
/**
 * Contains response data for the createLabel operation.
 */
export declare type TagCreateLabelResponse = {
    /**
     * The parsed response body.
     */
    body: string;
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: string;
    };
};
/**
 * Contains response data for the getCurrentUserProfile operation.
 */
export declare type UProfileGetCurrentUserProfileResponse = CyberjusticeLabKernelServiceContractsUProfileUserData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsUProfileUserData;
    };
};
/**
 * Contains response data for the getUserProfile operation.
 */
export declare type UProfileGetUserProfileResponse = CyberjusticeLabKernelServiceContractsUProfileUserData & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsUProfileUserData;
    };
};
/**
 * Contains response data for the getRealmUserProfiles operation.
 */
export declare type UProfileGetRealmUserProfilesResponse = Array<CyberjusticeLabKernelServiceContractsUProfileUserData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsUProfileUserData[];
    };
};
/**
 * Contains response data for the getCurrentRealmUsers operation.
 */
export declare type UserGetCurrentRealmUsersResponse = Array<CyberjusticeLabKernelServiceContractsUserUserData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsUserUserData[];
    };
};
/**
 * Contains response data for the getOrganizations operation.
 */
export declare type UserGetOrganizationsResponse = Array<CyberjusticeLabKernelServiceContractsUserOrganizationData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsUserOrganizationData[];
    };
};
/**
 * Contains response data for the getOrganizationsSummaries operation.
 */
export declare type UserGetOrganizationsSummariesResponse = Array<CyberjusticeLabKernelSharedUserModelsOrganizationSummaryModel> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelSharedUserModelsOrganizationSummaryModel[];
    };
};
/**
 * Contains response data for the getWitnesses operation.
 */
export declare type WitnessGetWitnessesResponse = Array<CyberjusticeLabKernelServiceContractsWitnessWitnessData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsWitnessWitnessData[];
    };
};
/**
 * Contains response data for the getExternalWitnessesLinkByFileId operation.
 */
export declare type WitnessGetExternalWitnessesLinkByFileIdResponse = Array<CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData[];
    };
};
/**
 * Contains response data for the getExternalWitnessesLinkByWitnessCode operation.
 */
export declare type WitnessGetExternalWitnessesLinkByWitnessCodeResponse = Array<CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData> & {
    /**
     * The underlying HTTP response.
     */
    _response: msRest.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;
        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: CyberjusticeLabKernelServiceContractsWitnessJudicialFileExternalWitnessData[];
    };
};
//# sourceMappingURL=index.d.ts.map