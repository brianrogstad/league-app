import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

export class Game {
    constructor(
        public gameDuration: number,
        public gameId: number,
        public gameMode: string,
        public gameType: string,
        public gameVersion: string,
        public mapId: number,
        public participantIdentities: any,
        public participants: any,
        public platformId: string,
        public queueId: number,
        public seasonId: number,
        public teams: any
    ) {}
}

export class GameData {
};