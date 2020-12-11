import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

experiments: object[] = [
  {name: "Mars soil sample"},
  {name: "Plant growth in habitat"},
  {name: "Human bone density"}
];

memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {
    this.experiments.push({name:memberName});  
  }

  remove(member: object) {
    let index = this.experiments.indexOf(member);
    this.experiments.splice(index,1);
  }

  edit(member: object){
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member["name"] = name;
    this.memberBeingEdited = null;
  }

}
