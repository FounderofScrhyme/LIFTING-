export interface Client {
    id: string;
    name: string;
    companyName?: string;
    email?: string;
    phone?: string;
    address?: string;
    postalCode?: string;
    city?: string;
    prefecture?: string;
    contactPerson?: string;
    contactPhone?: string;
    contactEmail?: string;
    industry?: string;
    notes?: string;
    status: 'ACTIVE' | 'INACTIVE' | 'PROSPECT';
    createdAt: Date;
    updatedAt: Date;
    userId: string;
  }
  
  export interface CreateClientInput {
    name: string;
    companyName?: string;
    email?: string;
    phone?: string;
    address?: string;
    postalCode?: string;
    city?: string;
    prefecture?: string;
    contactPerson?: string;
    contactPhone?: string;
    contactEmail?: string;
    industry?: string;
    notes?: string;
    status?: 'ACTIVE' | 'INACTIVE' | 'PROSPECT';
  }

  export interface UpdateClientInput extends Partial<CreateClientInput> {
    id: string;
  }