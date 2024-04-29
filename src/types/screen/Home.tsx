import { NavigateFunction } from "react-router-dom";

export interface IHome {
    state: IFormData;
    handleChange: (args: any, args2: any, args3?: any, args4?: any) => void;
    saveData: (
        payload: IFormData,
        navigate: NavigateFunction
    ) => void;
}

export interface IFormData {
    modal: string;
    location: string;
    color: string;
    ownersCount: string;
    manufactureYears: string;
    transmission: string;
    validDate: string;
    externalFitments: string;
    kms: string;
    photo: string;
}