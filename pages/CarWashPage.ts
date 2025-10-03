import {Page} from '@playwright/test';
import { BasePage } from './BasePage';
import allocators from '../locators/locators.json'

export class CarWash extends BasePage{
    private locators=allocators.CarWash;
    constructor(page:Page){
        super(page);
    }
    async applyFilter(){
        
    }
    async fetchData(){
        
    }
}