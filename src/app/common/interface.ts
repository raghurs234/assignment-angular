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

