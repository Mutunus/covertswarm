export interface Vulnerability {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  requiredAction: string;
  dueDate: string;
  knownRansomwareCampaignUse: string;
  notes: string;
  cwes: string[];
}

export interface CisaVulnerabilities {
  title: string;
  catalogVersion: string;
  dataReleased: string;
  count: number;
  vulnerabilities: Vulnerability[];
}
