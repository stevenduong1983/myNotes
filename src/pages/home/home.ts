import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddNotesPage} from "../add-notes/add-notes";
import {NoteServices} from "../../providers/note-services/note-services";
import {Note} from "../../model/note.model";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes: Promise<Note[]>;
  constructor(public navCtrl: NavController,private noteService:NoteServices) {

  }
  addNote(){
    this.navCtrl.push(AddNotesPage);
  }
  ionViewWillEnter(){
  this.notes = this.getAllnotes();
  }
  getAllnotes(){
    return this.noteService.getAllnotes();
  }
}
