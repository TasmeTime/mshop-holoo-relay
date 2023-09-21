export interface ISanad {
  // Sanad_Code	int
  Sanad_Code: number;
  // Sanad_Code_C	int	N
  Sanad_Code_C: number | null;
  // Sanad_Code_C2	int	N
  Sanad_Code_C2: number | null;
  // Sanad_Date	datetime	N
  Sanad_Date: Date | null;
  // Sanad_Time	datetime	N
  Sanad_Time: Date | null;
  // Comment	nvarchar(600)	N
  Comment: string | null;
  // End_Save	bit	N
  End_Save: boolean | null;
  // SaveFromFacture	bit	N
  SaveFromFacture: boolean | null;
  // SaveFromAuto	bit	N
  SaveFromAuto: boolean | null;
  // Sanad_Type	smallint	N
  Sanad_Type: number | null;
  // User1	smallint	N
  User1: number | null;
  // User2	smallint	N
  User2: number | null;
  // User3	smallint	N
  User3: number | null;
  // [Delete]	bit	N
  Delete: boolean | null;
  // Number_U	float	N
  Number_U: number | null;
  // NaghdCheck	smallint	N
  NaghdCheck: number | null;
  // DateUser	nvarchar(10)	N
  DateUser: string | null;
  // TimeUser	nvarchar(5)	N
  TimeUser: string | null;
  // UserCodeInc	int	N
  UserCodeInc: number | null;
  // UsedByUser	varchar(30)	N
  UsedByUser: string | null;
  // Transfer	bit	N
  Transfer: boolean | null;
  // Review	bit	N
  Review: boolean | null;
  // Actions	tinyint	N
  Actions: number | null;
  // MergeSanad_Code	int	N
  MergeSanad_Code: number | null;
  // MergeSanad_Date	datetime	N
  MergeSanad_Date: Date | null;
  // sanad_state	smallint
  sanad_state: number;
  // IsCMS	bit	N
  IsCMS: boolean | null;
  // Transfer_Recive_Snd	bit
  Transfer_Recive_Snd: boolean;
  // Transfer_Send_Snd	bit
  Transfer_Send_Snd: boolean;
  // Endeditdate	datetime	N
  Endeditdate: Date | null;
  // FTajmie	bit
  FTajmie: boolean;
  // MergetajSanad_Code	int	N
  MergetajSanad_Code: number | null;
  // MergetajSanad_Date	datetime	N
  MergetajSanad_Date: Date | null;
  // FCode_ChangeGold	int
  FCode_ChangeGold: number;
}
