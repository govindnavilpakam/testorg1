import { LightningElement } from 'lwc';

export default class IteratorFramework extends LightningElement {
    taskList=[
        {taskId:1,taskName:'Eat',taskStatus:'In Progress'},
        {taskId:2,taskName:'Drink',taskStatus:'Pending'},
        {taskId:3,taskName:'Sleep',taskStatus:'Completed'}
    ]
}