import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Note }  from "../../model/note.model";

@Injectable()
export class NoteServices {
  private notes:Note[]=[];
  constructor(public storage:Storage) {
  }

  saveNote(note:Note){
    note.createDate=Date.now();
    this.notes.push(note);
    this.storage.set('notes',this.notes);
  }

  getAllnotes(){
    this.storage.get('notes').then(
      (notes)=>{
        this.notes=notes==null ? []:notes;
      }
    )

  }
}
