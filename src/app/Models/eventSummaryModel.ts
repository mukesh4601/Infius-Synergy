export class EventSummaryModel{
    cardId: string;
    deviceId: string;
    deviceType: string;
    eventCatagory: string;
    eventInfo: 
        {
            remote_ip: string;
            remote_port: string;
            card_id: string;
            ts: Date
        }
    eventRef: string;
    eventText: string;
    eventType: string;
    gateId:string;
    relayId:string;
    siteId:string;
    timestamp: Date;
    visitorId: string;
    visitorType: string;
    zoneId:string;
}