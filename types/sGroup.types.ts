export interface ISGroup {
  // M_groupcode	varchar(2)
  M_groupcode: string;
  // S_groupcode	varchar(2)
  S_groupcode: string;
  // S_groupname	varchar(80)	N
  S_groupname: string | null;
  // Selected	bit	N
  Selected: boolean | null;
  // DarsadTakhfif	float	N
  DarsadTakhfif: number | null;
  // DarsadPorsant	float	N
  DarsadPorsant: number | null;
  // Priority	int	N
  Priority: number | null;
  // SNegative_Sel	bit	N
  SNegative_Sel: boolean | null;
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
