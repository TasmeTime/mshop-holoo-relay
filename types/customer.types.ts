export interface ICustomer {
  // C_Code	varchar(5)
  C_Code: string;
  // C_Name	varchar(60)	N
  C_Name: string | null;
  // C_Code_C	varchar(12)	N
  C_Code_C: string | null;
  // C_AliasName	varchar(30)	N
  C_AliasName: string | null;
  // C_Address	varchar(200)	N
  C_Address: string | null;
  // C_Tel	varchar(20)	N
  C_Tel: string | null;
  // C_Fax	varchar(20)	N
  C_Fax: string | null;
  // C_Mobile	varchar(20)	N
  C_Mobile: string | null;
  // Economic_Code	varchar(15)	N
  Economic_Code: string | null;
  // Sum_Takhfif	float	N
  Sum_Takhfif: number | null;
  // Etebar	float	N
  Etebar: number | null;
  // Counective_Name	varchar(30)	N
  Counective_Name: string | null;
  // Counective_Tel	varchar(20)	N
  Counective_Tel: string | null;
  // Porsant	float	N
  Porsant: number | null;
  // Porsant2	float	N
  Porsant2: number | null;
  // First_BalanceSanad	float	N
  First_BalanceSanad: number | null;
  // HlpAman	bit	N
  HlpAman: boolean | null;
  // Col_Code_Bed	varchar(3)	N
  Col_Code_Bed: string | null;
  // Moien_Code_Bed	varchar(4)	N
  Moien_Code_Bed: string | null;
  // Tafzili_Code_Bed	varchar(4)	N
  Tafzili_Code_Bed: string | null;
  // Col_Code_Bes	varchar(3)	N
  Col_Code_Bes: string | null;
  // Moien_Code_Bes	varchar(4)	N
  Moien_Code_Bes: string | null;
  // Tafzili_Code_Bes	varchar(4)	N
  Tafzili_Code_Bes: string | null;
  // Kharid	bit	N
  Kharid: boolean | null;
  // Forosh	bit	N
  Forosh: boolean | null;
  // Vaseteh	bit	N
  Vaseteh: boolean | null;
  // Personel	bit	N
  Personel: boolean | null;
  // Vaseteh_Porsant	float	N
  Vaseteh_Porsant: number | null;
  // Delete	bit	N
  Delete: boolean | null;
  // City_Code	int	N
  City_Code: number | null;
  // Arz_Mandeh	float	N
  Arz_Mandeh: number | null;
  // InListSiah	bit	N
  InListSiah: boolean | null;
  // SelectType	smallint	N
  SelectType: number | null;
  // Vaseteh_Code	varchar(5)	N
  Vaseteh_Code: string | null;
  // DarsadAmuzeshP	float	N
  DarsadAmuzeshP: number | null;
  // NetHlp	bit	N
  NetHlp: boolean | null;
  // MohlatTasvieh	int	N
  MohlatTasvieh: number | null;
  // Comment	nvarchar(4000)	N
  Comment: string | null;
  // Vaseteh_Porsant_C	float	N
  Vaseteh_Porsant_C: number | null;
  // CalledDate	datetime	N
  CalledDate: Date | null;
  // FactOutOfEtebar	bit	N
  FactOutOfEtebar: boolean | null;
  // ContactDate	datetime	N
  ContactDate: Date | null;
  // Karshenas	bit	N
  Karshenas: boolean | null;
  // Cust_City	varchar(80)	N
  Cust_City: string | null;
  // Cust_Mantagheh	varchar(80)	N
  Cust_Mantagheh: string | null;
  // Cust_Ostan	varchar(80)	N
  Cust_Ostan: string | null;
  // DarsadShahrdari	float	N
  DarsadShahrdari: number | null;
  // DarsadEconomicCode	float	N
  DarsadEconomicCode: number | null;
  // Cust_Job	varchar(20)	N
  Cust_Job: string | null;
  // KarPorsant	float
  KarPorsant: number;
  // Zip_Code	varchar(10)	N
  Zip_Code: string | null;
  // National_Code	varchar(50)	N
  National_Code: string | null;
  // Res_cust	bit	N
  Res_cust: boolean | null;
  // CoName	nvarchar(100)	N
  CoName: string | null;
  // SarFasl_Amani_Dar	varchar(7)	N
  SarFasl_Amani_Dar: string | null;
  // SarFasl_Amani_Par	varchar(7)	N
  SarFasl_Amani_Par: string | null;
  // Creation_Date	datetime	N
  Creation_Date: Date | null;
  // Endeditdate	datetime	N
  Endeditdate: Date | null;
  // Email_Address	varchar(4000)	N
  Email_Address: string | null;
  // C_Code_C2	nvarchar(12)	N
  C_Code_C2: string | null;
  // Car_Id	int	N
  Car_Id: number | null;
  // Driver	bit	N
  Driver: boolean | null;
  // PelakCity	varchar(50)	N
  PelakCity: string | null;
  // Pelakcitycode	int	N
  Pelakcitycode: number | null;
  // Pelakcode2	int	N
  Pelakcode2: number | null;
  // Pelakcode3	int	N
  Pelakcode3: number | null;
  // PelakChar	varchar(3)	N
  PelakChar: string | null;
  // SMSGroup	nvarchar(255)	N
  SMSGroup: string | null;
  // IsCMS	bit	N
  IsCMS: boolean | null;
  // C_type	tinyint
  C_type: number;
  // Mekhrajkar	bit
  Mekhrajkar: boolean;
  // JavaherSaz	bit
  JavaherSaz: boolean;
  // Arayeshgar	bit
  Arayeshgar: boolean;
  // Arayesh_Porsant	float
  Arayesh_Porsant: number;
  // CityCodeLevy	varchar(10)	N
  CityCodeLevy: string | null;
  // OstanCodeLevy	varchar(5)	N
  OstanCodeLevy: string | null;
  // HkharidarType1code	smallint	N
  HkharidarType1code: number | null;
  // ArzID	int
  ArzID: number;
  // money_price	float
  money_price: number;
  // CAlarmEtebarCheck	bit	N
  CAlarmEtebarCheck: boolean | null;
  // Birth_Date	varchar(10)	N
  Birth_Date: string | null;
  // ExporterSId	tinyint	N
  ExporterSId: number | null;
  // Cust_type	tinyint
  Cust_type: number;
  // Choice	bit
  Choice: boolean;
  // TimeStartCustArayesh	datetime
  TimeStartCustArayesh: Date;
  // TimeEndCustArayesh	datetime
  TimeEndCustArayesh: Date;
  // DressType	smallint
  DressType: number;
  // Mercer	bit
  Mercer: boolean;
  // Cobbler	bit
  Cobbler: boolean;
  // Cutter	bit
  Cutter: boolean;
  // Tailor	bit
  Tailor: boolean;
  // Notionality	bit
  Notionality: boolean;
  // TasviehType	int
  TasviehType: number;
  // First_BalanceSanad_Bes	float	N
  First_BalanceSanad_Bes: number | null;
  // SenfId	int	N
  SenfId: number | null;
  // CheckReciveOfEtebar	bit
  CheckReciveOfEtebar: boolean;
  // Zone	int
  Zone: number;
  // SanadOutOfEtebar	bit	N
  SanadOutOfEtebar: boolean | null;
  // KarPorsantDarsad	float
  KarPorsantDarsad: number;
  // KarPorsantType	bit
  KarPorsantType: boolean;
  // Agent	bit
  Agent: boolean;
  // Agent_Porsant	float
  Agent_Porsant: number;
  // Anbardar	bit
  Anbardar: boolean;
}
