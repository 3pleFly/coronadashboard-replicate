export interface HospitalizedGraphModel {
    _id: number;
    תאריך: Date;
    מאושפזים: number;
    ['חולים קל']: number;
    ['חולים בינוני']: number;
    ['חולים קשה']: number;
}

export interface IsolationGraphModel {
    id: number;
    date: Date;
    isolated_today_contact_with_confirmed: string;
    isolated_today_abroad: string;
    new_contact_with_confirmed: string;
    new_from_abroad: string;
}

export interface DataResponeModel {
    help: string;
    success: boolean;
    result: { records: []}
    
}