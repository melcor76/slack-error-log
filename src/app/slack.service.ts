import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SlackService {

    private slackWebHook = 'https://hooks.slack.com/services/';   
    private payload = {
        text: '',
        channel: '#angular',
        username: 'error-bot',
        icon_emoji: ':boom:',
        attachments: []
    };

    constructor(private http: HttpClient) {    }

    postErrorOnSlack(error: Error): void {
        this.payload.text = error.message;
        this.payload.attachments = [
            {
                color: 'danger',
                title: 'Trace',
                text: error.stack,
                author_name: window.location.href                
            }
        ];
        this.http.post(this.slackWebHook, this.payload).subscribe();
    }
}
