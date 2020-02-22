import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NoteService, INote } from './note.service';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteDeleteComponent implements OnInit {
  note: INote;

  constructor(
    protected noteService: NoteService,
    private route: ActivatedRoute,
    protected router: Router) { }

  ngOnInit() {
    // + convert to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.deleteById(id);
    console.log('Delete note id: ', id);
    this.router.navigate(['notes/list']);
  }

}
