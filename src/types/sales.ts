export interface Sales {
  id: string;
  amount: number;
  date: Date;
  description?: string;
  category?: string;
  status: "COMPLETED" | "PENDING" | "CANCELLED";
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  clientId: string;
  client: {
    id: string;
    name: string;
    companyName?: string;
    email?: string;
    phone?: string;
  };
}

export interface CreateSalesInput {
  amount: number;
  date: string; // ISO string
  description?: string;
  category?: string;
  status?: "COMPLETED" | "PENDING" | "CANCELLED";
  clientId: string;
}

export interface UpdateSalesInput extends Partial<CreateSalesInput> {
  id: string;
}

export interface SalesSummary {
  totalAmount: number;
  count: number;
  period: string;
}

export interface SalesByPeriod {
  monthly: SalesSummary[];
  yearly: SalesSummary[];
}
