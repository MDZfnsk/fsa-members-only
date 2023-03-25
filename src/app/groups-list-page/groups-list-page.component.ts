import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';
import { Group } from '../types';

@Component({
  selector: 'app-groups-list-page',
  templateUrl: './groups-list-page.component.html',
  styleUrls: ['./groups-list-page.component.css']
})
export class GroupsListPageComponent implements OnInit {

  isLoadingAllgroups: boolean = true;
  isLoadingUserGroups: boolean = true;
  isLoading: boolean = true;

  allgroups: Group[] = [];
  userGroups: Group[] = [];
  notUserGroups: Group[] = [];

  constructor(
    private groupService: GroupsService
  ) { }

  calculateNonUserGroups() {
    this.notUserGroups = this.allgroups.filter(group => this.userGroups.every(userGroup => userGroup.id !== group.id));
  }

  ngOnInit(): void {

    this.groupService.getGroups().subscribe(groups => {
      this.allgroups = groups;
      this.isLoadingAllgroups = false;

      if(!this.isLoadingUserGroups) {
        this.isLoading = false;
        this.calculateNonUserGroups();
      }
    })

    this.groupService.getGroupsForUser().subscribe(groups => {
      this.userGroups = groups;
      this.isLoadingUserGroups = false;

      if(!this.isLoadingAllgroups){
        this.isLoading = false;
        this.calculateNonUserGroups();
      }
    })



  }

}
