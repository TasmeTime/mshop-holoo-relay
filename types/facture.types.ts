export interface IFacture {
  // Fac_Code	varchar(6)
  Fac_Code: string;
  // Fac_Type	varchar(1)
  Fac_Type: string;
  // Fac_Code_C	int	N
  Fac_Code_C: number | null;
  // C_Code	varchar(5)	N
  C_Code: string | null;
  // Fac_Date	datetime	N
  Fac_Date: Date | null;
  // Fac_Time	datetime	N
  Fac_Time: Date | null;
  // Sum_Price	float	N
  Sum_Price: number | null;
  // Sum_Few	float	N
  Sum_Few: number | null;
  // Fac_Comment	nvarchar(4000)	N
  Fac_Comment: string | null;
  // PageFooter	nvarchar(500)	N
  PageFooter: string | null;
  // FNaghd	float	N
  FNaghd: number | null;
  // FCheck	float	N
  FCheck: number | null;
  // FNesieh	float	N
  FNesieh: number | null;
  // TasviehDate	datetime	N
  TasviehDate: Date | null;
  // Takhfif	float	N
  Takhfif: number | null;
  // UserCode	int	N
  UserCode: number | null;
  // Sanad_Code	int	N
  Sanad_Code: number | null;
  // Delete	bit	N
  Delete: boolean | null;
  // HlpFieldL	bit	N
  HlpFieldL: boolean | null;
  // ShowPrice	bit	N
  ShowPrice: boolean | null;
  // DAmozesh	float	N
  DAmozesh: number | null;
  // DShahrdary	float	N
  DShahrdary: number | null;
  // DCEghtesad	float	N
  DCEghtesad: number | null;
  // DMaliat	float	N
  DMaliat: number | null;
  // HazFactK	float	N
  HazFactK: number | null;
  // Num_Havaleh	float	N
  Num_Havaleh: number | null;
  // RoundFact	float	N
  RoundFact: number | null;
  // NaghdCheck	bit	N
  NaghdCheck: boolean | null;
  // DateUser	nvarchar(10)	N
  DateUser: string | null;
  // TimeUser	nvarchar(8)	N
  TimeUser: string | null;
  // CorrectDateTasvieh	datetime	N
  CorrectDateTasvieh: Date | null;
  // DarsadDirkardTasvieh	float	N
  DarsadDirkardTasvieh: number | null;
  // HazSarfasl	nvarchar(11)	N
  HazSarfasl: string | null;
  // Card	float	N
  Card: number | null;
  // Sum_Levy	float	N
  Sum_Levy: number | null;
  // Sum_Scot	float	N
  Sum_Scot: number | null;
  // Fac_State	smallint	N
  Fac_State: number | null;
  // IsLevyAndScot	bit	N
  IsLevyAndScot: boolean | null;
  // IsCMS	bit	N
  IsCMS: boolean | null;
  // OldDAmoozesh	float	N
  OldDAmoozesh: number | null;
  // OldDShahrdary	float	N
  OldDShahrdary: number | null;
  // Kind_Vat	smallint	N
  Kind_Vat: number | null;
  // Creation_Date	datetime	N
  Creation_Date: Date | null;
  // Naghd_Moddat	bit	N
  Naghd_Moddat: boolean | null;
  // Res_ServicePrice	float	N
  Res_ServicePrice: number | null;
  // Res_HazPrice	float	N
  Res_HazPrice: number | null;
  // Tala	varchar(20)	N
  Tala: string | null;
  // Dollar	varchar(20)	N
  Dollar: string | null;
  // FCode_ChangeGold	int
  FCode_ChangeGold: number;
  // Selection	bit	N
  Selection: boolean | null;
  // ResFac_Code_C	nvarchar(50)	N
  ResFac_Code_C: string | null;
  // Choice	bit
  Choice: boolean;
  // UserSell	int	N
  UserSell: number | null;
  // SayerAvarez	float
  SayerAvarez: number;
  // Fac_Time_Res	nvarchar(5)	N
  Fac_Time_Res: string | null;
  // Res_Alias_Name	nvarchar(50)	N
  Res_Alias_Name: string | null;
  // UseSarsheKan	bit
  UseSarsheKan: boolean;
  // HazHamlFact	float
  HazHamlFact: number;
  // SumTakhfif_P	float
  SumTakhfif_P: number;
  // Takhfif_P_KolFact	float
  Takhfif_P_KolFact: number;
  // FBon	float
  FBon: number;
  // Bon_No	varchar(20)	N
  Bon_No: string | null;
  // StateFactForKartabl	bit
  StateFactForKartabl: boolean;
  // AcceptOrRejectSuperVisor	bit
  AcceptOrRejectSuperVisor: boolean;
  // Vaset_delayvalue	float
  Vaset_delayvalue: number;
  // OrderId	int
  OrderId: number;
  // IsAnb	bit
  IsAnb: boolean;
  // Date_havaleh	nvarchar(10)	N
  Date_havaleh: string | null;
  // InsuranceId	smallint	N
  InsuranceId: number | null;
  // InsuranceNo	varchar(20)	N
  InsuranceNo: string | null;
  // MedicalNo	varchar(20)	N
  MedicalNo: string | null;
  // Res_Alias_Mobile	varchar(60)	N
  Res_Alias_Mobile: string | null;
  // RetFacCode	nvarchar(6)	N
  RetFacCode: string | null;
  // KartonBastehclcType	smallint
  KartonBastehclcType: number;
  // FlagReciveAgent	int
  FlagReciveAgent: number;
  // Sum_Sigar_Levy	float
  Sum_Sigar_Levy: number;
  // Sum_Sigar_Scot	float
  Sum_Sigar_Scot: number;
}
