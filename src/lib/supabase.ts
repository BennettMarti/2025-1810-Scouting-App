export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "ppg-data": {
        Row: {
          matchesPlayed: number
          meanAuto: number
          meanEndgame: number
          meanTeleop: number
          pointTotal: number
          teamid: number
          totalAuto: number
          totalEndgame: number
          totalTeleop: number
        }
        Insert: {
          matchesPlayed?: number
          meanAuto?: number
          meanEndgame?: number
          meanTeleop?: number
          pointTotal?: number
          teamid: number
          totalAuto?: number
          totalEndgame?: number
          totalTeleop?: number
        }
        Update: {
          matchesPlayed?: number
          meanAuto?: number
          meanEndgame?: number
          meanTeleop?: number
          pointTotal?: number
          teamid?: number
          totalAuto?: number
          totalEndgame?: number
          totalTeleop?: number
        }
        Relationships: []
      }
      "scouting-data": {
        Row: {
          autoCoral1: number | null
          autoCoral2: number | null
          autoCoral3: number | null
          autoCoral4: number | null
          autoAlgaeRemoved: number | null
          autoLeave: boolean| null
          teleCoral1: number | null
          teleCoral2: number | null
          teleCoral3: number | null
          teleCoral4: number | null
          teleAlgaeScored: number | null
          teleAlgaeCapable: boolean | null
          teleProcessor: number | null

          endCoralBot: boolean | null
          endAlgaeBot: boolean | null

          endNotes?: string | null
          endCooperatition?: boolean[] | null
          //All of the starting stuff is below 
          id: number
          intakeStyle: number | null
          allianceColor: number
          matchid: number
          teamid: number
          WinState: number | null
          endClimb: number | null
          
        }
        Insert: {
          autoCoral1?: number | null
          autoCoral2?: number | null
          autoCoral3?: number | null
          autoCoral4?: number | null
          autoAlgaeRemoved?: number | null
          autoLeave?: boolean| null
          teleCoral1?: number | null
          teleCoral2?: number | null
          teleCoral3?: number | null
          teleCoral4?: number | null
          teleAlgaeScored?: number | null
          teleAlgaeCapable?: boolean | null
          teleProcessor?: number | null
          endCoralBot?: boolean | null
          endAlgaeBot?: boolean | null
          endNotes?: string | null
          endCooperatition?: boolean[] | null
          //All of the starting stuff is below 
          id?: number
          intakeStyle?: number | null
          allianceColor: number
          matchid: number
          teamid: number
          WinState?: number | null
          endClimb?: number | null
        }
        Update: {
          autoCoral1?: number | null
          autoCoral2?: number | null
          autoCoral3?: number | null
          autoCoral4?: number | null
          autoAlgaeRemoved?: number | null
          autoLeave?: boolean| null
          teleCoral1?: number | null
          teleCoral2?: number | null
          teleCoral3?: number | null
          teleCoral4?: number | null
          teleAlgaeScored?: number | null
          teleAlgaeCapable?: boolean | null
          teleProcessor?: number | null
          endCoralBot?: boolean | null
          endAlgaeBot?: boolean | null
          endNotes?: string | null
          endCooperatition?: boolean[] | null
          //All of the starting stuff is below 
          id?: number
          intakeStyle?: number | null
          allianceColor?: number
          matchid?: number
          teamid?: number
          WinState?: number | null
          endClimb?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
