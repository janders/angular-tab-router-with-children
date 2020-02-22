import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService, INote } from './note.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: INote;

  constructor(
    protected noteService: NoteService,
    private route: ActivatedRoute,
    protected router: Router)
    { }

  ngOnInit() {
    // + convert to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.note = this.noteService.getNoteById(id);
  }

}
