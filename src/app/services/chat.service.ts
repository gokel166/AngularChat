import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ChatService {
    user: firebase.User;
    chatMessages: FirebaseListObservable<ChatMessage[]>;
    chatMessage: ChatMessage;
    userName: Observable<string>;
}