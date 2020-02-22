import { Injectable } from '@angular/core';

export interface INote {
  id: number;
  name: string;
  note: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: INote[] = [
    {id: 1, name: 'Note 1', note: 'Mollit laborum voluptate eu dolore aute sunt do proident nulla incididunt laboris.'},
    {id: 2, name: 'Note 2', note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatem eos placeat.'}
  ];
  currentId = 2;

  constructor() { }

  incId() {
    this.currentId = this.currentId + 1;
  }

  addNote(name: string, note: string) {
    this.incId();
    this.notes.push({id: this.currentId, name: name, note: note});
  }

  getNoteById(id: number): INote {
    return this.notes.find(note => note.id === id);
  }

  deleteById(id: number): any {
    this.notes = this.notes.filter(note => note.id !== id);
  }

}
