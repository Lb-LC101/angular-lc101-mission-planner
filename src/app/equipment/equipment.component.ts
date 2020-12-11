import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "oxygen tanks"}
  ];

    memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string) {
    this.equipment.push({name: memberName});
  }
    
  remove(member: object) {
    let index = this.equipment.indexOf(member);
    this.equipment.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
}
}
