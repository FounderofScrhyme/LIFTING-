import { Employee } from "./employee";

export type PayrollPeriodType = "WEEKLY" | "MONTHLY";
export type PayrollStatus = "PENDING" | "PAID" | "CANCELLED";

export interface Payroll {
    id: string;
    employeeId: string;
    periodType: PayrollPeriodType;
    startDate: Date;
    endDate: Date;
    workHours?: number;
    overtimeHours?: number;
    siteCount: number;
    sitePay: number;
    overtime: number;
    totalAmount: number;
    status: PayrollStatus;
    paymentDate?: Date;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    employee: Employee;
}

export interface CreatePayrollInput {
    employeeId: string;
    periodType: PayrollPeriodType;
    startDate: string; // ISO string
    endDate: string; // ISO string
    workHours?: number;
    overtimeHours?: number;
    siteCount: number;
    sitePay: number;
    overtime: number;
    totalAmount: number;
    status?: PayrollStatus;
    paymentDate?: string; // ISO string
    notes?: string;
}

export interface UpdatePayrollInput extends Partial<CreatePayrollInput> {
    id: string;
}