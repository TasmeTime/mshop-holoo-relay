export interface IArticle {
  // A_Code varchar(7)
  A_Code: string;
  // A_Code varchar(50) N
  A_Code_C: string | null;
  // A_Name varchar(255) N
  A_Name: string | null;
  // A_Country varchar(50) N
  A_Country: string | null;
  // Attribute nvarchar(4000) N
  Attribute: string | null;
  // PicturePath nvarchar(500) N
  PicturePath: string | null;
  // Model varchar(50) N
  Model: string | null;
  // Buy_Price float N
  Buy_Price: number | null;
  // FirstBuy_Price float N
  FirstBuy_Price: number | null;
  // EndBuy_Price float N
  EndBuy_Price: number | null;
  // Sel_Price float N
  Sel_Price: number | null;
  // Sel_Price2 float N
  Sel_Price2: number | null;
  // Sel_Price3 float N
  Sel_Price3: number | null;
  // Sel_Price4 float N
  Sel_Price4: number | null;
  // Sel_Price5 float N
  Sel_Price5: number | null;
  // Sel_Price6 float N
  Sel_Price6: number | null;
  // Sel_Price7 float N
  Sel_Price7: number | null;
  // Sel_Price8 float N
  Sel_Price8: number | null;
  // Sel_Price9 float N
  Sel_Price9: number | null;
  // Sel_Price10 float N
  Sel_Price10: number | null;
  // DarsadForush float N
  DarsadForush: number | null;
  // DarsadForush2 float N
  DarsadForush2: number | null;
  // DarsadForush3 float N
  DarsadForush3: number | null;
  // DarsadForush4 float N
  DarsadForush4: number | null;
  // DarsadForush5 float N
  DarsadForush5: number | null;
  // DarsadForush6 float N
  DarsadForush6: number | null;
  // DarsadForush7 float N
  DarsadForush7: number | null;
  // DarsadForush8 float N
  DarsadForush8: number | null;
  // DarsadForush9 float N
  DarsadForush9: number | null;
  // DarsadForush10 float N
  DarsadForush10: number | null;
  // Tool_Arz bit N
  Tool_Arz: boolean | null;
  // Moddat float N
  Moddat: number | null;
  // Weight2 float N
  Weight2: number | null;
  // IncField int
  IncField: number;
  // Exist float N
  Exist: number | null;
  // Exist2 float N
  Exist2: number | null;
  // Finish_Date datetime N
  Finish_Date: Date | null;
  // Place varchar(50) N
  Place: string | null;
  // A_Min float N
  A_Min: number | null;
  // A_Max float N
  A_Max: number | null;
  // First_exist float N
  First_exist: number | null;
  // First_exist2 float N
  First_exist2: number | null;
  // Exist_Mandeh float N
  Exist_Mandeh: number | null;
  // Buy_Dollar float N
  Buy_Dollar: number | null;
  // Sell_Dollar float N
  Sell_Dollar: number | null;
  // Delete bit N
  Delete: boolean | null;
  // Type_Anbar_C smallint N
  Type_Anbar_C: number | null;
  // FewTakhfif float N
  FewTakhfif: number | null;
  // DarsadTakhfif float N
  DarsadTakhfif: number | null;
  // VahedCode int N
  VahedCode: number | null;
  // HlpFieldL bit N
  HlpFieldL: boolean | null;
  // Karton float N
  Karton: number | null;
  // Basteh float N
  Basteh: number | null;
  // MyBuy_Price float N
  MyBuy_Price: number | null;
  // MaxPrice float N
  MaxPrice: number | null;
  // MinPrice float N
  MinPrice: number | null;
  // DarsadPorsant float N
  DarsadPorsant: number | null;
  // weight float N
  weight: number | null;
  // Hajm float N
  Hajm: number | null;
  // User_Price float N
  User_Price: number | null;
  // Other varchar(50) N
  Other: string | null;
  // OtherPrice varchar(30) N
  OtherPrice: string | null;
  // Other1 nvarchar(4000) N
  Other1: string | null;
  // Other2 nvarchar(4000) N
  Other2: string | null;
  // Other3 nvarchar(4000) N
  Other3: string | null;
  // Other4 nvarchar(4000) N
  Other4: string | null;
  // Other5 nvarchar(4000) N
  Other5: string | null;
  // Other6 nvarchar(4000) N
  Other6: string | null;
  // Other7 varchar(4000) N
  Other7: string | null;
  // Other8 varchar(4000) N
  Other8: string | null;
  // Other9 varchar(4000) N
  Other9: string | null;
  // Other10 varchar(4000) N
  Other10: string | null;
  // SelectOrNo bit N
  SelectOrNo: boolean | null;
  // State bit N
  State: boolean | null;
  // ToolArzType varchar(1) N
  ToolArzType: string | null;
  // SerialUsage bit N
  SerialUsage: boolean | null;
  // Include_Tax bit
  Include_Tax: boolean;
  // Levy float N
  Levy: number | null;
  // scot float N
  scot: number | null;
  // Res_ArtTypeId varchar(50) N
  Res_ArtTypeId: string | null;
  // ANegative_Sel bit N
  ANegative_Sel: boolean | null;
  // Creation_Date datetime N
  Creation_Date: Date | null;
  // Endeditdate datetime N
  Endeditdate: Date | null;
  // PLUNo int
  PLUNo: number;
  // ReqRadifForAhan bit
  ReqRadifForAhan: boolean;
  // Check_Resting bit
  Check_Resting: boolean;
  // Include_HazHaml bit
  Include_HazHaml: boolean;
  // TypePay smallint
  TypePay: number;
  // PricePay float
  PricePay: number;
  // HazArtSelect smallint
  HazArtSelect: number;
  // Diamond varchar(50) N
  Diamond: string | null;
  // DiamondPrice varchar(30) N
  DiamondPrice: string | null;
  // Emerald varchar(50) N
  Emerald: string | null;
  // emeraldPrice varchar(30) N
  emeraldPrice: string | null;
  // Platinum varchar(50) N
  Platinum: string | null;
  // PlatinumPrice float N
  PlatinumPrice: number | null;
  // Ruby varchar(50) N
  Ruby: string | null;
  // RubyPrice varchar(30) N
  RubyPrice: string | null;
  // Saphire varchar(50) N
  Saphire: string | null;
  // SaphirePrice varchar(30) N
  SaphirePrice: string | null;
  // Silver varchar(50) N
  Silver: string | null;
  // SilverPrice float N
  SilverPrice: number | null;
  // Pearl varchar(50) N
  Pearl: string | null;
  // PearlPrice varchar(30) N
  PearlPrice: string | null;
  // Turqouise varchar(50) N
  Turqouise: string | null;
  // TurqouisePrice varchar(30) N
  TurqouisePrice: string | null;
  // TolidNum varchar(15) N
  TolidNum: string | null;
  // Picture varchar(255) N
  Picture: string | null;
  // Gold varchar(50) N
  Gold: string | null;
  // GoldPrice float N
  GoldPrice: number | null;
  // j_Code varchar(5) N
  j_Code: string | null;
  // j_Ojrat float N
  j_Ojrat: number | null;
  // M_Code varchar(5) N
  M_Code: string | null;
  // M_Ojrat float N
  M_Ojrat: number | null;
  // Mekhrajkar bit
  Mekhrajkar: boolean;
  // Javahersaz bit
  Javahersaz: boolean;
  // Comment2 varchar(150) N
  Comment2: string | null;
  // Abkari_Ojrat float
  Abkari_Ojrat: number;
  // Sakht_Ojrat float
  Sakht_Ojrat: number;
  // IsAbkari bit
  IsAbkari: boolean;
  // IsSakht bit
  IsSakht: boolean;
  // PriceTakhfif float
  PriceTakhfif: number;
  // FromModatDate datetime N
  FromModatDate: Date | null;
  // ToModatDate datetime N
  ToModatDate: Date | null;
  // UseInPortable bit N
  UseInPortable: boolean | null;
  // WeightUnit smallint
  WeightUnit: number;
  // Choice bit
  Choice: boolean;
  // TimeService int
  TimeService: number;
  // TypeArt int
  TypeArt: number;
  // ParchehClcType smallint
  ParchehClcType: number;
  // EXPDate datetime N
  EXPDate: Date | null;
  // Karton_Code varchar(50) N
  Karton_Code: string | null;
  // WebId int
  WebId: number;
  // Synced int
  Synced: number;
  // SendToSite smallint
  SendToSite: number;
  // Forosh_Ojrat float
  Forosh_Ojrat: number;
  // IsActive bit
  IsActive: boolean;
  // KartonSelPrice float
  KartonSelPrice: number;
  // CheckSize bit
  CheckSize: boolean;
  // A_MinReq float
  A_MinReq: number;
  // A_MaxReq float
  A_MaxReq: number;
  // VafinoDiscountID float N
  VafinoDiscountID: number | null;
  // Sigar_Levy float
  Sigar_Levy: number;
  // Sigar_Scot float
  Sigar_Scot: number;
}
