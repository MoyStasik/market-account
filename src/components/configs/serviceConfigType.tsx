export interface service {
    serviceName: string;
    serviceImg: string;
};

export interface serviceButton {
    service: service;
    isActive: boolean;
    // clickHandler : () => void;
}