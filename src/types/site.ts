export type SiteStatus = 'ACTIVE' | 'COMPLETED' | 'CANCELLED';

export type Site = {
  id: string;
  name: string;
  contractor: string;
  postalCode?: string;
  prefecture?: string;
  city?: string;
  address?: string;
  startDate: string; // ISO文字列
  employeeNames?: string; // 派遣従業員名（カンマ区切り）
  notes?: string;
  status: SiteStatus;
  createdAt: string;
  updatedAt: string;
  userId: string;
  employees: SiteEmployee[];
};

export type SiteEmployee = {
  id: string;
  siteId: string;
  employeeId: string;
  userId: string;
  createdAt: string;
  employee?: {
    id: string;
    name: string;
  };
};
