export interface HospitalizedModel {
    _id: number;
    תאריך: Date;
    מאושפזים: number;
    חוליםקל: number;
    חוליםבינוני: number;
    חוליםקשה: number;
}

export interface DataResponeModel {
    help: string;
    success: boolean;
    result: { records: HospitalizedModel[]}
    
}