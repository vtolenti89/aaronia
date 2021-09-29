export interface DefaultProps {
    history?: any;
    location?: any;
    match?: any;
} 

export interface SpecOption {
    id: number;
    option: string;
    description: string;
}

export interface SpecVersion {
    image: string;
    name: string;
    label?: string;
}

export interface SpecSoft {
    id: number;
    name: string;
    description: string;
}

export interface Specs {
    version: SpecVersion;
    option: SpecOption;
    software: Array<SpecSoft>;
}

export interface StepDefaultProps {
    onPreviousClick?: () => void;
    onNextClick?: () => void; 
}

export interface ProgressStep {
    id: number;
    label: string;
}

export interface UserForm {
    name: string;
    email: string;
    comment: string;
    privacy: boolean;
}

export interface Error {
    field: string;
    type: string;
    description: string;
  }