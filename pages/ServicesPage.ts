import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allocators from '../locators/locators.json'

export class Services extends BasePage{
    private locators=allocators.services;
    constructor(page:Page){
        super(page);
    }
    async applyFilter(){
        
    }
    async testResults(){
        
    }
    async  categoryResults(){

    }
    async categoryServicesCount(){
        
    }
}
