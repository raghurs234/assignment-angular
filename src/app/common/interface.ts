export interface ProductList {
    name: string;
    price: string;
    remaining: string;
}

export interface TimerList {
    events: {
             type: string;
             timer: number;
             currentTime: any;
            }[];
}

export interface EventCount {
    start: number;
    pause: number;
}

export interface StudentList {
    header: string[];
    studentInfo: {
        name: string;
        class: number;
        section: string;
        sub1: string;
        sub2: string;
        sub3: string;
    }[];
}
