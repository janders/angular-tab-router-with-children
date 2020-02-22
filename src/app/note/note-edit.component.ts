import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService, INote } from './note.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteEditComponent implements OnInit {

  constructor(protected noteService: NoteService, protected router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(formData: INote) {
    if (formData.name && formData.note) {
      this.noteService.addNote(formData.name, formData.note);
    }
    this.router.navigate(['notes/list']);
 }
}
