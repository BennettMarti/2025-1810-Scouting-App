import { writable } from "svelte/store";
import type { Database, Enums } from "./supabase";
import type { Text } from "svelte/types/compiler/interfaces";

/******************************************************/

export enum AllianceColor {
    red = 0,
    blue = 1
}

export enum WinState {
    Win = 2,
    Loss = 1,
    Tie = 0,
    unset = -1
}

export enum IntakeStyle {
    Hybrid = 2,
    Ground = 1,
    Station = 0,
    unset = -1
}

export enum EndClimb {
    Deep = 3,
    Shallow = 2,
    Park = 1,
    None = 0,
    unset = -1
}


export interface ScoutingData {
    id: number;
    matchid: number;
    teamid: number;
    teamcolor: AllianceColor;
    autoCoral1: number;
    autoCoral2: number;
    autoCoral3: number,
    autoCoral4: number,
    autoAlgaeRemoved: number,
    autoLeave:boolean,
    teleCoral1: number,
    teleCoral2: number,
    teleCoral3: number,
    teleCoral4: number,
    teleAlgaeScored: number,
    teleAlgaeCapable: boolean,
    teleProcessor: number,
    intakeStyle:boolean[], 
   
    endCoralBot:boolean,
    endAlgaeBot:boolean,
    endCooperatition: boolean,
    endClimb : EndClimb,
    endNotes: string,
    winState: WinState,

};

const defaultData: ScoutingData = {
    id: 0,
    matchid: 0,
    teamid: 0,
    teamcolor: AllianceColor.red,
    autoCoral1: 0,
    autoCoral2: 0,
    autoCoral3: 0,
    autoCoral4: 0,
    autoAlgaeRemoved: 0,
    autoLeave: false,
    teleCoral1: 0, 
    teleCoral2: 0,
    teleCoral3: 0,
    teleCoral4: 0,
    teleAlgaeScored: 0,
    teleAlgaeCapable: false,
    teleProcessor: 0,
    winState: WinState.unset,
    intakeStyle: [false,false],
    
    endClimb: EndClimb.unset,
    endCoralBot: false,
    endAlgaeBot: false,
    endCooperatition:false,
    
    endNotes: "",
};


    
    
export const scoutingData = writable<ScoutingData>(defaultData);

export const compileAndScore = (data: ScoutingData) => score(compile(data));

const compile = (data: ScoutingData) => {
    const compiledData: Database["public"]["Tables"]["scouting-data"]["Row"] = {
        id: data.id,
        teamid: data.teamid,
        matchid: data.matchid,
        allianceColor: data.teamcolor,
        winState: data.winState,

        autoCoral1:data.autoCoral1,
        autoCoral2:data.autoCoral2,
        autoCoral3:data.autoCoral3,
        autoCoral4:data.autoCoral4,
        autoAlgaeRemoved:data.autoAlgaeRemoved,
        autoLeave:data.autoLeave,

        teleCoral1:data.teleCoral1,
        teleCoral2:data.teleCoral2,
        teleCoral3:data.teleCoral3,
        teleCoral4:data.teleCoral4,
        teleAlgaeScored:data.teleAlgaeScored,
        teleAlgaeCapable:data.teleAlgaeCapable,
        teleProcessor:data.teleProcessor,

        endCoralBot:data.endCoralBot,
        endAlgaeBot:data.endAlgaeBot,
       endCooperatition:data.endCooperatition,
        endClimb: data.endClimb,
    
        
       
    


    
        /*
        autoCoral1: data.autoTaxi ? 1 : 0,
        autoSpeaker: data.autoSpeaker,
        autoAmp: data.autoAmp,
        teleSpeaker: data.teleSpeaker,
        teleAmp: data.teleAmp,
        coopertition: data.coopertition ? 1 : 0,
        endClimb: data.endClimb,
        endHarmony: (() => {
            if (data.endClimb === EndClimb.Hang)
                return (data.endHarmony ? 1 : 0)
            return 0;
            })(),
        endTrap: (() => {
            if (data.endClimb === EndClimb.Hang)
                return (data.endTrap ? 1 : 0)
            return 0;
            })(),
        endSpotlight: (() => {
            if (data.endClimb === EndClimb.Hang)
                return (data.endSpotlight ? 1 : 0)
            return 0;
            })(),
            */
        intakeStyle: (() => {
            if (data.intakeStyle[0] && data.intakeStyle[1])
                return IntakeStyle.Hybrid;
            else if (data.intakeStyle[0])
                return IntakeStyle.Station;
            else if (data.intakeStyle[1])
                return IntakeStyle.Ground;
            else
                return IntakeStyle.unset;
        })(),
        
        
        endNotes: data.endNotes.replace(/\n/g, " "),       
    };

    return compiledData;
};

export const score = (data: Database["public"]["Tables"]["scouting-data"]["Row"]) => {
    //TODO Figure out the scoring mechanics for the game
    let autoScore =
        (3 * (data.autoCoral1 ?? 0)) +
        (4 * (data.autoCoral2 ?? 0)) +
        (6 * (data.autoCoral3 ?? 0)) +
        (7 * (data.autoCoral4 ?? 0)) +  
        (6 * (data.teleProcessor ?? 0)) +
        (data.autoLeave ? 3 : 0);

    let teleScore =
        (2 * (data.teleCoral1 ?? 0)) +
        (3 * (data.teleCoral2 ?? 0)) + 
        (4 * (data.teleCoral3 ?? 0)) +
        (5 * (data.teleCoral4 ?? 0)) + 
        //TODO Differentiate the auto processor from the tele processor dumbass
        

        (4 * (data.teleAlgaeScored ?? 0));

    let endScore = 0;

           if(EndClimb.Deep){
            endScore = endScore + 12;
           }
           else if(EndClimb.Shallow){
            endScore = endScore + 6
           }
           else if(EndClimb.Park){
            endScore = endScore + 2
           }
           else if(EndClimb.None || EndClimb.unset){
            endScore = endScore;
           }

        (() => {
            switch (data.endClimb) {
                case EndClimb.Deep:
                
                    return 3; 
                case EndClimb.Shallow:
                    return 2;
                case EndClimb.Park:
                    return 1;
                case EndClimb.None:
                    return 0;
                default:
                    return -1;
            }
        })(); 
            
    return {
        compiledData: data,
        scoredData: {
            auto: autoScore, 
            teleop: teleScore,
            endgame: endScore,


        }
    };
};

/******************************************************/

export enum ScoutingPage {
    auto,
    teleop,
    endgame,
    finishLine,
    loading
}

export const scoutingPage = writable<ScoutingPage>(ScoutingPage.auto);

/******************************************************/

export interface PPG {
    matchesPlayed: number;
    meanTeleop: number;
    meanAuto: number;
    meanEndgame: number;
    pointTotal: number;
    teamid: number;
    totalAuto: number;
    totalEndgame: number;
    totalTeleop: number;
}

export const ppgStore = writable<PPG[]>();

export const setPPGData = (ppg: PPG[], teamid: number) => {
    if (!ppg.some((team) => team.teamid === teamid)) {
        ppgStore.update((ppg) => [
            ...ppg,
            {
                matchesPlayed: 0,
                meanTeleop: 0,
                meanAuto: 0,
                meanEndgame: 0,
                pointTotal: 0,
                teamid: teamid,
                totalAuto: 0,
                totalEndgame: 0,
                totalTeleop: 0
            }
        ]);
    }
};

/******************************************************/