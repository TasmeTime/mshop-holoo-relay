export interface IFactureArticle {
  // Fac_Code	varchar(6)
  Fac_Code: string;
  // Fac_Type	varchar(1)
  Fac_Type: string;
  // A_Code	varchar(7)
  A_Code: string;
  // A_Index	smallint
  A_Index: number;
  // Few_Article	float	N
  Few_Article: number | null;
  // Few_Article2	float	N
  Few_Article2: number | null;
  // Price_BS	float	N
  Price_BS: number | null;
  // FacArtic_Comment	nvarchar(4000)	N
  FacArtic_Comment: string | null;
  // Buy_Price	float	N
  Buy_Price: number | null;
  // Money_Code	int	N
  Money_Code: number | null;
  // Price_Dollari	float	N
  Price_Dollari: number | null;
  // DarsadTakhfif	float	N
  DarsadTakhfif: number | null;
  // HlpFieldS	varchar(30)	N
  HlpFieldS: string | null;
  // CompNumber	varchar(2)	N
  CompNumber: string | null;
  // VahedCode	smallint	N
  VahedCode: number | null;
  // VahedFew	float	N
  VahedFew: number | null;
  // ArtExist	float	N
  ArtExist: number | null;
  // DarsadPorsant	float	N
  DarsadPorsant: number | null;
  // DarsadHaz	float	N
  DarsadHaz: number | null;
  // ArtClassSIndex	int	N
  ArtClassSIndex: number | null;
  // Few2_Or_Few	bit	N
  Few2_Or_Few: boolean | null;
  // Price_BS2	float	N
  Price_BS2: number | null;
  // FewKarton	float	N
  FewKarton: number | null;
  // FewBasteh	float	N
  FewBasteh: number | null;
  // TakhfifSatriR	float	N
  TakhfifSatriR: number | null;
  // Tool_Arz	bit	N
  Tool_Arz: boolean | null;
  // Tool	varchar(50)	N
  Tool: string | null;
  // Arz	varchar(10)	N
  Arz: string | null;
  // Tedad	float	N
  Tedad: number | null;
  // Metr	float	N
  Metr: number | null;
  // ToolArzType	varchar(1)	N
  ToolArzType: string | null;
  // Darsad_Type	bit	N
  Darsad_Type: boolean | null;
  // Levy	float	N
  Levy: number | null;
  // Scot	float	N
  Scot: number | null;
  // Takhfif_kharid	float	N
  Takhfif_kharid: number | null;
  // IsCMS	bit	N
  IsCMS: boolean | null;
  // ACode_C	varchar(50)	N
  ACode_C: string | null;
  // GDarsadSoodF	float
  GDarsadSoodF: number;
  // Ojrat_Price	float
  Ojrat_Price: number;
  // M_Ojrat	float
  M_Ojrat: number;
  // J_Ojrat	float
  J_Ojrat: number;
  // HazineHamlPrice	float
  HazineHamlPrice: number;
  // PricePay	float
  PricePay: number;
  // HazTypePay	smallint
  HazTypePay: number;
  // HazArtSelect	smallint
  HazArtSelect: number;
  // Vaseteh_Code	varchar(5)	N
  Vaseteh_Code: string | null;
  // Cust_Porsant	float
  Cust_Porsant: number;
  // Sel_Price	float	N
  Sel_Price: number | null;
  // Sakht_Ojrat	float
  Sakht_Ojrat: number;
  // Abkari_Ojrat	float
  Abkari_Ojrat: number;
  // SumTakhfifSatri_P	float
  SumTakhfifSatri_P: number;
  // CheckTakhfifSood	bit	N
  CheckTakhfifSood: boolean | null;
  // SumPorsantSatri_P	float
  SumPorsantSatri_P: number;
  // SumPorsantKoli_P	float
  SumPorsantKoli_P: number;
  // EndBuy_Price	float
  EndBuy_Price: number;
  // EXPDate	datetime	N
  EXPDate: Date | null;
  // ZSarfaslCode	nvarchar(50)	N
  ZSarfaslCode: string | null;
  // Sigar_Levy	float
  Sigar_Levy: number;
  // Sigar_Scot	float
  Sigar_Scot: number;
  // Ghotr	varchar(10)	N
  Ghotr: string | null;
}
