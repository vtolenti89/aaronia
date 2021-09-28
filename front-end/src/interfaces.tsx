export interface DefaultProps {
    history: any;
    location: any;
    match: any;
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

export interface Specs {
    version: SpecVersion;
    option: SpecOption;
    software: Array<string>;
}

export interface Step {
    onPreviousClick?: (e: any) => void;
    onNextClick?: (e: any) => void; 
}

export interface ProgressStep {
    id: number;
    label: string;
}