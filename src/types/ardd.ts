// Types for Animal Resources Development Department (ARDD), Tripura
// Strict hierarchical types and scope models

export type Role = 'DistrictHead' | 'SubdivisionHead' | 'BlockHead' | 'MockAdministrator';

export interface MonthlyTrend {
  month: string;
  vaccinations: number;
  inseminations: number;
  milkLiters: number;
}

export interface BlockMetrics {
  cattleCount: number;
  buffaloCount: number;
  goatSheepCount: number;
  poultryCount: number;
  vaccinationsDone: number;
  vaccinationTarget: number;
  artificialInseminations: number;
  milkProductionLitersDay: number;
  veterinaryCampsOrganized: number;
  schemeBeneficiaries: number;
  diseaseAlerts: number;
  monthlyTrends: MonthlyTrend[];
}

export interface Block {
  id: string;
  name: string;
  subdivisionId: string;
  districtId: string;
  metrics: BlockMetrics;
}

export interface Subdivision {
  id: string;
  name: string;
  districtId: string;
  blocks: Block[];
}

export interface District {
  id: string;
  name: string;
  subdivisions: Subdivision[];
}

export interface CurrentUser {
  id: string;
  name: string;
  designation: string;
  role: Role;
  districtId?: string;
  subdivisionId?: string;
  blockId?: string;
  email: string;
  locationLabel: string;
}

export type ScopeLevel = 'District' | 'Subdivision' | 'Block';

export interface Scope {
  level: ScopeLevel;
  districtId?: string;
  subdivisionId?: string;
  blockId?: string;
}

export interface BreadcrumbSegment {
  label: string;
  level: ScopeLevel;
  districtId?: string;
  subdivisionId?: string;
  blockId?: string;
  isClickable: boolean;
  isActive: boolean;
}

export interface AggregatedMetrics {
  totalLivestock: number;
  cattleCount: number;
  buffaloCount: number;
  goatSheepCount: number;
  poultryCount: number;
  vaccinationsDone: number;
  vaccinationTarget: number;
  vaccinationCoveragePercent: number;
  artificialInseminations: number;
  milkProductionLitersDay: number;
  veterinaryCampsOrganized: number;
  schemeBeneficiaries: number;
  diseaseAlerts: number;
  totalBlocks: number;
  totalSubdivisions: number;
  monthlyTrends: MonthlyTrend[];
}

export interface SubUnitPerformance {
  id: string;
  name: string;
  type: 'Subdivision' | 'Block';
  cattleCount: number;
  vaccinationsDone: number;
  vaccinationCoveragePercent: number;
  artificialInseminations: number;
  milkProductionLitersDay: number;
  diseaseAlerts: number;
  subdivisionName?: string;
}
