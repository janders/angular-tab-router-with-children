import { Component, OnInit, Input } from '@angular/core';
import { NoteService, INote } from './note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteListComponent implements OnInit {
  notes: INote[];

  constructor(protected noteService: NoteService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.notes = this.noteService.notes;
  }

}
