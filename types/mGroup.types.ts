export interface IMGroup {
  // M_groupcode	varchar(2)
  M_groupcode: string;
  // M_groupname	nvarchar(80)	N
  M_groupname: string | null;
  // Type_Anbar_C	smallint	N
  Type_Anbar_C: number | null;
  // Selected	bit	N
  Selected: boolean | null;
  // DarsadTakhfif	float	N
  DarsadTakhfif: number | null;
  // DarsadPorsant	float	N
  DarsadPorsant: number | null;
  // Priority	int	N
  Priority: number | null;
  // MNegative_Sel	bit	N
  MNegative_Sel: boolean | null;
  // Creation_Date	datetime	N
  Creation_Date: Date | null;
  // Endeditdate	datetime	N
  Endeditdate: Date | null;
  // comment	varchar(4000)	N
  comment: string | null;
  // PriceTakhfif	float
  PriceTakhfif: number;
  // FromModatDate	datetime	N
  FromModatDate: Date | null;
  // ToModatDate	datetime	N
  ToModatDate: Date | null;
  // Choice	bit
  Choice: boolean;
}
