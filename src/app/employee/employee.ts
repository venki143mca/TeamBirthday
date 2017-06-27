export class Employee {
    id: number;
    firstName: string;
    lastName: string;
    DOB: Date;
    team: string;
    clientEmail: string;
    email: string;
    status: string;
    day:string;
    month: string;

    editMode: boolean = false;
    sendEmail: boolean;
}