export interface Employee {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    emergencyContactPerson?: string;
    emergencyContactPhone?: string;
    address?: string;
    postalCode?: string;
    city?: string;
    prefecture?: string;
    position?: string;
    unitPay?: number;
    hourlyOvertimePay?: number;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}

export interface CreateEmployeeInput {
    name: string;
    email?: string;
    phone?: string;
    emergencyContactPerson?: string;
    emergencyContactPhone?: string;
    address?: string;
    postalCode?: string;
    city?: string;
    prefecture?: string;
    position?: string;
    unitPay?: number;
    hourlyOvertimePay?: number;
    notes?: string;
}

export interface UpdateEmployeeInput extends Partial<CreateEmployeeInput> {
    id: string;
}