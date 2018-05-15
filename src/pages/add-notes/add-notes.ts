import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServices} from "../../providers/note-services/note-services";
import {Note} from "../../model/note.model";
import {FormGroup, Validator , FormControl} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-add-notes',
  templateUrl: 'add-notes.html',
})
export class AddNotesPage {
  formGroup:FormGroup;
  note:Note;
  date: Date=new Date();
  title:string='';
  content:string='';

  constructor(public navCtrl: NavController,private noteServices : NoteServices) {
    this.formGroup=new FormGroup({
      title:new FormControl(),
      content:new FormControl(),
      date:new FormControl()
    })
  }

  saveNote(note:Note){
    this.noteServices.saveNote(note);
    this.navCtrl.pop();
  }
  getAllnote(){
    return this.noteServices.getAllnotes();
  }

}
