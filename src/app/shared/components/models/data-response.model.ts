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
    isolated_today_abroad: number;
    new_from_abroad: number;
}

export interface RFactorGraphModel {
    R: number;
    day_date: 'string';
}

export interface TestsGraphModel {
    _id: number;
    result_date: string;
    corona_result: string;
    
}

export interface DataResponeModel {
    help: string;
    success: boolean;
    result: { records: []}
    
}